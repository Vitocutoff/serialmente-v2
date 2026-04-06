import { BottomNav } from "@/components/navigation/BottomNav";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <main className="mx-auto min-h-dvh max-w-md pb-24">
        {children}
      </main>

      <BottomNav />
    </div>
  );
}
