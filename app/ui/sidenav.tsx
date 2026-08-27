import { Links } from "./link";

export type linksType = {
  id: number;
  name: string;
  path: string;
};

const links: linksType[] = [
  {
    id: 1,
    name: "Índice",
    path: "/dashboard",
  },
  {
    id: 2,
    name: "Tabuada",
    path: "/dashboard/tabuada",
  },
];

export default function SideNav() {

  return (
    <div className="border-2 flex">
      {links.map((link) => (
        <Links key={link.id} link={link} />
      ))}
    </div>
  );
}
