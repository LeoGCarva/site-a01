import SideNav from "@/app/ui/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SideNav />
      <div>{children}</div>
    </div>
  );
}
