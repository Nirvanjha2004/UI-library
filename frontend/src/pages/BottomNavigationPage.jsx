import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedBottomNavigation from '../../../animated-mui-components/src/components/AnimatedBottomNavigation';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';

const BottomNavigationPage = () => {
  const [values, setValues] = useState({});

  const handleChange = (id) => (event, newValue) => {
    setValues(prev => ({
      ...prev,
      [id]: newValue
    }));
  };

  const navigationItems = [
    { label: 'Home', value: 0, icon: <HomeIcon /> },
    { label: 'Favorites', value: 1, icon: <FavoriteIcon /> },
    { label: 'Location', value: 2, icon: <LocationOnIcon /> },
    { label: 'Profile', value: 3, icon: <PersonIcon /> }
  ];

  const navigationExamples = [
    {
      title: 'Basic Bottom Navigation with Slide Animation',
      component: (
        <Paper elevation={3} sx={{ position: 'relative', height: 100, width: '100%' }}>
          <AnimatedBottomNavigation
            value={values.basic || 0}
            onChange={handleChange('basic')}
            items={navigationItems}
            animation="slide"
          />
        </Paper>
      ),
      code: `
<AnimatedBottomNavigation
  value={value}
  onChange={handleChange}
  items={[
    { label: 'Home', value: 0, icon: <HomeIcon /> },
    { label: 'Favorites', value: 1, icon: <FavoriteIcon /> },
    { label: 'Location', value: 2, icon: <LocationOnIcon /> },
    { label: 'Profile', value: 3, icon: <PersonIcon /> }
  ]}
  animation="slide"
/>`
    },
    {
      title: 'Scale Animation with Stagger',
      component: (
        <Paper elevation={3} sx={{ position: 'relative', height: 100, width: '100%' }}>
          <AnimatedBottomNavigation
            value={values.scale || 0}
            onChange={handleChange('scale')}
            items={navigationItems}
            animation="scale"
            itemAnimation="stagger"
          />
        </Paper>
      ),
      code: `
<AnimatedBottomNavigation
  value={value}
  onChange={handleChange}
  items={navigationItems}
  animation="scale"
  itemAnimation="stagger"
/>`
    },
    {
      title: 'Fade Animation with Cascade',
      component: (
        <Paper elevation={3} sx={{ position: 'relative', height: 100, width: '100%' }}>
          <AnimatedBottomNavigation
            value={values.fade || 0}
            onChange={handleChange('fade')}
            items={navigationItems}
            animation="fade"
            itemAnimation="cascade"
            showLabels={false}
          />
        </Paper>
      ),
      code: `
<AnimatedBottomNavigation
  value={value}
  onChange={handleChange}
  items={navigationItems}
  animation="fade"
  itemAnimation="cascade"
  showLabels={false}
/>`
    },
    {
      title: 'Custom Styled Navigation',
      component: (
        <Paper elevation={3} sx={{ position: 'relative', height: 100, width: '100%' }}>
          <AnimatedBottomNavigation
            value={values.custom || 0}
            onChange={handleChange('custom')}
            items={navigationItems}
            animation="slideUp"
            itemAnimation="fan"
            sx={{
              bgcolor: 'primary.main',
              '& .MuiBottomNavigationAction-root': {
                color: 'primary.contrastText',
                '&.Mui-selected': {
                  color: 'secondary.main'
                }
              }
            }}
          />
        </Paper>
      ),
      code: `
<AnimatedBottomNavigation
  value={value}
  onChange={handleChange}
  items={navigationItems}
  animation="slideUp"
  itemAnimation="fan"
  sx={{
    bgcolor: 'primary.main',
    '& .MuiBottomNavigationAction-root': {
      color: 'primary.contrastText',
      '&.Mui-selected': {
        color: 'secondary.main'
      }
    }
  }}
/>`
    }
  ];

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1" gutterBottom>
          Animated Bottom Navigation
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your bottom navigation with smooth animations and transitions.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {navigationExamples.map((example, index) => (
            <Grid item xs={12} key={index}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  {example.title}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {example.component}
                </Box>
                <CodePreview code={example.code} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default BottomNavigationPage; 