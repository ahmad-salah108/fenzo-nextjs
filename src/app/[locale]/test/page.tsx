import React from "react";
import { useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

// Force this page to be static
export const dynamic = "force-static";

// Pre-generate all locale versions at build time
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

function TestPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  // Enable static rendering
  setRequestLocale(locale);
  const t = useTranslations(); 

  return (
    <div>
      <h1>{t("home")}</h1>
      <p>{t("about")}</p>
    </div>
  );
}

export default TestPage;
