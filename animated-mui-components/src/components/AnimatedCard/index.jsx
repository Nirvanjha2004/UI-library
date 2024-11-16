import { Card, CardContent, CardActions, CardMedia } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slideUp: {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 }
  },
  slideRight: {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 }
  },
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  },
  flip: {
    initial: { rotateY: 90, opacity: 0 },
    animate: { rotateY: 0, opacity: 1 },
    exit: { rotateY: -90, opacity: 0 }
  }
};

const hoverEffects = {
  lift: { 
    y: -10,
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
  },
  grow: { 
    scale: 1.05,
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
  },
  glow: {
    boxShadow: '0 0 20px rgba(255,255,255,0.2)'
  },
  tilt: {
    rotateX: 5,
    rotateY: 5,
    transition: { duration: 0.2 }
  }
};

const AnimatedCard = ({
  animation = 'fade',
  hover = 'lift',
  children,
  media,
  actions,
  delay = 0,
  ...props
}) => {
  const MotionCard = motion(Card);
  const animationConfig = animations[animation];
  const hoverConfig = hoverEffects[hover];

  return (
    <AnimatePresence>
      <MotionCard
        initial={animationConfig.initial}
        animate={animationConfig.animate}
        exit={animationConfig.exit}
        transition={{ duration: 0.3, delay }}
        whileHover={hoverConfig}
        layout
        {...props}
      >
        {media && (
          <CardMedia
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            {...media}
          />
        )}
        <CardContent>
          {children}
        </CardContent>
        {actions && (
          <CardActions>
            {actions}
          </CardActions>
        )}
      </MotionCard>
    </AnimatePresence>
  );
};

AnimatedCard.propTypes = {
  animation: PropTypes.oneOf(['fade', 'slideUp', 'slideRight', 'scale', 'flip']),
  hover: PropTypes.oneOf(['lift', 'grow', 'glow', 'tilt']),
  children: PropTypes.node.isRequired,
  media: PropTypes.object,
  actions: PropTypes.node,
  delay: PropTypes.number
};

export default AnimatedCard; 