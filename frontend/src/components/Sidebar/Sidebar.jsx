import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InputIcon from '@mui/icons-material/Input';
import NotificationsIcon from '@mui/icons-material/Notifications';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import BuildIcon from '@mui/icons-material/Build';
import MenuIcon from '@mui/icons-material/Menu';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import BarChartIcon from '@mui/icons-material/BarChart';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CollectionsIcon from '@mui/icons-material/Collections';
import TableChartIcon from '@mui/icons-material/TableChart';
import AnimationIcon from '@mui/icons-material/Animation';

const sidebarItems = [
  { path: '/', name: 'Home', icon: <HomeIcon /> },
  { path: '/components/buttons', name: 'Buttons', icon: <SmartButtonIcon /> },
  { path: '/components/cards', name: 'Cards', icon: <DashboardIcon /> },
  { path: '/components/inputs', name: 'Inputs', icon: <InputIcon /> },
  { path: '/components/alerts', name: 'Alerts', icon: <NotificationsIcon /> },
  { path: '/components/modal', name: 'Modal', icon: <OpenInNewIcon /> },
  { path: '/components/utility', name: 'Utility', icon: <BuildIcon /> },
  { path: '/components/navigation', name: 'Navigation', icon: <MenuIcon /> },
  { path: '/components/forms', name: 'Forms', icon: <DynamicFormIcon /> },
  { path: '/components/charts', name: 'Charts', icon: <BarChartIcon /> },
  { path: '/components/upload', name: 'Upload', icon: <FileUploadIcon /> },
  { path: '/components/gallery', name: 'Gallery', icon: <CollectionsIcon /> },
  { path: '/components/table', name: 'Table', icon: <TableChartIcon /> },
  { path: '/components/animations', name: 'Animations', icon: <AnimationIcon /> }
];

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: 'background.paper',
          borderRight: '1px solid',
          borderColor: 'divider'
        },
      }}
    >
      <List sx={{ mt: 8 }}>
        {sidebarItems.map((item) => (
          <ListItem
            key={item.path}
            component={Link}
            to={item.path}
            button
            sx={{
              '&:hover': {
                backgroundColor: 'action.hover',
              },
              '&.active': {
                backgroundColor: 'action.selected',
              }
            }}
          >
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar; 