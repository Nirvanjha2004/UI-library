import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedProgress from '../../../animated-mui-components/src/components/AnimatedProgress';

const ProgressPage = () => {
  const [progress, setProgress] = useState(0);

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

  const progressExamples = [
    {
      title: 'Linear Progress with Pulse Animation',
      component: (
        <AnimatedProgress
          variant="linear"
          animation="pulse"
          value={progress}
          color="primary"
        />
      ),
      code: `
<AnimatedProgress
  variant="linear"
  animation="pulse"
  value={progress}
  color="primary"
/>`
    },
    {
      title: 'Circular Progress with Glow Animation',
      component: (
        <AnimatedProgress
          variant="circular"
          animation="glow"
          value={progress}
          color="secondary"
          size={60}
        />
      ),
      code: `
<AnimatedProgress
  variant="circular"
  animation="glow"
  value={progress}
  color="secondary"
  size={60}
/>`
    },
    {
      title: 'Linear Progress with Slide Animation',
      component: (
        <AnimatedProgress
          variant="linear"
          animation="slide"
          value={progress}
          color="success"
        />
      ),
      code: `
<AnimatedProgress
  variant="linear"
  animation="slide"
  value={progress}
  color="success"
/>`
    },
    {
      title: 'Circular Progress with Grow Animation',
      component: (
        <AnimatedProgress
          variant="circular"
          animation="grow"
          value={progress}
          color="warning"
          size={60}
          thickness={5}
        />
      ),
      code: `
<AnimatedProgress
  variant="circular"
  animation="grow"
  value={progress}
  color="warning"
  size={60}
  thickness={5}
/>`
    },
    {
      title: 'Indeterminate Linear Progress',
      component: (
        <AnimatedProgress
          variant="linear"
          animation="pulse"
          color="info"
        />
      ),
      code: `
<AnimatedProgress
  variant="linear"
  animation="pulse"
  color="info"
/>`
    },
    {
      title: 'Indeterminate Circular Progress',
      component: (
        <AnimatedProgress
          variant="circular"
          animation="glow"
          color="error"
          size={60}
        />
      ),
      code: `
<AnimatedProgress
  variant="circular"
  animation="glow"
  color="error"
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
          Animated Progress
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your progress indicators with smooth animations.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {progressExamples.map((example, index) => (
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

export default ProgressPage; 