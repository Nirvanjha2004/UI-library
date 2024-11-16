import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedMenu from '../../../animated-mui-components/src/components/AnimatedMenu';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MenusPage = () => {
  const [anchorEls, setAnchorEls] = useState({});

  const handleClick = (id) => (event) => {
    setAnchorEls(prev => ({
      ...prev,
      [id]: event.currentTarget
    }));
  };

  const handleClose = (id) => () => {
    setAnchorEls(prev => ({
      ...prev,
      [id]: null
    }));
  };

  const menuItems = [
    { id: 1, content: 'Edit', icon: <EditIcon /> },
    { id: 2, content: 'Share', icon: <ShareIcon /> },
    { id: 3, content: 'Delete', icon: <DeleteIcon /> }
  ];

  const menuExamples = [
    {
      title: 'Fade Animation',
      component: (
        <>
          <Button
            variant="contained"
            onClick={handleClick('fade')}
            endIcon={<MoreVertIcon />}
          >
            Open Menu
          </Button>
          <AnimatedMenu
            open={Boolean(anchorEls['fade'])}
            anchorEl={anchorEls['fade']}
            onClose={handleClose('fade')}
            items={menuItems}
            animation="fade"
          />
        </>
      ),
      code: `
<AnimatedMenu
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
  items={[
    { id: 1, content: 'Edit', icon: <EditIcon /> },
    { id: 2, content: 'Share', icon: <ShareIcon /> },
    { id: 3, content: 'Delete', icon: <DeleteIcon /> }
  ]}
  animation="fade"
/>`
    },
    {
      title: 'Scale Animation',
      component: (
        <>
          <Button
            variant="contained"
            onClick={handleClick('scale')}
            endIcon={<MoreVertIcon />}
          >
            Open Menu
          </Button>
          <AnimatedMenu
            open={Boolean(anchorEls['scale'])}
            anchorEl={anchorEls['scale']}
            onClose={handleClose('scale')}
            items={menuItems}
            animation="scale"
          />
        </>
      ),
      code: `
<AnimatedMenu
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
  items={menuItems}
  animation="scale"
/>`
    },
    {
      title: 'Cascade Animation',
      component: (
        <>
          <Button
            variant="contained"
            onClick={handleClick('cascade')}
            endIcon={<MoreVertIcon />}
          >
            Open Menu
          </Button>
          <AnimatedMenu
            open={Boolean(anchorEls['cascade'])}
            anchorEl={anchorEls['cascade']}
            onClose={handleClose('cascade')}
            items={menuItems}
            itemAnimation="cascade"
          />
        </>
      ),
      code: `
<AnimatedMenu
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
  items={menuItems}
  itemAnimation="cascade"
/>`
    },
    {
      title: 'Stagger Animation',
      component: (
        <>
          <Button
            variant="contained"
            onClick={handleClick('stagger')}
            endIcon={<MoreVertIcon />}
          >
            Open Menu
          </Button>
          <AnimatedMenu
            open={Boolean(anchorEls['stagger'])}
            anchorEl={anchorEls['stagger']}
            onClose={handleClose('stagger')}
            items={menuItems}
            itemAnimation="stagger"
          />
        </>
      ),
      code: `
<AnimatedMenu
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
  items={menuItems}
  itemAnimation="stagger"
/>`
    }
  ];

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1" gutterBottom>
          Animated Menus
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your menus with smooth animations and transitions.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {menuExamples.map((example, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  {example.title}
                </Typography>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}>
                  {example.component}
                </Box>
                <CodePreview code={example.code} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default MenusPage; 