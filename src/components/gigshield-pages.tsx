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
  ctaButtons,
  dashboardMetrics,
  disruptions,
  earningsTrend,
  fraudAlerts,
  fraudTrend,
  heroStats,
  integrations,
  landingFaq,
  landingHighlights,
  landingJourney,
  liveAlerts,
  pricingTiers,
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
  testimonials,
  triggerFeed,
  triggerTimeline,
  trustIndicators,
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
      actions={<Button className="gap-2 bg-foreground text-background hover:bg-foreground/90 rounded-full shadow-sm"><UserCircle2 className="h-4 w-4" /> Edit profile</Button>}
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
            <div key={item} className="rounded-2xl border border-border/60 bg-muted/40 px-4 py-3.5 text-sm font-medium text-foreground hover:border-foreground/20 transition-colors">
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
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-full">Pause policy</Button>
          <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full shadow-sm">Upgrade plan</Button>
        </div>
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
          <DonutChart data={coverageMix} colors={["var(--foreground)", "var(--muted)"]} />
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
      actions={<Button className="gap-2 bg-foreground text-background hover:bg-foreground/90 rounded-full shadow-sm"><BrainCircuit className="h-4 w-4" /> Recalculate premium</Button>}
    >
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <SectionCard title="Risk score meter" description="Current score based on location, weather, and active delivery hours">
          <GaugeCard value={67} />
        </SectionCard>
        <SectionCard title="Feature impact chart" description="Key variables influencing this week's premium">
          <ComparisonBarChart
            data={premiumFactors.map((factor) => ({ label: factor.name, impact: factor.value }))}
            bars={[{ key: "impact", color: "var(--foreground)", name: "Impact" }]}
          />
        </SectionCard>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title="Historical risk trend" description="AI risk over recent trigger windows">
          <RiskLineChart data={earningsTrend} lines={[{ key: "risk", color: "#f59e0b", name: "Risk score" }]} />
        </SectionCard>
        <SectionCard title="AI explanation" description="Why the weekly premium is set at ₹49">
          <div className="rounded-2xl border border-foreground/10 bg-muted/50 p-5 text-sm font-medium leading-relaxed text-foreground shadow-sm">
            Premium increased due to expected rainfall in HSR Layout, elevated pollution in adjacent corridors, and a recent disruption streak across the zone.
          </div>
          <div className="mt-4 space-y-3">
            {premiumExplainer.map((item) => (
              <div key={item} className="rounded-2xl border border-border/60 bg-card p-4 text-sm text-muted-foreground hover:border-foreground/20 transition-colors">
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
    <div className="rounded-2xl border border-border/60 bg-muted/20 p-4 hover:bg-muted/40 transition-colors">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="mt-1 font-semibold text-foreground tracking-tight">{value}</p>
    </div>
  );
}

function ProfileStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-sm hover:border-foreground/20 transition-all">
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="mt-1.5 text-2xl font-semibold tracking-tight text-foreground">{value}</p>
    </div>
  );
}

export function LiveTriggersPageView() {
  return (
    <PageShell
      eyebrow="Parametric engine"
      title="Live trigger monitoring"
      description="Monitor weather, AQI, flood, and closure conditions that can automatically initiate claims for income loss."
      actions={<Button className="gap-2 bg-foreground text-background hover:bg-foreground/90 rounded-full shadow-sm"><PlayCircle className="h-4 w-4" /> Run manual trigger</Button>}
    >
      <div className="grid gap-4 xl:grid-cols-3">
        {triggerFeed.map((item) => {
          const Icon = item.icon;
          return (
            <SectionCard key={item.id} title={item.name} description={`${item.location} • ${item.source}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-muted text-foreground shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex gap-2">
                  <SimpleBadge value={item.status} tone={item.status === "Active" ? "danger" : item.status === "Watch" ? "warning" : "success"} />
                  <SimpleBadge value={item.severity} tone={item.severity === "High" ? "danger" : item.severity === "Medium" ? "warning" : "success"} />
                </div>
              </div>
              <div className="mt-5 space-y-2 text-sm font-medium text-muted-foreground">
                <p className="text-foreground/90">{item.condition}</p>
                <p>{item.payoutImpact}</p>
              </div>
            </SectionCard>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard title="Trigger timeline" description="Risk curve through the day">
          <RiskLineChart data={triggerTimeline} lines={[{ key: "risk", color: "var(--foreground)", name: "Trigger risk" }]} />
        </SectionCard>
        <SectionCard title="API status panel" description="All integrations are mocked or sandboxed for demo">
          <div className="space-y-3">
            {apiStatus.map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-2xl border border-border/60 bg-card p-4 hover:bg-muted/30 transition-colors">
                <div>
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="text-sm font-mono text-muted-foreground mt-0.5">{item.latency}</p>
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
      actions={<Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full shadow-sm">Raise manual claim</Button>}
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
              "Real-time trigger matched against covered worker zone.",
              "Delivery activity in the pre-event window is validated.",
              "Fraud confidence score stays below auto-block threshold.",
              "Claim is approved instantly and payout moves to sandbox rail.",
            ].map((step, i) => (
              <div key={step} className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-4 hover:border-foreground/20 transition-all">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-foreground">
                  {i + 1}
                </div>
                <p className="text-sm font-medium text-muted-foreground pt-0.5">{step}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 text-sm font-medium leading-relaxed text-emerald-700 dark:text-emerald-400">
              <span className="font-bold">System log:</span> Claim auto-approved with 96% confidence because worker activity and zone disruption matched the parametric rule.
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
      actions={<Button className="gap-2 bg-foreground text-background hover:bg-foreground/90 rounded-full shadow-sm"><WalletCards className="h-4 w-4" /> Retry payout simulation</Button>}
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
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8 shadow-sm">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl" />
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Latest simulated payout</p>
            <h3 className="mt-2 text-5xl font-bold tracking-tight text-foreground">₹320 credited</h3>
            <p className="mt-3 text-sm font-medium text-muted-foreground">Transferred via UPI to <span className="font-semibold text-foreground">{workerProfile.upiId}</span></p>
          </div>
          <div className="mt-6 space-y-3">
            {payoutTransactions.slice(0, 2).map((item) => (
              <div key={item.reference} className="rounded-2xl border border-border/60 bg-card p-4 hover:bg-muted/30 transition-colors">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-foreground">{item.amount}</p>
                  <SimpleBadge value={item.status} tone="success" />
                </div>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{item.date} • {item.method}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Transaction table" description="Dummy payout history connected to mock data">
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
      actions={<Button className="gap-2 bg-foreground text-background hover:bg-foreground/90 rounded-full shadow-sm"><ShieldAlert className="h-4 w-4" /> Run anomaly scan</Button>}
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
              { key: "normal", color: "var(--foreground)", name: "Normal" },
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
              <div key={item} className="rounded-2xl border border-border/60 bg-muted/40 p-4 text-sm font-medium text-muted-foreground hover:border-foreground/20 transition-all">
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
      actions={<Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full shadow-sm">Export demo summary</Button>}
    >
      <MetricGrid metrics={analyticsKpis} />

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <SectionCard title="Claims vs weather events" description="Correlation of disruption volume and claims">
          <ComparisonBarChart
            data={claimsVsWeather}
            bars={[
              { key: "weather", color: "var(--muted-foreground)", name: "Weather events" },
              { key: "claims", color: "var(--foreground)", name: "Claims" },
            ]}
          />
        </SectionCard>
        <SectionCard title="Revenue vs payouts" description="Weekly pricing viability view">
          <ComparisonBarChart
            data={revenueVsPayout}
            bars={[
              { key: "revenue", color: "var(--foreground)", name: "Revenue" },
              { key: "payout", color: "var(--border)", name: "Payout" },
            ]}
          />
        </SectionCard>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <SectionCard title="Risk distribution" description="Policy base by risk tier">
          <DonutChart data={riskDistribution} colors={["var(--foreground)", "var(--muted)", "var(--border)"]} />
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
              <div key={item.title} className="rounded-2xl border border-border/60 bg-card p-4 hover:border-foreground/20 transition-all">
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{item.description}</p>
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
                <div key={item.label} className="rounded-2xl border border-border/60 bg-muted/30 p-4 hover:bg-muted/50 transition-colors">
                  <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                  <p className="mt-1 font-semibold text-foreground">{item.value}</p>
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
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground/20 selection:text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-semibold tracking-tight text-lg flex items-center gap-2">
              {appIdentity.name}
            </Link>
            <div className="hidden h-4 w-px bg-border sm:block" />
            <span className="hidden text-sm font-medium text-muted-foreground sm:block">
              Gig Economy Defense
            </span>
          </div>
          <div className="flex items-center gap-3">
            <ThemeQuickToggle />
            <Link href="/auth/access">
              <Button className="h-9 rounded-full bg-foreground text-background hover:bg-foreground/90 px-5 text-sm font-medium shadow-sm transition-transform hover:scale-105 active:scale-95">
                Sign in
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
          <div className="absolute right-0 top-0 -z-10 h-[400px] w-[400px] -translate-y-1/4 translate-x-1/4 rounded-full bg-foreground/5 blur-[100px] md:h-[600px] md:w-[600px]" />
          <div className="mx-auto grid max-w-screen-xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative z-10 space-y-8">
              <motion.span initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground bg-muted/30 backdrop-blur-sm">
                AI-powered parametric insurance
              </motion.span>
              <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-5xl font-semibold tracking-tight text-transparent md:text-6xl lg:text-[4.5rem] lg:leading-[1.05]">
                Weekly income protection for delivery partners.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground">
                GigShield AI helps delivery riders recover lost earnings from heavy rain, AQI spikes, floods, and sudden zone closures with automated triggers and instant payouts.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/access" className="w-full sm:w-auto">
                  <Button className="h-12 w-full sm:w-auto rounded-full bg-foreground px-8 text-base font-medium text-background shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    Launch demo
                  </Button>
                </Link>
                <Link href="/student/dashboard" className="w-full sm:w-auto">
                  <Button variant="outline" className="h-12 w-full sm:w-auto rounded-full border-border px-8 text-base font-medium hover:bg-muted/50 transition-all">
                    Open dashboard
                  </Button>
                </Link>
              </motion.div>
              <div className="pt-8 border-t border-border/60 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-lg">
                {heroStats.map((item, index) => (
                  <motion.div key={item.label} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.06 }} className="space-y-1.5">
                    <p className="text-2xl font-semibold tracking-tight">{item.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="perspective-1000 relative mx-auto w-full max-w-md lg:ml-auto">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-foreground/10 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/80 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:scale-[1.02]">
                <div className="flex items-start justify-between border-b border-border/50 bg-muted/30 p-6">
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Coverage active</span>
                    </div>
                    <h2 className="text-xl font-semibold tracking-tight">{workerProfile.name}</h2>
                    <p className="mt-1 font-mono text-sm text-muted-foreground">ID: {workerProfile.policyId}</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/50 bg-background shadow-sm">
                    <UserCircle2 className="h-6 w-6 text-foreground" />
                  </div>
                </div>
                <div className="space-y-5 p-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-muted-foreground">Zone Profile</span>
                    <span className="rounded-lg bg-muted px-3 py-1 font-semibold">{workerProfile.zone}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-muted-foreground">Weekly Premium</span>
                    <span className="font-semibold text-foreground">{policySummary.weeklyPremium}</span>
                  </div>
                </div>
                <div className="bg-foreground p-6 text-background">
                  <p className="mb-4 text-xs font-bold uppercase tracking-wider text-background/50">Active Telemetry</p>
                  <div className="space-y-4">
                    {riskSignals.slice(0, 3).map((signal) => {
                      const Icon = signal.icon;
                      return (
                        <div key={signal.label} className="flex items-center gap-3">
                          <div className="rounded-lg bg-background/10 p-2">
                            <Icon className="h-4 w-4 text-background/90" />
                          </div>
                          <p className="flex-1 text-sm font-semibold">{signal.label}</p>
                          <p className="font-mono text-sm text-background/70">{signal.value}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-border/50 bg-gradient-to-b from-muted/10 to-transparent py-24">
          <div className="mx-auto max-w-screen-xl px-6">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {landingHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="group rounded-[2rem] border border-border/60 bg-card p-8 hover:border-foreground/20 hover:shadow-lg transition-all duration-300">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted border border-border/50 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-3 text-base font-medium leading-relaxed text-muted-foreground">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export function SignInPageView() {
  return (
    <div className="grid min-h-[100dvh] bg-background lg:grid-cols-2 selection:bg-foreground/20 selection:text-foreground">
      {/* Sleek Dark Left Panel */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-zinc-950 p-12 text-zinc-50 lg:flex">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.03),transparent_40%)]" />
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight">
            {appIdentity.name}
          </Link>
          <p className="mt-1 text-sm font-medium text-zinc-400">{appIdentity.tagline}</p>
        </div>
        
        <div className="relative z-10 max-w-md space-y-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Demo scenario</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight">
              Protect riders from unrecoverable income loss.
            </h1>
          </div>
          <div className="grid gap-4">
            {[
              "Weekly pricing aligned with rider earnings cycle",
              "AI-led premium explanation and fraud validation",
              "Automatic claim initiation and instant UPI payout",
            ].map((item, i) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 text-sm font-medium text-zinc-300 backdrop-blur-sm">
                 <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-xs font-bold text-zinc-300">
                  {i + 1}
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pristine Right Panel */}
      <div className="flex items-center justify-center px-6 py-12 md:px-12">
        <div className="w-full max-w-sm space-y-8">
          <div>
            <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-bold uppercase tracking-wider text-muted-foreground bg-muted/30">
              Sample Sign In
            </span>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground">Welcome back.</h2>
            <p className="mt-2 text-base font-medium text-muted-foreground">
              This demo login leads directly into the single-role GigShield AI workspace.
            </p>
          </div>

          <div className="space-y-5">
            <InputShell label="Phone number or email" value="raju.partner@demo.in" />
            <InputShell label="Password" value="••••••••••••" />
          </div>

          <div className="grid gap-4 pt-2">
            <Link href="/student/dashboard">
              <Button className="h-12 w-full rounded-xl bg-foreground text-base font-semibold text-background shadow-md hover:bg-foreground/90 hover:-translate-y-0.5 transition-all">
                Continue to workspace
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="h-12 w-full rounded-xl text-base font-semibold border-border/80 hover:bg-muted/50 transition-colors">
                Back to landing page
              </Button>
            </Link>
          </div>

          <div className="rounded-2xl border border-border/60 bg-muted/30 p-4 text-sm font-medium text-muted-foreground text-center">
            Demo account uses mock database records, weekly pricing logic, and sandbox payout data.
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-components modernized

function ForecastTile({ icon: Icon, label, value }: { icon: typeof CloudRain; label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-sm hover:border-foreground/20 transition-all">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-muted text-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-5 text-sm font-medium text-muted-foreground">{label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-foreground">{value}</p>
    </div>
  );
}

function SettingRow({ icon: Icon, label, value }: { icon: typeof Smartphone; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-muted/20 p-4 hover:bg-muted/40 transition-colors">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-background text-foreground shadow-sm">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-semibold text-foreground">{label}</p>
        <p className="text-sm font-medium text-muted-foreground mt-0.5">{value}</p>
      </div>
    </div>
  );
}

function InputShell({ label, value }: { label: string; value: string }) {
  return (
    <div className="group space-y-2">
      <label className="text-sm font-semibold text-foreground">{label}</label>
      <div className="flex h-12 w-full items-center rounded-xl border border-border/80 bg-background px-4 text-foreground shadow-sm group-hover:border-foreground/30 transition-colors">
        {value}
      </div>
    </div>
  );
}