import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ChatbotPage from "./pages/ChatbotPage.tsx";
import { useMoodTheme } from "@/hooks/useMoodTheme";
import CustomCursor from "@/components/shared/CustomCursor";
import SmoothScroll from "@/components/shared/SmoothScroll";
import ScrollToTop from "@/components/shared/ScrollToTop";

const queryClient = new QueryClient();

function MoodThemeBridge({ children }: { children: React.ReactNode }) {
  useMoodTheme();
  return <>{children}</>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MoodThemeBridge>
          <SmoothScroll>
            <ScrollToTop />
            <CustomCursor />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/chatbot" element={<ChatbotPage />} />
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
