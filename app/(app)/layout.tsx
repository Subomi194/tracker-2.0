import Sidebar from "@/components/Sidebar";
import MainLayout from "@/components/MainLayout";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <MainLayout>{children}</MainLayout>
    </div>
  );
}
