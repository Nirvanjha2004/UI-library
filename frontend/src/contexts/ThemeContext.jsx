import { createContext, useContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                primary: {
                  main: '#2563eb',
                  light: '#60a5fa',
                  dark: '#1d4ed8',
                },
                secondary: {
                  main: '#7c3aed',
                  light: '#a78bfa',
                  dark: '#5b21b6',
                },
                background: {
                  default: '#f8fafc',
                  paper: '#ffffff',
                },
              }
            : {
                primary: {
                  main: '#60a5fa',
                  light: '#93c5fd',
                  dark: '#2563eb',
                },
                secondary: {
                  main: '#a78bfa',
                  light: '#c4b5fd',
                  dark: '#7c3aed',
                },
                background: {
                  default: '#0f172a',
                  paper: '#1e293b',
                },
              }),
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
          },
          h2: {
            fontSize: '2rem',
            fontWeight: 600,
            lineHeight: 1.3,
          },
          button: {
            textTransform: 'none',
          },
        },
        shape: {
          borderRadius: 8,
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                padding: '8px 16px',
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                borderRadius: 12,
              },
            },
          },
        },
      }),
    [mode]
  );

  const value = useMemo(
    () => ({
      mode,
      toggleTheme,
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider; 