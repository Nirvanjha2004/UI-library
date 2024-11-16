import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedProgress from '../../../animated-mui-components/src/components/AnimatedProgress';
import AnimatedSkeleton from '../../../animated-mui-components/src/components/AnimatedSkeleton';
import AnimatedTooltip from '../../../animated-mui-components/src/components/AnimatedTooltip';

const UtilityPage = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const utilityExamples = [
    {
      title: 'Linear Progress with Pulse Animation',
      component: (
        <AnimatedProgress
          variant="linear"
          animation="pulse"
          value={75}
        />
      ),
      code: `
<AnimatedProgress
  variant="linear"
  animation="pulse"
  value={75}
/>`
    },
    {
      title: 'Circular Progress with Glow Animation',
      component: (
        <AnimatedProgress
          variant="circular"
          animation="glow"
          value={65}
          size={60}
        />
      ),
      code: `
<AnimatedProgress
  variant="circular"
  animation="glow"
  value={65}
  size={60}
/>`
    },
    {
      title: 'Skeleton with Wave Animation',
      component: (
        <Box sx={{ width: '100%' }}>
          <AnimatedSkeleton
            animation="wave"
            variant="text"
            width="80%"
          />
          <AnimatedSkeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
            sx={{ my: 1 }}
          />
          <AnimatedSkeleton
            animation="wave"
            variant="rectangular"
            height={100}
          />
        </Box>
      ),
      code: `
<AnimatedSkeleton
  animation="wave"
  variant="text"
  width="80%"
/>
<AnimatedSkeleton
  animation="wave"
  variant="circular"
  width={40}
  height={40}
/>
<AnimatedSkeleton
  animation="wave"
  variant="rectangular"
  height={100}
/>`
    },
    {
      title: 'Tooltip with Scale Animation',
      component: (
        <AnimatedTooltip
          title="Animated Tooltip"
          animation="scale"
          open={tooltipOpen}
          onClose={() => setTooltipOpen(false)}
          onOpen={() => setTooltipOpen(true)}
        >
          <Button
            variant="contained"
            onMouseEnter={() => setTooltipOpen(true)}
            onMouseLeave={() => setTooltipOpen(false)}
          >
            Hover me
          </Button>
        </AnimatedTooltip>
      ),
      code: `
<AnimatedTooltip
  title="Animated Tooltip"
  animation="scale"
  open={open}
  onClose={() => setOpen(false)}
  onOpen={() => setOpen(true)}
>
  <Button variant="contained">
    Hover me
  </Button>
</AnimatedTooltip>`
    },
    {
      title: 'Skeleton with Shimmer Animation',
      component: (
        <Box sx={{ width: '100%' }}>
          <AnimatedSkeleton
            animation="shimmer"
            variant="rounded"
            height={200}
          />
        </Box>
      ),
      code: `
<AnimatedSkeleton
  animation="shimmer"
  variant="rounded"
  height={200}
/>`
    },
    {
      title: 'Progress with Slide Animation',
      component: (
        <AnimatedProgress
          variant="linear"
          animation="slide"
          value={45}
          color="secondary"
        />
      ),
      code: `
<AnimatedProgress
  variant="linear"
  animation="slide"
  value={45}
  color="secondary"
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
          Utility Components
        </Typography>
        <Typography variant="body1" paragraph>
          Essential utility components with smooth animations.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {utilityExamples.map((example, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  {example.title}
                </Typography>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
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

export default UtilityPage; 