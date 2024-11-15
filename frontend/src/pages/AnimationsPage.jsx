import { Box, Typography, Container, Grid, Paper, Switch, FormControlLabel } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimationControls from '../components/Animations/AnimationControls';
import PresetAnimations from '../components/Animations/PresetAnimations';

const AnimationsPage = () => {
  const [selectedAnimation, setSelectedAnimation] = useState(null);
  const [duration, setDuration] = useState(1);
  const [delay, setDelay] = useState(0);
  const [repeat, setRepeat] = useState(Infinity);
  const [ease, setEase] = useState("easeInOut");
  const [combineAnimations, setCombineAnimations] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey(prev => prev + 1);
  }, [duration, delay, repeat, ease]);

  const handlePresetSelect = (preset) => {
    const codeString = preset.code ? preset.code : `
import { motion } from 'framer-motion';

const ${preset.name.replace(/\s+/g, '')}Animation = () => {
  return (
    <motion.div
      animate={{
        ${Object.entries(preset.sequence).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join(',\n        ')}
      }}
      transition={{
        duration: ${preset.transition.duration},
        ease: "${preset.transition.ease}",
        ${preset.transition.repeat ? `repeat: ${preset.transition.repeat},` : ''}
        ${preset.transition.times ? `times: ${JSON.stringify(preset.transition.times)},` : ''}
      }}
    >
      {children}
    </motion.div>
  );
};`;

    setSelectedAnimation({
      name: preset.name,
      component: (
        <motion.div
          key={key}
          animate={preset.sequence}
          transition={{
            ...preset.transition,
            repeat: repeat,
          }}
        >
          <Paper sx={{ p: 4, textAlign: 'center' }}>{preset.name}</Paper>
        </motion.div>
      ),
      code: codeString
    });
  };

  const baseAnimations = [
    {
      id: 'bounce',
      name: 'Bounce',
      component: (
        <motion.div
          key={key}
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration,
            delay,
            repeat,
            ease,
          }}
        >
          <Paper sx={{ p: 4, textAlign: 'center' }}>Bounce</Paper>
        </motion.div>
      ),
      code: `
<motion.div
  animate={{
    y: [0, -30, 0],
  }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  {children}
</motion.div>`
    },
    {
      id: 'pulse',
      name: 'Pulse',
      component: (
        <motion.div
          key={key}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration,
            delay,
            repeat,
            ease,
          }}
        >
          <Paper sx={{ p: 4, textAlign: 'center' }}>Pulse</Paper>
        </motion.div>
      ),
      code: `
<motion.div
  animate={{
    scale: [1, 1.1, 1],
  }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  {children}
</motion.div>`
    },
    {
      id: 'shake',
      name: 'Shake',
      component: (
        <motion.div
          animate={{
            x: [-10, 10, -10, 10, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Paper sx={{ p: 4, textAlign: 'center' }}>Shake</Paper>
        </motion.div>
      ),
      code: `
<motion.div
  animate={{
    x: [-10, 10, -10, 10, 0],
  }}
  transition={{
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse"
  }}
>
  {children}
</motion.div>`
    },
    {
      id: 'rotate',
      name: 'Rotate',
      component: (
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Paper sx={{ p: 4, textAlign: 'center' }}>Rotate</Paper>
        </motion.div>
      ),
      code: `
<motion.div
  animate={{
    rotate: 360,
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "linear"
  }}
>
  {children}
</motion.div>`
    },
    {
      id: 'flip',
      name: 'Flip',
      component: (
        <motion.div
          animate={{
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Paper sx={{ p: 4, textAlign: 'center' }}>Flip</Paper>
        </motion.div>
      ),
      code: `
<motion.div
  animate={{
    rotateY: [0, 180, 360],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  {children}
</motion.div>`
    },
    {
      id: 'fade',
      name: 'Fade',
      component: (
        <motion.div
          animate={{
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Paper sx={{ p: 4, textAlign: 'center' }}>Fade</Paper>
        </motion.div>
      ),
      code: `
<motion.div
  animate={{
    opacity: [1, 0, 1],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  {children}
</motion.div>`
    },
    {
      id: 'morph',
      name: 'Morph',
      component: (
        <motion.div
          animate={{
            borderRadius: ["0%", "50%", "0%"],
          }}
          transition={{ duration, delay, repeat, ease }}
          style={{ background: 'primary.main' }}
        >
          <Paper sx={{ p: 4, textAlign: 'center' }}>Morph</Paper>
        </motion.div>
      ),
      code: `
<motion.div
  animate={{
    borderRadius: ["0%", "50%", "0%"],
  }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: "easeInOut"
  }}
  style={{ background: 'primary.main' }}
>
  {children}
</motion.div>`
    },
    {
      id: 'wave',
      name: 'Wave',
      component: (
        <motion.div
          animate={{
            y: [0, -20, 20, -20, 0],
            rotate: [0, -10, 10, -10, 0],
          }}
          transition={{ duration, delay, repeat, ease }}
        >
          <Paper sx={{ p: 4, textAlign: 'center' }}>Wave</Paper>
        </motion.div>
      ),
      code: `
<motion.div
  animate={{
    y: [0, -20, 20, -20, 0],
    rotate: [0, -10, 10, -10, 0],
  }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  {children}
</motion.div>`
    },
    {
      id: 'expand',
      name: 'Expand',
      component: (
        <motion.div
          animate={{
            scale: [1, 1.5, 0.5, 1],
            rotate: [0, 0, 180, 360],
          }}
          transition={{ duration, delay, repeat, ease }}
        >
          <Paper sx={{ p: 4, textAlign: 'center' }}>Expand</Paper>
        </motion.div>
      ),
      code: `
<motion.div
  animate={{
    scale: [1, 1.5, 0.5, 1],
    rotate: [0, 0, 180, 360],
  }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  {children}
</motion.div>`
    },
  ];

  const combinedAnimations = [
    {
      id: 'bounceAndRotate',
      name: 'Bounce & Rotate',
      component: (
        <motion.div
          key={key}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360, 360],
          }}
          transition={{
            duration,
            delay,
            repeat,
            ease,
          }}
        >
          <Paper sx={{ p: 4, textAlign: 'center' }}>Bounce & Rotate</Paper>
        </motion.div>
      ),
      code: `
<motion.div
  animate={{
    y: [0, -30, 0],
    rotate: [0, 360, 360],
  }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  {children}
</motion.div>`
    },
    {
      id: 'pulseAndShake',
      name: 'Pulse & Shake',
      component: (
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [-10, 10, -10, 10, 0],
          }}
          transition={{ duration, delay, repeat, ease }}
        >
          <Paper sx={{ p: 4, textAlign: 'center' }}>Pulse & Shake</Paper>
        </motion.div>
      ),
      code: `
<motion.div
  animate={{
    scale: [1, 1.1, 1],
    x: [-10, 10, -10, 10, 0],
  }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  {children}
</motion.div>`
    },
    {
      id: 'morphAndWave',
      name: 'Morph & Wave',
      component: (
        <motion.div
          animate={{
            borderRadius: ["0%", "50%", "0%"],
            y: [0, -20, 20, -20, 0],
          }}
          transition={{ duration, delay, repeat, ease }}
        >
          <Paper sx={{ p: 4, textAlign: 'center' }}>Morph & Wave</Paper>
        </motion.div>
      ),
      code: `
<motion.div
  animate={{
    borderRadius: ["0%", "50%", "0%"],
    y: [0, -20, 20, -20, 0],
  }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  {children}
</motion.div>`
    },
  ];

  const animations = combineAnimations ? combinedAnimations : baseAnimations;

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1" gutterBottom>
          Animations
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Interactive animation examples with customizable controls and presets.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="h2" gutterBottom>
              Preset Sequences
            </Typography>
            <PresetAnimations onSelect={handlePresetSelect} />
            
            <Typography variant="h2" sx={{ mt: 6 }} gutterBottom>
              Custom Animations
            </Typography>
            <Box sx={{ mb: 4 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={combineAnimations}
                    onChange={(e) => setCombineAnimations(e.target.checked)}
                  />
                }
                label="Show Combined Animations"
              />
            </Box>
            <Grid container spacing={4}>
              {animations.map((animation) => (
                <Grid item xs={12} sm={6} md={4} key={animation.id}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedAnimation(animation)}
                  >
                    <Box sx={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {animation.component}
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Animation Controls
              </Typography>
              <AnimationControls
                duration={duration}
                setDuration={setDuration}
                delay={delay}
                setDelay={setDelay}
                repeat={repeat}
                setRepeat={setRepeat}
                ease={ease}
                setEase={setEase}
              />
            </Paper>
          </Grid>
        </Grid>

        <AnimatePresence>
          {selectedAnimation && selectedAnimation.code && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Box sx={{ mt: 4 }}>
                <Typography variant="h2" gutterBottom>
                  {selectedAnimation.name} Animation
                </Typography>
                <CodePreview code={selectedAnimation.code} language="jsx" />
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Container>
  );
};

export default AnimationsPage; 