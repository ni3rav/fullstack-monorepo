import { Outlet } from "react-router-dom";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { PageContainer } from "@/components/page-container";

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <h1 className="text-xl font-semibold">My App</h1>
            <ThemeSwitcher />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <PageContainer>
          <Outlet />
        </PageContainer>
      </main>
    </div>
  );
}
