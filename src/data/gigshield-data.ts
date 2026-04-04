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
  name: "Devspirits",
  tagline: "AI-Powered Parametric Income Protection",
  team: "Guidewire DEVTrails 2026",
  persona: "Gig economy delivery partners (Swiggy, Zomato, etc.)",
};

export const workerProfile = {
  name: "Raju Kumar",
  role: "Delivery Professional",
  platform: "Swiggy + Zomato",
  city: "Bengaluru",
  zone: "HSR Layout",
  language: "English / Hindi / Kannada",
  vehicle: "Two-wheeler",
  workingShift: "Day + Evening",
  avgDailyEarnings: "₹820",
  weeklyEarnings: "₹5,740",
  upiId: "raju@upi",
  policyId: "DS-WK-2048",
  memberSince: "Jan 2026",
  trustScore: "96/100",
  platformLinked: {
    swiggy: true,
    zomato: false,
    zepto: false,
  }
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
    title: "AI-powered weekly pricing",
    description: "Dynamic premiums as low as ₹30/week based on hyperlocal weather, AQI, zone disruption history, and your working hours.",
    icon: Gauge,
  },
  {
    title: "Zero-touch automated claims",
    description: "Parametric triggers detect disruptions and initiate claims instantly—no documentation needed. Get paid within seconds.",
    icon: Zap,
  },
  {
    title: "Intelligent fraud detection",
    description: "AI detects GPS spoofing, duplicate claims, and anomalous patterns to keep premiums low for honest workers.",
    icon: ShieldAlert,
  },
  {
    title: "Instant UPI payouts",
    description: "Lost income goes directly to your UPI in seconds using simulated payment rails aligned with your earnings cycle.",
    icon: Banknote,
  },
  {
    title: "Income protection only",
    description: "Insure lost wages from uncontrollable events—extreme weather, AQI spikes, floods, zone closures—not vehicle repairs.",
    icon: ShieldCheck,
  },
  {
    title: "Hyper-local risk mapping",
    description: "Coverage tailored to your delivery zone with real-time weather feeds, traffic data, and disruption history.",
    icon: MapPinned,
  },
];

export const landingJourney = [
  { step: "01", title: "Quick onboarding", description: "Phone, UPI, zone, and platform details—done in 2 minutes." },
  { step: "02", title: "AI risk assessment", description: "AI scores your zone and work pattern to set a transparent weekly premium." },
  { step: "03", title: "Live monitoring", description: "Real-time feeds track weather, AQI, floods, traffic, and zone closures." },
  { step: "04", title: "Auto-trigger claims", description: "Disruption detected → Claim initiated → AI fraud checks in real-time." },
  { step: "05", title: "Instant income recovery", description: "Lost wages hit your UPI in seconds. No waiting, no paperwork." },
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

// New landing page sections
export const disruptions = [
  {
    icon: CloudRain,
    title: "Heavy Rain & Floods",
    description: "Rain exceeding 20mm/hr or 3+ hours of continuous rain triggers automatic income protection.",
    examples: ["Monsoon season delivery halts", "Waterlogged zones", "Gig platforms reducing orders by 50%+"],
  },
  {
    icon: Wind,
    title: "Severe Pollution & Heat",
    description: "AQI spikes above 300 or extreme heat above 42°C qualify for coverage when working hours drop.",
    examples: ["Smog-induced delivery reduction", "Summer heat waves", "App orders decline during poor air quality"],
  },
  {
    icon: AlertTriangle,
    title: "Zone Closures & Curfews",
    description: "Unexpected market closures, local strikes, or unplanned curfews blocking delivery zones.",
    examples: ["Municipal restrictions", "Sudden strike declarations", "Event-based zone lockdowns"],
  },
  {
    icon: RadioTower,
    title: "Platform App Crashes",
    description: "Multi-hour outages of delivery apps causing loss of order access and instant earnings.",
    examples: ["Zomato/Swiggy app down", "Payment gateway failures", "Order matching issues"],
  },
];

export const landingFaq = [
  {
    q: "Is this health or accident insurance?",
    a: "No. GigShield protects your lost income during disruptions—not medical bills or vehicle repairs. This is parametric income protection designed specifically for gig workers.",
  },
  {
    q: "How often will I pay for coverage?",
    a: "Weekly. Your premium aligns with your earnings cycle—typically ₹30–₹80 per week, auto-deducted on Sunday evening.",
  },
  {
    q: "What triggers a claim automatically?",
    a: "Real-time parametric feeds: heavy rain (>20mm/hr), AQI >300, floods, zone closures, or app crashes verified against your active delivery hours.",
  },
  {
    q: "Will my premium increase if I make a claim?",
    a: "No. Verified claims don't affect your premium. Our AI focuses on fraud detection, not penalizing honest claims.",
  },
  {
    q: "How fast do I get paid?",
    a: "Instantly. Once a claim is auto-approved (typically within 30 seconds), your payout hits your UPI in seconds.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Weekly policies mean you can stop coverage after the current week ends—no long-term lock-in.",
  },
  {
    q: "Does this work if I deliver for multiple apps?",
    a: "Yes. Our AI models multi-app delivery patterns and calculates premiums considering your total risk across all platforms.",
  },
  {
    q: "What if there's a dispute?",
    a: "Our AI is transparent. You can inspect the exact parameters that triggered your claim in the dashboard and appeal if needed.",
  },
];

export const testimonials = [
  {
    name: "Raju Kumar",
    role: "Swiggy Delivery Partner",
    city: "Bengaluru",
    quote: "During monsoon, I lost ₹2,000+ a week. Now with GigShield, at least the heavy rain days are covered. The weekly pricing fits my budget perfectly.",
    platform: "Swiggy",
  },
  {
    name: "Priya Sharma",
    role: "Zomato & Amazon Flex",
    city: "Mumbai",
    quote: "The automatic claim process is a game-changer. No forms, no waiting. My claim hit my UPI in seconds when the AQI spiked.",
    platform: "Multi-app",
  },
  {
    name: "Vikram Patel",
    role: "Food Delivery Partner",
    city: "Delhi NCR",
    quote: "Finally, someone built insurance for us—gig workers. The weekly pricing and no health-related restrictions make it actually useful.",
    platform: "Zomato",
  },
];

export const pricingTiers = [
  {
    name: "Zone Tier 1",
    description: "Low historical disruption",
    startingPrice: "₹30",
    features: [
      "Up to 8 hours weekly coverage",
      "Rain & pollution triggers",
      "Basic fraud detection",
      "UPI payouts",
    ],
  },
  {
    name: "Zone Tier 2",
    description: "Medium risk zone",
    startingPrice: "₹49",
    features: [
      "Up to 10 hours weekly coverage",
      "All disruption triggers",
      "Advanced AI fraud checks",
      "Instant UPI payouts",
      "Zone heatmap access",
    ],
    highlighted: true,
  },
  {
    name: "Zone Tier 3",
    description: "High disruption risk",
    startingPrice: "₹65",
    features: [
      "Up to 12 hours weekly coverage",
      "All triggers + app crash protection",
      "GPS anomaly detection",
      "Priority claim review",
      "Zone heatmap + predictive alerts",
    ],
  },
];

export const trustIndicators = [
  { metric: "Active Delivery Partners", value: "2,840+", subtext: "across Bengaluru, Mumbai, Delhi" },
  { metric: "Total Claims Approved", value: "12,400+", subtext: "worth ₹92 lakhs paid in 8 weeks" },
  { metric: "AI Fraud Accuracy", value: "96.2%", subtext: "anomalies caught pre-payout" },
  { metric: "Avg Claim Decision", value: "<30 seconds", subtext: "fully automated, parametric" },
];

export const integrations = [
  { name: "Weather APIs", type: "Real-time rain, AQI, heat tracking" },
  { name: "Traffic Data", type: "Zone-level delivery performance" },
  { name: "Platform APIs", type: "Swiggy, Zomato, Amazon, Zepto simulated" },
  { name: "Payment Stack", type: "UPI, bank transfers, mobile wallets" },
];

export const ctaButtons = [
  {
    primary: "Launch Demo",
    href: "/auth/access",
    description: "Walk through a complete claim scenario in 3 mins",
  },
  {
    secondary: "View Dashboard",
    href: "/student/dashboard",
    description: "See worker dashboard & admin analytics",
  },
];
