"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BadgeIndianRupee,
  BellRing,
  BrainCircuit,
  CloudRain,
  CreditCard,
  Languages,
  MapPinned,
  PlayCircle,
  ShieldAlert,
  Smartphone,
  UserCircle2,
  WalletCards,
  Waves,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AlertList,
  ComparisonBarChart,
  DonutChart,
  EarningsAreaChart,
  GaugeCard,
  MetricGrid,
  PageShell,
  QuickLinks,
  RiskLineChart,
  SectionCard,
  SimpleBadge,
  TableBlock,
  ThemeQuickToggle,
  WeatherCards,
  ZoneHeatGrid,
} from "@/components/gigshield-ui";
import {
  analyticsKpis,
  apiStatus,
  appIdentity,
  claimsTable,
  claimsVsWeather,
  coverageMix,
  dashboardMetrics,
  earningsTrend,
  fraudAlerts,
  fraudTrend,
  heroStats,
  landingHighlights,
  landingJourney,
  liveAlerts,
  policySummary,
  premiumExplainer,
  premiumFactors,
  payoutTimeline,
  payoutTransactions,
  quickActions,
  revenueVsPayout,
  riskDistribution,
  riskSignals,
  settingsGroups,
  triggerFeed,
  triggerTimeline,
  weatherOutlook,
  weeklyPolicyTable,
  workerProfile,
  zoneRisks,
} from "@/data/gigshield-data";

export function DashboardPageView() {
  return (
    <PageShell
      eyebrow="Worker dashboard"
      title="Income protection at a glance"
      description="Track weekly protected earnings, active risk, coverage hours, and live alerts for your operating zone."
      actions={<ThemeQuickToggle />}
    >
      <MetricGrid metrics={dashboardMetrics} />

      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <SectionCard title="Earnings vs protected earnings" description="Weekly trend across active insured weeks">
          <EarningsAreaChart data={earningsTrend} />
        </SectionCard>
        <SectionCard title="Weather risk widget" description="Today + next 3 days risk watch">
          <WeatherCards items={weatherOutlook} />
        </SectionCard>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1.2fr]">
        <SectionCard title="Live alerts" description="Parametric triggers mapped to your active delivery hours">
          <AlertList items={liveAlerts} />
        </SectionCard>
        <SectionCard title="Operating zone heatmap" description="Hyperlocal delivery zones with live risk intensity">
          <ZoneHeatGrid items={zoneRisks} />
        </SectionCard>
      </div>

      <SectionCard title="Quick actions" description="Most-used flows for demo and pitch walkthrough">
        <QuickLinks
          items={[
            { title: "Open policy cover", description: "Review active weekly plan and covered hours", href: "/student/dashboard/projects" },
            { title: "Inspect AI risk model", description: "See premium inputs and forecast drivers", href: "/student/dashboard/tasks" },
            { title: "Run trigger simulation", description: "Show auto claim creation and payout flow", href: "/student/dashboard/internships" },
          ]}
        />
      </SectionCard>
    </PageShell>
  );
}

export function ProfilePageView() {
  return (
    <PageShell
      eyebrow="My profile"
      title={workerProfile.name}
      description="Single-role worker profile built for food delivery partners with weekly protection, payout readiness, and zone-based coverage."
      actions={<Button className="gap-2 bg-sky-600 hover:bg-sky-700"><UserCircle2 className="h-4 w-4" /> Edit profile</Button>}
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title="Worker identity" description="Core account and partner details">
          <div className="grid gap-4 md:grid-cols-2">
            <ProfileField label="Platform" value={workerProfile.platform} />
            <ProfileField label="City" value={workerProfile.city} />
            <ProfileField label="Zone preference" value={workerProfile.zone} />
            <ProfileField label="Vehicle type" value={workerProfile.vehicle} />
            <ProfileField label="Work timing" value={workerProfile.workingShift} />
            <ProfileField label="Preferred payout" value={workerProfile.upiId} />
          </div>
        </SectionCard>
        <SectionCard title="Work details" description="Dummy DB-backed profile summary">
          <div className="space-y-4">
            <ProfileStat label="Avg daily earnings" value={workerProfile.avgDailyEarnings} />
            <ProfileStat label="Weekly earnings" value={workerProfile.weeklyEarnings} />
            <ProfileStat label="Trust score" value={workerProfile.trustScore} />
            <ProfileStat label="Member since" value={workerProfile.memberSince} />
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Edit-ready delivery profile" description="Fields modeled for onboarding, weekly pricing, and payout validation">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Primary app: Swiggy",
            "Backup app: Zomato",
            "Preferred shift: 9 AM - 8 PM",
            "UPI verified for instant payout",
            "Coverage city: Bengaluru",
            "Voice assist language: Hindi",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-border/70 bg-muted/30 px-4 py-3 text-sm text-foreground">
              {item}
            </div>
          ))}
        </div>
      </SectionCard>
    </PageShell>
  );
}

export function PolicyPageView() {
  return (
    <PageShell
      eyebrow="My policy"
      title={policySummary.planName}
      description="Weekly pricing aligned to gig-worker cashflow with hours-based income-loss cover only."
      actions={
        <>
          <Button variant="outline">Pause policy</Button>
          <Button className="bg-sky-600 hover:bg-sky-700">Upgrade plan</Button>
        </>
      }
    >
      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <SectionCard title="Active policy card" description={`${policySummary.status} • Renewal ${policySummary.renewal}`}>
          <div className="grid gap-4 md:grid-cols-2">
            <ProfileStat label="Weekly premium" value={policySummary.weeklyPremium} />
            <ProfileStat label="Coverage per hour" value={policySummary.coveragePerHour} />
            <ProfileStat label="Max cover" value={policySummary.maxHours} />
            <ProfileStat label="Policy ID" value={workerProfile.policyId} />
          </div>
        </SectionCard>
        <SectionCard title="Coverage breakdown" description="Hours covered vs uncovered this cycle">
          <DonutChart data={coverageMix} colors={["#22c55e", "#cbd5e1"]} />
        </SectionCard>
      </div>

      <SectionCard title="Weekly plan table" description="Premium, status, and coverage by week">
        <TableBlock
          columns={["Week", "Premium", "Status", "Coverage"]}
          rows={weeklyPolicyTable.map((row) => [row.week, row.premium, row.status, row.coverage])}
        />
      </SectionCard>
    </PageShell>
  );
}

export function RiskPremiumPageView() {
  return (
    <PageShell
      eyebrow="AI core"
      title="Risk scoring and dynamic premium"
      description="This module explains why the weekly premium moved and how forecast, zone risk, and disruption frequency affect pricing."
      actions={<Button className="gap-2 bg-sky-600 hover:bg-sky-700"><BrainCircuit className="h-4 w-4" /> Recalculate premium</Button>}
    >
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <SectionCard title="Risk score meter" description="Current score based on location, weather, and active delivery hours">
          <GaugeCard value={67} />
        </SectionCard>
        <SectionCard title="Feature impact chart" description="Key variables influencing this week's premium">
          <ComparisonBarChart
            data={premiumFactors.map((factor) => ({ label: factor.name, impact: factor.value }))}
            bars={[{ key: "impact", color: "#0ea5e9", name: "Impact" }]}
          />
        </SectionCard>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title="Historical risk trend" description="AI risk over recent trigger windows">
          <RiskLineChart data={earningsTrend} lines={[{ key: "risk", color: "#f59e0b", name: "Risk score" }]} />
        </SectionCard>
        <SectionCard title="AI explanation" description="Why the weekly premium is set at ₹49">
          <div className="rounded-2xl border border-sky-500/20 bg-sky-500/10 p-4 text-sm text-foreground">
            Premium increased due to expected rainfall in HSR Layout, elevated pollution in adjacent corridors, and a recent disruption streak across the zone.
          </div>
          <div className="mt-4 space-y-3">
            {premiumExplainer.map((item) => (
              <div key={item} className="rounded-2xl border border-border/70 bg-muted/30 p-4 text-sm text-foreground">
                {item}
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </PageShell>
  );
}

function ProfileField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-muted/30 p-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-1 font-semibold text-foreground">{value}</p>
    </div>
  );
}

function ProfileStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-muted/30 p-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-1 text-xl font-semibold text-foreground">{value}</p>
    </div>
  );
}

export function LiveTriggersPageView() {
  return (
    <PageShell
      eyebrow="Parametric engine"
      title="Live trigger monitoring"
      description="Monitor weather, AQI, flood, and closure conditions that can automatically initiate claims for income loss."
      actions={<Button className="gap-2 bg-sky-600 hover:bg-sky-700"><PlayCircle className="h-4 w-4" /> Run manual trigger</Button>}
    >
      <div className="grid gap-4 xl:grid-cols-3">
        {triggerFeed.map((item) => {
          const Icon = item.icon;
          return (
            <SectionCard key={item.id} title={item.name} description={`${item.location} • ${item.source}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex gap-2">
                  <SimpleBadge value={item.status} tone={item.status === "Active" ? "danger" : item.status === "Watch" ? "warning" : "success"} />
                  <SimpleBadge value={item.severity} tone={item.severity === "High" ? "danger" : item.severity === "Medium" ? "warning" : "success"} />
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p>{item.condition}</p>
                <p>{item.payoutImpact}</p>
              </div>
            </SectionCard>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard title="Trigger timeline" description="Risk curve through the day">
          <RiskLineChart data={triggerTimeline} lines={[{ key: "risk", color: "#ef4444", name: "Trigger risk" }]} />
        </SectionCard>
        <SectionCard title="API status panel" description="All integrations are mocked or sandboxed for demo">
          <div className="space-y-3">
            {apiStatus.map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-2xl border border-border/70 bg-muted/30 p-4">
                <div>
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.latency}</p>
                </div>
                <SimpleBadge value={item.status} tone="success" />
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </PageShell>
  );
}

export function ClaimsPageView() {
  return (
    <PageShell
      eyebrow="Zero-touch claims"
      title="Claims automation"
      description="A disruption trigger flows through validation, auto approval, and payout initiation with fraud scoring and location checks."
      actions={<Button className="bg-sky-600 hover:bg-sky-700">Raise manual backup claim</Button>}
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title="Claims table" description="Recent automated claims from disruption events">
          <TableBlock
            columns={["Date", "Trigger", "Hours lost", "Amount", "Status", "Confidence"]}
            rows={claimsTable.map((row) => [row.date, row.trigger, row.hoursLost, row.amount, row.status, row.confidence])}
          />
        </SectionCard>
        <SectionCard title="Claim workflow" description="Trigger → AI validation → approval → payout">
          <div className="space-y-4">
            {[
              "1. Real-time trigger matched against covered worker zone.",
              "2. Delivery activity in the pre-event window is validated.",
              "3. Fraud confidence score stays below auto-block threshold.",
              "4. Claim is approved instantly and payout moves to sandbox rail.",
            ].map((step) => (
              <div key={step} className="rounded-2xl border border-border/70 bg-muted/30 p-4 text-sm text-foreground">
                {step}
              </div>
            ))}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-foreground">
              Claim auto-approved with 96% confidence because worker activity and zone disruption matched the parametric rule.
            </div>
          </div>
        </SectionCard>
      </div>
    </PageShell>
  );
}

export function PayoutsPageView() {
  return (
    <PageShell
      eyebrow="Recovered earnings"
      title="Instant payout simulation"
      description="Show how income loss is recovered through weekly payouts into UPI after AI approval."
      actions={<Button className="gap-2 bg-sky-600 hover:bg-sky-700"><WalletCards className="h-4 w-4" /> Retry payout simulation</Button>}
    >
      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <SectionCard title="Recovered earnings" description="Weekly payout trend">
          <MetricGrid
            metrics={[
              {
                title: "Total earnings recovered",
                value: "₹1,240",
                change: "Across 4 automated payouts",
                tone: "success",
                icon: BadgeIndianRupee,
              },
              {
                title: "Fastest payout",
                value: "43 sec",
                change: "Trigger to sandbox transfer",
                tone: "primary",
                icon: Zap,
              },
            ]}
          />
          <div className="mt-6">
            <ComparisonBarChart data={payoutTimeline} bars={[{ key: "payout", color: "#22c55e", name: "Payout" }]} />
          </div>
        </SectionCard>
        <SectionCard title="Instant credit demo" description="UPI sandbox payout event">
          <div className="rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/15 to-emerald-400/5 p-6">
            <p className="text-sm text-muted-foreground">Latest simulated payout</p>
            <h3 className="mt-2 text-4xl font-bold text-foreground">₹320 credited</h3>
            <p className="mt-2 text-sm text-foreground">Transferred via UPI to <span className="font-semibold">{workerProfile.upiId}</span></p>
          </div>
          <div className="mt-5 space-y-3">
            {payoutTransactions.slice(0, 2).map((item) => (
              <div key={item.reference} className="rounded-2xl border border-border/70 bg-muted/30 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-foreground">{item.amount}</p>
                  <SimpleBadge value={item.status} tone="success" />
                </div>
                <p className="text-sm text-muted-foreground">{item.date} • {item.method}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Transaction table" description="Dummy payout history connected to neat mock data">
        <TableBlock
          columns={["Date", "Amount", "Method", "Status", "Reference"]}
          rows={payoutTransactions.map((row) => [row.date, row.amount, row.method, row.status, row.reference])}
        />
      </SectionCard>
    </PageShell>
  );
}

export function FraudMonitorPageView() {
  return (
    <PageShell
      eyebrow="Fraud monitor"
      title="AI anomaly detection"
      description="Advanced fraud controls for GPS spoofing, duplicate claims, and missing pre-event activity."
      actions={<Button className="gap-2 bg-sky-600 hover:bg-sky-700"><ShieldAlert className="h-4 w-4" /> Run anomaly scan</Button>}
    >
      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <SectionCard title="Fraud alerts table" description="High-priority cases requiring review">
          <TableBlock
            columns={["User", "Issue", "Confidence", "Status", "Zone"]}
            rows={fraudAlerts.map((row) => [row.user, row.issue, row.confidence, row.status, row.zone])}
          />
        </SectionCard>
        <SectionCard title="Anomaly trend" description="Normal activity vs suspicious spikes">
          <ComparisonBarChart
            data={fraudTrend}
            bars={[
              { key: "normal", color: "#0ea5e9", name: "Normal" },
              { key: "anomalies", color: "#ef4444", name: "Anomalies" },
            ]}
          />
        </SectionCard>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <SectionCard title="Suspicious zone map" description="Mock zone cards replacing GPS heatmap for demo">
          <ZoneHeatGrid items={zoneRisks.slice(0, 3)} />
        </SectionCard>
        <SectionCard title="AI model output" description="Key fraud controls enabled for demo">
          <div className="space-y-3">
            {[
              "Duplicate claim detection checks the same worker, zone, and trigger timestamp window.",
              "GPS spoofing is flagged by cross-validating location and platform activity patterns.",
              "Workers without pre-event delivery activity are pushed into manual review.",
              "Circuit-breaker logic can pause high-volume anomalies before payout release.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-border/70 bg-muted/30 p-4 text-sm text-foreground">
                {item}
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </PageShell>
  );
}

export function AnalyticsPageView() {
  return (
    <PageShell
      eyebrow="Portfolio analytics"
      title="Business and disruption analytics"
      description="Relevant insurer and product metrics, next-week forecasting, claims ratios, and premium performance."
      actions={<Button className="bg-sky-600 hover:bg-sky-700">Export demo summary</Button>}
    >
      <MetricGrid metrics={analyticsKpis} />

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <SectionCard title="Claims vs weather events" description="Correlation of disruption volume and claims">
          <ComparisonBarChart
            data={claimsVsWeather}
            bars={[
              { key: "weather", color: "#0ea5e9", name: "Weather events" },
              { key: "claims", color: "#22c55e", name: "Claims" },
            ]}
          />
        </SectionCard>
        <SectionCard title="Revenue vs payouts" description="Weekly pricing viability view">
          <ComparisonBarChart
            data={revenueVsPayout}
            bars={[
              { key: "revenue", color: "#0ea5e9", name: "Revenue" },
              { key: "payout", color: "#ef4444", name: "Payout" },
            ]}
          />
        </SectionCard>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <SectionCard title="Risk distribution" description="Policy base by risk tier">
          <DonutChart data={riskDistribution} colors={["#22c55e", "#f59e0b", "#ef4444"]} />
        </SectionCard>
        <SectionCard title="Next week forecast" description="Predictive outlook for the upcoming cycle">
          <div className="grid gap-4 md:grid-cols-2">
            <ForecastTile icon={CloudRain} label="Rain risk" value="72%" />
            <ForecastTile icon={Waves} label="Flood watch" value="31%" />
            <ForecastTile icon={BellRing} label="Zone closure probability" value="18%" />
            <ForecastTile icon={MapPinned} label="Highest risk zone" value="HSR Layout" />
          </div>
        </SectionCard>
      </div>
    </PageShell>
  );
}

export function SettingsPageView() {
  return (
    <PageShell
      eyebrow="Settings"
      title="Preferences and demo configuration"
      description="Theme toggle, payment setup, language selection, and mock API configuration for the hackathon demo."
      actions={<ThemeQuickToggle />}
    >
      <div className="grid gap-6 xl:grid-cols-3">
        <SectionCard title="Profile shortcuts" description="Quick access to worker-facing controls">
          <QuickLinks
            items={[
              { title: "Profile", description: "Update worker and payout details", href: "/student/dashboard/profile" },
              { title: "Policy", description: "Review plan and hours covered", href: "/student/dashboard/projects" },
              { title: "Analytics", description: "Open portfolio dashboard", href: "/student/dashboard/notifications" },
            ]}
          />
        </SectionCard>
        <SectionCard title="Theme and accessibility" description="Responsive UI configuration">
          <div className="space-y-3">
            <SettingRow icon={Smartphone} label="Responsive layout" value="Optimized for mobile + desktop" />
            <SettingRow icon={Languages} label="Language" value={workerProfile.language} />
            <SettingRow icon={CreditCard} label="Payout default" value={workerProfile.upiId} />
          </div>
        </SectionCard>
        <SectionCard title="Demo flow shortcuts" description="Best actions for walkthrough video">
          <div className="space-y-3">
            {quickActions.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border/70 bg-muted/30 p-4">
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {settingsGroups.map((group) => (
          <SectionCard key={group.title} title={group.title}>
            <div className="space-y-3">
              {group.items.map((item) => (
                <div key={item.label} className="rounded-2xl border border-border/70 bg-muted/30 p-4">
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        ))}
      </div>
    </PageShell>
  );
}

export function LandingPageView() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <div>
            <p className="text-lg font-semibold">{appIdentity.name}</p>
            <p className="text-xs text-muted-foreground">{appIdentity.team}</p>
          </div>
          <div className="flex items-center gap-3">
            <ThemeQuickToggle />
            <Link href="/auth/access">
              <Button className="bg-sky-600 hover:bg-sky-700">Sign in</Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.16),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.18),transparent_36%)]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:px-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-center">
            <div className="relative">
              <motion.span initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="inline-flex rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">
                AI-powered parametric insurance
              </motion.span>
              <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
                Weekly income protection for India’s food delivery partners.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-6 max-w-2xl text-lg text-muted-foreground">
                GigShield AI helps Swiggy and Zomato riders recover lost earnings from heavy rain, AQI spikes, floods, and sudden zone closures with automated triggers, AI fraud detection, and instant payout simulation.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-8 flex flex-wrap gap-3">
                <Link href="/auth/access">
                  <Button size="lg" className="bg-sky-600 hover:bg-sky-700">Launch demo</Button>
                </Link>
                <Link href="/student/dashboard">
                  <Button size="lg" variant="outline">Open dashboard</Button>
                </Link>
              </motion.div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroStats.map((item, index) => (
                  <motion.div key={item.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.06 }} className="rounded-3xl border border-border/70 bg-card/80 p-5 shadow-sm backdrop-blur">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="mt-2 text-2xl font-bold">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="rounded-[2rem] border border-border/70 bg-card p-6 shadow-xl">
              <div className="rounded-[1.5rem] border border-sky-500/15 bg-gradient-to-br from-sky-500/10 to-emerald-500/10 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Live rider card</p>
                    <h2 className="text-2xl font-bold">{workerProfile.name}</h2>
                  </div>
                  <SimpleBadge value="Coverage active" tone="success" />
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <ProfileStat label="Zone" value={workerProfile.zone} />
                  <ProfileStat label="Weekly premium" value={policySummary.weeklyPremium} />
                  <ProfileStat label="Coverage per hour" value={policySummary.coveragePerHour} />
                  <ProfileStat label="Today’s trigger" value="Heavy rain watch" />
                </div>
                <div className="mt-6 grid gap-3">
                  {riskSignals.map((signal) => {
                    const Icon = signal.icon;
                    return (
                      <div key={signal.label} className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/70 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-300">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{signal.label}</p>
                            <p className="text-sm text-muted-foreground">{signal.value}</p>
                          </div>
                        </div>
                        <BadgeIndianRupee className="h-4 w-4 text-muted-foreground" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {landingHighlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="border-y border-border/70 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">How it works</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">From trigger detection to payout in one clean flow.</h2>
            </div>
            <div className="grid gap-4 xl:grid-cols-5">
              {landingJourney.map((step, index) => (
                <motion.div key={step.step} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-3xl border border-border/70 bg-card p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">{step.step}</p>
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="rounded-[2rem] border border-border/70 bg-card p-8 shadow-sm">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">Hackathon-ready demo</p>
                <h2 className="mt-3 text-4xl font-bold tracking-tight">Built for one clear persona: Swiggy and Zomato riders.</h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">
                  Loss of income only. Weekly pricing only. Automated triggers, fraud checks, and payout simulation exactly aligned with the problem statement.
                </p>
              </div>
              <Link href="/auth/access">
                <Button size="lg" className="bg-sky-600 hover:bg-sky-700">Continue to sign in</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export function SignInPageView() {
  return (
    <div className="grid min-h-screen bg-background lg:grid-cols-2">
      <div className="relative hidden overflow-hidden bg-slate-950 p-10 text-white lg:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.25),transparent_32%)]" />
        <div className="relative flex h-full flex-col justify-between">
          <div>
            <p className="text-lg font-semibold">{appIdentity.name}</p>
            <p className="text-sm text-white/65">{appIdentity.tagline}</p>
          </div>
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Demo scenario</p>
              <h1 className="mt-4 text-5xl font-bold leading-tight">
                Protect riders from rain, AQI spikes, floods, and sudden zone closures.
              </h1>
            </div>
            <div className="grid gap-4">
              {[
                "Weekly pricing aligned with rider earnings cycle",
                "AI-led premium explanation and fraud validation",
                "Automatic claim initiation and UPI payout simulation",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center px-4 py-10 md:px-8">
        <div className="w-full max-w-md rounded-[2rem] border border-border/70 bg-card p-8 shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">Sample sign in</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Welcome back, delivery partner</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            This demo login leads directly into the single-role GigShield AI workspace.
          </p>

          <div className="mt-8 space-y-4">
            <InputShell label="Phone number / email" value="raju.partner@demo.in" />
            <InputShell label="Password" value="••••••••••••" />
          </div>

          <div className="mt-6 grid gap-3">
            <Link href="/student/dashboard">
              <Button className="h-12 w-full bg-sky-600 text-base hover:bg-sky-700">Continue to dashboard</Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="h-12 w-full text-base">Back to landing page</Button>
            </Link>
          </div>

          <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-foreground">
            Demo account uses mock database records, weekly pricing logic, and sandbox payout data only.
          </div>
        </div>
      </div>
    </div>
  );
}

function ForecastTile({ icon: Icon, label, value }: { icon: typeof CloudRain; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-muted/30 p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-300">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-4 text-sm text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-bold text-foreground">{value}</p>
    </div>
  );
}

function SettingRow({ icon: Icon, label, value }: { icon: typeof Smartphone; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-border/70 bg-muted/30 p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-300">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="font-semibold text-foreground">{label}</p>
        <p className="text-sm text-muted-foreground">{value}</p>
      </div>
    </div>
  );
}

function InputShell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium text-foreground">{label}</p>
      <div className="rounded-2xl border border-border/70 bg-muted/30 px-4 py-3 text-foreground">{value}</div>
    </div>
  );
}
