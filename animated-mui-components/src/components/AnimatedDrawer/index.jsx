import { Drawer, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const animations = {
  slideRight: {
    initial: { x: '-100%' },
    animate: { x: 0 },
    exit: { x: '-100%' }
  },
  slideLeft: {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '100%' }
  },
  slideUp: {
    initial: { y: '100%' },
    animate: { y: 0 },
    exit: { y: '100%' }
  },
  slideDown: {
    initial: { y: '-100%' },
    animate: { y: 0 },
    exit: { y: '-100%' }
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  scale: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 }
  }
};

const getAnimationByAnchor = (anchor, animation) => {
  if (animation !== 'auto') return animations[animation];
  
  switch (anchor) {
    case 'left':
      return animations.slideRight;
    case 'right':
      return animations.slideLeft;
    case 'top':
      return animations.slideDown;
    case 'bottom':
      return animations.slideUp;
    default:
      return animations.fade;
  }
};

const AnimatedDrawer = ({
  open,
  onClose,
  anchor = 'left',
  animation = 'auto',
  duration = 0.3,
  children,
  width = 250,
  height = '100%',
  backdrop = true,
  elevation = 1,
  ...props
}) => {
  const animationConfig = getAnimationByAnchor(anchor, animation);
  const MotionBox = motion(Box);

  const isVertical = anchor === 'left' || anchor === 'right';
  const drawerSx = {
    width: isVertical ? width : '100%',
    height: isVertical ? '100%' : height
  };

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      variant="temporary"
      elevation={elevation}
      hideBackdrop={!backdrop}
      {...props}
      PaperProps={{
        sx: {
          background: 'transparent',
          boxShadow: 'none',
          overflow: 'hidden'
        }
      }}
    >
      <AnimatePresence mode="wait">
        {open && (
          <MotionBox
            initial={animationConfig.initial}
            animate={animationConfig.animate}
            exit={animationConfig.exit}
            transition={{ duration, type: 'tween' }}
            sx={{
              ...drawerSx,
              backgroundColor: 'background.paper',
              boxShadow: elevation ? `elevation${elevation}` : 'none',
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                width: '8px',
                height: '8px'
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,0.2)',
                borderRadius: '4px'
              }
            }}
          >
            {children}
          </MotionBox>
        )}
      </AnimatePresence>
    </Drawer>
  );
};

AnimatedDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  anchor: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  animation: PropTypes.oneOf(['auto', 'slideRight', 'slideLeft', 'slideUp', 'slideDown', 'fade', 'scale']),
  duration: PropTypes.number,
  children: PropTypes.node.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  backdrop: PropTypes.bool,
  elevation: PropTypes.number
};

export default AnimatedDrawer; 