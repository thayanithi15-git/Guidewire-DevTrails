"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  Link2,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  X,
  SmartphoneIcon,
  CircleCheck,
  Mail,
  Lock,
  Fingerprint,
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
import { cn } from "@/lib/utils";

// --- CUSTOM COMPONENTS FOR DEVSPIRITS ---

/**
 * Razorpay Simulation Modal
 */
function RazorpayModal({ isOpen, onClose, onComplete, amount }: { isOpen: boolean, onClose: () => void, onComplete: () => void, amount: string }) {
  const [step, setStep] = useState(1); // 1: Method, 2: Processing, 3: Success

  useEffect(() => {
    if (step === 2) {
      const timer = setTimeout(() => setStep(3), 2000);
      return () => clearTimeout(timer);
    }
    if (step === 3) {
        const timer = setTimeout(() => {
            onComplete();
            onClose();
        }, 1500);
        return () => clearTimeout(timer);
    }
  }, [step]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md transition-all">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-md overflow-hidden bg-white rounded-2xl shadow-2xl"
      >
        <div className="bg-[#1D212F] p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="h-8 w-8 bg-blue-600 rounded flex items-center justify-center font-bold italic">R</div>
             <div>
               <p className="text-[10px] uppercase font-bold tracking-widest text-white/50 leading-tight">Paying to</p>
               <p className="font-bold text-sm tracking-tight">Devspirits Premium</p>
             </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={18} />
          </button>
        </div>

        <div className="p-8 space-y-6">
          {step === 1 && (
            <>
              <div className="flex items-baseline justify-between border-b pb-6">
                <span className="text-sm font-semibold text-gray-500">Amount to pay</span>
                <span className="text-3xl font-black text-gray-900 tracking-tighter">{amount}</span>
              </div>
              <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Select Pay Method</p>
                <div onClick={() => setStep(2)} className="flex items-center justify-between p-4 bg-gray-50 border rounded-xl hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-all group">
                   <div className="flex items-center gap-4">
                     <div className="h-10 w-10 bg-white rounded-lg border flex items-center justify-center shadow-sm">
                        <SmartphoneIcon size={20} className="text-blue-600" />
                     </div>
                     <span className="font-bold text-gray-700">UPI / GPay / PhonePe</span>
                   </div>
                   <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <div onClick={() => setStep(2)} className="flex items-center justify-between p-4 bg-gray-50 border rounded-xl hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-all group">
                   <div className="flex items-center gap-4">
                     <div className="h-10 w-10 bg-white rounded-lg border flex items-center justify-center shadow-sm">
                        <CreditCard size={20} className="text-blue-600" />
                     </div>
                     <span className="font-bold text-gray-700">Card (Debit/Credit)</span>
                   </div>
                   <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <div className="py-12 flex flex-col items-center justify-center space-y-6">
               <div className="h-16 w-16 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin" />
               <p className="font-bold text-gray-600 uppercase tracking-widest text-xs">Authenticating Transaction...</p>
            </div>
          )}

          {step === 3 && (
             <div className="py-12 flex flex-col items-center justify-center space-y-6">
                <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="h-24 w-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-200"
                >
                    <CheckCircle2 size={48} className="text-white" />
                </motion.div>
                <div className="text-center space-y-2">
                    <p className="text-2xl font-black text-gray-900 tracking-tight">Payment Success!</p>
                    <p className="text-sm font-medium text-gray-500">Your premium for the week is confirmed.</p>
                </div>
             </div>
          )}
        </div>

        <div className="bg-gray-50 p-4 border-t flex items-center justify-center gap-2">
           <ShieldCheck size={14} className="text-gray-400" />
           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Secured by Razorpay</p>
        </div>
      </motion.div>
    </div>
  );
}

/**
 * Linker Component (Swiggy/Zomato)
 */
function PlatformLinker() {
  const [linking, setLinking] = useState<string | null>(null);
  const [otp, setOtp] = useState("");
  const [success, setSuccess] = useState<string | null>(null);

  const startLinking = (id: string) => {
    setLinking(id);
    setOtp("");
  }

  const handleVerify = () => {
    setTimeout(() => {
        setSuccess(linking);
        setLinking(null);
        setTimeout(() => setSuccess(null), 3000);
    }, 1500);
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {[
        { id: "swiggy", name: "Swiggy Delivery", color: "bg-[#FC8019]", icon: "/swiggy.png" },
        { id: "zomato", name: "Zomato Partner", color: "bg-[#CB202D]", icon: "/zomato.png" },
      ].map((p) => (
        <div key={p.id} className="glass-card p-8 flex items-center justify-between group overflow-hidden relative">
          <div className={cn("absolute inset-y-0 left-0 w-2 transition-all group-hover:w-3", p.color)} />
          <div className="flex items-center gap-6">
             <div className={cn("h-16 w-16 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-black/5", p.color)}>
                <span className="text-2xl font-black italic">{p.name[0]}</span>
             </div>
             <div>
                <h4 className="text-xl font-bold tracking-tight">{p.name}</h4>
                <p className="text-sm font-medium text-muted-foreground">Sync your delivery history</p>
             </div>
          </div>
          
          <AnimatePresence mode="wait">
            {success === p.id ? (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center gap-2 text-accent-emerald font-bold uppercase tracking-widest text-xs">
                    <CircleCheck size={18} /> Linked
                </motion.div>
            ) : linking === p.id ? (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3">
                   <input 
                    type="text" 
                    placeholder="OTP" 
                    className="w-20 h-10 bg-muted/40 border-2 border-primary/20 rounded-xl px-3 text-center font-bold tracking-[0.3em]" 
                    maxLength={4}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                   />
                   <Button onClick={handleVerify} className="h-10 px-4 bg-primary text-white rounded-xl font-bold">Verify</Button>
                </motion.div>
            ) : (
                <Button variant="outline" onClick={() => startLinking(p.id)} className="rounded-full border-2 font-bold group-hover:bg-primary group-hover:text-white transition-all">
                    Link Now
                </Button>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// --- MAIN PAGES ---

export function DashboardPageView() {
  const [payModal, setPayModal] = useState(false);

  return (
    <PageShell
      eyebrow="Coverage Center"
      title="My Parametric Guard"
      description="Real-time monitoring of your earnings safety. Connect delivery platforms to unlock advanced AI-led income restoration."
      actions={
        <div className="flex items-center gap-3">
           <Button onClick={() => setPayModal(true)} className="btn-premium bg-gradient-ds-mixed text-white border-0 shadow-lg px-6 font-bold">
            Pay Premium (₹49)
           </Button>
        </div>
      }
    >
      <RazorpayModal 
        isOpen={payModal} 
        onClose={() => setPayModal(false)}
        onComplete={() => {}}
        amount="₹49.00"
      />

      <MetricGrid metrics={dashboardMetrics} />

      <div className="grid gap-8 xl:grid-cols-[1.6fr_0.9fr]">
        <SectionCard title="Earnings Protection Stream" description="Live comparison of actual vs projected income gap.">
          <EarningsAreaChart data={earningsTrend} />
        </SectionCard>
        <SectionCard title="Platform Integrity" description="Securely link your worker accounts for automated claim validation.">
           <PlatformLinker />
           <div className="mt-8 p-6 bg-muted/30 rounded-3xl border border-dashed border-primary/20">
             <div className="flex items-start gap-4">
                <ShieldCheck className="text-primary mt-1" size={24} />
                <div>
                   <p className="font-bold text-foreground">Verified Integration</p>
                   <p className="text-sm font-medium text-muted-foreground leading-relaxed mt-1">
                     We uses high-level OAuth/SMS hooks to verify delivery activity. We never store your passwords.
                   </p>
                </div>
             </div>
           </div>
        </SectionCard>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1fr_1.3fr]">
        <SectionCard title="Active Trigger Feed" description="Local environmental disruption events currently in watch.">
          <AlertList items={liveAlerts} />
        </SectionCard>
        <SectionCard title="Zone Disruption Heatmap" description="Hyperlocal delivery zones with active risk intensity mapping.">
          <ZoneHeatGrid items={zoneRisks} />
        </SectionCard>
      </div>

      <SectionCard title="Core Workflows" description="Simulate the parametric lifecycle.">
        <QuickLinks
          items={[
            { title: "Review Policy", description: "Vew active weekly tiers and limits", href: "/student/dashboard/projects" },
            { title: "Inspect AI Engine", description: "Premium forecast and impact drivers", href: "/student/dashboard/tasks" },
            { title: "Run Simulation", description: "Test automated trigger to payout flow", href: "/student/dashboard/internships" },
          ]}
        />
      </SectionCard>
    </PageShell>
  );
}

export function ProfilePageView() {
  return (
    <PageShell
      eyebrow="Identity Management"
      title={workerProfile.name}
      description="Manage your delivery footprint, payout methods, and platform links for Devspirits coverage."
      actions={<Button className="btn-premium bg-foreground text-white rounded-full font-bold px-6 shadow-xl"><UserCircle2 className="h-4 w-4 mr-2" /> Edit Profile</Button>}
    >
      <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard title="Worker Blueprint" description="Account details used for zone-based parametric pricing.">
          <div className="grid gap-4 md:grid-cols-2">
            <ProfileField label="Primary Platform" value={workerProfile.platform} />
            <ProfileField label="City Hub" value={workerProfile.city} />
            <ProfileField label="Work Zone" value={workerProfile.zone} />
            <ProfileField label="Vehicle Class" value={workerProfile.vehicle} />
            <ProfileField label="Shift Slot" value={workerProfile.workingShift} />
            <ProfileField label="UPI Payout ID" value={workerProfile.upiId} />
          </div>
        </SectionCard>
        <SectionCard title="Performance Index" description="Dummy metrics for weekly eligibility.">
          <div className="space-y-4">
            <ProfileStat label="Daily Target" value={workerProfile.avgDailyEarnings} />
            <ProfileStat label="Current Week" value={workerProfile.weeklyEarnings} />
            <ProfileStat label="Safety Score" value={workerProfile.trustScore} />
            <ProfileStat label="Active Since" value={workerProfile.memberSince} />
          </div>
        </SectionCard>
      </div>

      <SectionCard title="Active Integrations" description="Linked delivery apps for automated data sync.">
        <PlatformLinker />
      </SectionCard>
    </PageShell>
  );
}

export function PolicyPageView() {
  return (
    <PageShell
      eyebrow="My Contract"
      title={policySummary.planName}
      description="Pure parametric coverage centered around unrecoverable hourly loss. Simple, automated, zero-clutter."
      actions={
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-full font-bold px-6 border-2">Pause Policy</Button>
          <Button className="btn-premium bg-gradient-ds-indigo text-white px-6 font-bold shadow-xl border-0">Upgrade Plan</Button>
        </div>
      }
    >
      <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard title="Policy Metadata" description={`${policySummary.status} • Next Renewal ${policySummary.renewal}`}>
          <div className="grid gap-4 md:grid-cols-2">
            <ProfileStat label="Weekly Premium" value={policySummary.weeklyPremium} />
            <ProfileStat label="Hourly Indemnity" value={policySummary.coveragePerHour} />
            <ProfileStat label="Max Recovery" value={policySummary.maxHours} />
            <ProfileStat label="Contract ID" value={workerProfile.policyId} />
          </div>
        </SectionCard>
        <SectionCard title="Protection Mix" description="Hours covered in current cycle.">
          <DonutChart data={coverageMix} colors={["var(--color-primary)", "var(--color-muted)"]} />
        </SectionCard>
      </div>

      <SectionCard title="Premium History" description="Recent weekly subscriptions and coverage status.">
        <TableBlock
          columns={["Week Range", "Premium Paid", "Contract Status", "Protected Hours"]}
          rows={weeklyPolicyTable.map((row) => [row.week, row.premium, <SimpleBadge value={row.status} tone={row.status === 'Active' ? 'success' : 'primary'} />, row.coverage])}
        />
      </SectionCard>
    </PageShell>
  );
}

export function RiskPremiumPageView() {
  return (
    <PageShell
      eyebrow="Devspirits AI Intelligence"
      title="Risk-Adaptive Pricing"
      description="See the transparent variables that shape your weekly premium. Our AI processes thousands of data points to keep protection affordable."
      actions={<Button className="btn-premium bg-primary text-white rounded-full font-bold px-6 shadow-xl flex items-center gap-2"><BrainCircuit size={18} /> Run Risk Sync</Button>}
    >
      <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <SectionCard title="Live Zone Risk Index" description="Forecasted disruption probability for your active zone.">
          <GaugeCard value={67} />
        </SectionCard>
        <SectionCard title="Premium Variable Impact" description="How specific factors influenced your ₹49 premium.">
          <ComparisonBarChart
            data={premiumFactors.map((factor) => ({ label: factor.name, impact: factor.value }))}
            bars={[{ key: "impact", color: "var(--color-accent-violet)", name: "Impact Score" }]}
          />
        </SectionCard>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title="Historical Risk Fluctuations" description="AI risk volatility through recent delivery shifts.">
          <RiskLineChart data={earningsTrend} lines={[{ key: "risk", color: "var(--color-accent-violet)", name: "Risk Index" }]} />
        </SectionCard>
        <SectionCard title="Predictive AI Explanation" description="Dynamic logic output for current pricing cycle.">
          <div className="rounded-[2rem] border-2 border-primary/20 bg-primary/5 p-8 text-lg font-bold leading-relaxed text-foreground italic">
            "Your premium increased slightly (+₹4) due to high-conviction rainfall forecasts in HSR Layout and elevated traffic congestion indices in adjacent corridors."
          </div>
          <div className="mt-8 space-y-4">
            {premiumExplainer.map((item) => (
              <div key={item} className="rounded-2xl border border-border/40 bg-muted/20 p-5 font-semibold text-muted-foreground hover:bg-muted/40 transition-all flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-primary" /> {item}
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
    <div className="rounded-3xl border border-border/40 bg-muted/20 p-6 hover:bg-muted/40 transition-all">
      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80">{label}</p>
      <p className="mt-1.5 font-black text-foreground tracking-tight text-lg">{value}</p>
    </div>
  );
}

function ProfileStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[2rem] border border-border/40 bg-card p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] hover:border-primary/20 transition-all">
      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80">{label}</p>
      <p className="mt-2 text-3xl font-black tracking-tighter text-foreground">{value}</p>
    </div>
  );
}

export function LiveTriggersPageView() {
  return (
    <PageShell
      eyebrow="Parametric Oracle"
      title="Live Trigger Stream"
      description="Our system monitors thousands of environmental data points across India. Triggers crossing your zone threshold initiate payouts."
      actions={<Button className="btn-premium bg-foreground text-white rounded-full font-bold px-6 shadow-xl flex items-center gap-2"><PlayCircle size={18} /> Simulate Event</Button>}
    >
      <div className="grid gap-6 xl:grid-cols-3">
        {triggerFeed.map((item) => {
          const Icon = item.icon;
          return (
            <SectionCard key={item.id} title={item.name} description={`${item.location} • Source: ${item.source}`} className="hover:scale-[1.02] transition-transform">
              <div className="flex items-start justify-between gap-3 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-ds-indigo text-white shadow-xl shadow-primary/20">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex gap-2">
                  <SimpleBadge value={item.status} tone={item.status === "Active" ? "danger" : item.status === "Watch" ? "warning" : "success"} />
                  <SimpleBadge value={item.severity} tone={item.severity === "High" ? "danger" : item.severity === "Medium" ? "warning" : "success"} />
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-lg font-black tracking-tight text-foreground">{item.condition}</p>
                <div className="p-4 bg-muted/30 rounded-2xl border border-dashed border-primary/20 text-xs font-bold text-muted-foreground leading-relaxed uppercase tracking-widest italic">
                  Impact: {item.payoutImpact}
                </div>
              </div>
            </SectionCard>
          );
        })}
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.5fr_1fr]">
        <SectionCard title="Oracular Risk Projection" description="Live risk curve mapped through the day.">
          <RiskLineChart data={triggerTimeline} lines={[{ key: "risk", color: "var(--color-primary)", name: "Trigger Probability" }]} />
        </SectionCard>
        <SectionCard title="Telemetry Health" description="Status of parametric data providers.">
          <div className="space-y-3">
            {apiStatus.map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-2xl border border-border/40 bg-card p-5 hover:bg-muted/30 transition-all group">
                <div>
                  <p className="font-bold text-foreground group-hover:text-primary transition-colors">{item.name}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mt-1">{item.latency} ms latency</p>
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
      eyebrow="Zero-Touch Restoration"
      title="Automated Payout Logs"
      description="Experience insurance without claims. Payouts are approved the moment our AI validates the zone disruption."
      actions={<Button className="btn-premium bg-foreground text-white px-6 font-bold rounded-full">Raise Manual Inquiry</Button>}
    >
      <div className="grid gap-8 xl:grid-cols-[1.4fr_0.6fr]">
        <SectionCard title="Recovery Ledger" description="Successful automated payouts from disruption events.">
          <TableBlock
            columns={["Event Date", "Disruption", "Hours Gap", "Net Recovery", "Status", "AI Conf"]}
            rows={claimsTable.map((row) => [
                row.date, 
                row.trigger, 
                row.hoursLost, 
                <span className="font-bold text-accent-emerald">{row.amount}</span>, 
                <SimpleBadge value={row.status} tone="success" />, 
                <span className="text-xs font-bold font-mono py-1 px-2 bg-muted/60 rounded-lg">{row.confidence}</span>
            ])}
          />
        </SectionCard>
        <SectionCard title="Validation Engine" description="How our AI verifies each event.">
          <div className="space-y-6">
            {[
              "Hyperlocal weather match with worker zone GPS.",
              "Cross-verification of linked Swiggy/Zomato downtime.",
              "Anomaly check for location spoofing patterns.",
              "Instant Approval and secure UPI ledger transmit.",
            ].map((step, i) => (
              <div key={step} className="flex gap-4 group">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-black text-sm group-hover:bg-primary group-hover:text-white transition-all">
                  {i + 1}
                </div>
                <p className="text-sm font-bold text-muted-foreground leading-relaxed group-hover:text-foreground transition-all">{step}</p>
              </div>
            ))}
            <div className="rounded-[2rem] bg-gradient-ds-emerald p-8 text-white shadow-xl shadow-accent-emerald/20">
               <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck size={24} />
                  <p className="font-black tracking-tight text-xl uppercase italic">Approval Success</p>
               </div>
               <p className="text-sm font-semibold opacity-90 leading-loose">
                  "Auto-approved payout of ₹320. Rider activity was confirmed active 30 mins prior to the Zomato Zone lockout trigger."
               </p>
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
      eyebrow="Financial Recovery"
      title="Instant UPI Transmission"
      description="Direct recovery of daily income into your UPI wallet. Real-time credits driven by environmental data."
      actions={<Button className="btn-premium bg-primary text-white font-bold rounded-full px-6 shadow-xl flex items-center gap-2"><WalletCards size={18} /> Sync Wallet</Button>}
    >
      <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title="Aggregated Recovery" description="Total income restored via Devspirits.">
          <MetricGrid
            metrics={[
              {
                title: "Income Recovered",
                value: "₹1,240",
                change: "Across 4 Auto-Claims",
                tone: "success",
                icon: BadgeIndianRupee,
              },
              {
                title: "Transmission Speed",
                value: "43s",
                change: "Avg. Trigger to Credit",
                tone: "primary",
                icon: Zap,
              },
            ]}
          />
          <div className="mt-10 h-72">
             <ComparisonBarChart data={payoutTimeline} bars={[{ key: "payout", color: "var(--color-accent-emerald)", name: "Restored Amount" }]} />
          </div>
        </SectionCard>
        <SectionCard title="Live Credit Sandbox" description="Latest simulated transmission event.">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-ds-mixed p-10 text-white shadow-[0_40px_80px_-20px_rgba(var(--color-primary),0.3)]">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-[80px]" />
            <div className="flex items-center justify-between mb-8 opacity-60">
                 <p className="text-[10px] font-black uppercase tracking-widest">Devspirits Payout Rail</p>
                 <Zap size={20} />
            </div>
            <h3 className="text-5xl font-black tracking-tighter">₹320.00</h3>
            <p className="mt-4 font-bold tracking-tight text-white/80">Transferred via GPay to <br /> <span className="text-white text-lg">{workerProfile.upiId}</span></p>
            
            <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-widest opacity-60">
                 <span>Ref: #DS-RECOVER-4921</span>
                 <span>Conf: 99.1%</span>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 px-2 leading-tight mb-2">Recent transmissions</p>
            {payoutTransactions.slice(0, 3).map((item) => (
              <div key={item.reference} className="glass-card p-5 group flex items-center justify-between hover:bg-muted/30 transition-all">
                <div className="space-y-1">
                  <p className="font-black text-foreground text-lg tracking-tight">{item.amount}</p>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{item.date} • {item.method}</p>
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

export function AnalyticsPageView() {
  return (
    <PageShell
      eyebrow="Strategic Insights"
      title="Portfolio & Disruption Intelligence"
      description="Comprehensive data on zone risk trends, payout ratios, and predictive weather impact mapping for next cycle."
      actions={<Button className="btn-premium bg-foreground text-white rounded-full font-bold px-6 shadow-xl">Export Summary</Button>}
    >
      <MetricGrid metrics={analyticsKpis} />

      <div className="grid gap-8 xl:grid-cols-[1fr_1fr]">
        <SectionCard title="Incident Correlation" description="Mapping disrupted hours against actual automated payouts.">
          <ComparisonBarChart
            data={claimsVsWeather}
            bars={[
              { key: "weather", color: "var(--color-muted)", name: "Trigger Events" },
              { key: "claims", color: "var(--color-primary)", name: "Payouts Issued" },
            ]}
          />
        </SectionCard>
        <SectionCard title="Solvency Rail" description="Contract revenue vs recovery transmission volume.">
          <ComparisonBarChart
            data={revenueVsPayout}
            bars={[
              { key: "revenue", color: "var(--color-accent-violet)", name: "Premium Revenue" },
              { key: "payout", color: "var(--color-accent-emerald)", name: "Recovered Income" },
            ]}
          />
        </SectionCard>
      </div>

      <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr]">
        <SectionCard title="Portfolio Risk Curve" description="Worker distribution across AI-determined risk tiers.">
          <DonutChart data={riskDistribution} colors={["var(--color-primary)", "var(--color-accent-violet)", "var(--color-accent-emerald)"]} />
        </SectionCard>
        <SectionCard title="Next Shift Outlook" description="Predictive risk indices for the upcoming delivery cycle.">
          <div className="grid gap-4 md:grid-cols-2">
            <ForecastTile icon={CloudRain} label="Rain Probability" value="72%" />
            <ForecastTile icon={Waves} label="Flood Potential" value="31%" />
            <ForecastTile icon={BellRing} label="Closure Risk" value="18%" />
            <ForecastTile icon={MapPinned} label="Watch Zone" value="HSR Layout" />
          </div>
        </SectionCard>
      </div>
    </PageShell>
  );
}

export function SettingsPageView() {
  return (
    <PageShell
      eyebrow="Configuration"
      title="Platform Controls"
      description="Manage your theme, language, and sandbox variables for the Devspirits demo environment."
      actions={<ThemeQuickToggle />}
    >
      <div className="grid gap-8 xl:grid-cols-3">
        <SectionCard title="Workspace Links" description="Quick jumps for demo navigation.">
          <QuickLinks
            items={[
              { title: "My Profile", description: "Worker and payout setup", href: "/student/dashboard/profile" },
              { title: "Contracts", description: "Active parametric plans", href: "/student/dashboard/projects" },
              { title: "Disruptions", description: "Live trigger streams", href: "/student/dashboard/notifications" },
            ]}
          />
        </SectionCard>
        <SectionCard title="Personalization" description="Interface and account defaults.">
          <div className="space-y-4">
            <SettingRow icon={Smartphone} label="Optimized for" value="Desktop + PWA" />
            <SettingRow icon={Languages} label="Selected Locale" value={workerProfile.language} />
            <SettingRow icon={CreditCard} label="Payment Default" value={workerProfile.upiId} />
          </div>
        </SectionCard>
        <SectionCard title="Demo Logic Quick Jumps" description="Best flows for hackathon judging.">
          <div className="space-y-4">
            {quickActions.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border/40 bg-muted/20 p-5 group hover:border-primary/40 transition-all cursor-pointer">
                <p className="font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</p>
                <p className="mt-1 text-sm font-medium text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </PageShell>
  );
}

export function SignInPageView() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
        window.location.href = "/student/dashboard";
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row overflow-hidden">
      {/* Design-rich Side Paneled Visual */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#1D212F] items-center justify-center p-12 overflow-hidden">
        {/* Abstract shapes / gradients for that "Wow" factor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-violet/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        
        <div className="z-10 max-w-lg space-y-12">
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               className="h-20 w-20 bg-gradient-ds-mixed rounded-3xl flex items-center justify-center shadow-2xl shadow-primary/40"
            >
               <ShieldCheck size={40} className="text-white" />
            </motion.div>
            
            <div className="space-y-6">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-6xl font-bold text-white leading-[0.95] tracking-tighter"
                >
                    Guardian <br /><span className="text-primary italic">of the</span> Gig.
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl font-medium text-white/50 leading-relaxed italic"
                >
                    "Experience insurance that doesn't wait for your claim—it acts the moment the weather shifts."
                </motion.p>
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-8 pt-12 border-t border-white/10"
            >
               <div className="space-y-1">
                  <p className="text-3xl font-bold text-white tracking-tighter">4.8s</p>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40">Avg Payout Speed</p>
               </div>
               <div className="space-y-1">
                  <p className="text-3xl font-bold text-white tracking-tighter">10K+</p>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/40">Active Guards</p>
               </div>
            </motion.div>
        </div>
      </div>

      {/* Modern, Premium Auth Form Section */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md space-y-10 z-10"
        >
          <div className="space-y-3">
             <h2 className="text-4xl font-bold tracking-tight text-foreground">Welcome Back.</h2>
             <p className="text-muted-foreground font-medium italic">Secure your income in seconds.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
             <div className="space-y-4">
               <div className="space-y-2 group">
                 <label className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary pl-1">
                   Phone or Email
                 </label>
                 <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60 transition-colors group-focus-within:text-primary" size={18} />
                    <input 
                      type="text" 
                      placeholder="e.g. +91 9988776655"
                      required
                      suppressHydrationWarning
                      className="w-full h-16 bg-muted/40 border-2 border-transparent rounded-2xl pl-12 pr-6 font-semibold focus:bg-background focus:border-primary/20 transition-all outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                 </div>
               </div>

               <div className="space-y-2 group">
                 <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary pl-1">
                    Verification
                 </label>
                 <div className="relative">
                    <Fingerprint className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60 transition-colors group-focus-within:text-primary" size={18} />
                    <input 
                      type="password" 
                      placeholder="Demo PIN (any)"
                      suppressHydrationWarning
                      className="w-full h-16 bg-muted/40 border-2 border-transparent rounded-2xl pl-12 pr-6 font-semibold focus:bg-background focus:border-primary/20 transition-all outline-none italic placeholder:not-italic"
                    />
                 </div>
               </div>
             </div>

             <Button 
                disabled={isLoading}
                className="w-full h-16 bg-foreground text-background font-bold text-lg rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-black/5"
             >
                {isLoading ? (
                    <div className="h-6 w-6 border-3 border-background/30 border-t-background rounded-full animate-spin" />
                ) : (
                    "Authorize Session"
                )}
             </Button>
          </form>

          <div className="relative pt-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border/60"></span>
            </div>
            <div className="relative flex justify-center text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">
              <span className="bg-background px-4">Instant Demo Access</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <Link href="/student/dashboard" className="contents">
               <button className="flex items-center justify-center gap-3 h-14 bg-muted/40 border-2 border-transparent rounded-2xl hover:border-primary/20 hover:bg-muted/60 transition-all group">
                  <div className="h-2 w-2 rounded-full bg-accent-emerald animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-foreground/80 group-hover:text-primary transition-colors">Student View</span>
               </button>
             </Link>
             <Link href="/admin/dashboard" className="contents">
               <button className="flex items-center justify-center gap-3 h-14 bg-muted/40 border-2 border-transparent rounded-2xl hover:border-primary/20 hover:bg-muted/60 transition-all group">
                  <div className="h-2 w-2 rounded-full bg-accent-violet" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-foreground/80 group-hover:text-primary transition-colors">Admin View</span>
               </button>
             </Link>
          </div>

          <div className="pt-10 text-center">
            <Link href="/" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60 hover:text-primary transition-colors">
              Back to Landing Page
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Sub-components

function ForecastTile({ icon: Icon, label, value }: { icon: typeof CloudRain; label: string; value: string }) {
  return (
    <div className="rounded-[2.5rem] border border-border/40 bg-card p-10 flex flex-col items-center text-center hover:border-primary/20 transition-all shadow-sm">
      <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-muted/50 text-primary shadow-sm mb-8">
        <Icon size={28} />
      </div>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/80">{label}</p>
      <p className="mt-3 text-3xl font-bold tracking-tighter text-foreground">{value}</p>
    </div>
  );
}

function SettingRow({ icon: Icon, label, value }: { icon: typeof Smartphone; label: string; value: string }) {
  return (
    <div className="flex items-center gap-5 p-6 bg-muted/20 rounded-[2rem] border border-border/40 group hover:bg-muted/40 transition-all cursor-default">
       <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-card border group-hover:text-primary transition-colors">
          <Icon size={18} />
       </div>
       <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60">{label}</p>
          <p className="font-semibold text-foreground tracking-tight">{value}</p>
       </div>
    </div>
  );
}