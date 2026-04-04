"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Plus, Minus, Zap, ShieldCheck, CloudRain, ThermometerSun, AlertTriangle, RadioTower } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeQuickToggle, MetricGrid, SectionCard } from "@/components/gigshield-ui";
import {
    appIdentity,
    disruptions,
    heroStats,
    landingFaq,
    landingHighlights,
    landingJourney,
    pricingTiers,
    policySummary,
    riskSignals,
    trustIndicators,
    workerProfile
} from "@/data/gigshield-data";
import { cn } from "@/lib/utils";

export function ModernLandingPageView() {
    const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary flex flex-col">
            {/* Premium Header */}
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="font-bold text-2xl tracking-tighter flex items-center gap-2 group px-2">
                            <span className="text-foreground group-hover:opacity-80 transition-opacity">
                                {appIdentity.name}
                            </span>
                        </Link>
                        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-muted-foreground">
                            <Link href="#how-it-works" className="hover:text-foreground transition-colors">Mechanism</Link>
                            <Link href="#disruptions" className="hover:text-foreground transition-colors">Risks</Link>
                            <Link href="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeQuickToggle />
                        <Link href="/auth/access">
                            <Button variant="ghost" className="rounded-full font-bold">Log in</Button>
                        </Link>
                        <Link href="/auth/access">
                            <Button className="btn-premium bg-gradient-ds-indigo text-white border-0">
                                Launch Demo
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-1 overflow-x-hidden">
                {/* Impactful Hero Section */}
                <section className="relative container-custom pt-20 pb-32 lg:pt-32 lg:pb-48">
                    {/* Ambient Gradients - Balanced */}
                    <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-accent-violet/5 blur-[120px]" />
                    <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] translate-y-1/2 -translate-x-1/2 rounded-full bg-accent-emerald/5 blur-[120px]" />

                    <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                        <div className="space-y-10 z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-sm"
                            >
                                <Zap className="h-3 w-3" /> Parametric Income Defense
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1] lg:leading-[0.9]"
                            >
                                Predictable <br />
                                <span className="text-gradient-ds">Earnings.</span> <br />
                                Automated.
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="max-w-xl text-lg md:text-xl font-medium text-muted-foreground leading-relaxed italic border-l-4 border-accent-emerald pl-6"
                            >
                                "What if insurance didn’t wait for claims, but acted the moment a disruption happens?"
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-col sm:flex-row gap-4 sm:items-center"
                            >
                                <Link href="/auth/access">
                                    <Button className="btn-premium h-14 px-10 text-lg bg-gradient-ds-mixed text-white border-0 shadow-2xl">
                                        Protect My Income
                                    </Button>
                                </Link>
                                <Link href="/student/dashboard">
                                    <Button variant="outline" className="h-14 px-10 text-lg rounded-full border-2 font-bold hover:bg-muted/40 transition-all">
                                        Open Dashboard
                                    </Button>
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="grid grid-cols-2 sm:grid-cols-3 gap-10 pt-12 border-t border-border/40"
                            >
                                {heroStats.map((item) => (
                                    <div key={item.label} className="space-y-2">
                                        <p className="text-2xl font-bold tracking-tighter text-foreground">{item.value}</p>
                                        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/80">{item.label}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Floating Glass Profile Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative perspective-2000"
                        >
                            <div className="absolute -inset-10 bg-gradient-ds-mixed opacity-10 blur-[100px] rounded-full animate-pulse" />
                            <div className="glass-card relative overflow-hidden rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)]">
                                <div className="bg-gradient-ds-indigo p-8 text-white">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/20">
                                            <span className="relative flex h-2 w-2">
                                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                                            </span>
                                            <span className="text-[10px] font-bold uppercase tracking-wider">Coverage Active</span>
                                        </div>
                                        <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
                                            <Zap className="h-5 w-5" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-tight">{workerProfile.name}</h3>
                                    <p className="text-white/60 font-mono text-sm mt-1 uppercase tracking-widest">{workerProfile.policyId}</p>
                                </div>
                                <div className="p-8 space-y-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Zone Risk</span>
                                        <span className="text-lg font-bold text-primary">{workerProfile.zone}</span>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-border/40 pt-6">
                                        <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Active Risks</span>
                                        <div className="flex gap-2">
                                            <CloudRain className="h-5 w-5 text-accent-violet" />
                                            <ThermometerSun className="h-5 w-5 text-accent-emerald" />
                                        </div>
                                    </div>
                                    <div className="bg-muted/30 rounded-2xl p-6 space-y-3">
                                        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                                            <span>Protection Stream</span>
                                            <span className="text-accent-emerald">Synced</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                animate={{ x: ["-100%", "100%"] }}
                                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                                className="h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Inspiration Narrative Section */}
                <section id="inspiration" className="bg-muted/10 py-32 md:py-48 border-y border-border/40">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl font-bold tracking-tight"
                            >
                                Why <span className="text-gradient-ds">Devspirits?</span>
                            </motion.h2>
                            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed font-medium italic">
                                India’s gig economy powers our cities, but during heavy rainfall, extreme heat, or curfews, income drops to zero instantly.
                                We built Devspirits to bridge the gap between real-world risk and financial protection.
                            </p>
                            <div className="grid sm:grid-cols-3 gap-8 pt-16">
                                <div className="space-y-4">
                                    <div className="h-14 w-14 mx-auto flex items-center justify-center rounded-2xl bg-accent-violet/10 text-accent-violet border border-accent-violet/20">
                                        <CloudRain size={28} />
                                    </div>
                                    <h4 className="font-bold text-xl uppercase tracking-tighter">Monsoon Halts</h4>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-14 w-14 mx-auto flex items-center justify-center rounded-2xl bg-accent-emerald/10 text-accent-emerald border border-accent-emerald/20">
                                        <ThermometerSun size={28} />
                                    </div>
                                    <h4 className="font-bold text-xl uppercase tracking-tighter">Heat Waves</h4>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-14 w-14 mx-auto flex items-center justify-center rounded-2xl bg-primary/10 text-primary border border-primary/20">
                                        <AlertTriangle size={28} />
                                    </div>
                                    <h4 className="font-bold text-xl uppercase tracking-tighter">Zone Closures</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Parametric Disruptions Grid */}
                <section id="disruptions" className="section-padding">
                    <div className="container-custom">
                        <div className="mb-20 space-y-4 px-4 md:px-0">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase italic pointer-events-none">The Zero-Click <br /><span className="text-gradient-ds">Trigger List.</span></h2>
                            <p className="max-w-2xl text-lg font-medium text-muted-foreground">
                                No manual claims. No proofs. If these parameters cross the threshold, your payout is initiated immediately.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Heavy Rain", icon: CloudRain, threshold: "> 20mm/hr", color: "text-primary" },
                                { title: "AQI Spike", icon: RadioTower, threshold: "> 300 AQI", color: "text-accent-violet" },
                                { title: "Extreme Heat", icon: ThermometerSun, threshold: "> 42°C", color: "text-amber-500" },
                                { title: "App Crash", icon: Zap, threshold: "System Outage", color: "text-accent-emerald" },
                            ].map((risk) => (
                                <div key={risk.title} className="glass-card p-10 hover:border-primary/20 transition-all group rounded-[2rem]">
                                    <risk.icon className={cn("h-10 w-10 mb-8 transition-transform group-hover:scale-110", risk.color)} />
                                    <h3 className="font-bold text-2xl tracking-tighter mb-2">{risk.title}</h3>
                                    <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-6 font-sans">Parametric Threshold</div>
                                    <div className="text-lg font-bold text-foreground bg-muted/40 px-4 py-2 rounded-xl inline-block">
                                        {risk.threshold}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* The Mechanism Section (Sticky Layout) */}
                <section id="how-it-works" className="bg-primary/5 py-32 border-y border-border/40">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-20 items-start">
                            <div className="lg:sticky lg:top-32 space-y-8">
                                <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.95]">How <br /><span className="text-gradient-ds">it Works.</span></h2>
                                <p className="text-lg font-medium text-muted-foreground leading-relaxed">
                                    A completely automated lifecycle that removes human bias and delays.
                                </p>
                                <Link href="/auth/access">
                                    <Button className="btn-premium bg-foreground text-background">See Detailed Flows</Button>
                                </Link>
                            </div>

                            <div className="space-y-6">
                                {landingJourney.map((step, i) => (
                                    <div key={step.step} className="glass-card p-8 md:p-10 flex gap-8 group hover:bg-muted/20 transition-all">
                                        <div className="h-12 w-12 shrink-0 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                                            {i + 1}
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold tracking-tight">{step.title}</h3>
                                            <p className="text-muted-foreground font-medium leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section-padding bg-background">
                    <div className="container-custom">
                        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20">
                            <div className="space-y-12">
                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase italic">FAQs & <br /><span className="text-gradient-ds">Trust.</span></h2>
                                <div className="grid grid-cols-2 gap-10">
                                    {trustIndicators.map((metric) => (
                                        <div key={metric.metric} className="space-y-2">
                                            <p className="text-4xl font-bold tracking-tighter text-foreground">{metric.value}</p>
                                            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/80 leading-tight">{metric.metric}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                {landingFaq.slice(0, 5).map((faq, index) => (
                                    <div
                                        key={index}
                                        className={cn(
                                            "rounded-[2rem] border transition-all duration-300",
                                            expandedFaq === faq.q ? "glass-card p-2" : "border-transparent bg-muted/20 hover:bg-muted/40"
                                        )}
                                    >
                                        <button
                                            onClick={() => setExpandedFaq(expandedFaq === faq.q ? null : faq.q)}
                                            className="w-full flex items-center justify-between p-8 text-left group"
                                        >
                                            <span className="font-bold text-xl pr-6">{faq.q}</span>
                                            <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-muted group-hover:bg-primary group-hover:text-white transition-all">
                                                {expandedFaq === faq.q ? <Minus size={20} /> : <Plus size={20} />}
                                            </div>
                                        </button>
                                        {expandedFaq === faq.q && (
                                            <div className="px-8 pb-8 text-lg font-medium text-muted-foreground leading-relaxed animate-in slide-in-from-top-2 duration-300">
                                                {faq.a}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Closing CTA */}
                <section className="relative py-32 md:py-48 overflow-hidden bg-primary/5">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-violet/5 rounded-full blur-[120px] pointer-events-none" />
                    <div className="container-custom text-center relative z-10 space-y-12">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="text-5xl md:text-[6rem] font-bold tracking-tight leading-[0.9]"
                        >
                            Build your <br /><span className="text-gradient-ds">safety net</span> <br />today.
                        </motion.h2>
                        <p className="max-w-2xl mx-auto text-xl md:text-2xl font-medium text-muted-foreground leading-relaxed italic">
                            Integrate directly with your live zone parameters and establish a pure parametric guard against unpredicted income loss.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/auth/access">
                                <Button className="btn-premium h-16 px-12 text-xl bg-foreground text-background hover:scale-105 shadow-2xl transition-transform">
                                    Enter Platform
                                </Button>
                            </Link>
                            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground/80">Takes less than 2 minutes.</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-border/40 bg-background py-16">
                <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="space-y-4 text-center md:text-left">
                        <span className="font-bold text-3xl tracking-tighter text-gradient-ds">{appIdentity.name}</span>
                        <p className="text-sm font-bold text-muted-foreground/60 flex items-center justify-center md:justify-start gap-2">
                            Guidewire DEVTrails 2026 • © 2026 Devspirits. All rights reserved.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                        <Link href="#" className="hover:text-primary transition-colors">Platform</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Risk Engine</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}