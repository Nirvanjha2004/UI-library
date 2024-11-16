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
    </Routes>
  );
};

export default AppRoutes; 