import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedPagination from '../../../animated-mui-components/src/components/AnimatedPagination';

const PaginationPage = () => {
  const [pages, setPages] = useState({
    basic: 1,
    slide: 1,
    scale: 1,
    glow: 1
  });

  const handleChange = (type) => (event, value) => {
    setPages(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const paginationExamples = [
    {
      title: 'Basic Fade Animation',
      component: (
        <AnimatedPagination
          page={pages.basic}
          count={10}
          onChange={handleChange('basic')}
          animation="fade"
          itemAnimation="pulse"
        />
      ),
      code: `
<AnimatedPagination
  page={page}
  count={10}
  onChange={handleChange}
  animation="fade"
  itemAnimation="pulse"
/>`
    },
    {
      title: 'Slide Animation',
      component: (
        <AnimatedPagination
          page={pages.slide}
          count={10}
          onChange={handleChange('slide')}
          animation="slide"
          itemAnimation="bounce"
          color="secondary"
        />
      ),
      code: `
<AnimatedPagination
  page={page}
  count={10}
  onChange={handleChange}
  animation="slide"
  itemAnimation="bounce"
  color="secondary"
/>`
    },
    {
      title: 'Scale Animation',
      component: (
        <AnimatedPagination
          page={pages.scale}
          count={10}
          onChange={handleChange('scale')}
          animation="scale"
          itemAnimation="glow"
          shape="rounded"
          variant="outlined"
        />
      ),
      code: `
<AnimatedPagination
  page={page}
  count={10}
  onChange={handleChange}
  animation="scale"
  itemAnimation="glow"
  shape="rounded"
  variant="outlined"
/>`
    },
    {
      title: 'Advanced Configuration',
      component: (
        <AnimatedPagination
          page={pages.glow}
          count={10}
          onChange={handleChange('glow')}
          animation="slide"
          itemAnimation="glow"
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          siblingCount={2}
          boundaryCount={2}
        />
      ),
      code: `
<AnimatedPagination
  page={page}
  count={10}
  onChange={handleChange}
  animation="slide"
  itemAnimation="glow"
  color="primary"
  size="large"
  showFirstButton
  showLastButton
  siblingCount={2}
  boundaryCount={2}
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
          Animated Pagination
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your pagination with smooth animations and transitions.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {paginationExamples.map((example, index) => (
            <Grid item xs={12} key={index}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  {example.title}
                </Typography>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
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

export default PaginationPage; 