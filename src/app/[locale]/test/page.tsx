import React from 'react'
import { useTranslations } from 'next-intl'
import { routing } from '@/i18n/routing';
import { azeretMono } from '@/app/fonts';

// Force this page to be static
export const dynamic = 'force-static'

// Pre-generate all locale versions at build time
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

function TestPage() {
  const t = useTranslations() // You can use useTranslations here
  
  return (
    <div className={azeretMono.className}>
      <h1>{t('home')}</h1>
      <p>{t('about')}</p>
    </div>
  )
}

export default TestPage
