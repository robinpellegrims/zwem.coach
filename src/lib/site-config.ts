/**
 * Site configuration utilities
 */

/**
 * Get the base URL for the site based on the environment
 * This ensures OpenGraph tags and canonical URLs work correctly
 * across different deployment environments (production, preview, local)
 */
export function getSiteUrl(): string {
  // Use the custom environment variable if set
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }

  // On Vercel, use the deployment URL
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  // Fallback to production URL
  return 'https://www.zwem.coach'
}

/**
 * Get the full URL for a given path
 */
export function getFullUrl(path: string): string {
  const baseUrl = getSiteUrl()
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${cleanPath}`
}

/**
 * Get the OpenGraph image URL
 * Returns the full URL to the OG image for social media sharing
 */
export function getOgImageUrl(): string {
  // Use custom OG image if specified
  if (process.env.NEXT_PUBLIC_OG_IMAGE_URL) {
    return process.env.NEXT_PUBLIC_OG_IMAGE_URL
  }

  // Default to og-image.png in public folder
  return getFullUrl('/og-image.png')
}

/**
 * Site metadata constants
 */
export const SITE_NAME = 'zwem.coach'
export const SITE_LOCALE = 'nl_BE'
