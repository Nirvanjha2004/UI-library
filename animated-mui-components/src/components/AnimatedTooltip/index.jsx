import { Tooltip } from '@mui/material';
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
  slideUp: {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 10, opacity: 0 }
  },
  slideDown: {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -10, opacity: 0 }
  },
  flip: {
    initial: { rotateX: 90, opacity: 0 },
    animate: { rotateX: 0, opacity: 1 },
    exit: { rotateX: 90, opacity: 0 }
  }
};

const tooltipStyles = {
  default: {
    bgcolor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    borderRadius: 1,
    p: 1
  },
  light: {
    bgcolor: 'rgba(255, 255, 255, 0.95)',
    color: 'black',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    borderRadius: 1,
    p: 1
  },
  gradient: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    color: 'white',
    borderRadius: 1,
    p: 1
  },
  glass: {
    bgcolor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(8px)',
    color: 'white',
    borderRadius: 1,
    p: 1
  }
};

const AnimatedTooltip = ({
  children,
  title,
  animation = 'fade',
  variant = 'default',
  placement = 'bottom',
  arrow = true,
  enterDelay = 200,
  leaveDelay = 0,
  open,
  onClose,
  onOpen,
  followCursor = false,
  ...props
}) => {
  const MotionBox = motion.div;
  const animationConfig = animations[animation];
  const tooltipStyle = tooltipStyles[variant];

  return (
    <Tooltip
      title={
        <AnimatePresence mode="wait">
          {open && (
            <MotionBox
              initial={animationConfig.initial}
              animate={animationConfig.animate}
              exit={animationConfig.exit}
              transition={{ duration: 0.2 }}
            >
              {title}
            </MotionBox>
          )}
        </AnimatePresence>
      }
      placement={placement}
      arrow={arrow}
      enterDelay={enterDelay}
      leaveDelay={leaveDelay}
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      followCursor={followCursor}
      componentsProps={{
        tooltip: {
          sx: tooltipStyle
        },
        arrow: {
          sx: {
            color: tooltipStyle.bgcolor,
            '&::before': {
              backgroundColor: tooltipStyle.bgcolor
            }
          }
        }
      }}
      {...props}
    >
      {children}
    </Tooltip>
  );
};

AnimatedTooltip.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  animation: PropTypes.oneOf(['fade', 'scale', 'slideUp', 'slideDown', 'flip']),
  variant: PropTypes.oneOf(['default', 'light', 'gradient', 'glass']),
  placement: PropTypes.oneOf([
    'top', 'bottom', 'left', 'right',
    'top-start', 'top-end', 'bottom-start', 'bottom-end',
    'left-start', 'left-end', 'right-start', 'right-end'
  ]),
  arrow: PropTypes.bool,
  enterDelay: PropTypes.number,
  leaveDelay: PropTypes.number,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  followCursor: PropTypes.bool
};

export default AnimatedTooltip; 