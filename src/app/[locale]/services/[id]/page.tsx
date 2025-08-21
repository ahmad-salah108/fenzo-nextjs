import React from "react";
import CardSeller from "./_components/CardSeller";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import Footer from "../../_components/Footer";
import { BreadcrumbDemo } from "@/app/_components/Breadcrumb";

function ServicePage() {
  const t = useTranslations();
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
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
      <Input type="text" placeholder={t("search")} className="py-6 mt-16" />
      <p className="my-10">{t("all_sellers")}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <CardSeller />
        <CardSeller />
        <CardSeller />
        <CardSeller />
        <CardSeller />
        <CardSeller />
      </div>
      <div className="pt-16">
        <Footer />
      </div>
    </div>
  );
}

export default ServicePage;
