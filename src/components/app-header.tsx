
'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { OnlineStatusIndicator } from '@/components/online-status-indicator';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';

interface AppHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export function AppHeader({ title, children }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
      <SidebarTrigger className="md:flex" />
      <h1 className="font-headline text-xl font-semibold md:text-2xl">
        {title}
      </h1>
      <div className="ml-auto flex items-center gap-4">
        {children}
        <LanguageToggle />
        <ThemeToggle />
        <OnlineStatusIndicator />
      </div>
    </header>
  );
}
