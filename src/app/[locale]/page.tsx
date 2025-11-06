import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
// import Views from "./_components/Views";
// import Orders from "./_components/Orders";
import Footer from "./_components/Footer";
import { DialogEvent } from "./_components/DialogEvent";
import { getLangDir } from "rtl-detect";

// Force this page to be static
export const dynamic = "force-static";

// Pre-generate all locale versions at build time
export async function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({
	params,
}: {
	params: { locale: string };
}) {
	const { locale } = params;
	// Enable static rendering
	setRequestLocale(locale);
	const t = await getTranslations();
	const direction = getLangDir(locale);

	return (
		<div className="flex gap-20">
			<div className="hidden xl:block relative min-h-[calc(100vh-71.03px)] w-[30%]">
				<Image
					src="/assets/images/home.png"
					alt="home image"
					style={{ objectFit: "cover" }}
					fill
					priority
				/>
			</div>
			<div className="w-[90%] md:w-[70%] mx-auto px-[2.1rem] flex flex-col min-h-[calc(100vh-71.03px)]">
				<div className={`relative`}>
					{/* Infinite Image in the background */}
					<img
						src="/assets/icons/infinite.svg"
						alt="infinite"
						className={`absolute opacity-5 top-0 ${direction === "rtl" ? "left-0" : "right-0"}`}
					/>

					{/* Views Card lg screens */}

					{/* <div className="hidden lg:block absolute top-20 right-0">
						<Views />
					</div> */}

					{/* Orders Card lg screens */}

					{/* <div className="hidden lg:block absolute -bottom-20 right-0">
						<Orders />
					</div> */}

					<p className="text-[2rem] md:text-[3rem] font-extrabold leading-12 md:leading-16 uppercase mt-16">
						{locale === "ar" ? (
							"أفضل مكان"
						) : (
							<>
								THE BEST <br /> PLACE FOR
							</>
						)}
					</p>
					<p className="slide-word-wrapper text-[1.9rem] md:text-[3rem] font-extrabold w-92 md:w-xl leading-12 md:leading-16 uppercase">
						{t("your")} &nbsp;
						<span className="slide-word uppercase whitespace-nowrap">
							{t("special_event")} <br /> {t("party")} <br /> {t("graduation")} <br /> {t("weddings")}
						</span>
					</p>
					<p className={`mt-5 text-muted-foreground text-sm leading-7 max-w-160`}>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
					</p>
				</div>
				{/* Views & Orders Cards non lg screens */}
				{/* <div className="flex lg:hidden flex-wrap gap-12 mt-8">
					<Views />
					<Orders />
				</div> */}
				<DialogEvent params={params}/>
				<Footer />
			</div>
		</div>
	);
}
