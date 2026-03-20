import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import { useSidebarStore } from '@/store/layoutStore';
import { cn } from '@/lib/utils';

interface LayoutWrapperProps {
  children: React.ReactNode;
  headerTitle?: string;
  headerSubtitle?: string;
  showSidebar?: boolean;
  showHeader?: boolean;
  className?: string;
  contentClassName?: string;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({
  children,
  headerTitle,
  headerSubtitle,
  showSidebar = true,
  showHeader = true,
  className,
  contentClassName,
}) => {
  const { isOpen } = useSidebarStore();

  return (
    <div className={cn('min-h-screen w-full bg-background', className)}>
      {showSidebar ? <Sidebar /> : null}
      <div className={cn('transition-all duration-300', showSidebar ? (isOpen ? 'ml-72' : 'ml-[84px]') : '')}>
        {showHeader ? <Header title={headerTitle} subtitle={headerSubtitle} /> : null}
        <main className={cn('min-h-[calc(100vh-64px)] bg-background', contentClassName)}>{children}</main>
      </div>
    </div>
  );
};

export default LayoutWrapper;
