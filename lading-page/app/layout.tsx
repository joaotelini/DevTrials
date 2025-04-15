import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "DevTrails - Treine para entrevistas técnicas com IA | Planos a partir de R$0",
  description:
    "Prepare-se para entrevistas técnicas com nosso simulador de IA. Pratique, receba feedback instantâneo e ganhe confiança para conquistar a sua vaga dos sonhos. Planos gratuitos e premium disponíveis.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
