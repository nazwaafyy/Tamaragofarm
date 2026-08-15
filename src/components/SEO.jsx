import { useEffect } from 'react';

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = '/Thumbnail.png',
}) {
  const siteName = 'TamaraAgro Farm';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Perusahaan Hortikultura & Agribisnis Sukabumi`;
  const siteUrl = 'https://www.tamaraagrofarm.my.id';
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    const setMeta = (attr, value, content) => {
      let el = document.querySelector(`meta[${attr}="${value}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, value);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Standard meta
    if (description) setMeta('name', 'description', description);
    if (keywords) setMeta('name', 'keywords', keywords);
    setMeta('name', 'author', 'CV Tamara Agro Indonesia');
    setMeta('name', 'robots', 'index, follow');
    setMeta('name', 'theme-color', '#174D25');
    setMeta('name', 'thumbnail', `${siteUrl}${ogImage}`);

    // Open Graph
    setMeta('property', 'og:title', fullTitle);
    if (description) setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', `${siteUrl}${ogImage}`);
    setMeta('property', 'og:image:secure_url', `${siteUrl}${ogImage}`);
    const imgType = ogImage.toLowerCase().endsWith('.png') ? 'image/png' : ogImage.toLowerCase().endsWith('.webp') ? 'image/webp' : 'image/jpeg';
    setMeta('property', 'og:image:type', imgType);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:site_name', siteName);
    setMeta('property', 'og:locale', 'id_ID');

    // Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    if (description) setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', `${siteUrl}${ogImage}`);

    // Canonical
    setLink('canonical', canonicalUrl);
  }, [fullTitle, description, keywords, canonicalUrl, ogType, ogImage]);

  return null;
}
