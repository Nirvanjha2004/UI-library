import { Tabs, Tab, Box } from '@mui/material';
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

const indicatorAnimations = {
  slide: {
    initial: { width: 0 },
    animate: { width: '100%' },
    transition: { type: 'spring', stiffness: 300, damping: 30 }
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 }
  },
  scale: {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { type: 'spring', stiffness: 500, damping: 30 }
  }
};

const AnimatedTabs = ({
  value,
  onChange,
  tabs,
  animation = 'slide',
  indicatorAnimation = 'slide',
  orientation = 'horizontal',
  variant = 'standard',
  centered = false,
  ...props
}) => {
  const MotionTabs = motion(Tabs);
  const animationConfig = animations[animation];
  const indicatorConfig = indicatorAnimations[indicatorAnimation];

  return (
    <MotionTabs
      value={value}
      onChange={onChange}
      orientation={orientation}
      variant={variant}
      centered={centered}
      TabIndicatorProps={{
        children: (
          <motion.span
            initial={indicatorConfig.initial}
            animate={indicatorConfig.animate}
            transition={indicatorConfig.transition}
          />
        )
      }}
      {...props}
    >
      <AnimatePresence mode="wait">
        {tabs.map((tab, index) => (
          <motion.div
            key={tab.label}
            initial={animationConfig.initial}
            animate={animationConfig.animate}
            exit={animationConfig.exit}
            transition={{ delay: index * 0.1 }}
          >
            <Tab
              label={tab.label}
              icon={tab.icon}
              disabled={tab.disabled}
              sx={tab.sx}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </MotionTabs>
  );
};

AnimatedTabs.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
      icon: PropTypes.node,
      disabled: PropTypes.bool,
      sx: PropTypes.object
    })
  ).isRequired,
  animation: PropTypes.oneOf(['slide', 'fade', 'scale']),
  indicatorAnimation: PropTypes.oneOf(['slide', 'fade', 'scale']),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  variant: PropTypes.oneOf(['standard', 'scrollable', 'fullWidth']),
  centered: PropTypes.bool
};

export default AnimatedTabs; 