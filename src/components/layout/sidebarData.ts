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

export const adminSections = (base: string): SidebarSection[] => singleRoleSections(base.replace("/admin/dashboard", "/student/dashboard"));
export const mentorSections = (base: string): SidebarSection[] => singleRoleSections(base.replace("/mentor/dashboard", "/student/dashboard"));
export const studentSections = (base: string): SidebarSection[] => singleRoleSections(base);
