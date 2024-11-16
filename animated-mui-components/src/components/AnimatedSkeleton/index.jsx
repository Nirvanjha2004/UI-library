import { Skeleton } from '@mui/material';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const animations = {
  pulse: {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  wave: {
    animate: {
      backgroundPosition: ["100% 50%", "-100% 50%"],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "linear"
      }
    },
    style: {
      backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
      backgroundSize: "200% 100%"
    }
  },
  shimmer: {
    animate: {
      background: ["rgba(200,200,200,0.3)", "rgba(200,200,200,0.6)", "rgba(200,200,200,0.3)"],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  blink: {
    animate: {
      opacity: [1, 0.4, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }
};

const variants = {
  text: {
    height: 'auto',
    width: '100%'
  },
  circular: {
    borderRadius: '50%',
    width: 40,
    height: 40
  },
  rectangular: {
    height: 100,
    width: '100%'
  },
  rounded: {
    borderRadius: 8,
    height: 100,
    width: '100%'
  }
};

const AnimatedSkeleton = ({
  animation = 'pulse',
  variant = 'text',
  width,
  height,
  duration = 1.5,
  customStyle,
  ...props
}) => {
  const MotionSkeleton = motion(Skeleton);
  const animationConfig = animations[animation];
  const variantConfig = variants[variant];

  return (
    <MotionSkeleton
      variant={variant}
      animate={animationConfig.animate}
      transition={animationConfig.transition}
      sx={{
        ...variantConfig,
        width: width || variantConfig.width,
        height: height || variantConfig.height,
        ...(animationConfig.style || {}),
        ...customStyle
      }}
      {...props}
    />
  );
};

AnimatedSkeleton.propTypes = {
  animation: PropTypes.oneOf(['pulse', 'wave', 'shimmer', 'blink']),
  variant: PropTypes.oneOf(['text', 'circular', 'rectangular', 'rounded']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  duration: PropTypes.number,
  customStyle: PropTypes.object
};

export default AnimatedSkeleton; 