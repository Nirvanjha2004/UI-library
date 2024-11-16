import { Switch } from '@mui/material';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const animations = {
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
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  }
};

const thumbAnimations = {
  bounce: {
    checked: { x: 20, scale: [1, 1.2, 1] },
    unchecked: { x: 0, scale: [1, 1.2, 1] }
  },
  slide: {
    checked: { x: 20 },
    unchecked: { x: 0 }
  },
  elastic: {
    checked: { x: [0, 25, 20], transition: { type: "spring", stiffness: 300, damping: 15 } },
    unchecked: { x: [20, -5, 0], transition: { type: "spring", stiffness: 300, damping: 15 } }
  }
};

const trackAnimations = {
  glow: {
    checked: {
      backgroundColor: ['#90caf9', '#2196f3', '#90caf9'],
      transition: { duration: 0.3 }
    },
    unchecked: {
      backgroundColor: ['#bdbdbd', '#9e9e9e', '#bdbdbd'],
      transition: { duration: 0.3 }
    }
  },
  fade: {
    checked: {
      backgroundColor: '#2196f3',
      transition: { duration: 0.2 }
    },
    unchecked: {
      backgroundColor: '#9e9e9e',
      transition: { duration: 0.2 }
    }
  },
  none: {
    checked: {},
    unchecked: {}
  }
};

const AnimatedSwitch = ({
  checked,
  onChange,
  animation = 'slide',
  thumbAnimation = 'bounce',
  trackAnimation = 'glow',
  color = 'primary',
  size = 'medium',
  disabled = false,
  ...props
}) => {
  const MotionSwitch = motion(Switch);
  const animationConfig = animations[animation];
  const thumbConfig = thumbAnimations[thumbAnimation];
  const trackConfig = trackAnimations[trackAnimation];

  return (
    <MotionSwitch
      checked={checked}
      onChange={onChange}
      color={color}
      size={size}
      disabled={disabled}
      initial={animationConfig.initial}
      animate={animationConfig.animate}
      exit={animationConfig.exit}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      sx={{
        '& .MuiSwitch-thumb': {
          transition: 'none',
          ...thumbConfig[checked ? 'checked' : 'unchecked']
        },
        '& .MuiSwitch-track': {
          transition: 'none',
          ...trackConfig[checked ? 'checked' : 'unchecked']
        },
        ...props.sx
      }}
      {...props}
    />
  );
};

AnimatedSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  animation: PropTypes.oneOf(['slide', 'fade', 'scale']),
  thumbAnimation: PropTypes.oneOf(['bounce', 'slide', 'elastic']),
  trackAnimation: PropTypes.oneOf(['glow', 'fade', 'none']),
  color: PropTypes.oneOf(['primary', 'secondary', 'warning', 'error', 'info', 'success']),
  size: PropTypes.oneOf(['small', 'medium']),
  disabled: PropTypes.bool,
  sx: PropTypes.object
};

export default AnimatedSwitch; 