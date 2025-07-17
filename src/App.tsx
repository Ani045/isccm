import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import EventsPage from "./pages/EventsPage";
import ExecutiveCommitteePage from "./pages/ExecutiveCommitteePage";
import GalleryPage from "./pages/GalleryPage";
import DCCS2024Page from "./pages/DCCS2024Page";
import DCCS2024BrochurePage from "./pages/DCCS2024BrochurePage";
import WorkshopsPage from "./pages/WorkshopsPage";
import NewsPage from "./pages/NewsPage";
import TarangNewsletterPage from "./pages/TarangNewsletterPage";
import BranchElectionPage from "./pages/BranchElectionPage";
import ContactPage from "./pages/ContactPage";
import MembersForumPage from "./pages/MembersForumPage";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/executive-committee" element={<ExecutiveCommitteePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/dccs-2024" element={<DCCS2024Page />} />
          <Route path="/dccs-2024-brochure" element={<DCCS2024BrochurePage />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/tarang-newsletter" element={<TarangNewsletterPage />} />
          <Route path="/branch-election" element={<BranchElectionPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/members-forum" element={<MembersForumPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;