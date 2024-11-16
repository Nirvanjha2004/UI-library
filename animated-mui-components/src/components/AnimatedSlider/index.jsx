import { Slider } from '@mui/material';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const animations = {
  slide: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.3 }
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 }
  },
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.3 }
  }
};

const thumbAnimations = {
  pulse: {
    scale: [1, 1.2, 1],
    transition: { duration: 0.3 }
  },
  glow: {
    boxShadow: [
      '0 0 0 rgba(66, 153, 225, 0.0)',
      '0 0 10px rgba(66, 153, 225, 0.6)',
      '0 0 0 rgba(66, 153, 225, 0.0)'
    ],
    transition: { duration: 0.5 }
  },
  bounce: {
    y: [0, -5, 0],
    transition: { duration: 0.3 }
  }
};

const trackAnimations = {
  fill: {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
    transition: { duration: 0.5 }
  },
  glow: {
    boxShadow: '0 0 8px rgba(66, 153, 225, 0.4)'
  },
  none: {}
};

const AnimatedSlider = ({
  animation = 'slide',
  thumbAnimation = 'pulse',
  trackAnimation = 'fill',
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  marks,
  valueLabelDisplay = 'auto',
  orientation = 'horizontal',
  color = 'primary',
  size = 'medium',
  disabled = false,
  ...props
}) => {
  const MotionSlider = motion(Slider);
  const animationConfig = animations[animation];
  const thumbConfig = thumbAnimations[thumbAnimation];
  const trackConfig = trackAnimations[trackAnimation];

  return (
    <MotionSlider
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      step={step}
      marks={marks}
      valueLabelDisplay={valueLabelDisplay}
      orientation={orientation}
      color={color}
      size={size}
      disabled={disabled}
      initial={animationConfig.initial}
      animate={animationConfig.animate}
      transition={animationConfig.transition}
      sx={{
        '& .MuiSlider-thumb': {
          transition: 'all 0.2s',
          '&:hover': thumbConfig,
          '&.Mui-active': thumbConfig
        },
        '& .MuiSlider-track': {
          ...trackConfig,
          transformOrigin: 'left',
          transition: 'all 0.3s'
        },
        ...props.sx
      }}
      {...props}
    />
  );
};

AnimatedSlider.propTypes = {
  animation: PropTypes.oneOf(['slide', 'fade', 'scale']),
  thumbAnimation: PropTypes.oneOf(['pulse', 'glow', 'bounce']),
  trackAnimation: PropTypes.oneOf(['fill', 'glow', 'none']),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.array]).isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  marks: PropTypes.bool,
  valueLabelDisplay: PropTypes.oneOf(['auto', 'on', 'off']),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium']),
  disabled: PropTypes.bool,
  sx: PropTypes.object
};

export default AnimatedSlider; 