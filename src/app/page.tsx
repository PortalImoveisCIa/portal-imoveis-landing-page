import { LandingPage } from "@/Views";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Portal Imóveis & Cia",
  description: "Portal Imobiliário de Santa Catarina",
};
export default function Home() {
  return <LandingPage />;
}
