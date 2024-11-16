import { LinearProgress, CircularProgress, Box } from '@mui/material';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const animations = {
  pulse: {
    animate: { 
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7]
    },
    transition: { duration: 1.5, repeat: Infinity }
  },
  glow: {
    animate: {
      boxShadow: [
        '0 0 0 rgba(66, 153, 225, 0.0)',
        '0 0 10px rgba(66, 153, 225, 0.3)',
        '0 0 0 rgba(66, 153, 225, 0.0)'
      ]
    },
    transition: { duration: 1.5, repeat: Infinity }
  },
  slide: {
    animate: {
      x: [-20, 0],
      opacity: [0, 1]
    },
    transition: { duration: 0.5 }
  },
  grow: {
    animate: {
      scaleX: [0, 1],
      opacity: [0, 1]
    },
    transition: { duration: 0.5 }
  }
};

const AnimatedProgress = ({
  variant = 'linear',
  animation = 'pulse',
  value,
  color = 'primary',
  thickness = 4,
  size = 40,
  ...props
}) => {
  const ProgressComponent = variant === 'circular' ? CircularProgress : LinearProgress;
  const MotionProgress = motion(ProgressComponent);
  const animationConfig = animations[animation];

  return (
    <Box position="relative">
      <MotionProgress
        variant={value !== undefined ? "determinate" : "indeterminate"}
        value={value}
        color={color}
        thickness={thickness}
        size={size}
        {...props}
        animate={animationConfig.animate}
        transition={animationConfig.transition}
        sx={{
          '& .MuiLinearProgress-bar': {
            transition: 'none' // Prevent default MUI transitions
          },
          ...props.sx
        }}
      />
    </Box>
  );
};

AnimatedProgress.propTypes = {
  variant: PropTypes.oneOf(['linear', 'circular']),
  animation: PropTypes.oneOf(['pulse', 'glow', 'slide', 'grow']),
  value: PropTypes.number,
  color: PropTypes.string,
  thickness: PropTypes.number,
  size: PropTypes.number,
  sx: PropTypes.object
};

export default AnimatedProgress; 