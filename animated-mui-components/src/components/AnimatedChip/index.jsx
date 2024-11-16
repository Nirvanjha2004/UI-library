import { Chip } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const animations = {
  pop: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 }
  },
  slide: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 }
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  bounce: {
    initial: { scale: 0 },
    animate: { 
      scale: [0, 1.2, 1],
      transition: {
        times: [0, 0.6, 1]
      }
    },
    exit: { 
      scale: [1, 1.2, 0],
      transition: {
        times: [0, 0.4, 1]
      }
    }
  },
  rotate: {
    initial: { rotate: -180, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 180, opacity: 0 }
  }
};

const hoverEffects = {
  grow: { scale: 1.1 },
  glow: { 
    scale: 1.05,
    boxShadow: '0 0 8px rgba(255,255,255,0.3)'
  },
  lift: {
    y: -3,
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.3,
      repeat: Infinity
    }
  }
};

const AnimatedChip = ({
  animation = 'pop',
  hover,
  onDelete,
  children,
  delay = 0,
  duration = 0.3,
  ...props
}) => {
  const MotionChip = motion(Chip);
  const animationConfig = animations[animation];
  const hoverConfig = hover ? hoverEffects[hover] : undefined;

  return (
    <AnimatePresence mode="wait">
      <MotionChip
        {...props}
        onDelete={onDelete}
        component={motion.div}
        initial={animationConfig.initial}
        animate={animationConfig.animate}
        exit={animationConfig.exit}
        whileHover={hoverConfig}
        transition={{
          duration,
          delay,
          type: 'spring',
          stiffness: 500,
          damping: 30,
          ...animationConfig.transition
        }}
      >
        {children}
      </MotionChip>
    </AnimatePresence>
  );
};

AnimatedChip.propTypes = {
  animation: PropTypes.oneOf(['pop', 'slide', 'fade', 'bounce', 'rotate']),
  hover: PropTypes.oneOf(['grow', 'glow', 'lift', 'pulse']),
  onDelete: PropTypes.func,
  children: PropTypes.node,
  delay: PropTypes.number,
  duration: PropTypes.number
};

export default AnimatedChip; 