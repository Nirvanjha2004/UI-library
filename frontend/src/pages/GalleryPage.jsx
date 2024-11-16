import { Container, Typography, Grid, Box, ImageList, ImageListItem } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';

const GalleryPage = () => {
  const [selectedId, setSelectedId] = useState(null);

  const images = [
    { id: 1, url: 'https://source.unsplash.com/random/400x300?1', title: 'Image 1' },
    { id: 2, url: 'https://source.unsplash.com/random/400x300?2', title: 'Image 2' },
    { id: 3, url: 'https://source.unsplash.com/random/400x300?3', title: 'Image 3' },
    { id: 4, url: 'https://source.unsplash.com/random/400x300?4', title: 'Image 4' },
    { id: 5, url: 'https://source.unsplash.com/random/400x300?5', title: 'Image 5' },
    { id: 6, url: 'https://source.unsplash.com/random/400x300?6', title: 'Image 6' }
  ];

  const galleryExamples = [
    {
      title: 'Grid Layout with Hover Effects',
      component: (
        <ImageList cols={3} gap={16}>
          {images.map((item) => (
            <ImageListItem 
              key={item.id}
              component={motion.div}
              layoutId={`image-${item.id}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
              style={{ cursor: 'pointer' }}
            >
              <motion.img
                src={item.url}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      ),
      code: `
<ImageList cols={3} gap={16}>
  {images.map((item) => (
    <ImageListItem 
      key={item.id}
      component={motion.div}
      layoutId={\`image-\${item.id}\`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.img
        src={item.url}
        alt={item.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '8px'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </ImageListItem>
  ))}
</ImageList>`
    },
    {
      title: 'Masonry Layout with Stagger',
      component: (
        <ImageList variant="masonry" cols={3} gap={16}>
          <AnimatePresence>
            {images.map((item, index) => (
              <ImageListItem 
                key={item.id}
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.img
                  src={item.url}
                  alt={item.title}
                  style={{
                    width: '100%',
                    borderRadius: '8px'
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </ImageListItem>
            ))}
          </AnimatePresence>
        </ImageList>
      ),
      code: `
<ImageList variant="masonry" cols={3} gap={16}>
  <AnimatePresence>
    {images.map((item, index) => (
      <ImageListItem 
        key={item.id}
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ delay: index * 0.1 }}
      >
        <motion.img
          src={item.url}
          alt={item.title}
          style={{
            width: '100%',
            borderRadius: '8px'
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </ImageListItem>
    ))}
  </AnimatePresence>
</ImageList>`
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
          Animated Gallery
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your image galleries with smooth animations and transitions.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {galleryExamples.map((example, index) => (
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

export default GalleryPage; 