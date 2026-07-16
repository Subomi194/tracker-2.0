import Sidebar from "@/components/Sidebar";
import MainLayout from "@/components/MainLayout";
import {SearchProvider} from "@/context/SearchContext";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SearchProvider>
      <div className="flex">
        <Sidebar />
        <MainLayout>{children}</MainLayout>
      </div>
    </SearchProvider>
    
  );
}
