import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import TareekharSection from "@/components/landing/TareekharSection";
import AsnafSection from "@/components/landing/AsnafSection";
import ShuaraSection from "@/components/landing/ShuaraSection";
import NovelsSection from "@/components/landing/NovelsSection";
import ShayariCarousel from "@/components/landing/ShayariCarousel";
import MaktabaSection from "@/components/landing/MaktabaSection";
import MiniAIWidget from "@/components/landing/MiniAIWidget";
import Navbar from "@/components/shared/Navbar";
import ParticleCanvas from "@/components/shared/ParticleCanvas";
import MoodAura from "@/components/shared/MoodAura";
import MoodPicker from "@/components/shared/MoodPicker";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleCanvas />
      <MoodAura />
      <Navbar variant="landing" />

      <main className="relative z-10">
        <HeroSection />

        {/* Mood gallery */}
        <section
          id="kaifiyat"
          className="relative py-20 sm:py-28 px-4 sm:px-12 mx-auto max-w-[1200px]"
        >
          <div className="text-center">
            <p className="font-etched text-[10px] tracking-[0.28em] uppercase text-primary/70 mb-3">
              ✦ Aaj ki Kaifiyat — Today's Mood ✦
            </p>
            <h2
              className="font-urdu text-primary mt-2"
              style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
              dir="rtl"
              lang="ur"
            >
              آپ کی کیفیت کیا ہے؟
            </h2>
            <p className="font-display italic text-grad-gold mt-2 text-xl sm:text-2xl">
              What Stirs Your Heart Tonight?
            </p>
            <p className="font-classical italic text-secondary-warm mt-4 max-w-xl mx-auto">
              Choose a mood — the entire bazm will shift its colour, its light, its breath to match yours.
            </p>
          </div>

          <div className="mt-12">
            <MoodPicker showImages />
          </div>
        </section>

        <TareekharSection />
        <AsnafSection />
        <ShuaraSection />
        <NovelsSection />
        <ShayariCarousel />
        <MaktabaSection />
        <Footer />
      </main>

      <MiniAIWidget />
    </div>
  );
};

export default LandingPage;
