import { Metadata } from 'next';
import SCSSCalculatorClient from '@/components/SCSSCalculatorClient';
import SCSSContent from '@/components/scss/SCSSContent';
import { computeSCSSDefaults, SCSS_RATE, SCSS_TENURE_YEARS } from '@/lib/smallSavingsCalculations';

export const metadata: Metadata = {
  title: 'SCSS Calculator 2026 — Senior Citizens Savings Scheme Payout | thinkscope.in',
  description: `Free SCSS Calculator for FY 2026-27. Calculate Senior Citizens Savings Scheme quarterly payout and maturity value at ${SCSS_RATE}% p.a. over ${SCSS_TENURE_YEARS} years.`,
  authors: [{ name: 'Satyapal Khakhal' }],
  openGraph: {
    title: 'SCSS Calculator 2026 — Senior Citizens Savings Scheme | thinkscope.in',
    description: `Calculate SCSS quarterly payout and maturity value at ${SCSS_RATE}% p.a. instantly.`,
    type: 'website',
    url: 'https://www.thinkscope.in/calculator/scss',
    siteName: 'thinkscope.in',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SCSS Calculator 2026 | thinkscope.in',
    description: `Calculate your Senior Citizens Savings Scheme quarterly payout at ${SCSS_RATE}% p.a.`,
    creator: '@thinkscope_in',
  },
  alternates: { canonical: 'https://www.thinkscope.in/calculator/scss' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function SCSSCalculatorPage() {
  const defaults = computeSCSSDefaults();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.thinkscope.in/calculator/scss#webpage',
        url: 'https://www.thinkscope.in/calculator/scss',
        name: 'SCSS Calculator 2026 — Senior Citizens Savings Scheme Payout',
        description: `Calculate SCSS quarterly payout and maturity value at ${SCSS_RATE}% p.a. over ${SCSS_TENURE_YEARS} years.`,
        isPartOf: { '@id': 'https://www.thinkscope.in/#website' },
        author: { '@type': 'Person', name: 'Satyapal Khakhal' },
        breadcrumb: { '@id': 'https://www.thinkscope.in/calculator/scss#breadcrumb' },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.thinkscope.in/calculator/scss#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thinkscope.in' },
          { '@type': 'ListItem', position: 2, name: 'Calculator', item: 'https://www.thinkscope.in/calculator' },
          { '@type': 'ListItem', position: 3, name: 'SCSS Calculator', item: 'https://www.thinkscope.in/calculator/scss' },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'SCSS Calculator India 2026',
        url: 'https://www.thinkscope.in/calculator/scss',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        description: `Calculate Senior Citizens Savings Scheme quarterly payout and maturity value at ${SCSS_RATE}% p.a.`,
        featureList: ['Quarterly payout calculation', 'SSR default results'],
      },
      {
        '@type': 'HowTo',
        name: 'How to Use SCSS Calculator',
        description: 'Step-by-step guide to calculate your SCSS quarterly payout',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Enter Investment Amount', text: 'Enter the lump sum amount you want to invest, up to ₹30,00,000.' },
          { '@type': 'HowToStep', position: 2, name: 'View Quarterly Payout', text: 'The calculator shows your quarterly interest payout, annual payout, and total maturity value.' },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.thinkscope.in/calculator/scss#faq',
        mainEntity: [
          { '@type': 'Question', name: 'Who is eligible to open an SCSS account?', acceptedAnswer: { '@type': 'Answer', text: 'Individuals aged 60 or above; retired defence personnel from age 55; civilian VRS/superannuation retirees from age 50.' } },
          { '@type': 'Question', name: 'How is SCSS interest paid out?', acceptedAnswer: { '@type': 'Answer', text: 'Interest is paid quarterly directly to your savings account — it is not compounded.' } },
          { '@type': 'Question', name: 'What is the maximum SCSS investment limit?', acceptedAnswer: { '@type': 'Answer', text: '₹30,00,000 per individual, raised from ₹15,00,000 in the 2023 Budget.' } },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SCSSCalculatorClient initialPrincipal={defaults.principal} initialResult={defaults.result} />
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <SCSSContent />
      </div>
    </>
  );
}
