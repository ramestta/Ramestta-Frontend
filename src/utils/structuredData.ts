export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ramestta',
  url: 'https://ramestta.com',
  logo: 'https://ramestta.com/rama_logo.png',
  description: 'Institutional-Grade Layer-3 blockchain infrastructure built on Polygon and secured by Ethereum',
  sameAs: [
    'https://x.com/ramestta',
    'https://github.com/Ramestta-Blockchain',
    'https://www.instagram.com/ramestta',
    'https://www.facebook.com/Ramestta'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@ramestta.com',
    contactType: 'Customer Support',
    availableLanguage: 'English'
  }
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ramestta',
  url: 'https://ramestta.com',
  description: 'Institutional-Grade Layer-3 Blockchain Infrastructure',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://ramestta.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ramestta Blockchain',
  applicationCategory: 'Blockchain Platform',
  operatingSystem: 'Cross-platform',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  },
  description: 'Layer-3 blockchain platform with sub-2 second finality, 65,000+ TPS, and EVM compatibility. Built on Polygon and secured by Ethereum.',
  featureList: [
    'Sub-2 second finality',
    '65,000+ TPS capacity',
    '$0.0002-$0.001 transaction fees',
    '100% EVM compatible',
    'Ethereum-aligned security',
    'Polygon Layer-2 integration'
  ]
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const articleSchema = (article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  image: article.image,
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  author: {
    '@type': 'Organization',
    name: article.author
  },
  publisher: {
    '@type': 'Organization',
    name: 'Ramestta',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ramestta.com/rama_logo.png'
    }
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': article.url
  }
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});
