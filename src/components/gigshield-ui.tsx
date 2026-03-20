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
import { ArrowRight, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/layoutStore";
import type { MetricCard, ZoneRisk } from "@/data/gigshield-data";

type Tone = MetricCard["tone"];

const tones: Record<Tone, string> = {
  primary: "from-sky-500/20 to-sky-400/5 text-sky-600 dark:text-sky-300",
  success: "from-emerald-500/20 to-emerald-400/5 text-emerald-600 dark:text-emerald-300",
  warning: "from-amber-500/20 to-amber-400/5 text-amber-600 dark:text-amber-300",
  danger: "from-rose-500/20 to-rose-400/5 text-rose-600 dark:text-rose-300",
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
      <div className="border-b border-border/70 bg-background/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 md:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-2">
              {eyebrow ? (
                <span className="inline-flex w-fit rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">
                  {eyebrow}
                </span>
              ) : null}
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h1>
                <p className="max-w-3xl text-sm text-muted-foreground md:text-base">{description}</p>
              </div>
            </div>
            {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 md:px-6">{children}</div>
    </div>
  );
}

export function ThemeQuickToggle() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <Button variant="outline" className="gap-2" onClick={toggleTheme}>
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      {isDark ? "Light mode" : "Dark mode"}
    </Button>
  );
}

export function MetricGrid({ metrics }: { metrics: MetricCard[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="rounded-3xl border border-border/70 bg-card p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-muted-foreground">{metric.title}</p>
                <h3 className="mt-3 text-3xl font-bold tracking-tight text-foreground">{metric.value}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{metric.change}</p>
              </div>
              <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br", tones[metric.tone])}>
                <Icon className="h-5 w-5" />
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
    <div className={cn("rounded-3xl border border-border/70 bg-card p-5 shadow-sm", className)}>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">{title}</h2>
          {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}

export function SimpleBadge({ value, tone = "primary" }: { value: string; tone?: Tone }) {
  const styles: Record<Tone, string> = {
    primary: "bg-sky-500/10 text-sky-700 dark:text-sky-300",
    success: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    warning: "bg-amber-500/10 text-amber-700 dark:text-amber-300",
    danger: "bg-rose-500/10 text-rose-700 dark:text-rose-300",
  };

  return <span className={cn("inline-flex rounded-full px-3 py-1 text-xs font-semibold", styles[tone])}>{value}</span>;
}

export function TableBlock({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border/70">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-muted/50 text-muted-foreground">
          <tr>
            {columns.map((column) => (
              <th key={column} className="px-4 py-3 font-medium">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-t border-border/60">
              {row.map((cell, cellIndex) => (
                <td key={`${index}-${cellIndex}`} className="px-4 py-3 text-foreground">
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
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="earnings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="protected" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
          <XAxis dataKey="label" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          <Area type="monotone" dataKey="earnings" stroke="#0ea5e9" fill="url(#earnings)" strokeWidth={3} />
          <Area type="monotone" dataKey="protected" stroke="#22c55e" fill="url(#protected)" strokeWidth={3} />
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
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
          <XAxis dataKey="label" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          {lines.map((line) => (
            <Line key={line.key} type="monotone" dataKey={line.key} stroke={line.color} strokeWidth={3} dot={{ r: 3 }} name={line.name} />
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
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
          <XAxis dataKey="label" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          {bars.map((bar) => (
            <Bar key={bar.key} dataKey={bar.key} fill={bar.color} radius={[12, 12, 0, 0]} name={bar.name} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function DonutChart({ data, colors }: { data: Array<{ name: string; value: number }>; colors: string[] }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} innerRadius={70} outerRadius={95} paddingAngle={4} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function GaugeCard({ value }: { value: number }) {
  const chartData = [{ name: "risk", value, fill: "#f59e0b" }];

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="h-60 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart innerRadius="70%" outerRadius="100%" data={chartData} startAngle={180} endAngle={0} barSize={18}>
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar background dataKey="value" cornerRadius={20} />
            <Tooltip />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      <div className="-mt-28 text-center">
        <p className="text-4xl font-bold text-foreground">{value}</p>
        <p className="text-sm text-muted-foreground">AI risk score</p>
      </div>
    </div>
  );
}

export function WeatherCards({ items }: { items: Array<{ day: string; condition: string; risk: string; temperature: string; rain: string }> }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div key={item.day} className="rounded-2xl border border-border/70 bg-muted/30 p-4">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-foreground">{item.day}</p>
            <SimpleBadge value={item.risk} tone={item.risk === "High" ? "danger" : item.risk === "Medium" ? "warning" : "success"} />
          </div>
          <p className="mt-4 text-sm text-foreground">{item.condition}</p>
          <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
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
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item} className="rounded-2xl border border-border/70 bg-muted/30 p-4 text-sm text-foreground">
          {item}
        </div>
      ))}
    </div>
  );
}

export function ZoneHeatGrid({ items }: { items: ZoneRisk[] }) {
  const colorClass = (risk: ZoneRisk["intensity"]) =>
    risk === "High"
      ? "from-rose-500/20 to-rose-500/5 border-rose-500/20"
      : risk === "Medium"
        ? "from-amber-500/20 to-amber-500/5 border-amber-500/20"
        : "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20";

  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {items.map((zone) => (
        <div key={zone.zone} className={cn("rounded-2xl border bg-gradient-to-br p-4", colorClass(zone.intensity))}>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-foreground">{zone.zone}</p>
            <SimpleBadge value={zone.intensity} tone={zone.intensity === "High" ? "danger" : zone.intensity === "Medium" ? "warning" : "success"} />
          </div>
          <p className="mt-3 text-3xl font-bold text-foreground">{zone.risk}</p>
          <div className="mt-2 h-2 rounded-full bg-background/70">
            <div className="h-2 rounded-full bg-foreground/70" style={{ width: `${zone.risk}%` }} />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{zone.activeWorkers} active workers in this delivery zone</p>
        </div>
      ))}
    </div>
  );
}

export function QuickLinks({ items }: { items: Array<{ title: string; description: string; href?: string }> }) {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => {
        const content = (
          <div className="rounded-2xl border border-border/70 bg-card p-4 transition hover:-translate-y-0.5 hover:border-sky-500/30">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
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
