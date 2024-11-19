import { Container, Typography, Grid, Box, IconButton, Avatar, Slider, Paper, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import PaletteIcon from '@mui/icons-material/Palette';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import AnimatedCard from '../../../../../animated-mui-components/src/components/AnimatedCard/index'
import AnimatedButton from '../../../../../animated-mui-components/src/components/AnimatedButton/index'
import { useState } from 'react';

const ThemeBuilderDemo = () => {
  const [primaryColor, setPrimaryColor] = useState('#2196F3');
  const [secondaryColor, setSecondaryColor] = useState('#FF4081');
  const [borderRadius, setBorderRadius] = useState(4);
  const [elevation, setElevation] = useState(2);

  const stats = [
    { label: 'Total Users', value: '2.6M' },
    { label: 'Revenue', value: '$8.2M' },
    { label: 'Growth', value: '+24%' },
    { label: 'Active Now', value: '1.2K' }
  ];

  const getStyles = () => ({
    card: {
      borderRadius: `${borderRadius}px`,
      boxShadow: `0 ${elevation}px ${elevation * 2}px rgba(0,0,0,0.1)`,
      transition: 'all 0.3s ease'
    },
    button: {
      background: `linear-gradient(45deg, ${primaryColor} 30%, ${secondaryColor} 90%)`,
      color: 'white',
      borderRadius: `${borderRadius}px`
    },
    header: {
      background: `linear-gradient(45deg, ${primaryColor} 30%, ${secondaryColor} 90%)`,
      color: 'white'
    }
  });

  const styles = getStyles();

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', pb: 8 }}>
      {/* Theme Controls */}
      <Paper 
        elevation={4}
        sx={{ 
          position: 'fixed', 
          right: 20, 
          top: 20, 
          zIndex: 1200,
          p: 3,
          width: 300,
          borderRadius: 2
        }}
      >
        <Typography variant="h6" gutterBottom>Theme Builder</Typography>
        <Box sx={{ mb: 3 }}>
          <Typography gutterBottom>Primary Color</Typography>
          <TextField 
            type="color" 
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            fullWidth
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography gutterBottom>Secondary Color</Typography>
          <TextField 
            type="color" 
            value={secondaryColor}
            onChange={(e) => setSecondaryColor(e.target.value)}
            fullWidth
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography gutterBottom>Border Radius: {borderRadius}px</Typography>
          <Slider
            value={borderRadius}
            onChange={(e, value) => setBorderRadius(value)}
            min={0}
            max={24}
          />
        </Box>
        <Box sx={{ mb: 3 }}>
          <Typography gutterBottom>Elevation: {elevation}</Typography>
          <Slider
            value={elevation}
            onChange={(e, value) => setElevation(value)}
            min={0}
            max={24}
          />
        </Box>
        <AnimatedButton
          variant="contained"
          fullWidth
          animation="pulse"
          sx={styles.button}
        >
          Export Theme
        </AnimatedButton>
      </Paper>

      {/* Header */}
      <Box
        component={motion.div}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          ...styles.header
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <PaletteIcon sx={{ fontSize: 32 }} />
          <Typography variant="h6">Theme Builder Demo</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <IconButton sx={{ color: 'white' }}><SearchIcon /></IconButton>
          <IconButton sx={{ color: 'white' }}><NotificationsIcon /></IconButton>
          <IconButton sx={{ color: 'white' }}><SettingsIcon /></IconButton>
          <Avatar src="/path/to/avatar.jpg" />
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* Stats */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <AnimatedCard
                animation="fade"
                delay={index * 0.1}
                hover="lift"
                sx={{
                  ...styles.card,
                  bgcolor: 'white'
                }}
              >
                <Box sx={{ p: 3, textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ mb: 1, color: primaryColor }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>

        {/* Preview Components */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <AnimatedCard
              animation="slideUp"
              hover="lift"
              sx={{
                ...styles.card,
                bgcolor: 'white',
                height: '100%'
              }}
            >
              <Box sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ color: primaryColor }}>
                  Component Preview
                </Typography>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={12} md={6}>
                    <AnimatedButton
                      variant="contained"
                      fullWidth
                      animation="bounce"
                      sx={styles.button}
                    >
                      Primary Button
                    </AnimatedButton>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <AnimatedButton
                      variant="outlined"
                      fullWidth
                      animation="pulse"
                      sx={{ borderColor: primaryColor, color: primaryColor }}
                    >
                      Secondary Button
                    </AnimatedButton>
                  </Grid>
                </Grid>
              </Box>
            </AnimatedCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <AnimatedCard
              animation="slideUp"
              delay={0.2}
              hover="lift"
              sx={{
                ...styles.card,
                bgcolor: 'white',
                height: '100%'
              }}
            >
              <Box sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ color: secondaryColor }}>
                  Theme Preview
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Paper sx={{ p: 2, ...styles.card }}>
                    <Typography variant="body2">Card Example</Typography>
                  </Paper>
                  <Paper sx={{ p: 2, ...styles.card }}>
                    <Typography variant="body2">Another Card</Typography>
                  </Paper>
                </Box>
              </Box>
            </AnimatedCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ThemeBuilderDemo; 