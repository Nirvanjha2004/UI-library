import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Collapse, Box, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { navigationConfig } from '../../config/navigation';

// Import specific icons
import DownloadIcon from '@mui/icons-material/Download';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LabelIcon from '@mui/icons-material/Label';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BadgeIcon from '@mui/icons-material/Badge';
import TabIcon from '@mui/icons-material/Tab';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import BottomNavigationIcon from '@mui/icons-material/VerticalAlignBottom';
import SpeedIcon from '@mui/icons-material/Speed';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import PaginationIcon from '@mui/icons-material/LastPage';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import InfoIcon from '@mui/icons-material/Info';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import TuneIcon from '@mui/icons-material/Tune';
import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List';
import TableChartIcon from '@mui/icons-material/TableChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import CollectionsIcon from '@mui/icons-material/Collections';

const iconComponents = {
  DownloadIcon,
  MenuBookIcon,
  SmartButtonIcon,
  DashboardIcon,
  LabelIcon,
  AccountCircleIcon,
  BadgeIcon,
  TabIcon,
  NavigateNextIcon,
  BottomNavigationIcon,
  SpeedIcon,
  MenuOpenIcon,
  PaginationIcon,
  NotificationsIcon,
  HourglassEmptyIcon,
  ViewDayIcon,
  InfoIcon,
  AnnouncementIcon,
  TextFieldsIcon,
  ToggleOnIcon,
  TuneIcon,
  MenuIcon,
  ListIcon,
  TableChartIcon,
  BarChartIcon,
  ExpandMoreIcon,
  OpenInNewIcon,
  LinearScaleIcon,
  CollectionsIcon
};

const Sidebar = () => {
  const location = useLocation();
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (title) => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const renderIcon = (iconName) => {
    const Icon = iconComponents[iconName];
    return Icon ? <Icon /> : null;
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 280,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          backgroundColor: 'background.paper',
          borderRight: '1px solid',
          borderColor: 'divider'
        },
      }}
    >
      <Box sx={{ mt: 8 }}>
        {navigationConfig.map((section) => (
          <Box key={section.title} sx={{ mb: 1 }}>
            <ListItemButton 
              onClick={() => toggleSection(section.title)}
              sx={{ 
                py: 1.5,
                borderBottom: '1px solid',
                borderColor: 'divider'
              }}
            >
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ fontWeight: 600, textTransform: 'uppercase' }}
              >
                {section.title}
              </Typography>
            </ListItemButton>
            <Collapse in={openSections[section.title] !== false} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {section.items.map((item) => (
                  <ListItemButton
                    key={item.path}
                    component={Link}
                    to={item.path}
                    selected={location.pathname === item.path}
                    sx={{
                      pl: 4,
                      py: 1,
                      '&.Mui-selected': {
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                        },
                        '& .MuiListItemIcon-root': {
                          color: 'primary.contrastText',
                        }
                      }
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      {renderIcon(item.icon)}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.name}
                      primaryTypographyProps={{
                        fontSize: '0.875rem'
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
      </Box>
    </Drawer>
  );
};

export default Sidebar; 