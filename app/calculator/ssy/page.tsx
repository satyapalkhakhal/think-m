import { Metadata } from 'next';
import SSYCalculatorClient from '@/components/SSYCalculatorClient';
import SSYContent from '@/components/ssy/SSYContent';
import { computeSSYDefaults, SSY_RATE } from '@/lib/smallSavingsCalculations';

export const metadata: Metadata = {
  title: 'Sukanya Samriddhi Yojana (SSY) Calculator 2026 — Maturity Value | thinkscope.in',
  description: `Free SSY Calculator for FY 2026-27. Calculate Sukanya Samriddhi Yojana maturity value at ${SSY_RATE}% p.a. with year-wise growth table. Tax-free under Section 80C.`,
  authors: [{ name: 'Satyapal Khakhal' }],
  openGraph: {
    title: 'Sukanya Samriddhi Yojana (SSY) Calculator 2026 | thinkscope.in',
    description: `Calculate your SSY maturity value at ${SSY_RATE}% p.a. instantly with a year-wise growth table.`,
    type: 'website',
    url: 'https://www.thinkscope.in/calculator/ssy',
    siteName: 'thinkscope.in',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSY Calculator 2026 | thinkscope.in',
    description: `Calculate your Sukanya Samriddhi Yojana maturity value at ${SSY_RATE}% p.a.`,
    creator: '@thinkscope_in',
  },
  alternates: { canonical: 'https://www.thinkscope.in/calculator/ssy' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function SSYCalculatorPage() {
  const defaults = computeSSYDefaults();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.thinkscope.in/calculator/ssy#webpage',
        url: 'https://www.thinkscope.in/calculator/ssy',
        name: 'Sukanya Samriddhi Yojana (SSY) Calculator 2026',
        description: `Calculate SSY maturity value at ${SSY_RATE}% p.a. with year-wise growth table.`,
        isPartOf: { '@id': 'https://www.thinkscope.in/#website' },
        author: { '@type': 'Person', name: 'Satyapal Khakhal' },
        breadcrumb: { '@id': 'https://www.thinkscope.in/calculator/ssy#breadcrumb' },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.thinkscope.in/calculator/ssy#breadcrumb',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thinkscope.in' },
          { '@type': 'ListItem', position: 2, name: 'Calculator', item: 'https://www.thinkscope.in/calculator' },
          { '@type': 'ListItem', position: 3, name: 'SSY Calculator', item: 'https://www.thinkscope.in/calculator/ssy' },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'SSY Calculator India 2026',
        url: 'https://www.thinkscope.in/calculator/ssy',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        description: `Calculate Sukanya Samriddhi Yojana maturity value at ${SSY_RATE}% p.a. with year-wise growth table.`,
        featureList: ['15-year deposit + 21-year maturity modeling', 'Year-wise growth table', 'SSR default results'],
      },
      {
        '@type': 'HowTo',
        name: 'How to Use SSY Calculator',
        description: 'Step-by-step guide to calculate your Sukanya Samriddhi Yojana maturity value',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Enter Annual Deposit', text: 'Enter the amount you plan to deposit every year, between ₹250 and ₹1,50,000.' },
          { '@type': 'HowToStep', position: 2, name: 'View Maturity Value', text: 'The calculator shows your total investment, interest earned, and maturity value 21 years from account opening.' },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.thinkscope.in/calculator/ssy#faq',
        mainEntity: [
          { '@type': 'Question', name: 'Who is eligible to open an SSY account?', acceptedAnswer: { '@type': 'Answer', text: 'Any parent or legal guardian of a girl child below 10 years of age can open an SSY account. A maximum of two accounts per family is allowed (three in case of twins/triplets in the second birth).' } },
          { '@type': 'Question', name: 'What is the minimum and maximum deposit for SSY?', acceptedAnswer: { '@type': 'Answer', text: "Minimum ₹250 per year and maximum ₹1,50,000 per year." } },
          { '@type': 'Question', name: 'When does an SSY account mature?', acceptedAnswer: { '@type': 'Answer', text: 'The account matures 21 years from the date of opening. Deposits are required only for the first 15 years.' } },
          { '@type': 'Question', name: 'Is SSY interest and maturity amount taxable?', acceptedAnswer: { '@type': 'Answer', text: 'No. SSY has EEE tax status — deposits qualify for Section 80C, interest is tax-free, and the maturity amount is fully tax-free.' } },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SSYCalculatorClient initialAnnualDeposit={defaults.annualDeposit} initialResult={defaults.result} />
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <SSYContent />
      </div>
    </>
  );
}
