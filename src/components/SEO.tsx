import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonical?: string;
  noIndex?: boolean;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Ramestta - Institutional-Grade Layer-3 Blockchain Infrastructure',
  description = 'Ramestta is an Ethereum-aligned Layer-3 blockchain built on Polygon. Experience sub-2 second finality, $0.0002-$0.001 fees, 65,000+ TPS with EVM compatibility. Fast, scalable, and secure blockchain for payments, gaming, and DeFi.',
  keywords = 'Ramestta, Layer 3 blockchain, L3 blockchain, Polygon Layer 3, Ethereum Layer 3, EVM compatible blockchain, fast blockchain, scalable blockchain, low gas fees, blockchain gaming, DeFi blockchain, Web3 infrastructure, Polygon PoS, blockchain payments, decentralized finance, smart contracts, cryptocurrency, blockchain developer tools, Ethereum scaling, validator network',
  ogImage = 'https://ramestta.com/rama_logo.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonical,
  noIndex = false,
  structuredData
}) => {
  const siteUrl = 'https://ramestta.com';
  const fullTitle = title.includes('Ramestta') ? title : `${title} | Ramestta`;
  const canonicalUrl = canonical || `${siteUrl}${typeof window !== 'undefined' ? window.location.pathname : ''}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Ramestta" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:site" content="@ramestta" />
      <meta property="twitter:creator" content="@ramestta" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
