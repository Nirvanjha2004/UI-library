import { 
  Drawer, 
  Box, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  ListItemButton,
  Collapse,
  IconButton,
  useTheme,
  Typography
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const StyledDrawer = styled(Drawer)(({ theme, variant }) => ({
  width: variant === 'mini' ? 72 : 240,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiDrawer-paper': {
    width: variant === 'mini' ? 72 : 240,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

const AnimatedListItem = motion(ListItem);

const listItemVariants = {
  hidden: { 
    opacity: 0, 
    x: -20 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.2
    }
  },
  hover: {
    x: 10,
    transition: {
      duration: 0.2
    }
  }
};

const AnimatedDrawer = ({
  variant = 'permanent', // permanent, temporary, mini
  open = true,
  items = [],
  onClose,
  onItemClick,
  header,
  ...props
}) => {
  const theme = useTheme();
  const [expandedItems, setExpandedItems] = useState({});

  const handleExpand = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const renderListItems = (items, level = 0) => {
    return items.map((item, index) => (
      <Box key={item.id || index}>
        <AnimatedListItem
          variants={listItemVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          disablePadding
          sx={{ pl: level * 2 }}
        >
          <ListItemButton
            onClick={() => {
              if (item.items) {
                handleExpand(item.id);
              } else {
                onItemClick?.(item);
              }
            }}
          >
            {item.icon && (
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
            )}
            <ListItemText 
              primary={item.label}
              sx={{ 
                opacity: variant === 'mini' && !open ? 0 : 1,
                display: variant === 'mini' && !open ? 'none' : 'block'
              }}
            />
            {item.items && (
              <motion.div
                animate={{ rotate: expandedItems[item.id] ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {expandedItems[item.id] ? <ExpandLess /> : <ExpandMore />}
              </motion.div>
            )}
          </ListItemButton>
        </AnimatedListItem>
        {item.items && (
          <Collapse in={expandedItems[item.id]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {renderListItems(item.items, level + 1)}
            </List>
          </Collapse>
        )}
      </Box>
    ));
  };

  const drawerVariant = variant === 'mini' ? 'permanent' : variant;

  return (
    <StyledDrawer
      variant={drawerVariant}
      open={open}
      onClose={onClose}
      {...props}
    >
      <DrawerHeader>
        {header}
        {variant !== 'permanent' && (
          <IconButton onClick={onClose}>
            <ChevronLeftIcon />
          </IconButton>
        )}
      </DrawerHeader>
      <List>
        <AnimatePresence>
          {renderListItems(items)}
        </AnimatePresence>
      </List>
    </StyledDrawer>
  );
};

export default AnimatedDrawer; 