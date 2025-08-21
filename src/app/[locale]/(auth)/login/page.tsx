import { routing } from "@/i18n/routing";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Footer from "@/app/[locale]/_components/Footer";
import { FormLogin } from "./_components/FormLogin";

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
  const t = await getTranslations();

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
        <div className={`relative`}>
          <p className="text-[2rem] md:text-[3rem] font-extrabold leading-[3rem] md:leading-[4rem] uppercase mt-5">
            {locale === "ar" ? (
              "أفضل مكان"
            ) : (
              <>
                THE BEST <br /> PLACE FOR
              </>
            )}
          </p>
          <p className="slide-word-wrapper text-[1.9rem] md:text-[3rem] font-extrabold w-[23rem] md:w-[36rem] leading-[3rem] md:leading-[4rem] uppercase">
            {t("your")}&nbsp;
            <span className="slide-word uppercase whitespace-nowrap">
              {t("special_event")} <br /> {t("party")} <br /> {t("graduation")}{" "}
              <br /> {t("weddings")}
            </span>
          </p>
          <p
            className={`mt-5 text-muted-foreground text-sm leading-7 xl:max-w-2/3`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="mt-10">
          <FormLogin />
        </div>

        <Footer />
      </div>
    </div>
  );
}
