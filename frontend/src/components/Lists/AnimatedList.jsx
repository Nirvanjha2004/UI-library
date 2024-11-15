import { List, ListItem, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';

const StyledListItem = styled(motion.div)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.3
    }
  },
  hover: {
    scale: 1.02,
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.98
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.2
    }
  }
};

const AnimatedList = ({ 
  items = [], 
  onItemClick,
  animation = "fade", // fade, slide, stagger
  dense = false,
  ...props 
}) => {
  return (
    <List dense={dense} {...props}>
      <AnimatePresence>
        <motion.div
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {items.map((item, index) => (
            <StyledListItem
              key={item.id || index}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              exit="exit"
              layout
            >
              <ListItemButton onClick={() => onItemClick?.(item)}>
                {item.icon && (
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                )}
                <ListItemText 
                  primary={item.primary}
                  secondary={item.secondary}
                />
              </ListItemButton>
            </StyledListItem>
          ))}
        </motion.div>
      </AnimatePresence>
    </List>
  );
};

export default AnimatedList; 