import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedTabs from '../../../animated-mui-components/src/components/AnimatedTabs';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

const TabsPage = () => {
  const [values, setValues] = useState({});

  const handleChange = (id) => (event, newValue) => {
    setValues(prev => ({
      ...prev,
      [id]: newValue
    }));
  };

  const tabs = [
    { label: 'Home', icon: <HomeIcon /> },
    { label: 'Favorites', icon: <FavoriteIcon /> },
    { label: 'Profile', icon: <PersonIcon /> },
    { label: 'Settings', icon: <SettingsIcon /> }
  ];

  const tabExamples = [
    {
      title: 'Slide Animation',
      component: (
        <AnimatedTabs
          value={values.slide || 0}
          onChange={handleChange('slide')}
          tabs={tabs}
          animation="slide"
          indicatorAnimation="slide"
        />
      ),
      code: `
<AnimatedTabs
  value={value}
  onChange={handleChange}
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
      title: 'Fade Animation',
      component: (
        <AnimatedTabs
          value={values.fade || 0}
          onChange={handleChange('fade')}
          tabs={tabs}
          animation="fade"
          indicatorAnimation="fade"
        />
      ),
      code: `
<AnimatedTabs
  value={value}
  onChange={handleChange}
  tabs={tabs}
  animation="fade"
  indicatorAnimation="fade"
/>`
    },
    {
      title: 'Scale Animation',
      component: (
        <AnimatedTabs
          value={values.scale || 0}
          onChange={handleChange('scale')}
          tabs={tabs}
          animation="scale"
          indicatorAnimation="scale"
        />
      ),
      code: `
<AnimatedTabs
  value={value}
  onChange={handleChange}
  tabs={tabs}
  animation="scale"
  indicatorAnimation="scale"
/>`
    },
    {
      title: 'Vertical Tabs',
      component: (
        <Box sx={{ height: 300 }}>
          <AnimatedTabs
            value={values.vertical || 0}
            onChange={handleChange('vertical')}
            tabs={tabs}
            animation="slide"
            indicatorAnimation="slide"
            orientation="vertical"
          />
        </Box>
      ),
      code: `
<AnimatedTabs
  value={value}
  onChange={handleChange}
  tabs={tabs}
  animation="slide"
  indicatorAnimation="slide"
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
          Animated Tabs
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your tabs with smooth animations and transitions.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {tabExamples.map((example, index) => (
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

export default TabsPage; 