import React from "react";
import CardService from "./_components/CardService";
import Footer from "../_components/Footer";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";

function ServicesPage() {
  const t = useTranslations();

  return (
    <div className="container lg:w-2/3 mx-auto px-7 pt-16">
      <Input type="text" placeholder={t("search")} className="py-6" />
      <p className="my-10">All Services</p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <CardService />
        <CardService />
        <CardService />
        <CardService />
        <CardService />
        <CardService />
      </div>
      <div className="pt-16">
        <Footer />
      </div>
    </div>
  );
}

export default ServicesPage;
