import { Fab } from '@mui/material';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const animations = {
  pulse: {
    animate: {
      scale: [1, 1.1, 1],
      boxShadow: [
        '0 3px 5px rgba(0,0,0,0.2)',
        '0 6px 12px rgba(0,0,0,0.3)',
        '0 3px 5px rgba(0,0,0,0.2)'
      ]
    },
    transition: { duration: 2, repeat: Infinity }
  },
  bounce: {
    animate: {
      y: [0, -10, 0],
      boxShadow: [
        '0 3px 5px rgba(0,0,0,0.2)',
        '0 8px 15px rgba(0,0,0,0.3)',
        '0 3px 5px rgba(0,0,0,0.2)'
      ]
    },
    transition: { duration: 1.5, repeat: Infinity }
  },
  rotate: {
    animate: { rotate: 360 },
    transition: { duration: 2, repeat: Infinity, ease: "linear" }
  }
};

const AnimatedFab = ({
  animation = 'pulse',
  children,
  ...props
}) => {
  const MotionFab = motion(Fab);
  const animationConfig = animations[animation];

  return (
    <MotionFab
      component={motion.button}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={animationConfig.animate}
      transition={animationConfig.transition}
      {...props}
    >
      {children}
    </MotionFab>
  );
};

AnimatedFab.propTypes = {
  animation: PropTypes.oneOf(['pulse', 'bounce', 'rotate']),
  children: PropTypes.node.isRequired
};

export default AnimatedFab; 