"use client";
import { theme } from "@/styles/theme";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "styled-components";
import "@/styles/global.css";
import StyledComponentsRegistry from "@/lib/registry";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
