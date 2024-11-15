import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import AnimatedCard from '../components/Cards/AnimatedCard';
import CodePreview from '../components/CodePreview/CodePreview';

const CardsPage = () => {
  const cardExample = `
import { AnimatedCard } from 'your-ui-library';

// Basic Card
<AnimatedCard
  title="Card Title"
  description="Card description goes here"
  tags={['Tag 1', 'Tag 2']}
/>`;

  const handleFavorite = () => alert('Added to favorites!');
  const handleShare = () => alert('Shared!');

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1" gutterBottom>
          Cards
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Interactive and animated card components.
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" gutterBottom>
            Basic Cards
          </Typography>
          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid item xs={12} md={4}>
              <AnimatedCard
                title="Basic Card"
                description="A simple card with hover animation"
                tags={['Basic', 'Simple']}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <AnimatedCard
                title="Interactive Card"
                description="Card with actions"
                tags={['Interactive']}
                onFavorite={handleFavorite}
                onShare={handleShare}
              />
            </Grid>
          </Grid>
          <CodePreview code={cardExample} />
        </Box>
      </motion.div>
    </Container>
  );
};

export default CardsPage; 