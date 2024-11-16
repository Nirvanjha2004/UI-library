import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedSlider from '../../../animated-mui-components/src/components/AnimatedSlider';

const SlidersPage = () => {
  const [values, setValues] = useState({});

  const handleChange = (id) => (event, newValue) => {
    setValues(prev => ({
      ...prev,
      [id]: newValue
    }));
  };

  const sliderExamples = [
    {
      title: 'Basic Slider with Track Fill Animation',
      component: (
        <AnimatedSlider
          value={values.basic || 0}
          onChange={handleChange('basic')}
          animation="slide"
          trackAnimation="fill"
          color="primary"
        />
      ),
      code: `
<AnimatedSlider
  value={value}
  onChange={handleChange}
  animation="slide"
  trackAnimation="fill"
  color="primary"
/>`
    },
    {
      title: 'Slider with Thumb Pulse Animation',
      component: (
        <AnimatedSlider
          value={values.pulse || 0}
          onChange={handleChange('pulse')}
          thumbAnimation="pulse"
          color="secondary"
        />
      ),
      code: `
<AnimatedSlider
  value={value}
  onChange={handleChange}
  thumbAnimation="pulse"
  color="secondary"
/>`
    },
    {
      title: 'Slider with Glow Effect',
      component: (
        <AnimatedSlider
          value={values.glow || 0}
          onChange={handleChange('glow')}
          thumbAnimation="glow"
          trackAnimation="glow"
          color="info"
        />
      ),
      code: `
<AnimatedSlider
  value={value}
  onChange={handleChange}
  thumbAnimation="glow"
  trackAnimation="glow"
  color="info"
/>`
    },
    {
      title: 'Range Slider with Bounce Animation',
      component: (
        <AnimatedSlider
          value={values.range || [20, 80]}
          onChange={handleChange('range')}
          thumbAnimation="bounce"
          color="success"
        />
      ),
      code: `
<AnimatedSlider
  value={value}
  onChange={handleChange}
  thumbAnimation="bounce"
  color="success"
/>`
    },
    {
      title: 'Vertical Slider',
      component: (
        <Box sx={{ height: 200 }}>
          <AnimatedSlider
            value={values.vertical || 50}
            onChange={handleChange('vertical')}
            orientation="vertical"
            thumbAnimation="pulse"
            trackAnimation="fill"
            color="warning"
          />
        </Box>
      ),
      code: `
<AnimatedSlider
  value={value}
  onChange={handleChange}
  orientation="vertical"
  thumbAnimation="pulse"
  trackAnimation="fill"
  color="warning"
/>`
    },
    {
      title: 'Discrete Slider with Marks',
      component: (
        <AnimatedSlider
          value={values.discrete || 0}
          onChange={handleChange('discrete')}
          step={10}
          marks
          min={0}
          max={100}
          thumbAnimation="bounce"
          color="error"
        />
      ),
      code: `
<AnimatedSlider
  value={value}
  onChange={handleChange}
  step={10}
  marks
  min={0}
  max={100}
  thumbAnimation="bounce"
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
          Animated Sliders
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your sliders with smooth animations and effects.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {sliderExamples.map((example, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  {example.title}
                </Typography>
                <Box sx={{ mb: 2, px: 2 }}>
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

export default SlidersPage; 