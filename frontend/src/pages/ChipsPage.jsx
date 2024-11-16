import { Container, Typography, Grid, Box, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedChip from '../../../animated-mui-components/src/components/AnimatedChip';
import FaceIcon from '@mui/icons-material/Face';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

const ChipsPage = () => {
  const handleDelete = () => {
    console.log('Chip deleted');
  };

  const chipExamples = [
    {
      title: 'Pop Animation',
      component: (
        <AnimatedChip
          label="Pop Animation"
          animation="pop"
          color="primary"
          onDelete={handleDelete}
        />
      ),
      code: `
<AnimatedChip
  label="Pop Animation"
  animation="pop"
  color="primary"
  onDelete={handleDelete}
/>`
    },
    {
      title: 'Slide Animation',
      component: (
        <AnimatedChip
          label="Slide Animation"
          animation="slide"
          color="secondary"
          icon={<FaceIcon />}
        />
      ),
      code: `
<AnimatedChip
  label="Slide Animation"
  animation="slide"
  color="secondary"
  icon={<FaceIcon />}
/>`
    },
    {
      title: 'Bounce Animation',
      component: (
        <AnimatedChip
          label="Bounce Animation"
          animation="bounce"
          color="success"
          avatar={<Avatar>M</Avatar>}
        />
      ),
      code: `
<AnimatedChip
  label="Bounce Animation"
  animation="bounce"
  color="success"
  avatar={<Avatar>M</Avatar>}
/>`
    },
    {
      title: 'Rotate Animation',
      component: (
        <AnimatedChip
          label="Rotate Animation"
          animation="rotate"
          color="error"
          icon={<DoneIcon />}
        />
      ),
      code: `
<AnimatedChip
  label="Rotate Animation"
  animation="rotate"
  color="error"
  icon={<DoneIcon />}
/>`
    },
    {
      title: 'Hover Grow Effect',
      component: (
        <AnimatedChip
          label="Hover to Grow"
          hover="grow"
          color="info"
          variant="outlined"
        />
      ),
      code: `
<AnimatedChip
  label="Hover to Grow"
  hover="grow"
  color="info"
  variant="outlined"
/>`
    },
    {
      title: 'Hover Glow Effect',
      component: (
        <AnimatedChip
          label="Hover to Glow"
          hover="glow"
          color="warning"
          variant="outlined"
          icon={<DeleteIcon />}
          onDelete={handleDelete}
        />
      ),
      code: `
<AnimatedChip
  label="Hover to Glow"
  hover="glow"
  color="warning"
  variant="outlined"
  icon={<DeleteIcon />}
  onDelete={handleDelete}
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
          Animated Chips
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your chips with smooth animations and hover effects.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {chipExamples.map((example, index) => (
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

export default ChipsPage; 