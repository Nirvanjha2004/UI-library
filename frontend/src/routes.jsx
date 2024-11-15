import { Routes, Route } from 'react-router-dom';
import ButtonsPage from './pages/ButtonsPage';
import CardsPage from './pages/CardsPage';
import HomePage from './pages/HomePage';
import InputsPage from './pages/InputsPage';
import AlertsPage from './pages/AlertsPage';
import ModalPage from './pages/ModalPage';
import UtilityPage from './pages/UtilityPage';
import NavigationPage from './pages/NavigationPage';
import FormPage from './pages/FormPage';
import ChartsPage from './pages/ChartsPage';
import UploadPage from './pages/UploadPage';
import GalleryPage from './pages/GalleryPage';
import TablePage from './pages/TablePage';
import AnimationsPage from './pages/AnimationsPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/components/buttons" element={<ButtonsPage />} />
      <Route path="/components/cards" element={<CardsPage />} />
      <Route path="/components/inputs" element={<InputsPage />} />
      <Route path="/components/alerts" element={<AlertsPage />} />
      <Route path="/components/modal" element={<ModalPage />} />
      <Route path="/components/utility" element={<UtilityPage />} />
      <Route path="/components/navigation" element={<NavigationPage />} />
      <Route path="/components/forms" element={<FormPage />} />
      <Route path="/components/charts" element={<ChartsPage />} />
      <Route path="/components/upload" element={<UploadPage />} />
      <Route path="/components/gallery" element={<GalleryPage />} />
      <Route path="/components/table" element={<TablePage />} />
      <Route path="/components/animations" element={<AnimationsPage />} />
    </Routes>
  );
};

export default AppRoutes; 