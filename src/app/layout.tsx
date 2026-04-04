import { SearchProvider } from "@/components/searchProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeInitializer } from "@/components/theme-initializer";
import type { Metadata } from "next";
import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Devspirits | AI-Powered Parametric Income Protection",
  description: "Devspirits is a premium parametric insurance platform for India's gig economy, protecting delivery partners from unrecoverable income loss.",
  icons: {
    icon: "/progress_iq.png",
    shortcut: "/progress_iq.png",
    apple: "/progress_iq.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ThemeInitializer />
          <SearchProvider>{children}</SearchProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
