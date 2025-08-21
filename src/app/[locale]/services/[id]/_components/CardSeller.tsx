import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslations } from "next-intl";

function CardSeller() {
  const t = useTranslations();
  
  return (
    <div className="w-[250px] mx-auto bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
      <div>
        <Image
          src="/assets/images/card-image2.png"
          alt="Card Image"
          width={250}
          height={100}
        />
      </div>
      <div className="px-6 pt-15 pb-11 relative">
        <div className="absolute -top-7 left-1/2 -translate-x-1/2">
          <Tooltip>
            <TooltipTrigger>
              <Link href={"/services/1/2"}>
                <div className="w-15 h-15 rounded-full border-3 border-white bg-main flex justify-center items-center">
                  <img src="/assets/icons/arrow.svg" />
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>{t("go_to_seller")}</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <h1 className="font-semibold leading-5 text-center">Wedding Seller</h1>
        <p className="text-gray-400 text-[0.7rem] text-center">
          Service Supplier
        </p>
        <p className="text-[0.8rem] text-center pt-5 text-muted-foreground font-light leading-6 line-clamp-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
    </div>
  );
}

export default CardSeller;
