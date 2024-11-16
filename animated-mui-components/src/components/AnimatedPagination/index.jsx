import { Pagination } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
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

const itemAnimations = {
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
    y: [0, -4, 0],
    transition: { duration: 0.3 }
  }
};

const AnimatedPagination = ({
  page,
  count,
  onChange,
  animation = 'slide',
  itemAnimation = 'pulse',
  color = 'primary',
  size = 'medium',
  showFirstButton = false,
  showLastButton = false,
  siblingCount = 1,
  boundaryCount = 1,
  shape = 'circular',
  variant = 'outlined',
  disabled = false,
  ...props
}) => {
  const MotionPagination = motion(Pagination);
  const animationConfig = animations[animation];
  const itemConfig = itemAnimations[itemAnimation];

  return (
    <AnimatePresence mode="wait">
      <MotionPagination
        page={page}
        count={count}
        onChange={onChange}
        color={color}
        size={size}
        showFirstButton={showFirstButton}
        showLastButton={showLastButton}
        siblingCount={siblingCount}
        boundaryCount={boundaryCount}
        shape={shape}
        variant={variant}
        disabled={disabled}
        initial={animationConfig.initial}
        animate={animationConfig.animate}
        exit={animationConfig.exit}
        transition={{ duration: 0.3 }}
        sx={{
          '& .MuiPaginationItem-root': {
            transition: 'all 0.2s',
            '&.Mui-selected': itemConfig
          },
          ...props.sx
        }}
        {...props}
      />
    </AnimatePresence>
  );
};

AnimatedPagination.propTypes = {
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  animation: PropTypes.oneOf(['slide', 'fade', 'scale']),
  itemAnimation: PropTypes.oneOf(['pulse', 'glow', 'bounce']),
  color: PropTypes.oneOf(['primary', 'secondary', 'standard']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  showFirstButton: PropTypes.bool,
  showLastButton: PropTypes.bool,
  siblingCount: PropTypes.number,
  boundaryCount: PropTypes.number,
  shape: PropTypes.oneOf(['circular', 'rounded']),
  variant: PropTypes.oneOf(['text', 'outlined']),
  disabled: PropTypes.bool,
  sx: PropTypes.object
};

export default AnimatedPagination; 