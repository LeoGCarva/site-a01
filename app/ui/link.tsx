'use client'

import Link from "next/link";
import { linksType } from "./sidenav";
import { usePathname } from "next/navigation";

export function Links({ link }: { link: linksType }) {
  const pathname = usePathname();

  return (
    <Link key={link.id} href={link.path} className={`border border-white p-6 ${pathname === link.path ? 'text-[#9f0A10]' : 'text-white'}`}>
      {link.name.toUpperCase()}
    </Link>
  );
}
