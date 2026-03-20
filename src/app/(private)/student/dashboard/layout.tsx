import { SidebarProvider } from "@/components/ui/sidebar";
import LayoutWrapper from "@/components/layout/layout";

export default function StudentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen>
      <LayoutWrapper>
        <div className="min-h-screen">{children}</div>
      </LayoutWrapper>
    </SidebarProvider>
  );
}
