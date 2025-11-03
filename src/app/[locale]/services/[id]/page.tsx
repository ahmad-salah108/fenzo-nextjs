import React from "react";
import CardSeller from "./_components/CardSeller";
import { Input } from "@/components/ui/input";
import Footer from "../../_components/Footer";
import { BreadcrumbDemo } from "@/app/_components/Breadcrumb";
import { CarouselWithDots } from "./_components/CarouselService";
import { getTranslations } from "next-intl/server";
import { PaginationDemo } from "./_components/Pagination";

async function ServicePage() {
  const t = await getTranslations();
  const links = [
    {
      title: t("services"),
      href: "/services",
    },
    {
      title: "Service Name",
      href: "/services/1",
    },
  ];

  return (
    <div className="container lg:w-2/3 mx-auto px-7 pt-16">
      <div className="pb-10">
        <BreadcrumbDemo links={links} />
      </div>
      <div>
        <h1 className="font-semibold text-xl leading-5">Wedding Service</h1>
        <p className="text-gray-400 text-xs pt-2">Service Supplier</p>
        <p className="text-sm pt-5 text-muted-foreground font-light leading-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <div className="pt-10">
        <CarouselWithDots />
      </div>
      <p className="mt-16 mb-7 font-semibold">{t("sellers_for_service")}</p>
      <Input type="text" placeholder={t("search")} className="py-6 mb-10 rounded-[5px]" />
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
        <CardSeller />
        <CardSeller />
        <CardSeller />
        <CardSeller />
        <CardSeller />
        <CardSeller />
      </div>
      <div className="mt-20">
        <PaginationDemo />
      </div>
      <div className="pt-16">
        <Footer />
      </div>
    </div>
  );
}

export default ServicePage;
