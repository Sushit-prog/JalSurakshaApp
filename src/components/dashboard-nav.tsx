
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Siren,
  Megaphone,
  Users,
  Settings,
  LogOut,
  BrainCircuit,
  FilePlus,
  MessageSquareText,
} from "lucide-react";
import { Icons } from "@/components/icons";
import { useI18n } from "@/context/I18nContext";
import { useAuth } from "@/context/AuthContext";
import { auth } from "@/lib/firebase";


export function DashboardNav() {
  const pathname = usePathname();
  const { t } = useI18n();
  const { user } = useAuth();

  const navItems = [
    { href: "/", label: t('dashboard'), icon: LayoutDashboard },
    { href: "/prediction", label: t('prediction'), icon: BrainCircuit },
    { href: "/reports/submit", label: t('submitReport'), icon: FilePlus },
    { href: "/alerts", label: t('alerts'), icon: Siren },
    { href: "/sms-analyzer", label: t('smsAnalyzer'), icon: MessageSquareText },
    { href: "/awareness", label: t('awareness'), icon: Megaphone },
    { href: "/users", label: t('users'), icon: Users },
  ];

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-3">
          <Icons.Logo className="size-8 text-primary shrink-0" />
          <div className="font-headline text-lg font-semibold text-sidebar-foreground">
            JalSuraksha
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} className="w-full">
                <SidebarMenuButton tooltip={item.label} isActive={pathname === item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarSeparator />
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/settings" className="w-full">
              <SidebarMenuButton tooltip={t('settings')} isActive={pathname === "/settings"}>
                <Settings />
                <span>{t('settings')}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarSeparator />
        <div className="flex items-center gap-3 px-2 py-1">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user?.photoURL ?? "https://i.pravatar.cc/150?u=a042581f4e29026704d"} alt="@user" />
            <AvatarFallback>{user?.email?.[0].toUpperCase() ?? 'A'}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-sm">
            <span className="font-medium text-sidebar-foreground">
              {user?.displayName ?? 'Admin Official'}
            </span>
            <span className="text-xs text-sidebar-foreground/70">
              {user?.email ?? 'admin@jalsuraksha.org'}
            </span>
          </div>
          <SidebarMenuButton variant="ghost" size="icon" className="ml-auto !h-8 !w-8" onClick={handleLogout}>
            <LogOut className="!size-4" />
          </SidebarMenuButton>
        </div>
      </SidebarFooter>
    </>
  );
}

    