import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedSwitch from '../../../animated-mui-components/src/components/AnimatedSwitch';

const SwitchesPage = () => {
  const [switches, setSwitches] = useState({});

  const handleChange = (id) => (event) => {
    setSwitches(prev => ({
      ...prev,
      [id]: event.target.checked
    }));
  };

  const switchExamples = [
    {
      title: 'Bounce Animation',
      component: (
        <AnimatedSwitch
          checked={switches.bounce || false}
          onChange={handleChange('bounce')}
          thumbAnimation="bounce"
          color="primary"
        />
      ),
      code: `
<AnimatedSwitch
  checked={checked}
  onChange={handleChange}
  thumbAnimation="bounce"
  color="primary"
/>`
    },
    {
      title: 'Slide Animation',
      component: (
        <AnimatedSwitch
          checked={switches.slide || false}
          onChange={handleChange('slide')}
          thumbAnimation="slide"
          color="secondary"
        />
      ),
      code: `
<AnimatedSwitch
  checked={checked}
  onChange={handleChange}
  thumbAnimation="slide"
  color="secondary"
/>`
    },
    {
      title: 'Elastic Animation',
      component: (
        <AnimatedSwitch
          checked={switches.elastic || false}
          onChange={handleChange('elastic')}
          thumbAnimation="elastic"
          color="success"
        />
      ),
      code: `
<AnimatedSwitch
  checked={checked}
  onChange={handleChange}
  thumbAnimation="elastic"
  color="success"
/>`
    },
    {
      title: 'Track Glow Animation',
      component: (
        <AnimatedSwitch
          checked={switches.glow || false}
          onChange={handleChange('glow')}
          trackAnimation="glow"
          color="info"
        />
      ),
      code: `
<AnimatedSwitch
  checked={checked}
  onChange={handleChange}
  trackAnimation="glow"
  color="info"
/>`
    },
    {
      title: 'Track Fade Animation',
      component: (
        <AnimatedSwitch
          checked={switches.fade || false}
          onChange={handleChange('fade')}
          trackAnimation="fade"
          color="warning"
        />
      ),
      code: `
<AnimatedSwitch
  checked={checked}
  onChange={handleChange}
  trackAnimation="fade"
  color="warning"
/>`
    },
    {
      title: 'Combined Animations',
      component: (
        <AnimatedSwitch
          checked={switches.combined || false}
          onChange={handleChange('combined')}
          thumbAnimation="bounce"
          trackAnimation="glow"
          color="error"
        />
      ),
      code: `
<AnimatedSwitch
  checked={checked}
  onChange={handleChange}
  thumbAnimation="bounce"
  trackAnimation="glow"
  color="error"
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
          Animated Switches
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your switches with smooth animations and transitions.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {switchExamples.map((example, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  {example.title}
                </Typography>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}>
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

export default SwitchesPage; 