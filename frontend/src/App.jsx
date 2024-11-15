import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState, createContext, useContext } from 'react';
import Layout from './components/Layout/Layout';
import Routes from './routes';
import AnimatedToast from './components/Toast/AnimatedToast';
import { ThemeProvider } from './contexts/ThemeContext';

// Toast Context
export const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

function App() {
  const [toast, setToast] = useState({
    open: false,
    message: '',
    severity: 'success',
    animation: 'slide'
  });

  const showToast = (message, severity = 'success', animation = 'slide') => {
    setToast({
      open: true,
      message,
      severity,
      animation
    });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, open: false }));
  };

  return (
    <ThemeProvider>
      <ToastContext.Provider value={{ showToast }}>
        <CssBaseline />
        <Router>
          <Layout>
            <Routes />
          </Layout>
        </Router>
        <AnimatedToast
          open={toast.open}
          message={toast.message}
          severity={toast.severity}
          animation={toast.animation}
          onClose={hideToast}
        />
      </ToastContext.Provider>
    </ThemeProvider>
  );
}

export default App;