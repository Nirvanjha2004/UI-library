import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedTabs from '../../../animated-mui-components/src/components/AnimatedTabs';
import AnimatedBottomNavigation from '../../../animated-mui-components/src/components/AnimatedBottomNavigation';
import AnimatedBreadcrumbs from '../../../animated-mui-components/src/components/AnimatedBreadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

const NavigationPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [bottomNavValue, setBottomNavValue] = useState(0);

  const tabItems = [
    { label: 'Home', icon: <HomeIcon /> },
    { label: 'Favorites', icon: <FavoriteIcon /> },
    { label: 'Profile', icon: <PersonIcon /> },
    { label: 'Settings', icon: <SettingsIcon /> }
  ];

  const breadcrumbItems = [
    { text: 'Home', href: '#' },
    { text: 'Category', href: '#' },
    { text: 'Current Page' }
  ];

  const navigationExamples = [
    {
      title: 'Animated Tabs with Slide Animation',
      component: (
        <Paper sx={{ width: '100%' }}>
          <AnimatedTabs
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
            tabs={tabItems}
            animation="slide"
            indicatorAnimation="slide"
          />
        </Paper>
      ),
      code: `
<AnimatedTabs
  value={tabValue}
  onChange={(e, newValue) => setTabValue(newValue)}
  tabs={[
    { label: 'Home', icon: <HomeIcon /> },
    { label: 'Favorites', icon: <FavoriteIcon /> },
    { label: 'Profile', icon: <PersonIcon /> },
    { label: 'Settings', icon: <SettingsIcon /> }
  ]}
  animation="slide"
  indicatorAnimation="slide"
/>`
    },
    {
      title: 'Animated Bottom Navigation',
      component: (
        <Box sx={{ width: '100%', position: 'relative', height: 100 }}>
          <AnimatedBottomNavigation
            value={bottomNavValue}
            onChange={(e, newValue) => setBottomNavValue(newValue)}
            items={tabItems}
            animation="slideUp"
            itemAnimation="bounce"
          />
        </Box>
      ),
      code: `
<AnimatedBottomNavigation
  value={bottomNavValue}
  onChange={(e, newValue) => setBottomNavValue(newValue)}
  items={[
    { label: 'Home', icon: <HomeIcon /> },
    { label: 'Favorites', icon: <FavoriteIcon /> },
    { label: 'Profile', icon: <PersonIcon /> },
    { label: 'Settings', icon: <SettingsIcon /> }
  ]}
  animation="slideUp"
  itemAnimation="bounce"
/>`
    },
    {
      title: 'Animated Breadcrumbs',
      component: (
        <AnimatedBreadcrumbs
          items={breadcrumbItems}
          animation="slide"
          hover="glow"
        />
      ),
      code: `
<AnimatedBreadcrumbs
  items={[
    { text: 'Home', href: '#' },
    { text: 'Category', href: '#' },
    { text: 'Current Page' }
  ]}
  animation="slide"
  hover="glow"
/>`
    },
    {
      title: 'Vertical Tabs with Scale Animation',
      component: (
        <Paper sx={{ width: '100%' }}>
          <AnimatedTabs
            value={tabValue}
            onChange={(e, newValue) => setTabValue(newValue)}
            tabs={tabItems}
            animation="scale"
            indicatorAnimation="fade"
            orientation="vertical"
          />
        </Paper>
      ),
      code: `
<AnimatedTabs
  value={tabValue}
  onChange={(e, newValue) => setTabValue(newValue)}
  tabs={tabItems}
  animation="scale"
  indicatorAnimation="fade"
  orientation="vertical"
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
          Navigation Components
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your navigation with smooth animations and transitions.
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

export default NavigationPage; 