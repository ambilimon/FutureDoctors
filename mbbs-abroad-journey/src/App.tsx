
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import { Toaster as Sonner } from '@/components/ui/sonner';
import { Toaster } from '@/components/ui/toaster';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import Dashboard from './pages/Dashboard';
import DynamicUniversityPage from './pages/DynamicUniversityPage';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import UniversityPage from './pages/UniversityPage';
import UniversitiesPage from './pages/UniversitiesPage';
import AuthPage from './pages/AuthPage';
import CountryPage from './pages/CountryPage';
import WebinarPage from './pages/WebinarPage';
import MBBSRussiaPage from './pages/MBBSRussiaPage';
import AboutUsPage from './pages/AboutUsPage';
import OurServicesPage from './pages/OurServicesPage';
import AdmissionProcessPage from './pages/AdmissionProcessPage';
import FMGECoachingPage from './pages/FMGECoachingPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import BlogNewsPage from './pages/BlogNewsPage';

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/university/:id" element={<UniversityPage />} />
          <Route path="/universities" element={<UniversitiesPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dynamic-university/:id" element={<DynamicUniversityPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/country/:country" element={<CountryPage />} />
          <Route path="/webinar" element={<WebinarPage />} />
          <Route path="/mbbs-in-russia" element={<MBBSRussiaPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/our-services" element={<OurServicesPage />} />
          <Route path="/admission-process" element={<AdmissionProcessPage />} />
          <Route path="/fmge-next-coaching" element={<FMGECoachingPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/blog-news" element={<BlogNewsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
