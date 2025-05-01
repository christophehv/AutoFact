"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import React, { useEffect } from "react";
import { checkAndAddUser } from "../actions";

const Navbar = () => {
  const pathname = usePathname();
  const { user } = useUser();

  const navLinks = [
    {
      href: "/",
      label: "Factures",
    },
  ];

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress && user.fullName) {
      checkAndAddUser(user?.primaryEmailAddress?.emailAddress, user.fullName);
    }
  }, [user]);

  const isActiveLink = (href: string) =>
    pathname.replace(/\/$/, "") === href.replace(/\/$/, "");

  const renderLinks = (classNames: string) =>
    navLinks.map(({ href, label }) => {
      return (
        <Link
          href={href}
          key={href}
          className={`btn-sm  ${classNames} ${
            isActiveLink(href) ? "btn-accent" : ""
          }`}
        >
          {label}
        </Link>
      );
    });

  return (
    <div className="border-b border-base-300 px-5 md:px-[10%] py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/assets/logo.png" // ou le chemin réel du fichier dans /public
            alt="Logo AutoFact"
            width={80}
            height={80}
            className="object-cover"
          />

          <span className="ml-3 font-bold text-2xl italic">
            Auto
            <span className="text-accent">Fact</span>
          </span>
        </div>

        <div className="flex  space-x-4 items-center">
          {renderLinks("btn")}
          <UserButton />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Navbar;
