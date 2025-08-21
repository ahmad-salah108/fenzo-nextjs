import { routing } from "@/i18n/routing";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Footer from "@/app/[locale]/_components/Footer";
import { FormResetPassword } from "./_components/FormResetPassword";

// Force this page to be static
export const dynamic = "force-static";

// Pre-generate all locale versions at build time
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LoginPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  // Enable static rendering
  setRequestLocale(locale);
  const tAuth = await getTranslations("Auth");

  return (
    <div className="flex gap-20">
      <div className="hidden md:block min-h-[calc(100vh-71.03px)] relative w-1/4">
        <Image
          src="/assets/images/login.png"
          alt="home image"
          style={{ objectFit: "cover" }}
          fill
          priority
        />
      </div>
      <div className="w-[90%] md:w-[70%] mt-4 mx-auto px-[2.1rem] flex flex-col">
        <div>
          <p className="text-[2rem] md:text-[3rem] font-extrabold leading-[3rem] md:leading-[4rem] uppercase mt-5">
            {tAuth("reset")}{" "}
            <span className="text-main">{tAuth("password")}</span>
          </p>
          <p
            className={`mt-5 text-muted-foreground text-sm leading-7 xl:max-w-2/3`}
          >
            {tAuth("reset_password_desc")}
          </p>
        </div>
        <div className="mt-10">
          <FormResetPassword />
        </div>

        <Footer />
      </div>
    </div>
  );
}
