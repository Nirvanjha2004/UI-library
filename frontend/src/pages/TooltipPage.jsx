import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedTooltip from '../../../animated-mui-components/src/components/AnimatedTooltip';

const TooltipPage = () => {
  const [tooltips, setTooltips] = useState({});

  const handleTooltip = (id, value) => {
    setTooltips(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const tooltipExamples = [
    {
      title: 'Scale Animation',
      component: (
        <AnimatedTooltip
          title="Tooltip with Scale Animation"
          animation="scale"
          open={tooltips.scale}
          onClose={() => handleTooltip('scale', false)}
          onOpen={() => handleTooltip('scale', true)}
          variant="default"
        >
          <Button variant="contained">
            Hover me
          </Button>
        </AnimatedTooltip>
      ),
      code: `
<AnimatedTooltip
  title="Tooltip with Scale Animation"
  animation="scale"
  variant="default"
>
  <Button variant="contained">
    Hover me
  </Button>
</AnimatedTooltip>`
    },
    {
      title: 'Slide Up Animation',
      component: (
        <AnimatedTooltip
          title="Tooltip with Slide Animation"
          animation="slideUp"
          open={tooltips.slideUp}
          onClose={() => handleTooltip('slideUp', false)}
          onOpen={() => handleTooltip('slideUp', true)}
          variant="light"
        >
          <Button variant="outlined">
            Hover me
          </Button>
        </AnimatedTooltip>
      ),
      code: `
<AnimatedTooltip
  title="Tooltip with Slide Animation"
  animation="slideUp"
  variant="light"
>
  <Button variant="outlined">
    Hover me
  </Button>
</AnimatedTooltip>`
    },
    {
      title: 'Gradient Style',
      component: (
        <AnimatedTooltip
          title="Gradient Style Tooltip"
          animation="fade"
          open={tooltips.gradient}
          onClose={() => handleTooltip('gradient', false)}
          onOpen={() => handleTooltip('gradient', true)}
          variant="gradient"
          placement="right"
        >
          <Button variant="contained" color="secondary">
            Hover me
          </Button>
        </AnimatedTooltip>
      ),
      code: `
<AnimatedTooltip
  title="Gradient Style Tooltip"
  animation="fade"
  variant="gradient"
  placement="right"
>
  <Button variant="contained" color="secondary">
    Hover me
  </Button>
</AnimatedTooltip>`
    },
    {
      title: 'Glass Effect',
      component: (
        <AnimatedTooltip
          title="Glass Effect Tooltip"
          animation="scale"
          open={tooltips.glass}
          onClose={() => handleTooltip('glass', false)}
          onOpen={() => handleTooltip('glass', true)}
          variant="glass"
          placement="top"
        >
          <Button variant="outlined" color="info">
            Hover me
          </Button>
        </AnimatedTooltip>
      ),
      code: `
<AnimatedTooltip
  title="Glass Effect Tooltip"
  animation="scale"
  variant="glass"
  placement="top"
>
  <Button variant="outlined" color="info">
    Hover me
  </Button>
</AnimatedTooltip>`
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
          Animated Tooltips
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your tooltips with smooth animations and beautiful styles.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {tooltipExamples.map((example, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  {example.title}
                </Typography>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', height: 100, alignItems: 'center' }}>
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

export default TooltipPage; 