import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  scale: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 }
  },
  slideUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 }
  },
  slideDown: {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 }
  },
  rotate: {
    initial: { rotate: -180, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 180, opacity: 0 }
  }
};

const actionAnimations = {
  stagger: (index) => ({
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { delay: index * 0.1 }
  }),
  cascade: (index) => ({
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 },
    transition: { delay: index * 0.1 }
  }),
  fan: (index, total) => ({
    initial: { scale: 0, rotate: -180 },
    animate: { 
      scale: 1, 
      rotate: -180 + (360 / total) * index 
    },
    exit: { scale: 0, rotate: 180 },
    transition: { delay: index * 0.1 }
  })
};

const AnimatedSpeedDial = ({
  open,
  onOpen,
  onClose,
  actions,
  animation = 'scale',
  actionAnimation = 'stagger',
  icon,
  direction = 'up',
  duration = 0.3,
  ...props
}) => {
  const MotionSpeedDial = motion(SpeedDial);
  const MotionSpeedDialAction = motion(SpeedDialAction);
  const animationConfig = animations[animation];

  return (
    <AnimatePresence>
      <MotionSpeedDial
        ariaLabel="Animated SpeedDial"
        open={open}
        onClose={onClose}
        onOpen={onOpen}
        icon={icon || <SpeedDialIcon />}
        direction={direction}
        initial={animationConfig.initial}
        animate={animationConfig.animate}
        exit={animationConfig.exit}
        transition={{ duration }}
        {...props}
      >
        <AnimatePresence>
          {open && actions.map((action, index) => (
            <MotionSpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => {
                if (action.onClick) action.onClick();
                if (!action.keepOpen) onClose();
              }}
              {...actionAnimations[actionAnimation](index, actions.length)}
              FabProps={{
                sx: action.sx
              }}
            />
          ))}
        </AnimatePresence>
      </MotionSpeedDial>
    </AnimatePresence>
  );
};

AnimatedSpeedDial.propTypes = {
  open: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      name: PropTypes.string.isRequired,
      onClick: PropTypes.func,
      keepOpen: PropTypes.bool,
      sx: PropTypes.object
    })
  ).isRequired,
  animation: PropTypes.oneOf(['fade', 'scale', 'slideUp', 'slideDown', 'rotate']),
  actionAnimation: PropTypes.oneOf(['stagger', 'cascade', 'fan']),
  icon: PropTypes.node,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  duration: PropTypes.number
};

export default AnimatedSpeedDial; 