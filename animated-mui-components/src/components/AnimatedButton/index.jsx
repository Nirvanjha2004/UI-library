import { Button } from '@mui/material';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const animations = {
  bounce: {
    initial: { scale: 1 },
    animate: { y: [0, -6, 0] },
    transition: { duration: 0.5 }
  },
  pulse: {
    initial: { scale: 1 },
    animate: { scale: [1, 1.05, 1] },
    transition: { duration: 0.3 }
  },
  shake: {
    initial: { x: 0 },
    animate: { x: [-5, 5, -5, 5, 0] },
    transition: { duration: 0.4 }
  },
  ripple: {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      boxShadow: [
        '0 0 0 0 rgba(255, 255, 255, 0)',
        '0 0 0 10px rgba(255, 255, 255, 0.1)',
        '0 0 0 20px rgba(255, 255, 255, 0)'
      ]
    },
    transition: { duration: 0.8 }
  },
  slide: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.3 }
  },
  rotate: {
    initial: { rotate: 0 },
    animate: { rotate: 360 },
    transition: { duration: 0.5 }
  }
};

const hoverEffects = {
  grow: { scale: 1.05 },
  shrink: { scale: 0.95 },
  glow: { 
    scale: 1.02,
    boxShadow: '0 0 8px rgba(255,255,255,0.3)'
  },
  lift: { 
    y: -5,
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
  }
};

const AnimatedButton = ({
  animation = 'bounce',
  hover = 'grow',
  repeat = 0,
  delay = 0,
  children,
  disabled,
  loading,
  ...props
}) => {
  const MotionButton = motion(Button);
  const animationConfig = animations[animation];
  const hoverConfig = hoverEffects[hover];

  return (
    <MotionButton
      component={motion.button}
      initial={animationConfig.initial}
      animate={animationConfig.animate}
      transition={{
        ...animationConfig.transition,
        repeat,
        delay
      }}
      whileHover={!disabled && hoverConfig}
      whileTap={!disabled && { scale: 0.95 }}
      disabled={disabled || loading}
      {...props}
    >
      <motion.span
        animate={loading ? { opacity: [1, 0.5, 1] } : {}}
        transition={{ duration: 1, repeat: loading ? Infinity : 0 }}
      >
        {children}
      </motion.span>
    </MotionButton>
  );
};

AnimatedButton.propTypes = {
  animation: PropTypes.oneOf(['bounce', 'pulse', 'shake', 'ripple', 'slide', 'rotate']),
  hover: PropTypes.oneOf(['grow', 'shrink', 'glow', 'lift']),
  repeat: PropTypes.number,
  delay: PropTypes.number,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool
};

export default AnimatedButton; 