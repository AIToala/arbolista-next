import getCurrentUser from "@/app/actions/getCurrentUser";
import Sidebar from "../components/sidebar/Sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <div className="w-full h-fit flex min-h-[80vh]">
      <Sidebar currentUser={currentUser} />
      <div className="w-full h-auto flex mx-auto bg-[#F9FAFB]">{children}</div>
    </div>
  );
}
