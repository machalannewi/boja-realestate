import { About } from "@/components/about";
import { Advantages } from "@/components/advantages";
import { Cta } from "@/components/cta";
import { Faq, Partners } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Ownership } from "@/components/ownership";
import { Portfolio } from "@/components/portfolio";
import { PropertyTypes } from "@/components/property-types";
import { Services } from "@/components/services";
import { Skyline } from "@/components/skyline";
import { Stack } from "@/components/stack";

// Section colours, so each exiting section reveals the next one's background as it shrinks away.
const WHITE = "#ffffff";
const CREAM = "#f7f4f0";
const CHARCOAL = "#1f1e21";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skyline />
      <Stack exit under={WHITE}>
        <Portfolio />
      </Stack>
      <Stack exit under={CHARCOAL}>
        <About />
      </Stack>
      <Services />
      <Stack exit under={WHITE}>
        <Ownership />
      </Stack>
      <Advantages />
      <PropertyTypes />
      <Stack enter above={WHITE} under={CREAM}>
        <Partners />
        <Faq />
      </Stack>
      <Stack exit under={CREAM}>
        <Cta />
      </Stack>
      <Footer />
    </main>
  );
}
