import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: theme.shape.borderRadius,
    minWidth: 180,
    boxShadow: theme.shadows[3],
  },
}));

const menuVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.2
    }
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.05
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
      duration: 0.2
    }
  },
  hover: {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    x: 10,
    transition: {
      duration: 0.2
    }
  }
};

const AnimatedDropdown = ({ 
  items = [],
  icon = <MoreVertIcon />,
  position = { vertical: 'bottom', horizontal: 'right' },
  onItemClick,
  ...props 
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (item) => {
    if (onItemClick) {
      onItemClick(item);
    }
    handleClose();
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        {...props}
      >
        {icon}
      </IconButton>
      <StyledMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={position}
        transformOrigin={position}
        components={{
          Root: motion.div
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={menuVariants}
      >
        <AnimatePresence>
          {items.map((item, index) => (
            <motion.div
              key={item.id || index}
              variants={itemVariants}
              whileHover="hover"
            >
              <MenuItem onClick={() => handleItemClick(item)}>
                {item.icon && (
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                )}
                <ListItemText primary={item.label} />
              </MenuItem>
            </motion.div>
          ))}
        </AnimatePresence>
      </StyledMenu>
    </>
  );
};

export default AnimatedDropdown; 