import {
  Activity,
  BadgeIndianRupee,
  FileText,
  LayoutDashboard,
  Radar,
  ShieldAlert,
  ShieldCheck,
  Siren,
  SlidersHorizontal,
  User,
} from "lucide-react";

export interface SidebarItem {
  icon: any;
  label: string;
  href: string;
  description: string;
}

export interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

const singleRoleSections = (base: string): SidebarSection[] => [
  {
    title: "Worker Hub",
    items: [
      {
        icon: LayoutDashboard,
        label: "Dashboard",
        href: `${base}`,
        description: "Income protection overview",
      },
      {
        icon: User,
        label: "My Profile",
        href: `${base}/profile`,
        description: "Delivery partner profile",
      },
      {
        icon: ShieldCheck,
        label: "My Policy",
        href: `${base}/projects`,
        description: "Weekly coverage details",
      },
      {
        icon: Radar,
        label: "Risk & Premium",
        href: `${base}/tasks`,
        description: "AI risk and weekly pricing",
      },
      {
        icon: Siren,
        label: "Live Triggers",
        href: `${base}/internships`,
        description: "Parametric disruption engine",
      },
      {
        icon: FileText,
        label: "Claims",
        href: `${base}/surveys`,
        description: "Automated claim flow",
      },
      {
        icon: BadgeIndianRupee,
        label: "Payouts",
        href: `${base}/certifications`,
        description: "Recovered earnings and transfers",
      },
      {
        icon: ShieldAlert,
        label: "Fraud Monitor",
        href: `${base}/rankings`,
        description: "Anomaly detection and reviews",
      },
      {
        icon: Activity,
        label: "Analytics",
        href: `${base}/notifications`,
        description: "Portfolio, weather and loss insights",
      },
      {
        icon: SlidersHorizontal,
        label: "Settings",
        href: `${base}/settings`,
        description: "Theme, language and payment setup",
      },
    ],
  },
];

export const adminSections = (base: string): SidebarSection[] => [
  {
    title: "Admin Suite",
    items: [
      {
        icon: LayoutDashboard,
        label: "Admin Dashboard",
        href: `${base}`,
        description: "System health and metrics",
      },
      {
        icon: User,
        label: "User Control",
        href: `${base}/users`,
        description: "Manage system participants",
      },
      {
        icon: ShieldCheck,
        label: "Policy Engine",
        href: `${base}/policies`,
        description: "Global protection parameters",
      },
      {
        icon: Activity,
        label: "System Logs",
        href: `${base}/logs`,
        description: "Backend activity stream",
      },
    ],
  },
];

export const mentorSections = (base: string): SidebarSection[] => [
  {
    title: "Mentor Ops",
    items: [
      {
        icon: LayoutDashboard,
        label: "Mentor Desk",
        href: `${base}`,
        description: "Student progress overview",
      },
      {
        icon: User,
        label: "My Students",
        href: `${base}/students`,
        description: "Assigned partner track",
      },
      {
        icon: FileText,
        label: "Review Claims",
        href: `${base}/claims`,
        description: "Manual intervention queue",
      },
    ],
  },
];

export const studentSections = (base: string): SidebarSection[] => [
  {
    title: "Worker Hub",
    items: [
      {
        icon: LayoutDashboard,
        label: "Dashboard",
        href: `${base}`,
        description: "Income protection overview",
      },
      {
        icon: User,
        label: "My Profile",
        href: `${base}/profile`,
        description: "Delivery partner profile",
      },
      {
        icon: ShieldCheck,
        label: "My Policy",
        href: `${base}/projects`,
        description: "Weekly coverage details",
      },
      {
        icon: Radar,
        label: "Risk & Premium",
        href: `${base}/tasks`,
        description: "AI risk and weekly pricing",
      },
      {
        icon: Siren,
        label: "Live Triggers",
        href: `${base}/internships`,
        description: "Parametric disruption engine",
      },
      {
        icon: FileText,
        label: "Claims",
        href: `${base}/surveys`,
        description: "Automated claim flow",
      },
      {
        icon: BadgeIndianRupee,
        label: "Payouts",
        href: `${base}/certifications`,
        description: "Recovered earnings and transfers",
      },
      {
        icon: ShieldAlert,
        label: "Fraud Monitor",
        href: `${base}/rankings`,
        description: "Anomaly detection and reviews",
      },
      {
        icon: Activity,
        label: "Analytics",
        href: `${base}/notifications`,
        description: "Portfolio, weather and loss insights",
      },
      {
        icon: SlidersHorizontal,
        label: "Settings",
        href: `${base}/settings`,
        description: "Theme, language and payment setup",
      },
    ],
  },
];
