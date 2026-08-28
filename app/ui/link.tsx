"use client";

import Link from "next/link";
import { linksType } from "./sidenav";
import { usePathname } from "next/navigation";

export function Links({ link }: { link: linksType }) {
  const pathname = usePathname();

  return (
    <Link
      key={link.id}
      href={link.path}
      className={`border-x border-white text-[rgba(255,255,255,50%)] px-6 py-3 ${pathname === link.path ? "bg-[#db050c] text-white" : ""} hover:text-white`}
      title={link.name}
    >
      {pathname === link.path
        ? link.id + " " + link.name.toUpperCase()
        : link.id}
    </Link>
  );
}
