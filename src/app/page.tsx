import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Industries } from "@/components/home/Industries";
import { Statistics } from "@/components/home/Statistics";
import { Testimonials } from "@/components/home/Testimonials";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "SAHR MEDIA | Qualified Leads for SaaS & Construction Companies",
  description:
    "SAHR MEDIA delivers qualified, human-verified leads to SaaS and Construction sales teams. Book a free strategy call today.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Industries />
      <Statistics />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
