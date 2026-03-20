"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeQuickToggle } from "@/components/gigshield-ui";
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

function Badge({ children, active }: { children: React.ReactNode; active?: boolean }) {
    return (
        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${active ? "border-foreground bg-foreground text-background shadow-sm" : "border-border text-muted-foreground bg-muted/30 backdrop-blur-sm"
            }`}>
            {children}
        </span>
    );
}

export function ModernLandingPageView() {
    const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-foreground/20 selection:text-foreground flex flex-col">
            {/* Navigation - Enhanced Blur & Transparency */}
            <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
                <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-6">
                    <div className="flex items-center gap-5">
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
                        <Link href="/auth/access" className="hidden sm:block">
                            <Button variant="ghost" className="h-8 px-4 text-sm font-medium hover:bg-muted/50 rounded-full">
                                Log in
                            </Button>
                        </Link>
                        <Link href="/auth/access">
                            <Button className="h-8 rounded-full bg-foreground text-background hover:bg-foreground/90 px-5 text-sm font-medium shadow-sm transition-transform hover:scale-105 active:scale-95">
                                Get started
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section - Fixed Spacing & Added Gradient Text */}
                <section className="relative mx-auto max-w-screen-xl overflow-hidden px-6 pt-12 pb-20 md:pt-20 md:pb-32">
                    {/* Refined Ambient Background Glow */}
                    <div className="absolute right-0 top-0 -z-10 h-[400px] w-[400px] -translate-y-1/4 translate-x-1/4 rounded-full bg-foreground/5 blur-[100px] md:h-[600px] md:w-[600px]" />

                    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
                        <div className="space-y-8 md:space-y-5 z-10">
                            {/* <Badge active>Income protection for delivery partners</Badge> */}

                            <div className="space-y-5 md:space-y-6">
                                <h1 className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-[4.5rem] lg:leading-[1.05]">
                                    Protect earnings from the unexpected.
                                </h1>
                                <p className="max-w-xl text-base text-muted-foreground leading-relaxed md:text-lg font-medium">
                                    Heavy rain, AQI spikes, and zone closures cost delivery partners unrecoverable wages.
                                    GigShield detects disruptions and restores your lost income instantly.
                                    <strong className="text-foreground font-semibold"> Pure protection, no paperwork.</strong>
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col items-center gap-4 sm:flex-row">
                                <Link href="/auth/access" className="w-full sm:w-auto">
                                    <Button className="h-12 w-full rounded-full bg-foreground px-8 text-base font-medium text-background shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all sm:w-auto">
                                        Start Protection Demo
                                    </Button>
                                </Link>
                                <Link href="/student/dashboard" className="w-full sm:w-auto">
                                    <Button variant="outline" className="h-12 w-full rounded-full border-border px-8 text-base font-medium hover:bg-muted/50 transition-all sm:w-auto">
                                        Explore Dashboard
                                    </Button>
                                </Link>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid max-w-lg grid-cols-2 gap-6 border-t border-border/60 pt-8 sm:grid-cols-3 md:gap-8">
                                {heroStats.map((item) => (
                                    <div key={item.label} className="space-y-1.5">
                                        <p className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{item.value}</p>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Live Profile Component */}
                        <div className="perspective-1000 relative mx-auto mt-8 w-full max-w-md lg:mt-0 lg:ml-auto">
                            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-foreground/10 to-transparent blur-2xl" />
                            <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/80 shadow-2xl backdrop-blur-xl transition-transform duration-500 hover:scale-[1.02]">
                                <div className="flex items-start justify-between border-b border-border/50 bg-muted/30 p-6">
                                    <div>
                                        <div className="mb-3 flex items-center gap-2">
                                            <span className="relative flex h-2.5 w-2.5">
                                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                                            </span>
                                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Live Coverage</span>
                                        </div>
                                        <h3 className="text-xl font-semibold tracking-tight">{workerProfile.name}</h3>
                                        <p className="mt-1 font-mono text-sm text-muted-foreground">ID: {workerProfile.policyId}</p>
                                    </div>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/50 bg-background shadow-sm">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                    </div>
                                </div>

                                <div className="space-y-5 p-6">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground font-medium">Zone Profile</span>
                                        <span className="rounded-lg bg-muted px-3 py-1 font-semibold">{workerProfile.zone}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground font-medium">Weekly Premium</span>
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
                        </div>
                    </div>
                </section>

                {/* Dynamic Bento Grid: Core Disruptions */}
                <section className="py-24 border-y border-border/50 bg-gradient-to-b from-muted/10 to-transparent">
                    <div className="mx-auto max-w-screen-xl px-6">
                        <div className="mb-16 max-w-2xl">
                            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-4">Built around external risk.</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We insure pure external disruptions. No medical, no vehicle. If the system stops you from working, your earnings are restored.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {disruptions.map((item, i) => {
                                const Icon = item.icon;
                                const isFeatured = i === 0;

                                return (
                                    <div
                                        key={item.title}
                                        className={`group relative overflow-hidden rounded-[2rem] border border-border/60 bg-card p-8 md:p-10 hover:border-foreground/20 hover:shadow-lg transition-all duration-300 ${isFeatured ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-card to-muted/30' : ''
                                            }`}
                                    >
                                        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-muted border border-border/50 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="h-6 w-6 text-foreground" />
                                        </div>
                                        <h3 className="font-semibold text-2xl mb-3 tracking-tight">{item.title}</h3>
                                        <p className={`text-muted-foreground mb-8 leading-relaxed ${isFeatured ? 'max-w-xl text-lg' : 'text-base'}`}>
                                            {item.description}
                                        </p>

                                        <ul className="space-y-3 pt-6 border-t border-border/50">
                                            {item.examples.map((ex) => (
                                                <li key={ex} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                                                    <CheckCircle className="h-4 w-4 text-muted-foreground shrink-0" />
                                                    <span>{ex}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Feature Highlights - Minimal Grid */}
                <section className="py-24">
                    <div className="mx-auto max-w-screen-xl px-6">
                        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
                            {landingHighlights.slice(0, 3).map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.title} className="space-y-4">
                                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted/50 border border-border/50">
                                            <Icon className="h-5 w-5 text-foreground" />
                                        </div>
                                        <h3 className="font-semibold text-xl tracking-tight">{item.title}</h3>
                                        <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Sticky Layout: The Mechanism */}
                <section className="py-24 border-t border-border/50 bg-background">
                    <div className="mx-auto max-w-screen-xl px-6">
                        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
                            <div className="lg:sticky lg:top-32">
                                <Badge>Automated Lifecycle</Badge>
                                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mt-6 mb-4">The mechanism.</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    A transparent, completely automated lifecycle designed to intercept financial loss the moment an event occurs. Zero manual claims required.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {landingJourney.map((step, i) => (
                                    <div key={step.step} className="group flex gap-6 p-6 rounded-[2rem] border border-border/60 bg-card hover:bg-muted/30 hover:border-border transition-all duration-300">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="h-10 w-10 rounded-full bg-muted border border-border/50 text-foreground flex items-center justify-center font-mono text-sm font-semibold group-hover:bg-foreground group-hover:text-background transition-colors">
                                                0{i + 1}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing - Floating Cards */}
                <section className="py-32 border-t border-border/50 bg-muted/10 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-foreground/5 rounded-[100%] blur-[120px] pointer-events-none" />
                    <div className="mx-auto max-w-screen-xl px-6 relative z-10">
                        <div className="text-center max-w-2xl mx-auto mb-20">
                            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-4">Structured on weekly predictability.</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Premiums dynamically adapt every Sunday. Matched exactly to the gig economy earnings cycle to ease cash flow stress.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {pricingTiers.map((tier) => (
                                <div
                                    key={tier.name}
                                    className={`relative flex flex-col rounded-[2rem] border p-8 transition-all duration-300 ${tier.highlighted
                                        ? 'border-foreground/30 bg-card shadow-2xl md:-translate-y-4 z-10 ring-1 ring-foreground/5'
                                        : 'border-border/60 bg-card/50 hover:bg-card hover:border-border'
                                        }`}
                                >
                                    {tier.highlighted && (
                                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm">
                                            Recommended
                                        </div>
                                    )}
                                    <div className="mb-6">
                                        <h3 className="font-semibold text-xl mb-2">{tier.name}</h3>
                                        <p className="text-sm text-muted-foreground min-h-[40px] leading-relaxed">{tier.description}</p>
                                    </div>

                                    <div className="mb-8 pb-8 border-b border-border/60">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl font-semibold tracking-tight">{tier.startingPrice}</span>
                                            <span className="text-muted-foreground font-medium">/ wk</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-4 mb-8 flex-1">
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3 text-sm font-medium text-foreground/80">
                                                <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                                                <span className="leading-snug">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        className={`w-full h-12 rounded-xl text-base font-semibold transition-all ${tier.highlighted ? 'bg-foreground text-background hover:shadow-md hover:-translate-y-0.5' : 'bg-muted text-foreground hover:bg-muted/80'}`}
                                    >
                                        Select Tier
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ - Split Layout */}
                <section className="py-24 border-t border-border/50">
                    <div className="mx-auto max-w-screen-xl px-6 grid lg:grid-cols-[1fr_1.5fr] gap-16">
                        <div className="lg:sticky lg:top-32 h-fit space-y-12">
                            <div>
                                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl mb-4">Clear, transparent logic.</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">No hidden clauses, no claims teams. The parameters command the contract.</p>
                            </div>

                            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/50">
                                {trustIndicators.map((metric) => (
                                    <div key={metric.metric} className="space-y-1.5">
                                        <p className="text-4xl font-semibold tracking-tight">{metric.value}</p>
                                        <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{metric.metric}</p>
                                        <p className="text-sm text-muted-foreground">{metric.subtext}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3">
                            {landingFaq.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`rounded-2xl border transition-all duration-200 ${expandedFaq === faq.q ? 'border-border bg-muted/30 shadow-sm' : 'border-transparent hover:border-border/50 hover:bg-muted/10'}`}
                                >
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === faq.q ? null : faq.q)}
                                        className="w-full flex items-center justify-between p-6 text-left group"
                                    >
                                        <span className="font-medium text-lg pr-4">{faq.q}</span>
                                        <span className={`flex-shrink-0 rounded-full p-2 transition-colors ${expandedFaq === faq.q ? 'bg-background shadow-sm border border-border' : 'bg-muted group-hover:bg-border/50'}`}>
                                            {expandedFaq === faq.q ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                                        </span>
                                    </button>
                                    {expandedFaq === faq.q && (
                                        <div className="px-6 pb-6 text-base text-muted-foreground leading-relaxed animate-in slide-in-from-top-2 fade-in duration-200">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Cinematic Ending CTA */}
                <section className="py-32 md:py-48 relative overflow-hidden">
                    <div className="absolute inset-0  text-background" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-background/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative mx-auto max-w-screen-md px-6 text-center z-10">
                        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">Build your safety net today.</h2>
                        <p className=" mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Integrate directly with your live zone parameters and establish a pure parametric guard against unpredicted income loss.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/auth/access">
                                <Button className="h-14 rounded-full bg-background text-foreground hover:bg-background/90 px-10 text-lg font-semibold shadow-xl hover:scale-105 transition-transform">
                                    Enter Platform
                                </Button>
                            </Link>
                            <p className="text-sm font-medium text-muted-foreground sm:ml-4">Takes less than 2 minutes.</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="border-t border-border bg-background py-10">
                <div className="mx-auto flex max-w-screen-xl flex-col md:flex-row items-center justify-between px-6 gap-6">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-lg tracking-tight">{appIdentity.name}</span>
                        <span className="text-muted-foreground text-sm font-medium">© 2026</span>
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-muted-foreground">
                        <Link href="#" className="hover:text-foreground transition-colors">Platform</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}