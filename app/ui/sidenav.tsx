import Link from "next/link";
import { Links } from "./link";

export type linksType = {
  id: string;
  name: string;
  path: string;
};

const links: linksType[] = [
  {
    id: "001",
    name: "Tabuada",
    path: "/dashboard/tabuada",
  },
  {
    id: "002",
    name: "blas",
    path: "/dashboard/teste",
  },
];

export default function SideNav() {
  return (
    <div className="border-2 flex relative">
      <p className="border-x border-white px-6 py-3" title="prejcts">
        projects
      </p>
      {links.map((link) => (
        <Links key={link.id} link={link} />
      ))}

      <Link
        href={"/dashboard"}
        className="absolute right-0 border-x text-[rgba(255,255,255,50%)] border-white px-6 py-3 hover:text-white"
      >
        {"</>"}
      </Link>
    </div>
  );
}
