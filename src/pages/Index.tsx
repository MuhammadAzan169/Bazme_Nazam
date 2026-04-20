import { lazy, Suspense } from "react";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import Navbar from "@/components/shared/Navbar";
import ParticleCanvas from "@/components/shared/ParticleCanvas";
import MoodAura from "@/components/shared/MoodAura";
import MoodPicker from "@/components/shared/MoodPicker";

const TareekharSection = lazy(() => import("@/components/landing/TareekharSection"));
const AsnafSection = lazy(() => import("@/components/landing/AsnafSection"));
const ShuaraSection = lazy(() => import("@/components/landing/ShuaraSection"));
const NovelsSection = lazy(() => import("@/components/landing/NovelsSection"));
const ShayariCarousel = lazy(() => import("@/components/landing/ShayariCarousel"));
const MiniAIWidget = lazy(() => import("@/components/landing/MiniAIWidget"));

const SectionFallback = () => (
  <div className="flex justify-center py-20">
    <span className="font-urdu text-gold/40 text-xl animate-pulse" dir="rtl">
      ✦
    </span>
  </div>
);

const LandingPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleCanvas />
      <MoodAura />
      <Navbar variant="landing" />

      <main className="relative z-10">
        <HeroSection />

        {/* ── Mood / Kaifiyat ────────────────────────────────── */}
        <section
          id="kaifiyat"
          className="relative py-20 sm:py-28 px-4 sm:px-8 mx-auto max-w-[1200px]"
        >
          <hr className="section-sep mb-20 sm:mb-28" />

          <div className="text-center mb-12">
            <p className="font-etched text-[10px] tracking-[0.32em] uppercase text-gold/55 mb-4">
              ✦ Aaj ki Kaifiyat ✦
            </p>
            <h2
              className="font-urdu text-grad-gold"
              style={{ fontSize: "clamp(30px, 5vw, 52px)" }}
              dir="rtl"
              lang="ur"
            >
              آپ کی کیفیت کیا ہے؟
            </h2>
            <p className="font-display italic text-foreground/70 mt-2 text-lg sm:text-xl">
              What Stirs Your Heart Tonight?
            </p>
            <p className="font-classical italic text-secondary-warm mt-3 max-w-lg mx-auto text-sm">
              The bazm will shift its light to match your mood.
            </p>
            <hr className="divider-gold mx-auto mt-6 w-20 border-0" />
          </div>

          <MoodPicker showImages />
        </section>

        <hr className="section-sep mx-4 sm:mx-8" />
        <Suspense fallback={<SectionFallback />}>
          <TareekharSection />
        </Suspense>

        <hr className="section-sep mx-4 sm:mx-8" />
        <Suspense fallback={<SectionFallback />}>
          <AsnafSection />
        </Suspense>

        <hr className="section-sep mx-4 sm:mx-8" />
        <Suspense fallback={<SectionFallback />}>
          <ShuaraSection />
        </Suspense>

        <hr className="section-sep mx-4 sm:mx-8" />
        <Suspense fallback={<SectionFallback />}>
          <NovelsSection />
        </Suspense>

        <hr className="section-sep mx-4 sm:mx-8" />
        <Suspense fallback={<SectionFallback />}>
          <ShayariCarousel />
        </Suspense>

        <Footer />
      </main>

      <Suspense fallback={null}>
        <MiniAIWidget />
      </Suspense>
    </div>
  );
};

export default LandingPage;
