import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
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
import ContactPage from './pages/ContactPage';
import UniversityGuidesPage from './pages/UniversityGuidesPage';
import DecisionToolsPage from './pages/DecisionToolsPage';
import MBBSRussiaPage from './pages/MBBSRussiaPage';
import MBBSGeorgiaPage from './pages/MBBSGeorgiaPage';
import MBBSPhilippinesPage from './pages/MBBSPhilippinesPage';
import MBBSKazakhstanPage from './pages/MBBSKazakhstanPage';
import MBBSKyrgyzstanPage from './pages/MBBSKyrgyzstanPage';
import MBBSMalaysiaPage from './pages/MBBSMalaysiaPage';
import MBBSNepalPage from './pages/MBBSNepalPage';
import MBBSUzbekistanPage from './pages/MBBSUzbekistanPage';
import MBBSBosniaPage from './pages/MBBSBosniaPage';
import MBBSBulgariaPage from './pages/MBBSBulgariaPage';
import MBBSMoldovaPage from './pages/MBBSMoldovaPage';
import MBBSBelarusPage from './pages/MBBSBelarusPage';
import AboutUsPage from './pages/AboutUsPage';
import OurServicesPage from './pages/OurServicesPage';
import AdmissionProcessPage from './pages/AdmissionProcessPage';
import FMGECoachingPage from './pages/FMGECoachingPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import BlogNewsPage from './pages/BlogNewsPage';
import ApplyNowPage from './pages/ApplyNowPage';
import UniversityDetailsPage from './pages/UniversityDetailsPage';
import Gallery from './pages/Gallery';
import ProtectedRoute from './components/ProtectedRoute';
import WhatsAppButton from './components/WhatsAppButton';

// Create a client
const queryClient = new QueryClient();

// Redirect component to handle university redirects
const UniversityRedirect = () => {
  const { id } = useParams();
  return <Navigate to={`/university-details/${id}`} replace />;
};

// Debug component to check university routing
const CheckUniversityDebug = () => {
  const { id } = useParams();
  console.log(`Debug check for university ID: ${id}`);
  return <Navigate to={`/university-details/${id}`} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Redirect from old university route to the university-details route */}
          <Route path="/university/:id" element={<UniversityRedirect />} />
          {/* Debug route to check university routing */}
          <Route path="/check-university/:id" element={<CheckUniversityDebug />} />
          <Route path="/universities" element={<UniversitiesPage />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/dynamic-university/:id" element={<DynamicUniversityPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/country/:country" element={<CountryPage />} />
          <Route path="/webinar" element={<WebinarPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources/guides" element={<UniversityGuidesPage />} />
          <Route path="/resources/tools" element={<DecisionToolsPage />} />
          <Route path="/mbbs-in-russia" element={<MBBSRussiaPage />} />
          <Route path="/mbbs-in-georgia" element={<MBBSGeorgiaPage />} />
          <Route path="/mbbs-in-philippines" element={<MBBSPhilippinesPage />} />
          <Route path="/mbbs-in-kazakhstan" element={<MBBSKazakhstanPage />} />
          <Route path="/mbbs-in-kyrgyzstan" element={<MBBSKyrgyzstanPage />} />
          <Route path="/mbbs-in-malaysia" element={<MBBSMalaysiaPage />} />
          <Route path="/mbbs-in-nepal" element={<MBBSNepalPage />} />
          <Route path="/mbbs-in-uzbekistan" element={<MBBSUzbekistanPage />} />
          <Route path="/mbbs-in-bosnia" element={<MBBSBosniaPage />} />
          <Route path="/mbbs-in-bulgaria" element={<MBBSBulgariaPage />} />
          <Route path="/mbbs-in-moldova" element={<MBBSMoldovaPage />} />
          <Route path="/mbbs-in-belarus" element={<MBBSBelarusPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/our-services" element={<OurServicesPage />} />
          <Route path="/admission-process" element={<AdmissionProcessPage />} />
          <Route path="/fmge-next-coaching" element={<FMGECoachingPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/blog-news" element={<BlogNewsPage />} />
          <Route path="/apply-now" element={<ApplyNowPage />} />
          <Route path="/university-details/:id" element={<UniversityDetailsPage />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* WhatsApp Button - visible on all pages */}
        <WhatsAppButton phoneNumber="919846559675" />
      </div>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
