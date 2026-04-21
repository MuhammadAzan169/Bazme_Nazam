import { lazy, Suspense, useRef, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import { useMoodTheme } from "@/hooks/useMoodTheme";
import CustomCursor from "@/components/shared/CustomCursor";
import SmoothScroll from "@/components/shared/SmoothScroll";
import ScrollToTop from "@/components/shared/ScrollToTop";
import { useInkSplash } from "@/hooks/useInkSplash";

const ChatbotPage = lazy(() => import("./pages/ChatbotPage"));

const queryClient = new QueryClient();

function MoodThemeBridge({ children }: { children: React.ReactNode }) {
  useMoodTheme();
  return <>{children}</>;
}

function InkCanvas() {
  const inkRef = useRef<HTMLCanvasElement>(null);
  useInkSplash(inkRef);
  return (
    <canvas
      ref={inkRef}
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9000 }}
    />
  );
}

function MobileAwareCursor() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
  }, []);
  if (isMobile) return null;
  return <CustomCursor />;
}

const ChatbotFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse text-gold">Loading...</div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MoodThemeBridge>
          <InkCanvas />
          <SmoothScroll>
            <ScrollToTop />
            <MobileAwareCursor />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route
                path="/chatbot"
                element={
                  <Suspense fallback={<ChatbotFallback />}>
                    <ChatbotPage />
                  </Suspense>
                }
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SmoothScroll>
        </MoodThemeBridge>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
