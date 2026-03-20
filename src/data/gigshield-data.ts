import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertTriangle,
  Banknote,
  CloudRain,
  Flame,
  Gauge,
  IndianRupee,
  MapPinned,
  RadioTower,
  ShieldAlert,
  ShieldCheck,
  Wallet,
  Wind,
  Zap,
} from "lucide-react";

export type MetricCard = {
  title: string;
  value: string;
  change: string;
  tone: "primary" | "success" | "warning" | "danger";
  icon: LucideIcon;
};

export type TrendPoint = {
  label: string;
  earnings: number;
  protected: number;
  payout?: number;
  risk?: number;
};

export type TriggerItem = {
  id: string;
  name: string;
  status: "Active" | "Watch" | "Resolved";
  severity: "High" | "Medium" | "Low";
  location: string;
  condition: string;
  payoutImpact: string;
  source: string;
  icon: LucideIcon;
};

export type ClaimItem = {
  date: string;
  trigger: string;
  hoursLost: string;
  amount: string;
  status: string;
  confidence: string;
};

export type PayoutItem = {
  date: string;
  amount: string;
  method: string;
  status: string;
  reference: string;
};

export type FraudAlert = {
  user: string;
  issue: string;
  confidence: string;
  status: string;
  zone: string;
};

export type ZoneRisk = {
  zone: string;
  risk: number;
  intensity: "Low" | "Medium" | "High";
  activeWorkers: number;
};

export const appIdentity = {
  name: "GigShield AI",
  tagline: "Weekly income protection for food delivery partners",
  team: "Guidewire DEVTrails 2026",
  persona: "Zomato / Swiggy food delivery partners",
};

export const workerProfile = {
  name: "Raju Kumar",
  role: "Food Delivery Partner",
  platform: "Swiggy + Zomato",
  city: "Bengaluru",
  zone: "HSR Layout",
  language: "English / Hindi / Kannada",
  vehicle: "Two-wheeler",
  workingShift: "Day + Evening",
  avgDailyEarnings: "₹820",
  weeklyEarnings: "₹5,740",
  upiId: "raju@upi",
  policyId: "GSAI-WK-2048",
  memberSince: "Jan 2026",
  trustScore: "96/100",
};

export const dashboardMetrics: MetricCard[] = [
  {
    title: "Weekly Earnings Protected",
    value: "₹5,600",
    change: "+12% this week",
    tone: "primary",
    icon: IndianRupee,
  },
  {
    title: "Current Risk Level",
    value: "Medium",
    change: "Rain probability 64%",
    tone: "warning",
    icon: Gauge,
  },
  {
    title: "Active Coverage Hours",
    value: "36 hrs",
    change: "10 hrs max loss cover",
    tone: "success",
    icon: ShieldCheck,
  },
  {
    title: "Next Premium Due",
    value: "₹49",
    change: "Due Sunday 11:30 PM",
    tone: "danger",
    icon: Wallet,
  },
];

export const earningsTrend: TrendPoint[] = [
  { label: "Week 1", earnings: 5100, protected: 4800, payout: 0, risk: 28 },
  { label: "Week 2", earnings: 5600, protected: 5200, payout: 180, risk: 42 },
  { label: "Week 3", earnings: 4980, protected: 5100, payout: 320, risk: 67 },
  { label: "Week 4", earnings: 5740, protected: 5600, payout: 0, risk: 39 },
  { label: "Week 5", earnings: 5890, protected: 5700, payout: 260, risk: 58 },
  { label: "Week 6", earnings: 6120, protected: 5900, payout: 140, risk: 44 },
];

export const weatherOutlook = [
  { day: "Today", condition: "Heavy rain watch", risk: "High", temperature: "28°C", rain: "21 mm" },
  { day: "Sat", condition: "Showers", risk: "Medium", temperature: "29°C", rain: "12 mm" },
  { day: "Sun", condition: "Humidity spike", risk: "Medium", temperature: "31°C", rain: "6 mm" },
  { day: "Mon", condition: "Clear rides", risk: "Low", temperature: "30°C", rain: "0 mm" },
];

export const liveAlerts = [
  "Heavy rain expected from 4:00 PM to 8:00 PM. Coverage active in HSR Layout.",
  "AQI has crossed 280 in Silk Board corridor. Partial payout rules may apply.",
  "Sunday premium recalculation scheduled based on next-week monsoon forecast.",
];

export const zoneRisks: ZoneRisk[] = [
  { zone: "HSR Layout", risk: 82, intensity: "High", activeWorkers: 140 },
  { zone: "Koramangala", risk: 68, intensity: "Medium", activeWorkers: 112 },
  { zone: "BTM Layout", risk: 61, intensity: "Medium", activeWorkers: 97 },
  { zone: "Indiranagar", risk: 42, intensity: "Low", activeWorkers: 88 },
  { zone: "Whitefield", risk: 57, intensity: "Medium", activeWorkers: 121 },
  { zone: "Electronic City", risk: 47, intensity: "Low", activeWorkers: 93 },
];

export const policySummary = {
  planName: "Monsoon Flex Weekly",
  weeklyPremium: "₹49",
  coveragePerHour: "₹80 / hour",
  maxHours: "10 hours / week",
  status: "Active",
  renewal: "March 24, 2026",
};

export const weeklyPolicyTable = [
  { week: "Mar 3 - Mar 9", premium: "₹42", status: "Paid", coverage: "8 hrs" },
  { week: "Mar 10 - Mar 16", premium: "₹45", status: "Paid", coverage: "10 hrs" },
  { week: "Mar 17 - Mar 23", premium: "₹49", status: "Active", coverage: "10 hrs" },
  { week: "Mar 24 - Mar 30", premium: "₹52", status: "Forecast", coverage: "10 hrs" },
];

export const coverageMix = [
  { name: "Covered", value: 36 },
  { name: "Unused", value: 14 },
];

export const premiumFactors = [
  { name: "Rainfall", value: 34 },
  { name: "Pollution", value: 22 },
  { name: "Traffic", value: 17 },
  { name: "Zone risk", value: 27 },
];

export const triggerFeed: TriggerItem[] = [
  {
    id: "TR-201",
    name: "Heavy Rain Detected",
    status: "Active",
    severity: "High",
    location: "HSR Layout",
    condition: "26 mm/hr rainfall",
    payoutImpact: "Auto claim eligible",
    source: "Weather API",
    icon: CloudRain,
  },
  {
    id: "TR-202",
    name: "AQI Spike",
    status: "Watch",
    severity: "Medium",
    location: "Silk Board",
    condition: "AQI 312",
    payoutImpact: "Partial payout review",
    source: "Pollution API",
    icon: Wind,
  },
  {
    id: "TR-203",
    name: "Flood Alert",
    status: "Resolved",
    severity: "High",
    location: "Koramangala 6th Block",
    condition: "BBMP drainage alert",
    payoutImpact: "Full payout completed",
    source: "Govt feed",
    icon: AlertTriangle,
  },
];

export const triggerTimeline = [
  { label: "09:00", risk: 22 },
  { label: "12:00", risk: 39 },
  { label: "15:00", risk: 64 },
  { label: "18:00", risk: 88 },
  { label: "21:00", risk: 51 },
];

export const apiStatus = [
  { name: "Weather API", status: "Live", latency: "220 ms" },
  { name: "Traffic API", status: "Mock live", latency: "110 ms" },
  { name: "Platform API", status: "Simulated", latency: "140 ms" },
  { name: "Payout Gateway", status: "Sandbox", latency: "310 ms" },
];

export const claimsTable: ClaimItem[] = [
  { date: "Mar 18", trigger: "Heavy rain", hoursLost: "4 hrs", amount: "₹320", status: "Approved", confidence: "96%" },
  { date: "Mar 15", trigger: "AQI > 300", hoursLost: "2 hrs", amount: "₹160", status: "Approved", confidence: "91%" },
  { date: "Mar 11", trigger: "Zone closure", hoursLost: "5 hrs", amount: "₹400", status: "Under review", confidence: "74%" },
];

export const payoutTimeline = [
  { label: "Mon", payout: 0 },
  { label: "Tue", payout: 160 },
  { label: "Wed", payout: 320 },
  { label: "Thu", payout: 0 },
  { label: "Fri", payout: 240 },
  { label: "Sat", payout: 180 },
];

export const payoutTransactions: PayoutItem[] = [
  { date: "Mar 18, 4:12 PM", amount: "₹320", method: "UPI", status: "Success", reference: "PAYOUT-8821" },
  { date: "Mar 15, 1:40 PM", amount: "₹160", method: "UPI", status: "Success", reference: "PAYOUT-8774" },
  { date: "Mar 08, 6:30 PM", amount: "₹280", method: "UPI", status: "Success", reference: "PAYOUT-8610" },
];

export const fraudAlerts: FraudAlert[] = [
  { user: "Worker #A102", issue: "GPS spoofing mismatch", confidence: "93%", status: "Blocked", zone: "BTM Layout" },
  { user: "Worker #B441", issue: "Duplicate rain claim", confidence: "88%", status: "Held", zone: "HSR Layout" },
  { user: "Worker #C237", issue: "No pre-event activity", confidence: "81%", status: "Review", zone: "Koramangala" },
];

export const fraudTrend = [
  { label: "Mon", normal: 18, anomalies: 3 },
  { label: "Tue", normal: 22, anomalies: 2 },
  { label: "Wed", normal: 31, anomalies: 6 },
  { label: "Thu", normal: 24, anomalies: 4 },
  { label: "Fri", normal: 20, anomalies: 3 },
];

export const analyticsKpis: MetricCard[] = [
  { title: "Total Policies", value: "4,280", change: "+184 this week", tone: "primary", icon: ShieldCheck },
  { title: "Claims Ratio", value: "22%", change: "Within target band", tone: "success", icon: Activity },
  { title: "Fraud Rate", value: "3.4%", change: "-0.6% vs last week", tone: "warning", icon: ShieldAlert },
  { title: "Avg Weekly Premium", value: "₹47", change: "AI-priced", tone: "danger", icon: Banknote },
];

export const claimsVsWeather = [
  { label: "Week 1", weather: 4, claims: 2 },
  { label: "Week 2", weather: 6, claims: 4 },
  { label: "Week 3", weather: 9, claims: 7 },
  { label: "Week 4", weather: 5, claims: 3 },
  { label: "Week 5", weather: 8, claims: 6 },
];

export const revenueVsPayout = [
  { label: "Jan", revenue: 184000, payout: 82000 },
  { label: "Feb", revenue: 201000, payout: 90400 },
  { label: "Mar", revenue: 224000, payout: 108000 },
  { label: "Apr", revenue: 246000, payout: 112000 },
];

export const riskDistribution = [
  { name: "Low", value: 28 },
  { name: "Medium", value: 46 },
  { name: "High", value: 26 },
];

export const settingsGroups = [
  {
    title: "Notifications",
    items: [
      { label: "WhatsApp disruption alerts", value: "Enabled" },
      { label: "Premium reminders", value: "Sunday 7:00 PM" },
      { label: "Claim decision updates", value: "Instant push + SMS" },
    ],
  },
  {
    title: "Payments",
    items: [
      { label: "Default payout rail", value: "UPI to raju@upi" },
      { label: "Weekly auto-debit", value: "Enabled" },
      { label: "Backup method", value: "Bank transfer" },
    ],
  },
  {
    title: "Language & Demo",
    items: [
      { label: "App language", value: "English" },
      { label: "Voice assist", value: "Hindi prompts enabled" },
      { label: "Mock API mode", value: "Enabled for demo" },
    ],
  },
];

export const landingHighlights = [
  {
    title: "AI weekly pricing",
    description: "Hyperlocal premium scoring using forecast, pollution, and zone disruption history.",
    icon: Gauge,
  },
  {
    title: "Zero-touch claims",
    description: "Once a parametric trigger fires, claims are initiated and validated automatically.",
    icon: Zap,
  },
  {
    title: "Fraud shield",
    description: "GPS anomaly checks, duplicate detection, and activity validation protect the pool.",
    icon: ShieldAlert,
  },
  {
    title: "Instant payouts",
    description: "Lost income reaches the rider through mock UPI payout simulation in seconds.",
    icon: Banknote,
  },
];

export const landingJourney = [
  { step: "01", title: "Onboard", description: "Worker profile, city zone, weekly income and payout setup." },
  { step: "02", title: "Score risk", description: "AI estimates risk and sets a transparent weekly premium." },
  { step: "03", title: "Monitor triggers", description: "Weather, AQI, flood and closure feeds are tracked live." },
  { step: "04", title: "Auto claim", description: "Claims are validated instantly when the disruption matches rules." },
  { step: "05", title: "Pay out", description: "Weekly income loss is transferred through simulated payout rails." },
];

export const heroStats = [
  { label: "Avg weekly premium", value: "₹49" },
  { label: "Hours protected", value: "10 / week" },
  { label: "Auto-approval confidence", value: "96%" },
];

export const riskSignals = [
  { label: "Rain trigger", value: "> 20 mm/hr", icon: CloudRain },
  { label: "AQI trigger", value: "> 300 AQI", icon: Wind },
  { label: "Heat trigger", value: "> 42°C", icon: Flame },
  { label: "Zone risk", value: "Live hyperlocal map", icon: MapPinned },
];

export const premiumExplainer = [
  "Base weekly premium starts from worker zone tier and active work window.",
  "Rain forecast, pollution spikes, and historic zone disruption add weighted risk points.",
  "Low-disruption streaks reduce premium to reward safe zones and clean usage.",
  "Final price remains capped inside the ₹30 to ₹80 weekly range.",
];

export const quickActions = [
  { title: "Create demo trigger", description: "Simulate a rainstorm and open a claim", icon: RadioTower },
  { title: "Review payout rail", description: "Check payout success and recovery timeline", icon: Banknote },
  { title: "Inspect policy cover", description: "See covered hours and weekly premium logic", icon: ShieldCheck },
];
