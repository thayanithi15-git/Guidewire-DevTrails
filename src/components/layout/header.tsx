'use client';

import React from 'react';
import { Bell, LogOut, Menu, Moon, ShieldCheck, Sun } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useSidebarStore, useThemeStore } from '@/store/layoutStore';
import { appIdentity, workerProfile } from '@/data/gigshield-data';

type HeaderProps = {
  title?: string;
  subtitle?: string;
  HeaderComp?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({
  title = 'GigShield AI',
  subtitle = 'Weekly income protection for food delivery partners',
  HeaderComp,
}) => {
  const router = useRouter();
  const { toggleSidebar } = useSidebarStore();
  const { isDark, toggleTheme } = useThemeStore();

  const handleLogout = () => {
    localStorage.clear();
    router.push('/');
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="hidden h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 md:flex dark:text-sky-300">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-semibold text-foreground">{title}</p>
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          {HeaderComp}
          <Button variant="outline" size="sm" className="hidden gap-2 md:flex">
            <Bell className="h-4 w-4" />
            Live alerts
          </Button>
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <div className="hidden rounded-2xl border border-border/70 bg-card px-3 py-2 md:block">
            <p className="text-sm font-semibold text-foreground">{workerProfile.name}</p>
            <p className="text-xs text-muted-foreground">
              {workerProfile.role} • {appIdentity.name}
            </p>
          </div>
          <Button variant="ghost" size="sm" className="gap-2" onClick={handleLogout}>
            <LogOut className="h-4 w-4" />
            <span className="hidden md:inline">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
