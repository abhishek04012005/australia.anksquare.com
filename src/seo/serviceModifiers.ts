/**
 * Service Modifiers Configuration
 * Handles routing for URLs like:
 * - /services/best-digital-presence/peddapuram/andhra-pradesh/usa/
 * - /services/digital-presence/peddapuram/andhra-pradesh/usa/
 */

export interface ServiceModifier {
  key: string;
  label: string;
  titlePrefix: string;
  description: string;
  searchTerm: string;
}

export const SERVICE_MODIFIERS: Record<string, ServiceModifier> = {
  best: {
    key: "best",
    label: "Best",
    titlePrefix: "Best",
    description: "Premium & Most Recommended",
    searchTerm: "best",
  }
};

/**
 * Extracts modifier from service slug
 * Example: "best-digital-presence" → { modifier: "best", serviceSlug: "digital-presence" }
 * Example: "no-1-merchant-management" → { modifier: "no-1", serviceSlug: "merchant-management" }
 */
export const extractServiceModifier = (slug: string): {
  modifier: ServiceModifier | null;
  serviceSlug: string;
} => {
  // Check for multi-part modifiers first (like "no-1")
  const modifierKeys = Object.keys(SERVICE_MODIFIERS);

  // Sort by length descending to check longer modifiers first
  const sortedKeys = [...modifierKeys].sort((a, b) => b.length - a.length);

  for (const key of sortedKeys) {
    if (slug.startsWith(`${key}-`)) {
      const modifier = SERVICE_MODIFIERS[key];
      const serviceSlug = slug.substring(key.length + 1); // +1 for the hyphen
      return { modifier, serviceSlug };
    }
  }

  // No modifier found, return the full slug as service slug
  return { modifier: null, serviceSlug: slug };
};

/**
 * Transforms service title based on modifier
 * Example: "Digital Presence" + "best" → "Best Digital Presence"
 */
export const getModifiedServiceTitle = (
  originalTitle: string,
  modifier: ServiceModifier | null
): string => {
  if (!modifier) return originalTitle;

  // Remove any existing prefix if present
  let title = originalTitle;
  Object.values(SERVICE_MODIFIERS).forEach((mod) => {
    if (title.startsWith(`${mod.titlePrefix} `)) {
      title = title.substring(mod.titlePrefix.length + 1);
    }
  });

  return `${modifier.titlePrefix} ${title}`;
};

/**
 * Transforms service description based on modifier
 */
export const getModifiedServiceDescription = (
  originalDescription: string,
  modifier: ServiceModifier | null,
  cityName?: string
): string => {
  if (!modifier) {
    return originalDescription;
  }

  const modifierInfo = modifier.description;
  if (cityName) {
    return `${modifierInfo}. ${originalDescription} in ${cityName}.`;
  }

  return `${modifierInfo}. ${originalDescription}`;
};

/**
 * Generates canonical URL for a service with optional modifier
 */
export const generateServiceUrl = (
  serviceSlug: string,
  modifier: ServiceModifier | null,
  cityPath: string[]
): string => {
  const slug = modifier
    ? `${modifier.key}-${serviceSlug}`
    : serviceSlug;

  return `/services/${slug}/${cityPath.join("/")}`;
};

/**
 * Gets all available modifier variations for a service
 */
export const getServiceVariations = (serviceSlug: string): Array<{
  slug: string;
  modifier: ServiceModifier;
  label: string;
}> => {
  return Object.values(SERVICE_MODIFIERS).map((modifier) => ({
    slug: `${modifier.key}-${serviceSlug}`,
    modifier,
    label: modifier.label,
  }));
};

/**
 * Validates if a modifier exists
 */
export const isValidModifier = (key: string): boolean => {
  return key.toLowerCase() in SERVICE_MODIFIERS;
};

/**
 * Gets modifier by key
 */
export const getModifierByKey = (key: string): ServiceModifier | null => {
  return SERVICE_MODIFIERS[key.toLowerCase()] || null;
};
