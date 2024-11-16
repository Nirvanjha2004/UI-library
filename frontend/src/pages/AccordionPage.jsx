import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedAccordion from '../../../animated-mui-components/src/components/AnimatedAccordion';

const AccordionPage = () => {
  const [expanded, setExpanded] = useState({});

  const handleChange = (id) => (event, isExpanded) => {
    setExpanded(prev => ({
      ...prev,
      [id]: isExpanded
    }));
  };

  const accordionExamples = [
    {
      title: 'Slide Animation',
      component: (
        <AnimatedAccordion
          expanded={expanded['slide'] || false}
          onChange={handleChange('slide')}
          summary="Click to expand"
          animation="slide"
        >
          <Typography>
            This content slides in and out smoothly when the accordion is toggled.
            The animation creates a natural expanding and collapsing effect.
          </Typography>
        </AnimatedAccordion>
      ),
      code: `
<AnimatedAccordion
  expanded={expanded}
  onChange={handleChange}
  summary="Click to expand"
  animation="slide"
>
  <Typography>
    This content slides in and out smoothly when the accordion is toggled.
  </Typography>
</AnimatedAccordion>`
    },
    {
      title: 'Fade Animation',
      component: (
        <AnimatedAccordion
          expanded={expanded['fade'] || false}
          onChange={handleChange('fade')}
          summary="Fade transition"
          animation="fade"
        >
          <Typography>
            This content fades in and out when the accordion is toggled.
            The smooth opacity transition provides a subtle effect.
          </Typography>
        </AnimatedAccordion>
      ),
      code: `
<AnimatedAccordion
  expanded={expanded}
  onChange={handleChange}
  summary="Fade transition"
  animation="fade"
>
  <Typography>
    This content fades in and out when the accordion is toggled.
  </Typography>
</AnimatedAccordion>`
    },
    {
      title: 'Collapse Animation',
      component: (
        <AnimatedAccordion
          expanded={expanded['collapse'] || false}
          onChange={handleChange('collapse')}
          summary="Scale collapse"
          animation="collapse"
          iconAnimation="flip"
        >
          <Typography>
            This content scales vertically when expanding and collapsing.
            The icon also has a flip animation for added interactivity.
          </Typography>
        </AnimatedAccordion>
      ),
      code: `
<AnimatedAccordion
  expanded={expanded}
  onChange={handleChange}
  summary="Scale collapse"
  animation="collapse"
  iconAnimation="flip"
>
  <Typography>
    This content scales vertically when expanding and collapsing.
  </Typography>
</AnimatedAccordion>`
    },
    {
      title: 'Rotate Animation',
      component: (
        <AnimatedAccordion
          expanded={expanded['rotate'] || false}
          onChange={handleChange('rotate')}
          summary="3D rotation"
          animation="rotate"
          iconAnimation="bounce"
        >
          <Typography>
            This content rotates in 3D space when expanding and collapsing.
            The icon has a bounce animation for playful feedback.
          </Typography>
        </AnimatedAccordion>
      ),
      code: `
<AnimatedAccordion
  expanded={expanded}
  onChange={handleChange}
  summary="3D rotation"
  animation="rotate"
  iconAnimation="bounce"
>
  <Typography>
    This content rotates in 3D space when expanding and collapsing.
  </Typography>
</AnimatedAccordion>`
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
          Animated Accordions
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your accordions with smooth animations and transitions.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {accordionExamples.map((example, index) => (
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

export default AccordionPage; 