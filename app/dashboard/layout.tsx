import getCurrentUser from "@/app/actions/getCurrentUser";
import SidebarC from "../components/sidebar/SidebarC";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <div className="w-full h-fit flex">
      <SidebarC currentUser={currentUser} />
      <div className="w-full h-full flex mx-auto">{children}</div>
    </div>
  );
}
