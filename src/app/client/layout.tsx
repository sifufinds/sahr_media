import { ClientAuthProvider } from "@/lib/client-auth";
import { ClientSettingsProvider } from "@/lib/client-settings";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { AuthGuard } from "@/components/dashboard/AuthGuard";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClientAuthProvider>
      <ClientSettingsProvider>
        <AuthGuard>
          <div className="flex min-h-screen bg-[#0A1120]">
            <DashboardSidebar />
            <div className="flex-1 flex flex-col min-w-0">
              {children}
            </div>
          </div>
        </AuthGuard>
      </ClientSettingsProvider>
    </ClientAuthProvider>
  );
}
