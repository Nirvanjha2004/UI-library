import { Badge } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const animations = {
  pulse: {
    initial: { scale: 0 },
    animate: { 
      scale: [1, 1.2, 1],
      backgroundColor: ['#f44336', '#ff1744', '#f44336']
    },
    exit: { scale: 0 },
    transition: { duration: 0.5 }
  },
  shake: {
    initial: { x: 0 },
    animate: { 
      x: [-3, 3, -3, 3, 0],
      backgroundColor: ['#f44336', '#ff1744', '#f44336']
    },
    exit: { x: 0 },
    transition: { duration: 0.4 }
  },
  bounce: {
    initial: { y: 0 },
    animate: { 
      y: [-3, 3, -3, 3, 0],
      backgroundColor: ['#f44336', '#ff1744', '#f44336']
    },
    exit: { y: 0 },
    transition: { duration: 0.4 }
  },
  blink: {
    initial: { opacity: 1 },
    animate: { 
      opacity: [1, 0.5, 1],
      backgroundColor: ['#f44336', '#ff1744', '#f44336']
    },
    exit: { opacity: 0 },
    transition: { duration: 0.5, repeat: Infinity }
  },
  ripple: {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.2, 1],
      boxShadow: [
        '0 0 0 0 rgba(244, 67, 54, 0.4)',
        '0 0 0 10px rgba(244, 67, 54, 0)',
        '0 0 0 0 rgba(244, 67, 54, 0)'
      ]
    },
    exit: { scale: 0 },
    transition: { duration: 1, repeat: Infinity }
  }
};

const AnimatedBadge = ({
  animation = 'pulse',
  children,
  badgeContent,
  showAnimation = true,
  invisible = false,
  overlap = 'rectangular',
  color = 'error',
  max = 99,
  ...props
}) => {
  const MotionBadge = motion(Badge);
  const animationConfig = animations[animation];

  return (
    <AnimatePresence>
      <MotionBadge
        overlap={overlap}
        color={color}
        max={max}
        invisible={invisible}
        badgeContent={
          <motion.div
            initial={showAnimation ? animationConfig.initial : {}}
            animate={showAnimation ? animationConfig.animate : {}}
            exit={animationConfig.exit}
            transition={animationConfig.transition}
          >
            {badgeContent}
          </motion.div>
        }
        {...props}
      >
        {children}
      </MotionBadge>
    </AnimatePresence>
  );
};

AnimatedBadge.propTypes = {
  animation: PropTypes.oneOf(['pulse', 'shake', 'bounce', 'blink', 'ripple']),
  children: PropTypes.node.isRequired,
  badgeContent: PropTypes.node.isRequired,
  showAnimation: PropTypes.bool,
  invisible: PropTypes.bool,
  overlap: PropTypes.oneOf(['rectangular', 'circular']),
  color: PropTypes.string,
  max: PropTypes.number
};

export default AnimatedBadge; 