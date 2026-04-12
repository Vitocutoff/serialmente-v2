import { BottomNav } from "@/components/navigation/BottomNav";
import { DesktopSidebar } from "@/components/navigation/DesktopSidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* MOBILE */}
      <div className="md:hidden">
        <main className="mx-auto min-h-dvh max-w-md pb-24">
          {children}
        </main>

        <BottomNav />
      </div>

      {/* DESKTOP */}
      <div className="hidden min-h-dvh md:flex">
        <DesktopSidebar />

        <main className="min-w-0 flex-1">
          <div className="mx-auto min-h-dvh max-w-7xl px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
