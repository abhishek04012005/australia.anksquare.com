import { FC } from 'react'
import { StaticImageData } from 'next/image'


import MerchantAccountSvg from "../svg/AccountManagerSVG/AccountManagerSVG.jsx"
import WebsiteDevelopmentSvg from "../svg/WebDevelopmentSVG/WebDevelopmentSVG.jsx"
import SocialMediaSvg from "../svg/SocialMediaSVG/SocialMediaSVG.jsx"


interface ServiceDetail {
    overview: string;
    benefits: {
        title: string;
        description: string;
        icon?: string;
    }[];
    process: {
        step: number;
        title: string;
        description: string;
    }[];
    faq: {
        question: string;
        answer: string;
    }[];
    pricing: {
        plan: string;
        price: string;
        features: string[];
    }[];
}


export interface MainServiceProps {
    id: number
    title: string
    description: string
    features: string[]
    image: FC
    path: string

}

export interface SubService {
    id: number
    title: string
    logo: string | StaticImageData
    features: string[]
    path: string
    slug: string
    details: ServiceDetail
}

export const mainServices: MainServiceProps[] = [
    {
        id: 1,
        title: 'Merchant Account Management',
        description: 'Professional e-commerce account management service for Indian businesses across all major online marketplaces. Our expert team provides comprehensive merchant account setup, optimization, and management solutions for Amazon, Flipkart, Meesho, and other leading e-commerce platforms. We help businesses maximize their online sales potential through strategic marketplace optimization, inventory management, and performance analytics. From account creation to ongoing support, we ensure your e-commerce success with proven strategies that drive revenue growth and customer satisfaction.',
        features: [
            'Multi-Platform Integration',
            'Account Setup & Optimization',
            'Sales & Performance Analytics',
            'Inventory Management',
            'Customer Service Support'
        ],
        image: MerchantAccountSvg,
        path: '/service/merchant-management'
    },
    {
        id: 2,
        title: 'Website Development',
        description: 'Custom website development service using modern technologies to create high-performance, SEO-friendly websites that convert visitors into customers. Our expert developers build responsive, fast-loading websites with cutting-edge features including e-commerce functionality, content management systems, and mobile optimization. We specialize in creating user-friendly interfaces that enhance user experience and drive business results. From concept to launch, we deliver scalable web solutions that grow with your business needs.',
        features: [
            'Custom Design & Development',
            'Responsive UI',
            'SEO Optimization',
            'Performance Tuning',
            'Ongoing Support'
        ],
        image: WebsiteDevelopmentSvg,
        path: '/service/web-development'
    },
    {
        id: 3,
        title: 'Digital Marketing',
        description: 'Comprehensive digital marketing service designed to increase your online visibility and drive targeted traffic to your website. Our data-driven approach combines search engine optimization (SEO), social media marketing, paid advertising, and content strategy to help businesses achieve measurable results. We create customized marketing campaigns that reach your target audience across multiple channels, including Google Ads, Facebook Ads, Instagram marketing, and LinkedIn campaigns. Our team uses advanced analytics to track performance and optimize campaigns for maximum ROI.',
        features: [
            'Search Engine Optimization (SEO)',
            'Social Media Marketing',
            'Google & Meta Ads',
            'Content Strategy',
            'Performance Analytics'
        ],
        image: SocialMediaSvg, // Replace with your actual SVG or image reference
        path: '/service/digital-marketing'
    }
]
export const marketplaceServices: SubService[] = [
    {
        id: 1,
        title: 'Amazon Account Management',
        logo: "./service/amazon.png",
        features: [
            'Account Setup & Verification',
            'Product Listing Optimization',
            'PPC Campaign Management',
        ],
        path: '/amazon-account-management',
        slug: 'amazon-account-management',
        details: {
            overview: 'Our Amazon marketplace management service helps businesses establish and grow their presence on the world\'s largest e-commerce platform.',
            benefits: [
                { title: 'Enhanced Visibility', description: 'Optimize your product listings for maximum visibility in Amazon search results.' },
                { title: 'Sales Growth', description: 'Strategic pricing and promotion management to boost your sales performance.' },
                { title: 'Brand Protection', description: 'Maintain brand integrity and manage customer feedback effectively.' }
            ],
            process: [
                { step: 1, title: 'Amazon Seller Account Management Services', description: 'Complete account registration and verification process' },
                { step: 2, title: 'Account Setup & Onboarding', description: 'Assistance in creating and verifying your Amazon seller account.' },
                { step: 3, title: 'Product Listing & Catalog Management', description: 'Creation of optimized product titles, descriptions, and bullet points.' },
            ],
            faq: [
                { question: 'How long does it take to set up an Amazon seller account?', answer: 'Typically, it takes 24-48 hours for the basic setup, but full optimization may take 1-2 weeks.' },
                { question: 'What type of support do you provide?', answer: 'We offer end-to-end support including account setup, listing optimization, PPC management, and ongoing performance monitoring.' }
            ],
            pricing: [
                { plan: 'Basic', price: '₹9,999/month', features: ['Account Setup', 'Basic Optimization', 'Monthly Report'] },
                { plan: 'Professional', price: '₹24,999/month', features: ['Everything in Basic', 'PPC Management', 'Weekly Reports'] }
            ]
        }
    }
]


export const websiteTypes: SubService[] = [
    // {
    //     id: 1,
    //     title: 'Business Website',
    //     logo: "./service/businesswebsite.svg",
    //     features: [
    //         'Professional Design',
    //         'Lead Generation Forms',
    //         'Analytics Integration'
    //     ],
    //     path: '/business-website',
    //     slug: 'business-website',
    //     details: {
    //         overview: 'Our Business Website service helps companies establish a credible online presence with a professional design and lead-focused architecture.',
    //         benefits: [
    //             { title: 'Brand Credibility', description: 'Build trust with a clean, modern design tailored to your industry.' },
    //             { title: 'Lead Generation', description: 'Capture potential clients with strategically placed forms and CTAs.' },
    //             { title: 'Performance Insights', description: 'Track visitor behavior and conversions with integrated analytics.' }
    //         ],
    //         process: [
    //             { step: 1, title: 'Requirement Gathering', description: 'Understand your business goals and target audience.' },
    //             { step: 2, title: 'Design & Development', description: 'Create a responsive, SEO-friendly website with lead capture tools.' },
    //             { step: 3, title: 'Launch & Analytics', description: 'Deploy the site and integrate tracking tools for performance monitoring.' }
    //         ],
    //         faq: [
    //             { question: 'Can I update content myself?', answer: 'Yes, we provide a CMS backend for easy content management.' },
    //             { question: 'Do you offer hosting?', answer: 'We assist with hosting setup or deploy on your preferred provider.' }
    //         ],
    //         pricing: [
    //             { plan: 'Starter', price: '₹14,999', features: ['5 Pages', 'Lead Form', 'Basic SEO'] },
    //             { plan: 'Professional', price: '₹29,999', features: ['10+ Pages', 'Analytics Setup', 'CMS Access'] }
    //         ]
    //     }
    // },
    {
        id: 1,
        title: 'E-commerce Website',
        logo: "./service/ecommercewebsite.svg",
        features: [
            'Product Catalog Management',
            'Shopping Cart Integration',
            'Payment Gateway Setup'
        ],
        path: '/ecommerce-website',
        slug: 'ecommerce-website',
        details: {
            overview: 'Our E-commerce Website service enables businesses to sell online with a secure, scalable, and user-friendly storefront.',
            benefits: [
                { title: 'Online Sales Enablement', description: 'Launch a full-featured store with cart, checkout, and payment integration.' },
                { title: 'Inventory Control', description: 'Manage products, stock levels, and categories with ease.' },
                { title: 'Secure Transactions', description: 'Integrate trusted payment gateways for smooth customer experience.' }
            ],
            process: [
                { step: 1, title: 'Store Planning', description: 'Define product structure, categories, and user flow.' },
                { step: 2, title: 'Development & Integration', description: 'Build the store and connect payment, shipping, and inventory systems.' },
                { step: 3, title: 'Launch & Training', description: 'Deploy the site and train your team to manage orders and updates.' }
            ],
            faq: [
                { question: 'Can I manage products myself?', answer: 'Yes, we provide a dashboard for product and order management.' },
                { question: 'Which payment gateways do you support?', answer: 'We support Razorpay, Stripe, Paytm, and more.' }
            ],
            pricing: [
                { plan: 'Basic Store', price: '₹24,999', features: ['Up to 50 Products', 'Cart & Checkout', 'Payment Integration'] },
                { plan: 'Advanced Store', price: '₹49,999', features: ['Unlimited Products', 'Custom Features', 'Marketing Tools'] }
            ]
        }
    },
    // {
    //     id: 3,
    //     title: 'Real Estate Website',
    //     logo: "./service/realestatewebsite.svg",
    //     features: [
    //         'Property Listings',
    //         'Virtual Tours',
    //         'Lead Capture Forms'
    //     ],
    //     path: '/real-estate-website',
    //     slug: 'real-estate-website',
    //     details: {
    //         overview: 'Our Real Estate Website service helps agencies showcase properties with immersive visuals and lead capture tools.',
    //         benefits: [
    //             { title: 'Property Showcase', description: 'Display listings with images, videos, and virtual tours.' },
    //             { title: 'Lead Conversion', description: 'Capture buyer interest with inquiry forms and contact CTAs.' },
    //             { title: 'Location-Based Search', description: 'Enable users to filter listings by city, price, and amenities.' }
    //         ],
    //         process: [
    //             { step: 1, title: 'Listing Strategy', description: 'Plan property categories and search filters.' },
    //             { step: 2, title: 'Design & Upload', description: 'Create listing templates and upload property data.' },
    //             { step: 3, title: 'Lead Funnel Setup', description: 'Integrate forms and CRM for lead tracking.' }
    //         ],
    //         faq: [
    //             { question: 'Can I add properties myself?', answer: 'Yes, we provide a backend for listing management.' },
    //             { question: 'Do you support map-based search?', answer: 'Absolutely. We can integrate Google Maps or custom solutions.' }
    //         ],
    //         pricing: [
    //             { plan: 'Agent Site', price: '₹19,999', features: ['Up to 20 Listings', 'Lead Forms', 'Map Integration'] },
    //             { plan: 'Agency Portal', price: '₹39,999', features: ['Unlimited Listings', 'Virtual Tours', 'CRM Integration'] }
    //         ]
    //     }
    // },
    // {
    //     id: 4,
    //     title: 'Education Website',
    //     logo: "./service/educationwebsite.svg",
    //     features: [
    //         'Course Management',
    //         'Student Enrollment',
    //         'Progress Tracking'
    //     ],
    //     path: '/education',
    //     slug: 'education',
    //     details: {
    //         overview: 'Our Education Website service helps institutions deliver online learning with course management and student tracking tools.',
    //         benefits: [
    //             { title: 'Digital Learning Hub', description: 'Host courses, materials, and assessments in one place.' },
    //             { title: 'Enrollment Automation', description: 'Allow students to register and pay online.' },
    //             { title: 'Progress Monitoring', description: 'Track student activity, submissions, and performance.' }
    //         ],
    //         process: [
    //             { step: 1, title: 'Platform Planning', description: 'Define course structure and user roles.' },
    //             { step: 2, title: 'Development & Upload', description: 'Build the platform and upload course content.' },
    //             { step: 3, title: 'Launch & Support', description: 'Deploy the site and provide admin training.' }
    //         ],
    //         faq: [
    //             { question: 'Can I manage courses myself?', answer: 'Yes, we provide a dashboard for course creation and updates.' },
    //             { question: 'Do you support online payments?', answer: 'Yes, we integrate payment gateways for enrollment fees.' }
    //         ],
    //         pricing: [
    //             { plan: 'Basic LMS', price: '₹17,999', features: ['5 Courses', 'Enrollment Forms', 'Progress Tracking'] },
    //             { plan: 'Advanced LMS', price: '₹39,999', features: ['Unlimited Courses', 'Quizzes & Certificates', 'Admin Dashboard'] }
    //         ]
    //     }
    // },
    {
        "id": 2,
        "title": "Interior Design Website",
        "logo": "./service/interiorwebsite.svg",
        "features": [
            "Project Showcase",
            "Client Consultation Booking",
            "Design Gallery"
        ],
        "path": "/interior",
        "slug": "interior",
        "details": {
            "overview": "Our Interior Design Website service helps interior designers showcase their work, attract new clients, and manage consultations online.",
            "benefits": [
                { "title": "Portfolio Showcase", "description": "Display completed projects with images, videos, and design details." },
                { "title": "Client Consultation", "description": "Allow visitors to book design consultations directly from the website." },
                { "title": "Lead Generation", "description": "Capture inquiries from potential clients looking for interior design services." }
            ],
            "process": [
                { "step": 1, "title": "Design Planning", "description": "Understand brand style, services, and target clients." },
                { "step": 2, "title": "Website Development", "description": "Build gallery sections, service pages, and contact forms." },
                { "step": 3, "title": "Launch & Optimization", "description": "Deploy the website with SEO optimization for better reach." }
            ],
            "faq": [
                { "question": "Can I upload my own projects?", "answer": "Yes, we provide an admin panel to add or edit projects anytime." },
                { "question": "Will the website be mobile friendly?", "answer": "Yes, the website will be fully responsive on all devices." }
            ],
            "pricing": [
                { "plan": "Starter Interior Site", "price": "₹14,999", "features": ["Project Gallery", "Contact Form", "Responsive Design"] },
                { "plan": "Professional Interior Site", "price": "₹34,999", "features": ["Unlimited Projects", "Booking System", "SEO Optimization"] }
            ]
        }
    },
    {
        "id": 3,
        "title": "Construction Website",
        "logo": "./service/constructionwebsite.svg",
        "features": [
            "Project Portfolio",
            "Service Listings",
            "Quote Request"
        ],
        "path": "/construction",
        "slug": "construction",
        "details": {
            "overview": "Our Construction Website service helps builders and contractors showcase projects, highlight services, and generate leads online.",
            "benefits": [
                { "title": "Project Showcase", "description": "Display completed and ongoing construction projects with details." },
                { "title": "Service Highlight", "description": "Promote services such as residential, commercial, and renovation work." },
                { "title": "Quote Requests", "description": "Allow potential clients to request project quotes online." }
            ],
            "process": [
                { "step": 1, "title": "Requirement Analysis", "description": "Understand construction services, projects, and company profile." },
                { "step": 2, "title": "Website Development", "description": "Build service pages, project galleries, and inquiry forms." },
                { "step": 3, "title": "Deployment", "description": "Launch the website with SEO and mobile optimization." }
            ],
            "faq": [
                { "question": "Can I add new projects later?", "answer": "Yes, you can easily update and add projects from the admin dashboard." },
                { "question": "Will my website appear on Google?", "answer": "Yes, we provide basic SEO optimization for better search visibility." }
            ],
            "pricing": [
                { "plan": "Basic Construction Site", "price": "₹15,999", "features": ["Project Gallery", "Service Pages", "Contact Form"] },
                { "plan": "Advanced Construction Site", "price": "₹36,999", "features": ["Unlimited Projects", "Quote Request System", "SEO Optimization"] }
            ]
        }
    },
    {
        "id": 4,
        "title": "Astrology Website",
        "logo": "./service/astrologywebsite.svg",
        "features": [
            "Horoscope Content",
            "Online Consultation",
            "Appointment Booking"
        ],
        "path": "/astrology",
        "slug": "astrology",
        "details": {
            "overview": "Our Astrology Website service helps astrologers connect with clients, offer horoscope services, and manage online consultations.",
            "benefits": [
                { "title": "Daily Horoscope", "description": "Publish daily, weekly, or monthly horoscope content." },
                { "title": "Online Consultation", "description": "Allow clients to book astrology consultations online." },
                { "title": "Spiritual Branding", "description": "Create a professional online presence for astrology services." }
            ],
            "process": [
                { "step": 1, "title": "Service Planning", "description": "Define astrology services, consultation types, and content." },
                { "step": 2, "title": "Website Development", "description": "Build horoscope sections, booking system, and service pages." },
                { "step": 3, "title": "Launch", "description": "Deploy the website and optimize it for search engines." }
            ],
            "faq": [
                { "question": "Can clients book appointments online?", "answer": "Yes, we integrate an online appointment booking system." },
                { "question": "Can I post daily horoscope updates?", "answer": "Yes, you can easily update horoscope posts through the admin panel." }
            ],
            "pricing": [
                { "plan": "Basic Astrology Site", "price": "₹13,999", "features": ["Service Pages", "Contact Form", "Horoscope Blog"] },
                { "plan": "Premium Astrology Site", "price": "₹32,999", "features": ["Online Booking", "Payment Integration", "SEO Optimization"] }
            ]
        }
    }
]

// export const digitalMarketingTypes: SubService[] = [
//     {
//         id: 1,
//         title: 'Instagram Marketing',
//         logo: './service/instagram.png',
//         features: [
//             'Visual Content Strategy',
//             'Reels & Story Campaigns',
//             'Hashtag Optimization'
//         ],
//         path: '/instagram-marketing',
//         slug: 'instagram-marketing',
//         details: {
//             overview: 'Our Instagram Marketing service helps brands grow through engaging visuals, reels, and targeted campaigns that drive discovery and interaction.',
//             benefits: [
//                 { title: 'Audience Engagement', description: 'Connect with followers through stories, reels, and interactive posts.' },
//                 { title: 'Brand Visibility', description: 'Use trending hashtags and visual storytelling to boost reach.' },
//                 { title: 'Lead Generation', description: 'Drive traffic to your website or product pages via bio links and swipe-ups.' }
//             ],
//             process: [
//                 { step: 1, title: 'Profile Audit', description: 'Review your current Instagram presence and identify growth opportunities.' },
//                 { step: 2, title: 'Content Planning', description: 'Design a calendar of posts, reels, and stories aligned with your goals.' },
//                 { step: 3, title: 'Campaign Execution', description: 'Launch and monitor campaigns with performance tracking.' }
//             ],
//             faq: [
//                 { question: 'Do you create reels?', answer: 'Yes, we design and edit reels tailored to your brand and audience.' },
//                 { question: 'Can I track engagement?', answer: 'Absolutely. We provide weekly reports with insights on reach, likes, and clicks.' }
//             ],
//             pricing: [
//                 { plan: 'Starter', price: '₹9,999', features: ['15 Posts', '5 Reels', 'Hashtag Strategy'] },
//                 { plan: 'Growth', price: '₹19,999', features: ['30 Posts', '10 Reels', 'Story Highlights & Analytics'] }
//             ]
//         }
//     },
//     {
//         id: 2,
//         title: 'Facebook Marketing',
//         logo: './service/facebook.png',
//         features: [
//             'Ad Campaigns',
//             'Page Optimization',
//             'Audience Targeting'
//         ],
//         path: '/facebook-marketing',
//         slug: 'facebook-marketing',
//         details: {
//             overview: 'Our Facebook Marketing service helps businesses reach targeted audiences through paid ads, optimized pages, and community engagement.',
//             benefits: [
//                 { title: 'Targeted Reach', description: 'Run ads based on location, interests, and demographics.' },
//                 { title: 'Page Growth', description: 'Optimize your business page for credibility and conversions.' },
//                 { title: 'Lead Funnels', description: 'Use lead forms and messenger bots to capture inquiries.' }
//             ],
//             process: [
//                 { step: 1, title: 'Audience Research', description: 'Define your ideal customer and ad targeting strategy.' },
//                 { step: 2, title: 'Ad Setup & Design', description: 'Create compelling ad creatives and copy.' },
//                 { step: 3, title: 'Monitoring & Optimization', description: 'Track performance and adjust campaigns for better ROI.' }
//             ],
//             faq: [
//                 { question: 'Do you manage ad budgets?', answer: 'Yes, we help allocate and optimize your ad spend for maximum results.' },
//                 { question: 'Can I run lead generation ads?', answer: 'Definitely. We specialize in Facebook Lead Ads and Messenger campaigns.' }
//             ],
//             pricing: [
//                 { plan: 'Basic Ads', price: '₹12,999', features: ['2 Campaigns', 'Ad Creatives', 'Audience Setup'] },
//                 { plan: 'Advanced Ads', price: '₹24,999', features: ['Multiple Campaigns', 'Retargeting', 'Performance Reports'] }
//             ]
//         }
//     },
//     {
//         id: 3,
//         title: 'Google Ads',
//         logo: './service/googleads.png',
//         features: [
//             'Professional Branding',
//             'Content Strategy',
//             'Connection Outreach'
//         ],
//         path: '/google-ads',
//         slug: 'google-ads',
//         details: {
//             overview: 'Our LinkedIn Marketing service helps professionals and B2B brands build authority, grow networks, and generate qualified leads.',
//             benefits: [
//                 { title: 'Thought Leadership', description: 'Share valuable insights and build credibility in your industry.' },
//                 { title: 'Lead Generation', description: 'Connect with decision-makers through targeted outreach and messaging.' },
//                 { title: 'Profile Optimization', description: 'Enhance your company page and personal profile for visibility.' }
//             ],
//             process: [
//                 { step: 1, title: 'Profile Audit', description: 'Review and optimize your LinkedIn presence.' },
//                 { step: 2, title: 'Content Planning', description: 'Create posts, articles, and engagement strategies.' },
//                 { step: 3, title: 'Outreach & Reporting', description: 'Connect with prospects and track engagement.' }
//             ],
//             faq: [
//                 { question: 'Do you write LinkedIn posts?', answer: 'Yes, we craft professional content tailored to your audience.' },
//                 { question: 'Can I use LinkedIn for B2B leads?', answer: 'Absolutely. It’s one of the best platforms for B2B outreach.' }
//             ],
//             pricing: [
//                 { plan: 'Starter', price: '₹11,999', features: ['Profile Setup', '10 Posts', 'Connection Strategy'] },
//                 { plan: 'Pro Network', price: '₹22,999', features: ['20 Posts', 'Outreach Campaigns', 'Lead Tracking'] }
//             ]
//         }
//     },
//     {
//         id: 4,
//         title: 'YouTube Marketing',
//         logo: './service/youtube.png',
//         features: [
//             'Video Strategy',
//             'Channel Optimization',
//             'Ad Campaigns'
//         ],
//         path: '/youtube-marketing',
//         slug: 'youtube-marketing',
//         details: {
//             overview: 'Our YouTube Marketing service helps brands grow through engaging video content, optimized channels, and targeted ad campaigns.',
//             benefits: [
//                 { title: 'Video Visibility', description: 'Boost views and subscribers with SEO-friendly titles and thumbnails.' },
//                 { title: 'Audience Retention', description: 'Create content that keeps viewers engaged and coming back.' },
//                 { title: 'Monetization Support', description: 'Help you reach monetization thresholds and optimize ad revenue.' }
//             ],
//             process: [
//                 { step: 1, title: 'Channel Audit', description: 'Evaluate your current content and branding.' },
//                 { step: 2, title: 'Content Planning', description: 'Design a video calendar with scripts and visuals.' },
//                 { step: 3, title: 'Promotion & Ads', description: 'Run YouTube ads and cross-promote content.' }
//             ],
//             faq: [
//                 { question: 'Do you edit videos?', answer: 'Yes, we offer basic editing and thumbnail design service.' },
//                 { question: 'Can I run YouTube ads?', answer: 'Yes, we manage YouTube ad campaigns for reach and conversions.' }
//             ],
//             pricing: [
//                 { plan: 'Starter Channel', price: '₹14,999', features: ['5 Videos', 'Channel Setup', 'SEO Optimization'] },
//                 { plan: 'Growth Channel', price: '₹29,999', features: ['10+ Videos', 'Ad Campaigns', 'Analytics Reports'] }
//             ]
//         }
//     }
// ];


