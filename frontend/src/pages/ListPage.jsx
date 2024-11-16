import { Container, Typography, Grid, Box, ListItemText, ListItemIcon } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedList from '../../../animated-mui-components/src/components/AnimatedList';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import DraftsIcon from '@mui/icons-material/Drafts';

const ListPage = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const sampleItems = [
    { id: 1, primary: 'Inbox', secondary: 'New messages', icon: <InboxIcon /> },
    { id: 2, primary: 'Starred', secondary: 'Favorite items', icon: <StarIcon /> },
    { id: 3, primary: 'Drafts', secondary: 'Unsent messages', icon: <DraftsIcon /> }
  ];

  const nestedItems = [
    {
      id: 'parent1',
      primary: 'Parent Item 1',
      icon: <InboxIcon />,
      children: [
        { id: 'child1', primary: 'Child Item 1' },
        { id: 'child2', primary: 'Child Item 2' }
      ],
      open: expandedItems['parent1']
    },
    {
      id: 'parent2',
      primary: 'Parent Item 2',
      icon: <StarIcon />,
      children: [
        { id: 'child3', primary: 'Child Item 3' },
        { id: 'child4', primary: 'Child Item 4' }
      ],
      open: expandedItems['parent2']
    }
  ];

  const listExamples = [
    {
      title: 'Basic List with Fade In Up',
      component: (
        <AnimatedList
          items={sampleItems}
          animation="fadeInUp"
          hover="glow"
        />
      ),
      code: `
<AnimatedList
  items={[
    { primary: 'Inbox', secondary: 'New messages', icon: <InboxIcon /> },
    { primary: 'Starred', secondary: 'Favorite items', icon: <StarIcon /> },
    { primary: 'Drafts', secondary: 'Unsent messages', icon: <DraftsIcon /> }
  ]}
  animation="fadeInUp"
  hover="glow"
/>`
    },
    {
      title: 'Slide In Animation',
      component: (
        <AnimatedList
          items={sampleItems}
          animation="slideIn"
          hover="lift"
        />
      ),
      code: `
<AnimatedList
  items={sampleItems}
  animation="slideIn"
  hover="lift"
/>`
    },
    {
      title: 'Scale Animation',
      component: (
        <AnimatedList
          items={sampleItems}
          animation="scale"
          hover="highlight"
        />
      ),
      code: `
<AnimatedList
  items={sampleItems}
  animation="scale"
  hover="highlight"
/>`
    },
    {
      title: 'Nested List with Cascade',
      component: (
        <AnimatedList
          items={nestedItems}
          animation="cascade"
          hover="glow"
          renderItem={(item) => (
            <>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText 
                primary={item.primary}
                onClick={() => toggleItem(item.id)}
              />
            </>
          )}
        />
      ),
      code: `
<AnimatedList
  items={nestedItems}
  animation="cascade"
  hover="glow"
  renderItem={(item) => (
    <>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText 
        primary={item.primary}
        onClick={() => toggleItem(item.id)}
      />
    </>
  )}
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
          Animated Lists
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your lists with smooth animations and transitions.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Animation Examples
        </Typography>
        <Grid container spacing={4}>
          {listExamples.map((example, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  {example.title}
                </Typography>
                <Box sx={{ mb: 2 }}>
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

export default ListPage; 