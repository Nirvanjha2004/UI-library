import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InstallationPage from './pages/InstallationPage';
import DocumentationPage from './pages/DocumentationPage';
import ButtonsPage from './pages/ButtonsPage';
import CardsPage from './pages/CardsPage';
import ChipsPage from './pages/ChipsPage';
import AvatarsPage from './pages/AvatarsPage';
import BadgesPage from './pages/BadgesPage';
import TabsPage from './pages/TabsPage';
import BreadcrumbsPage from './pages/BreadcrumbsPage';
import BottomNavigationPage from './pages/BottomNavigationPage';
import SpeedDialPage from './pages/SpeedDialPage';
import DrawerPage from './pages/DrawerPage';
import PaginationPage from './pages/PaginationPage';
import AlertsPage from './pages/AlertsPage';
import ProgressPage from './pages/ProgressPage';
import SkeletonPage from './pages/SkeletonPage';
import TooltipPage from './pages/TooltipPage';
import ToastPage from './pages/ToastPage';
import TextFieldsPage from './pages/TextFieldsPage';
import SwitchesPage from './pages/SwitchesPage';
import SlidersPage from './pages/SlidersPage';
import MenusPage from './pages/MenusPage';
import ListsPage from './pages/ListsPage';
import TablesPage from './pages/TablesPage';
import ChartsPage from './pages/ChartsPage';
import AccordionPage from './pages/AccordionPage';
import ModalPage from './pages/ModalPage';
import StepperPage from './pages/StepperPage';
import GalleryPage from './pages/GalleryPage';
import PremiumPage from './pages/premium/PremiumPage';
import TemplatesPage from './pages/premium/TemplatesPage';
import PremiumPagesPage from './pages/premium/PagesPage';
import PremiumComponentsPage from './pages/premium/ComponentsPage';
import ThemesPage from './pages/premium/ThemesPage';
import DarkThemeDemo from './pages/premium/demos/DarkThemeDemo';
import LightThemeDemo from './pages/premium/demos/LightThemeDemo';
import GradientThemeDemo from './pages/premium/demos/GradientThemeDemo';
import ThemeBuilderDemo from './pages/premium/demos/ThemeBuilderDemo';
import InteractiveMapsDemo from './pages/premium/demos/InteractiveMapsDemo';
import FileUploadDemo from './pages/premium/demos/FileUploadDemo';
import EcommerceDemo from './pages/premium/demos/EcommerceDemo';
import TravelBookingDemo from './pages/premium/demos/TravelBookingDemo';
import AgencyDemo from './pages/premium/demos/AgencyDemo';
import DashboardDemo from './pages/premium/demos/DashboardDemo';
import PricingPageDemo from './pages/premium/demos/PricingPageDemo';
import AuthPagesDemo from './pages/premium/demos/AuthPagesDemo';
import ProfilePagesDemo from './pages/premium/demos/ProfilePagesDemo';
import BlogDemo from './pages/premium/demos/BlogDemo';
import PortfolioDemo from './pages/premium/demos/PortfolioDemo';
import ContactPageDemo from './pages/premium/demos/ContactPageDemo';
import LandingPageDemo from './pages/premium/demos/LandingPageDemo';
import AdvancedChartsDemo from './pages/premium/demos/AdvancedChartsDemo';
import ComplexFormsDemo from './pages/premium/demos/ComplexFormsDemo';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/installation" element={<InstallationPage />} />
      <Route path="/documentation" element={<DocumentationPage />} />
      
      {/* Basic Components */}
      <Route path="/components/buttons" element={<ButtonsPage />} />
      <Route path="/components/cards" element={<CardsPage />} />
      <Route path="/components/chips" element={<ChipsPage />} />
      <Route path="/components/avatars" element={<AvatarsPage />} />
      <Route path="/components/badges" element={<BadgesPage />} />

      {/* Navigation */}
      <Route path="/components/tabs" element={<TabsPage />} />
      <Route path="/components/breadcrumbs" element={<BreadcrumbsPage />} />
      <Route path="/components/bottom-navigation" element={<BottomNavigationPage />} />
      <Route path="/components/speed-dial" element={<SpeedDialPage />} />
      <Route path="/components/drawer" element={<DrawerPage />} />
      <Route path="/components/pagination" element={<PaginationPage />} />

      {/* Feedback */}
      <Route path="/components/alerts" element={<AlertsPage />} />
      <Route path="/components/progress" element={<ProgressPage />} />
      <Route path="/components/skeleton" element={<SkeletonPage />} />
      <Route path="/components/tooltip" element={<TooltipPage />} />
      <Route path="/components/toast" element={<ToastPage />} />

      {/* Inputs */}
      <Route path="/components/text-fields" element={<TextFieldsPage />} />
      <Route path="/components/switches" element={<SwitchesPage />} />
      <Route path="/components/sliders" element={<SlidersPage />} />
      <Route path="/components/menus" element={<MenusPage />} />

      {/* Data Display */}
      <Route path="/components/lists" element={<ListsPage />} />
      <Route path="/components/tables" element={<TablesPage />} />
      <Route path="/components/charts" element={<ChartsPage />} />
      <Route path="/components/accordion" element={<AccordionPage />} />

      {/* Surfaces */}
      <Route path="/components/modal" element={<ModalPage />} />
      <Route path="/components/stepper" element={<StepperPage />} />
      <Route path="/components/gallery" element={<GalleryPage />} />

      {/* Premium Routes */}
      <Route path="/premium" element={<PremiumPage />} />
      <Route path="/premium/templates" element={<TemplatesPage />} />
      <Route path="/premium/pages" element={<PremiumPagesPage />} />
      <Route path="/premium/components" element={<PremiumComponentsPage />} />
      <Route path="/premium/themes" element={<ThemesPage />} />

      {/* Premium Demo Routes */}
      <Route path="/premium/themes/dark-demo" element={<DarkThemeDemo />} />
      <Route path="/premium/themes/light-demo" element={<LightThemeDemo />} />
      <Route path="/premium/themes/gradient-demo" element={<GradientThemeDemo />} />
      <Route path="/premium/themes/builder-demo" element={<ThemeBuilderDemo />} />
      <Route path="/premium/components/maps-demo" element={<InteractiveMapsDemo />} />
      <Route path="/premium/components/upload-demo" element={<FileUploadDemo />} />
      <Route path="/premium/templates/ecommerce-demo" element={<EcommerceDemo />} />
      <Route path="/premium/templates/travel-demo" element={<TravelBookingDemo />} />
      <Route path="/premium/templates/agency-demo" element={<AgencyDemo />} />
      <Route path="/premium/templates/dashboard-demo" element={<DashboardDemo />} />
      <Route path="/premium/pages/pricing-demo" element={<PricingPageDemo />} />
      <Route path="/premium/pages/auth-demo" element={<AuthPagesDemo />} />
      <Route path="/premium/pages/profile-demo" element={<ProfilePagesDemo />} />
      <Route path="/premium/templates/blog-demo" element={<BlogDemo />} />
      <Route path="/premium/templates/portfolio-demo" element={<PortfolioDemo />} />
      <Route path="/premium/pages/contact-demo" element={<ContactPageDemo />} />
      <Route path="/premium/pages/pricing-demo" element={<PricingPageDemo />} />
      
      <Route path="/premium/templates/landing-demo" element={<LandingPageDemo />} />
      <Route path="/premium/templates/blog-demo" element={<BlogDemo />} />
      <Route path="/premium/templates/portfolio-demo" element={<PortfolioDemo />} />
      <Route path="/premium/templates/ecommerce-demo" element={<EcommerceDemo />} />
      <Route path="/premium/templates/travel-demo" element={<TravelBookingDemo />} />
      <Route path="/premium/templates/agency-demo" element={<AgencyDemo />} />
      <Route path="/premium/templates/dashboard-demo" element={<DashboardDemo />} />

      <Route path="/premium/components/charts-demo" element={<AdvancedChartsDemo />} />
      <Route path="/premium/components/forms-demo" element={<ComplexFormsDemo />} />
      <Route path="/premium/components/maps-demo" element={<InteractiveMapsDemo />} />
      <Route path="/premium/components/upload-demo" element={<FileUploadDemo />} />
    </Routes>
  );
};

export default AppRoutes; 