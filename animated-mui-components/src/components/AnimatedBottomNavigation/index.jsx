import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const animations = {
  slideUp: {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 }
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
  bounce: (index) => ({
    initial: { y: 0 },
    animate: { y: [-4, 0] },
    transition: { duration: 0.3, delay: index * 0.1 }
  }),
  pulse: (index) => ({
    initial: { scale: 1 },
    animate: { scale: [1, 1.2, 1] },
    transition: { duration: 0.3, delay: index * 0.1 }
  }),
  glow: (index) => ({
    initial: { boxShadow: '0 0 0 rgba(255,255,255,0)' },
    animate: { boxShadow: '0 0 10px rgba(255,255,255,0.5)' },
    transition: { duration: 0.3, delay: index * 0.1 }
  })
};

const AnimatedBottomNavigation = ({
  value,
  onChange,
  items,
  animation = 'slideUp',
  itemAnimation = 'bounce',
  showLabels = true,
  duration = 0.3,
  ...props
}) => {
  const MotionBottomNavigation = motion(BottomNavigation);
  const MotionBottomNavigationAction = motion(BottomNavigationAction);
  const animationConfig = animations[animation];

  return (
    <AnimatePresence>
      <MotionBottomNavigation
        value={value}
        onChange={onChange}
        showLabels={showLabels}
        initial={animationConfig.initial}
        animate={animationConfig.animate}
        exit={animationConfig.exit}
        transition={{ duration }}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          boxShadow: 3
        }}
        {...props}
      >
        {items.map((item, index) => (
          <MotionBottomNavigationAction
            key={item.value}
            label={item.label}
            icon={item.icon}
            value={item.value}
            disabled={item.disabled}
            {...(value === item.value && itemAnimations[itemAnimation](index))}
            sx={{
              '&.Mui-selected': {
                color: 'primary.main'
              },
              ...item.sx
            }}
          />
        ))}
      </MotionBottomNavigation>
    </AnimatePresence>
  );
};

AnimatedBottomNavigation.propTypes = {
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      value: PropTypes.any.isRequired,
      disabled: PropTypes.bool,
      sx: PropTypes.object
    })
  ).isRequired,
  animation: PropTypes.oneOf(['slideUp', 'fade', 'scale']),
  itemAnimation: PropTypes.oneOf(['bounce', 'pulse', 'glow']),
  showLabels: PropTypes.bool,
  duration: PropTypes.number
};

export default AnimatedBottomNavigation; 