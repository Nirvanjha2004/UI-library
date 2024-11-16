import { TextField } from '@mui/material';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const animations = {
  shake: {
    animate: { 
      x: [-2, 2, -2, 2, 0],
      transition: { duration: 0.4 }
    }
  },
  bounce: {
    animate: { 
      y: [-2, 2, -2, 2, 0],
      transition: { duration: 0.4 }
    }
  },
  glow: {
    animate: {
      boxShadow: [
        '0 0 0 rgba(66, 153, 225, 0.0)',
        '0 0 0 4px rgba(66, 153, 225, 0.3)',
        '0 0 0 rgba(66, 153, 225, 0.0)'
      ],
      transition: { duration: 1.5, repeat: Infinity }
    }
  },
  highlight: {
    animate: {
      backgroundColor: [
        'rgba(66, 153, 225, 0.0)',
        'rgba(66, 153, 225, 0.1)',
        'rgba(66, 153, 225, 0.0)'
      ],
      transition: { duration: 1.5, repeat: Infinity }
    }
  }
};

const focusEffects = {
  scale: { scale: 1.02 },
  lift: { 
    y: -4,
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  },
  glow: {
    boxShadow: '0 0 8px rgba(66, 153, 225, 0.4)'
  },
  none: {}
};

const AnimatedTextField = ({
  animation,
  focusEffect = 'scale',
  error,
  onFocus,
  onBlur,
  children,
  ...props
}) => {
  const MotionTextField = motion(TextField);
  const animationConfig = animation ? animations[animation] : null;
  const focusConfig = focusEffects[focusEffect];

  return (
    <MotionTextField
      {...props}
      error={error}
      onFocus={(e) => {
        if (onFocus) onFocus(e);
      }}
      onBlur={(e) => {
        if (onBlur) onBlur(e);
      }}
      component={motion.div}
      animate={error ? animations.shake.animate : animationConfig?.animate}
      transition={error ? animations.shake.transition : animationConfig?.transition}
      whileFocus={!error && focusConfig}
      sx={{
        '& .MuiOutlinedInput-root': {
          transition: 'all 0.3s ease',
        },
        ...props.sx
      }}
    >
      {children}
    </MotionTextField>
  );
};

AnimatedTextField.propTypes = {
  animation: PropTypes.oneOf(['shake', 'bounce', 'glow', 'highlight']),
  focusEffect: PropTypes.oneOf(['scale', 'lift', 'glow', 'none']),
  error: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  children: PropTypes.node,
  sx: PropTypes.object
};

export default AnimatedTextField; 