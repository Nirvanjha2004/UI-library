import { Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const animations = {
  pulse: {
    animate: {
      scale: [1, 1.1, 1],
      boxShadow: [
        '0 0 0 0 rgba(0,0,0,0.2)',
        '0 0 0 10px rgba(0,0,0,0)',
        '0 0 0 0 rgba(0,0,0,0.2)'
      ]
    },
    transition: { duration: 2, repeat: Infinity }
  },
  rotate: {
    animate: { rotate: 360 },
    transition: { duration: 2, repeat: Infinity, ease: "linear" }
  },
  bounce: {
    animate: { y: [0, -10, 0] },
    transition: { duration: 1, repeat: Infinity }
  },
  shake: {
    animate: { x: [-3, 3, -3, 3, 0] },
    transition: { duration: 0.5, repeat: Infinity }
  },
  border: {
    animate: {
      boxShadow: [
        '0 0 0 2px rgba(0,0,0,0.2)',
        '0 0 0 4px rgba(0,0,0,0.1)',
        '0 0 0 2px rgba(0,0,0,0.2)'
      ]
    },
    transition: { duration: 1.5, repeat: Infinity }
  }
};

const hoverEffects = {
  grow: { scale: 1.1 },
  glow: { 
    scale: 1.05,
    boxShadow: '0 0 8px rgba(255,255,255,0.3)'
  },
  rotate: { 
    scale: 1.1,
    rotate: 180
  },
  bounce: {
    y: -10,
    transition: {
      type: "spring",
      stiffness: 300
    }
  }
};

const AnimatedAvatar = ({
  animation,
  hover = 'grow',
  src,
  alt,
  children,
  size = 40,
  variant = 'circular',
  ...props
}) => {
  const MotionAvatar = motion(Avatar);
  const animationConfig = animation ? animations[animation] : null;
  const hoverConfig = hoverEffects[hover];

  return (
    <MotionAvatar
      src={src}
      alt={alt}
      variant={variant}
      initial={animationConfig?.initial}
      animate={animationConfig?.animate}
      transition={animationConfig?.transition}
      whileHover={hoverConfig}
      sx={{
        width: size,
        height: size,
        ...props.sx
      }}
      {...props}
    >
      {children}
    </MotionAvatar>
  );
};

AnimatedAvatar.propTypes = {
  animation: PropTypes.oneOf(['pulse', 'rotate', 'bounce', 'shake', 'border']),
  hover: PropTypes.oneOf(['grow', 'glow', 'rotate', 'bounce']),
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.number,
  variant: PropTypes.oneOf(['circular', 'rounded', 'square']),
  sx: PropTypes.object
};

export default AnimatedAvatar; 