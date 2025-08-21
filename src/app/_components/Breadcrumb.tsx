import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

type Params = { links: { href: string; title: string }[] };

export function BreadcrumbDemo({ links }: Params) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links?.map((link, i) => {
          return (
            <Fragment key={link.href ?? i}>
              {i === links.length - 1 ? (
                <BreadcrumbItem>
                  <BreadcrumbPage>{link?.title}</BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={link?.href}>{link?.title}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              )}
              {i < links.length - 1 && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
