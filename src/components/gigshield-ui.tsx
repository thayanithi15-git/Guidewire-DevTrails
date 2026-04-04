"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ArrowRight, CheckCircle2, CloudRain, Moon, Sun, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/layoutStore";
import type { MetricCard, ZoneRisk } from "@/data/gigshield-data";

type Tone = MetricCard["tone"];

const tones: Record<Tone, string> = {
  primary: "bg-gradient-ds-indigo text-white",
  success: "bg-gradient-ds-emerald text-white",
  warning: "bg-gradient-ds-violet text-white",
  danger: "bg-rose-500/20 text-rose-600 dark:text-rose-400",
};

export function PageShell({
  eyebrow,
  title,
  description,
  actions,
  children,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-6">
          <div className="space-y-1">
            {eyebrow && (
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80">
                {eyebrow}
              </span>
            )}
            <h1 className="text-xl font-bold tracking-tight text-foreground">{title}</h1>
          </div>
          <div className="flex items-center gap-4">
            {actions}
            <div className="h-6 w-px bg-border/60 mx-2 hidden sm:block" />
            <ThemeQuickToggle />
          </div>
        </div>
      </header>
      
      <main className="mx-auto max-w-7xl space-y-8 px-6 py-10">
        <div className="max-w-3xl space-y-2">
           <p className="text-lg font-medium text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        {children}
      </main>
    </div>
  );
}

export function ThemeQuickToggle() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="rounded-full hover:bg-muted/60 transition-colors"
      onClick={toggleTheme}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}

export function MetricGrid({ metrics }: { metrics: MetricCard[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="glass-card p-6 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Icon size={80} />
            </div>
            <div className="space-y-4 relative z-10">
              <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm", tones[metric.tone])}>
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80">{metric.title}</p>
                <h3 className="mt-1 text-3xl font-bold tracking-tight text-foreground">{metric.value}</h3>
                <p className="mt-1.5 text-sm font-medium text-muted-foreground flex items-center gap-1.5">
                   <Zap className="h-3.5 w-3.5 text-accent-emerald" /> {metric.change}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export function SectionCard({
  title,
  description,
  action,
  children,
  className,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("glass-card overflow-hidden", className)}>
      <div className="p-6 md:p-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h2 className="text-xl font-bold tracking-tight text-foreground">{title}</h2>
            {description ? <p className="text-sm font-medium text-muted-foreground">{description}</p> : null}
          </div>
          {action}
        </div>
        {children}
      </div>
    </div>
  );
}

export function SimpleBadge({ value, tone = "primary" }: { value: string; tone?: Tone }) {
  const styles: Record<Tone, string> = {
    primary: "bg-primary/10 text-primary border-primary/20",
    success: "bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20",
    warning: "bg-accent-violet/10 text-accent-violet border-accent-violet/20",
    danger: "bg-rose-500/10 text-rose-500 border-rose-500/20",
  };

  return <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold ring-1 ring-inset ring-transparent", styles[tone])}>{value}</span>;
}

export function TableBlock({ columns, rows }: { columns: string[]; rows: (string | ReactNode)[][] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-muted/30 text-muted-foreground uppercase text-[10px] tracking-widest font-bold">
          <tr>
            {columns.map((column) => (
              <th key={column} className="px-6 py-4">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border/20">
          {rows.map((row, index) => (
            <tr key={index} className="hover:bg-muted/20 transition-colors group">
              {row.map((cell, cellIndex) => (
                <td key={`${index}-${cellIndex}`} className="px-6 py-5 font-medium text-foreground/90">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function EarningsAreaChart({ data }: { data: Array<{ label: string; earnings: number; protected: number }> }) {
  return (
    <div className="h-80 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="earnings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.2} />
              <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="protected" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-accent-emerald)" stopOpacity={0.2} />
              <stop offset="95%" stopColor="var(--color-accent-emerald)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" opacity={0.4} />
          <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fontSize: 11, fontWeight: 600, fill: "var(--color-muted-foreground)" }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fontWeight: 600, fill: "var(--color-muted-foreground)" }} />
          <Tooltip 
            contentStyle={{ backgroundColor: "var(--color-card)", borderRadius: "12px", border: "1px solid var(--color-border)", boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
          />
          <Area type="monotone" dataKey="earnings" stroke="var(--color-primary)" fill="url(#earnings)" strokeWidth={4} animationDuration={1500} />
          <Area type="monotone" dataKey="protected" stroke="var(--color-accent-emerald)" fill="url(#protected)" strokeWidth={4} animationDuration={1500} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function RiskLineChart({
  data,
  lines,
}: {
  data: Array<Record<string, string | number>>;
  lines: Array<{ key: string; color: string; name: string }>;
}) {
  return (
    <div className="h-72 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" opacity={0.4} />
          <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fontSize: 11, fontWeight: 600, fill: "var(--color-muted-foreground)" }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fontWeight: 600, fill: "var(--color-muted-foreground)" }} />
          <Tooltip contentStyle={{ backgroundColor: "var(--color-card)", borderRadius: "12px", border: "1px solid var(--color-border)" }} />
          {lines.map((line) => (
            <Line key={line.key} type="monotone" dataKey={line.key} stroke={line.color} strokeWidth={4} dot={{ r: 4, strokeWidth: 2, fill: "var(--color-card)" }} name={line.name} animationDuration={1500} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ComparisonBarChart({
  data,
  bars,
}: {
  data: Array<Record<string, string | number>>;
  bars: Array<{ key: string; color: string; name: string }>;
}) {
  return (
    <div className="h-72 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" opacity={0.4} />
          <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fontSize: 11, fontWeight: 600, fill: "var(--color-muted-foreground)" }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fontWeight: 600, fill: "var(--color-muted-foreground)" }} />
          <Tooltip contentStyle={{ backgroundColor: "var(--color-card)", borderRadius: "12px", border: "1px solid var(--color-border)" }} />
          {bars.map((bar) => (
            <Bar key={bar.key} dataKey={bar.key} fill={bar.color} radius={[8, 8, 0, 0]} name={bar.name} animationDuration={1500} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function DonutChart({ data, colors }: { data: Array<{ name: string; value: number }>; colors: string[] }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} innerRadius={80} outerRadius={105} paddingAngle={8} dataKey="value" animationDuration={1500}>
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={colors[index % colors.length]} stroke="transparent" />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: "var(--color-card)", borderRadius: "12px", border: "1px solid var(--color-border)" }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function GaugeCard({ value }: { value: number }) {
  const chartData = [{ name: "risk", value, fill: "var(--color-accent-violet)" }];

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="h-72 w-full relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart 
            innerRadius="80%" 
            outerRadius="100%" 
            data={chartData} 
            startAngle={210} 
            endAngle={-30} 
            barSize={16}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar background={{ fill: "var(--color-muted)", opacity: 0.2 }} dataKey="value" cornerRadius={20} animationDuration={1500} />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center -mt-4">
          <p className="text-5xl font-black tracking-tighter text-foreground">{value}</p>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80 mt-1">AI Risk Score</p>
        </div>
      </div>
    </div>
  );
}

export function WeatherCards({ items }: { items: Array<{ day: string; condition: string; risk: string; temperature: string; rain: string }> }) {
  return (
    <div className="grid gap-4 mt-2 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div key={item.day} className="rounded-3xl border border-border/40 bg-muted/20 p-5 group hover:bg-muted/40 transition-all">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-foreground">{item.day}</p>
            <SimpleBadge value={item.risk} tone={item.risk === "High" ? "danger" : item.risk === "Medium" ? "warning" : "success"} />
          </div>
          <div className="mt-6">
             <CloudRain className="h-8 w-8 text-primary/60 group-hover:text-primary transition-colors" />
             <p className="mt-3 text-sm font-semibold text-foreground">{item.condition}</p>
          </div>
          <div className="mt-5 flex items-center justify-between text-[11px] font-bold text-muted-foreground/80 uppercase">
            <span>{item.temperature}</span>
            <span>{item.rain}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function AlertList({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="flex gap-4 rounded-3xl border border-border/40 bg-muted/20 p-6 hover:border-primary/20 transition-all">
           <div className="h-2 w-2 rounded-full bg-accent-violet mt-1.5 shrink-0 shadow-[0_0_8px_rgba(var(--color-accent-violet),0.5)]" />
           <p className="text-sm font-medium text-foreground/90 leading-relaxed italic">"{item}"</p>
        </div>
      ))}
    </div>
  );
}

export function ZoneHeatGrid({ items }: { items: ZoneRisk[] }) {
  const intensityStyles = (risk: ZoneRisk["intensity"]) => {
    switch (risk) {
      case "High": return "from-rose-500/20 to-rose-500/5 text-rose-600 border-rose-500/20";
      case "Medium": return "from-accent-violet/20 to-accent-violet/5 text-accent-violet border-accent-violet/20";
      case "Low": return "from-accent-emerald/20 to-accent-emerald/5 text-accent-emerald border-accent-emerald/20";
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((zone) => (
        <div key={zone.zone} className={cn("rounded-3xl border bg-gradient-to-br p-6 hover:scale-[1.03] transition-all cursor-default", intensityStyles(zone.intensity))}>
          <div className="flex items-center justify-between mb-6">
            <p className="font-bold tracking-tight text-foreground">{zone.zone}</p>
            <SimpleBadge value={zone.intensity} tone={zone.intensity === "High" ? "danger" : zone.intensity === "Medium" ? "warning" : "success"} />
          </div>
          <div className="space-y-2">
            <div className="flex items-baseline justify-between">
              <span className="text-4xl font-black tabular-nums text-foreground">{zone.risk}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Risk Index</span>
            </div>
            <div className="h-2 w-full rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${zone.risk}%` }}
                className="h-full bg-current transition-all" 
              />
            </div>
          </div>
          <p className="mt-6 text-[11px] font-bold text-muted-foreground/70 uppercase flex items-center gap-2 tracking-wider">
            <CheckCircle2 className="h-3 w-3" /> {zone.activeWorkers} Partners Online
          </p>
        </div>
      ))}
    </div>
  );
}

export function QuickLinks({ items }: { items: Array<{ title: string; description: string; href?: string }> }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => {
        const content = (
          <div className="glass-card group p-6 hover:border-primary/40 hover:bg-muted/30 transition-all duration-300">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</p>
                <p className="text-sm font-medium text-muted-foreground leading-snug">{item.description}</p>
              </div>
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-muted group-hover:bg-primary group-hover:text-white transition-all transform group-hover:translate-x-1">
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>
          </div>
        );

        return item.href ? (
          <Link key={item.title} href={item.href}>
            {content}
          </Link>
        ) : (
          <div key={item.title}>{content}</div>
        );
      })}
    </div>
  );
}
