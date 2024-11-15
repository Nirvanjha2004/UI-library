import { Box, Button, Typography, Paper } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';

const presetSequences = {
  attention: {
    name: 'Attention Seeker',
    sequence: {
      scale: [1, 1.1, 1, 1.1, 1],
      rotate: [0, -5, 5, -5, 0],
    },
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
    code: `
const AttentionAnimation = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1, 1.1, 1],
        rotate: [0, -5, 5, -5, 0],
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};`
  },
  entrance: {
    name: 'Grand Entrance',
    sequence: {
      y: [50, -20, 10, -5, 0],
      opacity: [0, 1],
      scale: [0.5, 1.1, 0.9, 1.05, 1],
    },
    transition: {
      duration: 2,
      ease: "backOut",
    },
    code: `
const EntranceAnimation = () => {
  return (
    <motion.div
      animate={{
        y: [50, -20, 10, -5, 0],
        opacity: [0, 1],
        scale: [0.5, 1.1, 0.9, 1.05, 1],
      }}
      transition={{
        duration: 2,
        ease: "backOut",
      }}
    >
      {children}
    </motion.div>
  );
};`
  },
  celebration: {
    name: 'Celebration',
    sequence: {
      y: [0, -30],
      rotate: [0, 360],
      scale: [1, 1.2, 1],
    },
    transition: {
      duration: 1.5,
      ease: "circOut",
    },
    code: `
const CelebrationAnimation = () => {
  return (
    <motion.div
      animate={{
        y: [0, -30],
        rotate: [0, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 1.5,
        ease: "circOut",
      }}
    >
      {children}
    </motion.div>
  );
};`
  },
  bounce: {
    name: 'Energetic Bounce',
    sequence: {
      y: [0, -30, 0],
      scaleX: [1, 0.85, 1],
      scaleY: [1, 1.15, 1],
    },
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
    code: `
const BounceAnimation = () => {
  return (
    <motion.div
      animate={{
        y: [0, -30, 0],
        scaleX: [1, 0.85, 1],
        scaleY: [1, 1.15, 1],
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};`
  },
  float: {
    name: 'Floating',
    sequence: {
      y: [0, -15, 0],
      rotate: [0, 5, 0],
      scale: [1, 1.02, 1],
    },
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
    code: `
const FloatAnimation = () => {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
        rotate: [0, 5, 0],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
};`
  },
  ripple: {
    name: 'Ripple Effect',
    sequence: {
      scale: [1, 1.2, 1],
      opacity: [1, 0.8, 1],
      borderRadius: ['20%', '40%', '20%'],
    },
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      repeat: Infinity,
    },
    code: `
const RippleAnimation = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [1, 0.8, 1],
        borderRadius: ['20%', '40%', '20%'],
      }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
};`
  },
  swing: {
    name: 'Pendulum Swing',
    sequence: {
      rotate: [0, 30, -30, 30, 0],
      transformOrigin: 'top',
    },
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
    },
    code: `
const SwingAnimation = () => {
  return (
    <motion.div
      animate={{
        rotate: [0, 30, -30, 30, 0],
        transformOrigin: 'top',
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
};`
  },
  heartbeat: {
    name: 'Heartbeat',
    sequence: {
      scale: [1, 1.2, 1, 1.2, 1],
    },
    transition: {
      duration: 1.5,
      repeat: Infinity,
      times: [0, 0.2, 0.4, 0.6, 1],
    },
    code: `
const HeartbeatAnimation = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1, 1.2, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        times: [0, 0.2, 0.4, 0.6, 1],
      }}
    >
      {children}
    </motion.div>
  );
};`
  },
  glitch: {
    name: 'Glitch',
    sequence: {
      x: [0, -5, 5, -5, 5, 0],
      y: [0, 5, -5, 5, -5, 0],
      opacity: [1, 0.8, 1, 0.8, 1],
    },
    transition: {
      duration: 0.5,
      ease: "linear",
    },
    code: `
const GlitchAnimation = () => {
  return (
    <motion.div
      animate={{
        x: [0, -5, 5, -5, 5, 0],
        y: [0, 5, -5, 5, -5, 0],
        opacity: [1, 0.8, 1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
};`
  },
  morph: {
    name: 'Morph',
    sequence: {
      borderRadius: ["0%", "50%", "0%"],
    },
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
    code: `
const MorphAnimation = () => {
  return (
    <motion.div
      animate={{
        borderRadius: ["0%", "50%", "0%"],
      }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};`
  },
  wave: {
    name: 'Wave',
    sequence: {
      y: [0, -20, 20, -20, 0],
      rotate: [0, -10, 10, -10, 0],
    },
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
    code: `
const WaveAnimation = () => {
  return (
    <motion.div
      animate={{
        y: [0, -20, 20, -20, 0],
        rotate: [0, -10, 10, -10, 0],
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};`
  },
  expand: {
    name: 'Expand',
    sequence: {
      scale: [1, 1.5, 0.5, 1],
      rotate: [0, 0, 180, 360],
    },
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
    code: `
const ExpandAnimation = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.5, 0.5, 1],
        rotate: [0, 0, 180, 360],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};`
  },
  pulse: {
    name: 'Pulse',
    sequence: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.8, 1],
    },
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
    },
    code: `
const PulseAnimation = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
};`
  },
  bounceAlt: {
    name: 'Bounce Alternative',
    sequence: {
      y: [0, -30, 0],
      scale: [1, 0.9, 1],
    },
    transition: {
      duration: 0.8,
      ease: "easeOut",
      repeat: Infinity,
    },
    code: `
const BounceAltAnimation = () => {
  return (
    <motion.div
      animate={{
        y: [0, -30, 0],
        scale: [1, 0.9, 1],
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
};`
  }
};

const PresetAnimations = ({ onSelect }) => {
  const [activePreset, setActivePreset] = useState(null);

  const handleClick = (preset) => {
    setActivePreset(preset.name);
    onSelect(preset);
    
    // Reset animation after it completes
    setTimeout(() => {
      setActivePreset(null);
    }, preset.transition.duration * 1000);
  };

  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      {Object.entries(presetSequences).map(([key, preset]) => (
        <motion.div
          key={key}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            fullWidth
            variant="outlined"
            onClick={() => handleClick(preset)}
            sx={{ textAlign: 'left', height: '100%' }}
          >
            <Box sx={{ width: '100%' }}>
              <Typography variant="subtitle1" gutterBottom>
                {preset.name}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePreset === preset.name ? 'animated' : 'static'}
                    animate={activePreset === preset.name ? preset.sequence : {}}
                    transition={preset.transition}
                  >
                    <Paper 
                      sx={{ 
                        width: 60, 
                        height: 60, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText'
                      }}
                    >
                      {key[0].toUpperCase()}
                    </Paper>
                  </motion.div>
                </AnimatePresence>
              </Box>
            </Box>
          </Button>
        </motion.div>
      ))}
    </Box>
  );
};

PresetAnimations.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default PresetAnimations; 