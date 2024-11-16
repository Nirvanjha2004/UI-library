import { Container, Typography, Grid, Box, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedList from '../../../animated-mui-components/src/components/AnimatedList';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';

const ListsPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const basicItems = [
    { id: 1, primary: 'Inbox', icon: <InboxIcon />, onClick: () => setSelectedIndex(0) },
    { id: 2, primary: 'Drafts', icon: <DraftsIcon />, onClick: () => setSelectedIndex(1) },
    { id: 3, primary: 'Sent', icon: <SendIcon />, onClick: () => setSelectedIndex(2) },
    { id: 4, primary: 'Starred', icon: <StarIcon />, onClick: () => setSelectedIndex(3) },
    { id: 5, primary: 'Trash', icon: <DeleteIcon />, onClick: () => setSelectedIndex(4) }
  ];

  const nestedItems = [
    {
      id: 1,
      primary: 'Inbox',
      icon: <InboxIcon />,
      children: [
        { id: 11, primary: 'Important', secondary: '2 unread messages' },
        { id: 12, primary: 'Social', secondary: '5 new updates' }
      ]
    },
    {
      id: 2,
      primary: 'Drafts',
      icon: <DraftsIcon />,
      children: [
        { id: 21, primary: 'Personal', secondary: '3 drafts' },
        { id: 22, primary: 'Work', secondary: '1 draft' }
      ]
    }
  ];

  const listExamples = [
    {
      title: 'Basic List with Fade Animation',
      component: (
        <AnimatedList
          items={basicItems}
          animation="fadeInUp"
          hover="glow"
          staggerDelay={0.1}
        />
      ),
      code: `
<AnimatedList
  items={[
    { id: 1, primary: 'Inbox', icon: <InboxIcon />, onClick: () => {} },
    { id: 2, primary: 'Drafts', icon: <DraftsIcon />, onClick: () => {} },
    { id: 3, primary: 'Sent', icon: <SendIcon />, onClick: () => {} }
  ]}
  animation="fadeInUp"
  hover="glow"
  staggerDelay={0.1}
/>`
    },
    {
      title: 'Slide Animation with Custom Rendering',
      component: (
        <AnimatedList
          items={basicItems}
          animation="slideIn"
          hover="lift"
          renderItem={(item) => (
            <>
              <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>{item.primary[0]}</Avatar>
              {item.primary}
            </>
          )}
        />
      ),
      code: `
<AnimatedList
  items={items}
  animation="slideIn"
  hover="lift"
  renderItem={(item) => (
    <>
      <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
        {item.primary[0]}
      </Avatar>
      {item.primary}
    </>
  )}
/>`
    },
    {
      title: 'Nested List with Cascade Animation',
      component: (
        <AnimatedList
          items={nestedItems}
          animation="cascade"
          hover="highlight"
          staggerDelay={0.1}
        />
      ),
      code: `
<AnimatedList
  items={[
    {
      id: 1,
      primary: 'Inbox',
      icon: <InboxIcon />,
      children: [
        { id: 11, primary: 'Important', secondary: '2 unread messages' },
        { id: 12, primary: 'Social', secondary: '5 new updates' }
      ]
    }
  ]}
  animation="cascade"
  hover="highlight"
  staggerDelay={0.1}
/>`
    },
    {
      title: 'Scale Animation with Dense Layout',
      component: (
        <AnimatedList
          items={basicItems}
          animation="scale"
          hover="glow"
          dense
        />
      ),
      code: `
<AnimatedList
  items={items}
  animation="scale"
  hover="glow"
  dense
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
          Examples
        </Typography>
        <Grid container spacing={4}>
          {listExamples.map((example, index) => (
            <Grid item xs={12} key={index}>
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

export default ListsPage; 