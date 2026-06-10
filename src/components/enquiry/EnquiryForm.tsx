'use client';

import React, { useEffect, useState } from 'react';
import { service } from '@/data/details';
import { supabase } from '@/lib/supabase';
import Button from '@/components/button/Button';
import styles from './EnquiryForm.module.css';

interface FormData {
  name: string;
  phone: string;
  service: string;
}

interface FormErrors {
  name: string;
  phone: string;
}

const availableServices = Object.values(service).map(item => item.title)
const fallbackService = service.websiteDevelopment.title

export default function EnquiryForm() {
  const defaultService = fallbackService

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: defaultService,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    phone: ''
  })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const storedService = sessionStorage.getItem('selectedEnquiryService')

    if (storedService && availableServices.includes(storedService)) {
      setFormData(prev => ({ ...prev, service: storedService }))
      sessionStorage.removeItem('selectedEnquiryService')
    }
  }, [defaultService])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const nameValid = /^[A-Za-z\s]+$/.test(formData.name.trim())
    // Support uk (+1 + 10 digits) and international numbers (7-14 digits with optional +)
    const phoneValid = /^(\+1)?\d{10}$|^\+[1-9]\d{7,14}$/.test(formData.phone)

    if (!nameValid || !phoneValid || !formData.service) {
      setErrors({
        name: nameValid ? '' : 'Please enter a valid name',
        phone: phoneValid ? '' : 'Please enter a valid phone number (10 digits for uk or international format)'
      })
      return
    }

    setIsSubmitting(true)

    try {
      const { error } = await supabase
        .from('quotes')
        .insert([
          {
            name: formData.name.trim(),
            phone: formData.phone.trim(),
            service: formData.service,
            source: 'uk.anksquare.com',
            status: 'pending'
          }
        ])

      if (error) throw error

      setSubmitted(true)

      // Reset form after successful submission
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          phone: '',
          service: formData.service,
        })
        setErrors({ name: '', phone: '' })
      }, 2000)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <span className={styles.formBadge}>Quick Enquiry</span>
          <h2 className={styles.formTitle}>Send us your enquiry</h2>
          <p className={styles.formDescription}>
            Share a few details about your requirement and our team will connect with you within 24 hours.
          </p>
          <div className={styles.selectedServicePill}>
            <span>Selected service:</span>
            <strong>{formData.service}</strong>
          </div>
        </div>
        {submitted ? (
          <div className={styles.successMessage}>
            <p>Thank you! Your enquiry has been submitted successfully. We will get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className={`${styles.input} ${errors.name ? styles.error : ''}`}
                placeholder="Enter your full name"
                required
              />
              {errors.name && <span className={styles.errorText}>{errors.name}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                Mobile Number *
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={e => {
                  let value = e.target.value
                  // Allow only digits and +
                  value = value.replace(/[^\d+]/g, '')
                  // Remove all + symbols except first
                  if (value.includes('+')) {
                    value = '+' + value.replace(/\+/g, '')
                  }
                  // Prevent + anywhere except beginning
                  if (value.lastIndexOf('+') > 0) {
                    return
                  }
                  // Limit to 15 digits
                  const digitsOnly = value.replace(/\D/g, '')
                  if (digitsOnly.length > 15) {
                    return
                  }
                  setFormData(prev => ({ ...prev, phone: value }))
                }}
                className={`${styles.input} ${errors.phone ? styles.error : ''}`}
                placeholder="Enter phone number (e.g., +442025551234)"
                maxLength={16}
                required
              />
              {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
              <small className={styles.helpText}>
                uk (10 digits) or international format (+ country code + number)
              </small>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="service" className={styles.label}>
                Service Type *
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={e => setFormData(prev => ({ ...prev, service: e.target.value }))}
                className={styles.select}
                required
              >
                <option value="">-- Choose a service --</option>
                {Object.values(service).map(s => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
            </Button>
          </form>
        )}
      </div>
    </>
  );
}