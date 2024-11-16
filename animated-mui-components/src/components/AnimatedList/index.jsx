import { List, ListItem, ListItemText, ListItemIcon, Collapse } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const animations = {
  fadeInUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 }
  },
  slideIn: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 }
  },
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  },
  cascade: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 }
  },
  expand: {
    initial: { height: 0, opacity: 0 },
    animate: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 }
  }
};

const hoverEffects = {
  glow: {
    scale: 1.02,
    backgroundColor: 'rgba(255, 255, 255, 0.05)'
  },
  lift: {
    y: -3,
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  },
  highlight: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  none: {}
};

const AnimatedList = ({
  items,
  animation = 'fadeInUp',
  hover = 'glow',
  staggerDelay = 0.1,
  renderItem,
  nested = false,
  dense = false,
  disablePadding = false,
  subheader,
  ...props
}) => {
  const MotionList = motion(List);
  const MotionListItem = motion(ListItem);
  const animationConfig = animations[animation];
  const hoverConfig = hoverEffects[hover];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  const renderListItem = (item, index) => {
    const content = renderItem ? renderItem(item) : (
      <>
        {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
        <ListItemText primary={item.primary} secondary={item.secondary} />
      </>
    );

    return (
      <MotionListItem
        key={item.id || index}
        button={item.onClick ? true : undefined}
        onClick={item.onClick}
        initial={animationConfig.initial}
        animate={animationConfig.animate}
        exit={animationConfig.exit}
        whileHover={hoverConfig}
        transition={{
          duration: 0.2,
          delay: animation === 'cascade' ? index * staggerDelay : 0
        }}
      >
        {content}
        {item.children && (
          <Collapse in={item.open} timeout="auto" unmountOnExit>
            <AnimatedList
              items={item.children}
              animation={animation}
              hover={hover}
              staggerDelay={staggerDelay}
              renderItem={renderItem}
              nested
              dense={dense}
            />
          </Collapse>
        )}
      </MotionListItem>
    );
  };

  return (
    <AnimatePresence>
      <MotionList
        dense={dense}
        disablePadding={disablePadding}
        subheader={subheader}
        variants={containerVariants}
        initial="hidden"
        animate="show"
        component={motion.ul}
        sx={{
          pl: nested ? 4 : 0
        }}
        {...props}
      >
        {items.map((item, index) => renderListItem(item, index))}
      </MotionList>
    </AnimatePresence>
  );
};

AnimatedList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      primary: PropTypes.node,
      secondary: PropTypes.node,
      icon: PropTypes.node,
      onClick: PropTypes.func,
      children: PropTypes.array,
      open: PropTypes.bool
    })
  ).isRequired,
  animation: PropTypes.oneOf(['fadeInUp', 'slideIn', 'scale', 'cascade', 'expand']),
  hover: PropTypes.oneOf(['glow', 'lift', 'highlight', 'none']),
  staggerDelay: PropTypes.number,
  renderItem: PropTypes.func,
  nested: PropTypes.bool,
  dense: PropTypes.bool,
  disablePadding: PropTypes.bool,
  subheader: PropTypes.node
};

export default AnimatedList; 