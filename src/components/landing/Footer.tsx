import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-gold/10 py-14 px-5 sm:px-12 text-center">
      <p
        className="font-urdu text-gold/80 mx-auto"
        style={{ fontSize: "clamp(20px, 3vw, 28px)" }}
        dir="rtl"
        lang="ur"
      >
        یہ ہماری اردو ادب کی خدمت ہے
      </p>
      <p className="font-classical italic text-secondary-warm mt-2">
        This is our service to Urdu literature.
      </p>

      <hr className="divider-gold mx-auto my-8 w-32 border-0" />

      <p className="font-etched text-[10px] tracking-[0.24em] uppercase text-tertiary-warm">
        Bazm-e-Sukhan · بزمِ سخن · MMXXVI
      </p>

      <p className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-classical italic text-secondary-warm">
        Built with <Heart size={12} className="text-rose" fill="currentColor" /> for the Diwan
      </p>
    </footer>
  );
}
