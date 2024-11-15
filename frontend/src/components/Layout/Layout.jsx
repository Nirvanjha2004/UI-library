import { Box, AppBar, Toolbar, Typography, IconButton, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar/Sidebar';
import { useThemeMode } from '../../contexts/ThemeContext';

const DRAWER_WIDTH = 280;

const Layout = ({ children }) => {
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeMode();
  const [mobileOpen, setMobileOpen] = useState(false);
  const mainContentRef = useRef(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          ml: { sm: `${DRAWER_WIDTH}px` },
          bgcolor: 'background.paper',
          color: 'text.primary',
          boxShadow: theme.shadows[1],
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              UI Library
            </Typography>
          </motion.div>
          <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 'auto' }}>
            {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
      >
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          drawerWidth={DRAWER_WIDTH}
        />
      </Box>

      <Box
        component="main"
        ref={mainContentRef}
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          minHeight: '100vh',
          bgcolor: 'background.default',
          mt: { xs: 7, sm: 8 },
          overflowX: 'hidden',
          position: 'relative'
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout; 