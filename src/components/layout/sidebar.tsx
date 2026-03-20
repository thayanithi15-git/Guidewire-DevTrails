'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LogOut, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/store/layoutStore';
import { studentSections } from './sidebarData';
import { appIdentity, workerProfile } from '@/data/gigshield-data';

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { isOpen } = useSidebarStore();
  const sections = useMemo(() => studentSections('/student/dashboard'), []);

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-50 flex h-full flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-all duration-300',
        isOpen ? 'w-72' : 'w-[84px]'
      )}
    >
      <div className="flex items-center gap-3 border-b border-sidebar-border px-4 py-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-300">
          <ShieldCheck className="h-6 w-6" />
        </div>
        {isOpen ? (
          <div className="min-w-0">
            <p className="truncate text-lg font-semibold text-white">{appIdentity.name}</p>
            <p className="text-xs text-sidebar-foreground/70">{appIdentity.tagline}</p>
          </div>
        ) : null}
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-4">
        {sections.map((section) => (
          <div key={section.title} className="mb-6">
            {isOpen ? (
              <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-sidebar-foreground/50">
                {section.title}
              </p>
            ) : null}
            <div className="space-y-1">
              {section.items.map((item) => {
                const active = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 rounded-2xl px-3 py-3 transition-colors',
                      active
                        ? 'bg-sidebar-accent text-white'
                        : 'text-sidebar-foreground/75 hover:bg-sidebar-accent/70 hover:text-white',
                      !isOpen && 'justify-center px-2'
                    )}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    {isOpen ? (
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">{item.label}</p>
                        <p className="truncate text-xs text-sidebar-foreground/55">{item.description}</p>
                      </div>
                    ) : null}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-sidebar-border p-3">
        <div className={cn('rounded-2xl border border-sidebar-border/70 bg-sidebar-accent/50 p-3', !isOpen && 'flex justify-center')}>
          {isOpen ? (
            <>
              <p className="text-sm font-semibold text-white">{workerProfile.name}</p>
              <p className="text-xs text-sidebar-foreground/70">
                {workerProfile.platform} • {workerProfile.zone}
              </p>
            </>
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 font-semibold text-sky-200">
              RK
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          className={cn('mt-3 w-full justify-start gap-2 text-sidebar-foreground hover:bg-sidebar-accent hover:text-white', !isOpen && 'justify-center')}
          onClick={() => {
            localStorage.clear();
            router.push('/');
          }}
        >
          <LogOut className="h-4 w-4" />
          {isOpen ? 'Logout' : null}
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
