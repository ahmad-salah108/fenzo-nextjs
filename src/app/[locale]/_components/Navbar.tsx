"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { azeretMono } from "@/app/fonts";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const t = useTranslations();
  const t_auth = useTranslations("Auth");
  const pathname = usePathname();

  const getLocaleFromPathname = (path: string) => {
    const parts = path.split("/").filter(Boolean);
    return parts.length > 0 ? parts[0] : "";
  };

  const currentLocale = getLocaleFromPathname(pathname);
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");

  // Navigation items array
  const navItems = [
    { name: t("home"), href: "/" },
    { name: t("services"), href: "/services" },
    { name: t("my_orders"), href: "/my-orders" },
    { name: t("contact_us"), href: "/contact-us" },
    { name: t("about"), href: "/about" },
  ];

  return (
    <div>
      {isMobileMenuOpen && (
        <div
          onClick={() => {
            setIsMobileMenuOpen(false);
          }}
          className="fixed inset-0 z-[35] bg-black/50 lg:hidden"
        ></div>
      )}
      <nav className="border-b-2 border-main block w-full max-w-screen px-4 mx-auto bg-main-light bg-opacity-90 sticky top-3 lg:px-8 backdrop-blur-lg backdrop-saturate-150 z-[30]">
        <div className="container flex flex-wrap items-center justify-between mx-auto tracking-wide py-1">
          <Link href="/" className="mr-4 block cursor-pointer">
            <Image
              src={"/assets/logo.svg"}
              width={150}
              height={150}
              alt="Fenzo Logo"
              className="-translate-x-2.5"
            />
          </Link>

          <div className="lg:hidden">
            <button
              className="cursor-pointer relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={toggleMobileMenu}
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden lg:block ${azeretMono.className}`}>
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navItems.map((item, index) => {
                const isActive =
                  item.href === "/"
                    ? pathWithoutLocale === "" || pathWithoutLocale === "/"
                    : pathWithoutLocale.startsWith(item.href);
                return (
                  <li key={index} className="flex items-center p-1 gap-x-2">
                    <Link
                      href={item.href}
                      className={`flex items-center ${
                        isActive ? "active-nav-link" : ""
                      }`}
                    >
                      {item.href === "/about" ? (
                        t.rich("about", {
                          customDiv: (chunks) => <div>{chunks}</div>,
                        })
                      ) : (
                        item.name
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="hidden gap-10 lg:flex tracking-wider justify-center items-center">
            <Link href={"/login"}>{t_auth("login")}</Link>
            <Button className="bg-main hover:bg-main-100">
              <Link href={"/register"}>{t_auth("register")}</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 min-h-screen w-70 bg-background shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden z-[40]`}
      >
        <div className="flex flex-row items-center border-b pb-4 px-5 bg-gradient-to-r from-main-400 to-main text-white">
          <div className={`flex flex-col`}>
            <Link href="/" className="cursor-pointer pt-4">
              <div className="w-[70px] h-[70px] bg-white rounded-full flex justify-center items-center">
                <Image
                  src={"/assets/logo.svg"}
                  width={90}
                  height={90}
                  alt="Fenzo Logo"
                />
              </div>
            </Link>
            <strong className="tracking-wider text-2xl pt-5 font-[500]">
              John Doe
            </strong>
            <sub className="tracking-wider text-lg font-light -translate-y-1">
              Event Planner
            </sub>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="cursor-pointer absolute top-4 right-4 text-background"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col h-full gap-4 p-4">
          {navItems.map((item, index) => {
            const isActive =
              item.href === "/"
                ? pathWithoutLocale === "" || pathWithoutLocale === "/"
                : pathWithoutLocale.startsWith(item.href);
            return (
              <li
                key={index}
                className={`flex items-center p-1 gap-x-2 ${azeretMono.className} tracking-wide`}
              >
                <Link
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                  href={item.href}
                  className={`flex items-center ${
                    isActive ? "active-nav-link" : ""
                  }`}
                >
                  {item.href === "/about" ? (
                    t.rich("about", {
                      customDiv: (chunks) => <div>{chunks}</div>,
                    })
                  ) : (
                    item.name
                  )}
                </Link>
              </li>
            );
          })}
          <hr className="border-gray-300 my-3"/>
          <li
            className={`flex items-center p-1 gap-x-2 ${azeretMono.className} tracking-wide`}
          >
            <Link href={"/login"}>{t_auth("login")}</Link>
          </li>
          <li
            className={`flex items-center p-1 gap-x-2 ${azeretMono.className} tracking-wide`}
          >
            <Link href={"/register"}>{t_auth("register")}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
