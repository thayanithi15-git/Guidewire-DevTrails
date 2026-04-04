'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LogOut, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/store/layoutStore';
import { studentSections, adminSections, mentorSections } from './sidebarData';
import { appIdentity, workerProfile } from '@/data/gigshield-data';

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { isOpen } = useSidebarStore();
  
  const sections = useMemo(() => {
    if (pathname.startsWith('/admin')) return adminSections('/admin/dashboard');
    if (pathname.startsWith('/mentor')) return mentorSections('/mentor/dashboard');
    return studentSections('/student/dashboard');
  }, [pathname]);

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-50 flex h-full flex-col border-r border-white/5 bg-[#080808] text-sidebar-foreground',
        isOpen ? 'w-72' : 'w-[84px]'
      )}
    >
      <div className="flex items-center gap-3 border-b border-white/5 px-4 py-5 bg-[#080808]">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400">
          <ShieldCheck className="h-6 w-6" />
        </div>
        {isOpen ? (
          <div className="min-w-0">
            <p className="truncate text-lg font-bold text-white tracking-tight">{appIdentity.name}</p>
            <p className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">{appIdentity.tagline}</p>
          </div>
        ) : null}
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6 scrollbar-none bg-[#080808]">
        {sections.map((section) => (
          <div key={section.title} className="mb-8">
            {isOpen ? (
              <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">
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
                      'flex items-center gap-3 rounded-2xl px-3 py-3.5 transition-none',
                      active
                        ? 'bg-white/5 text-white shadow-sm'
                        : 'text-white/60 hover:text-white hover:bg-white/5',
                      !isOpen && 'justify-center px-0'
                    )}
                  >
                    <Icon className={cn("h-5 w-5 shrink-0 transition-none", active ? "text-sky-400" : "text-inherit")} />
                    {isOpen ? (
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold tracking-tight">{item.label}</p>
                        <p className="truncate text-[10px] font-medium text-white/30">{item.description}</p>
                      </div>
                    ) : null}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/5 p-4 bg-[#080808]">
        <div className={cn('rounded-[1.5rem] border border-white/5 bg-white/[0.03] p-4', !isOpen && 'flex justify-center p-2')}>
          {isOpen ? (
            <>
              <p className="text-sm font-bold text-white tracking-tight">{workerProfile.name}</p>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                {workerProfile.platform} • {workerProfile.zone}
              </p>
            </>
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 font-bold text-sky-400 text-xs">
              {workerProfile.name.split(' ').map(n => n[0]).join('')}
            </div>
          )}
        </div>
        <Button
          variant="ghost"
          className={cn('mt-4 w-full justify-start gap-3 text-white/50 hover:bg-white/5 hover:text-white rounded-2xl h-12 px-4 transition-none font-semibold', !isOpen && 'justify-center px-0')}
          onClick={() => {
            localStorage.clear();
            router.push('/');
          }}
        >
          <LogOut className="h-4 w-4" />
          {isOpen ? 'Sign Out' : null}
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
