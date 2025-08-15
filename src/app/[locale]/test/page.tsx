import React from 'react'
import { useTranslations } from 'next-intl'
import { routing } from '@/i18n/routing';

// Force this page to be static
export const dynamic = 'force-static'

// Pre-generate all locale versions at build time
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

function TestPage() {
  const t = useTranslations() // You can use useTranslations here
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  )
}

export default TestPage
