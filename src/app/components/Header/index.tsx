"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Image
} from "@nextui-org/react";

import { usePathname } from "next/navigation";

import { AcmeLogo } from "./Logo";
import SearchBar from "./Searchbar";

import { cpitalizeFirstLetter } from "../../utils/stringUtils";

export default function Header() {
  const pathname = usePathname();

  const navBarItems: Record<string, string> = {
    home: "/",
    news: "/news",
    tickets: "/tickets",
  };

  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link color="foreground" href={navBarItems.home}>
            <AcmeLogo />
            <p className="hidden sm:block font-bold text-inherit">Acme</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          {Object.keys(navBarItems)
            .filter((page) => page !== "home")
            .map((page) => {
              const isActive = navBarItems[page] === pathname;
              return (
                <NavbarItem key={page} isActive={isActive}>
                  <Link
                    color={isActive ? "secondary" : "foreground"}
                    href={navBarItems[page]}
                  >
                    {cpitalizeFirstLetter(page)}
                  </Link>
                </NavbarItem>
              );
            })}
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <SearchBar />
      </NavbarContent>
    </Navbar>
  );
}
