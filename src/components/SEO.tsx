import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article';
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = '',
  ogImage = '/WhatsApp Image 2025-09-16 at 13.37.39_d96be5ef.webp',
  canonicalUrl,
  type = 'website'
}) => {
  const location = useLocation();
  const baseUrl = 'https://telepulse.in'; // Update with your actual domain
  const fullUrl = canonicalUrl || `${baseUrl}${location.pathname}`;
  const fullTitle = `${title} | Telepulse`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }
    updateMetaTag('author', 'Telepulse');
    updateMetaTag('robots', 'index, follow');

    // Open Graph meta tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:image', `${baseUrl}${ogImage}`, true);
    updateMetaTag('og:site_name', 'Telepulse', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `${baseUrl}${ogImage}`);

    // Additional SEO meta tags
    updateMetaTag('theme-color', '#001F5B');
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // Add structured data (JSON-LD)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'MedicalOrganization',
      'name': 'Telepulse',
      'description': description,
      'url': fullUrl,
      'logo': `${baseUrl}${ogImage}`,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'AKSHAYA, 22 (270), 4th Main Road, Mahalakshmi Layout',
        'addressLocality': 'Bangalore',
        'postalCode': '560086',
        'addressCountry': 'IN'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+91-9108080000',
        'contactType': 'Customer Service',
        'email': 'info@telepulse.in',
        'availableLanguage': 'English'
      },
      'sameAs': []
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, ogImage, fullUrl, fullTitle, type]);

  return null;
};

export default SEO;
