import { Breadcrumbs, Typography, Link } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slide: {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 }
  },
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  },
  stagger: {
    container: {
      animate: {
        transition: {
          staggerChildren: 0.1
        }
      }
    },
    item: {
      initial: { x: -20, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: 20, opacity: 0 }
    }
  }
};

const hoverEffects = {
  glow: {
    scale: 1.05,
    textShadow: '0 0 8px rgba(255,255,255,0.5)'
  },
  lift: {
    y: -2,
    transition: { duration: 0.2 }
  },
  underline: {
    textDecoration: 'underline',
    transition: { duration: 0.2 }
  },
  none: {}
};

const AnimatedBreadcrumbs = ({
  items,
  animation = 'fade',
  hover = 'glow',
  separator = <NavigateNextIcon fontSize="small" />,
  maxItems,
  itemsBeforeCollapse = 1,
  itemsAfterCollapse = 1,
  ...props
}) => {
  const MotionBreadcrumbs = motion(Breadcrumbs);
  const MotionLink = motion(Link);
  const MotionTypography = motion(Typography);
  
  const animationConfig = animation === 'stagger' ? animations.stagger : animations[animation];
  const hoverConfig = hoverEffects[hover];

  const renderBreadcrumb = (item, index, array) => {
    const isLast = index === array.length - 1;

    if (isLast) {
      return (
        <MotionTypography
          key={item.key || index}
          color="text.primary"
          initial={animation === 'stagger' ? animationConfig.item.initial : animationConfig.initial}
          animate={animation === 'stagger' ? animationConfig.item.animate : animationConfig.animate}
          exit={animation === 'stagger' ? animationConfig.item.exit : animationConfig.exit}
          transition={{ duration: 0.3, delay: animation === 'stagger' ? index * 0.1 : 0 }}
        >
          {item.text}
        </MotionTypography>
      );
    }

    return (
      <MotionLink
        key={item.key || index}
        color="inherit"
        href={item.href}
        onClick={item.onClick}
        underline="hover"
        initial={animation === 'stagger' ? animationConfig.item.initial : animationConfig.initial}
        animate={animation === 'stagger' ? animationConfig.item.animate : animationConfig.animate}
        exit={animation === 'stagger' ? animationConfig.item.exit : animationConfig.exit}
        whileHover={hoverConfig}
        transition={{ duration: 0.3, delay: animation === 'stagger' ? index * 0.1 : 0 }}
      >
        {item.text}
      </MotionLink>
    );
  };

  return (
    <MotionBreadcrumbs
      separator={separator}
      maxItems={maxItems}
      itemsBeforeCollapse={itemsBeforeCollapse}
      itemsAfterCollapse={itemsAfterCollapse}
      variants={animation === 'stagger' ? animationConfig.container : undefined}
      initial="initial"
      animate="animate"
      exit="exit"
      {...props}
    >
      {items.map((item, index, array) => renderBreadcrumb(item, index, array))}
    </MotionBreadcrumbs>
  );
};

AnimatedBreadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.node.isRequired,
      href: PropTypes.string,
      onClick: PropTypes.func,
      key: PropTypes.string
    })
  ).isRequired,
  animation: PropTypes.oneOf(['fade', 'slide', 'scale', 'stagger']),
  hover: PropTypes.oneOf(['glow', 'lift', 'underline', 'none']),
  separator: PropTypes.node,
  maxItems: PropTypes.number,
  itemsBeforeCollapse: PropTypes.number,
  itemsAfterCollapse: PropTypes.number
};

export default AnimatedBreadcrumbs; 