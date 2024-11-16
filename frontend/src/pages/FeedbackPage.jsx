import { useState, useEffect } from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedTooltip from '../../../animated-mui-components/src/components/AnimatedTooltip';
import AnimatedBadge from '../../../animated-mui-components/src/components/AnimatedBadge';
import AnimatedProgress from '../../../animated-mui-components/src/components/AnimatedProgress';
import MailIcon from '@mui/icons-material/Mail';

const FeedbackPage = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulate progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 10;
        if (newProgress === 100) {
          clearInterval(timer);
        }
        return newProgress > 100 ? 0 : newProgress;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const feedbackExamples = [
    {
      title: 'Tooltip with Scale Animation',
      component: (
        <AnimatedTooltip
          title="Animated Tooltip"
          animation="scale"
          open={tooltipOpen}
          onClose={() => setTooltipOpen(false)}
          onOpen={() => setTooltipOpen(true)}
          variant="gradient"
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
  variant="gradient"
>
  <Button variant="contained">
    Hover me
  </Button>
</AnimatedTooltip>`
    },
    {
      title: 'Badge with Pulse Animation',
      component: (
        <AnimatedBadge
          badgeContent={4}
          animation="pulse"
          color="primary"
        >
          <MailIcon />
        </AnimatedBadge>
      ),
      code: `
<AnimatedBadge
  badgeContent={4}
  animation="pulse"
  color="primary"
>
  <MailIcon />
</AnimatedBadge>`
    },
    {
      title: 'Linear Progress with Glow',
      component: (
        <AnimatedProgress
          variant="linear"
          animation="glow"
          value={progress}
        />
      ),
      code: `
<AnimatedProgress
  variant="linear"
  animation="glow"
  value={progress}
/>`
    },
    {
      title: 'Circular Progress with Pulse',
      component: (
        <AnimatedProgress
          variant="circular"
          animation="pulse"
          value={75}
          size={60}
        />
      ),
      code: `
<AnimatedProgress
  variant="circular"
  animation="pulse"
  value={75}
  size={60}
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
          Feedback Components
        </Typography>
        <Typography variant="body1" paragraph>
          Interactive feedback components with smooth animations.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {feedbackExamples.map((example, index) => (
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

export default FeedbackPage; 