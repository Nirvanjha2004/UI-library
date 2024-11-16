import { Menu, MenuItem } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  },
  slideDown: {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 }
  },
  slideUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 }
  },
  flip: {
    initial: { rotateX: -90, opacity: 0 },
    animate: { rotateX: 0, opacity: 1 },
    exit: { rotateX: 90, opacity: 0 }
  }
};

const itemAnimations = {
  cascade: (index) => ({
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 },
    transition: { delay: index * 0.1 }
  }),
  stagger: (index) => ({
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
    transition: { delay: index * 0.1 }
  }),
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }
};

const hoverEffects = {
  glow: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    transition: { duration: 0.2 }
  },
  scale: {
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  slide: {
    x: 10,
    transition: { duration: 0.2 }
  },
  none: {}
};

const AnimatedMenu = ({
  open,
  onClose,
  anchorEl,
  items,
  animation = 'fade',
  itemAnimation = 'cascade',
  hover = 'glow',
  duration = 0.2,
  transformOrigin,
  ...props
}) => {
  const MotionMenu = motion(Menu);
  const MotionMenuItem = motion(MenuItem);
  const animationConfig = animations[animation];
  const hoverConfig = hoverEffects[hover];

  return (
    <AnimatePresence>
      {open && (
        <MotionMenu
          open={open}
          onClose={onClose}
          anchorEl={anchorEl}
          initial={animationConfig.initial}
          animate={animationConfig.animate}
          exit={animationConfig.exit}
          transition={{ duration }}
          transformOrigin={transformOrigin}
          {...props}
        >
          {items.map((item, index) => (
            <MotionMenuItem
              key={item.id || index}
              onClick={(e) => {
                if (item.onClick) item.onClick(e);
                if (!item.keepOpen) onClose();
              }}
              disabled={item.disabled}
              {...itemAnimations[itemAnimation](index)}
              whileHover={hoverConfig}
              sx={item.sx}
            >
              {item.content}
            </MotionMenuItem>
          ))}
        </MotionMenu>
      )}
    </AnimatePresence>
  );
};

AnimatedMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  anchorEl: PropTypes.any,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      content: PropTypes.node.isRequired,
      onClick: PropTypes.func,
      disabled: PropTypes.bool,
      keepOpen: PropTypes.bool,
      sx: PropTypes.object
    })
  ).isRequired,
  animation: PropTypes.oneOf(['fade', 'scale', 'slideDown', 'slideUp', 'flip']),
  itemAnimation: PropTypes.oneOf(['cascade', 'stagger', 'fade']),
  hover: PropTypes.oneOf(['glow', 'scale', 'slide', 'none']),
  duration: PropTypes.number,
  transformOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(['top', 'center', 'bottom']),
    horizontal: PropTypes.oneOf(['left', 'center', 'right'])
  })
};

export default AnimatedMenu; 