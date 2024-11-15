import { Box, Typography, Container, Tab, Tabs } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedGallery from '../components/Gallery/AnimatedGallery';
import CodePreview from '../components/CodePreview/CodePreview';

const GalleryPage = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const sampleImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
      alt: 'Landscape mountain with lake',
      category: 'Nature'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=800&h=600&fit=crop',
      alt: 'Modern architecture',
      category: 'Architecture'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      alt: 'Tech workspace',
      category: 'Technology'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop',
      alt: 'Travel destination',
      category: 'Travel'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=800&h=600&fit=crop',
      alt: 'Food photography',
      category: 'Food'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop',
      alt: 'Modern art',
      category: 'Art'
    },
    // More nature images
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop',
      alt: 'Sunset over mountains',
      category: 'Nature'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      alt: 'Forest path',
      category: 'Nature'
    },
    // More architecture images
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
      alt: 'Modern building',
      category: 'Architecture'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop',
      alt: 'City skyline',
      category: 'Architecture'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&h=600&fit=crop',
      alt: 'Italian architecture',
      category: 'Architecture',
      featured: true
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=800&h=600&fit=crop',
      alt: 'Mountain sunrise',
      category: 'Nature',
      featured: true
    }
  ];

  const galleryLayouts = [
    {
      label: 'Grid Layout',
      component: (
        <AnimatedGallery
          images={sampleImages}
          cols={{ xs: 1, sm: 2, md: 3 }}
          gap={16}
          variant="grid"
        />
      ),
      code: `
<AnimatedGallery
  images={images}
  cols={{ xs: 1, sm: 2, md: 3 }}
  gap={16}
  variant="grid"
/>`
    },
    {
      label: 'Masonry Layout',
      component: (
        <AnimatedGallery
          images={sampleImages}
          cols={{ xs: 1, sm: 2, md: 3 }}
          gap={16}
          variant="masonry"
        />
      ),
      code: `
<AnimatedGallery
  images={images}
  cols={{ xs: 1, sm: 2, md: 3 }}
  gap={16}
  variant="masonry"
/>`
    },
    {
      label: 'Carousel Layout',
      component: (
        <AnimatedGallery
          images={sampleImages.slice(0, 5)}
          variant="carousel"
          autoPlay
          interval={5000}
        />
      ),
      code: `
<AnimatedGallery
  images={images}
  variant="carousel"
  autoPlay
  interval={5000}
/>`
    },
    {
      label: 'Featured Layout',
      component: (
        <AnimatedGallery
          images={sampleImages.filter(img => img.featured)}
          variant="featured"
          gap={16}
          enableHover
          showCaption
        />
      ),
      code: `
<AnimatedGallery
  images={images}
  variant="featured"
  gap={16}
  enableHover
  showCaption
/>`
    },
    {
      label: 'Horizontal Scroll',
      component: (
        <AnimatedGallery
          images={sampleImages}
          variant="horizontal"
          gap={16}
          enableDrag
          showScrollbar
        />
      ),
      code: `
<AnimatedGallery
  images={images}
  variant="horizontal"
  gap={16}
  enableDrag
  showScrollbar
/>`
    },
    {
      label: 'Mosaic',
      component: (
        <AnimatedGallery
          images={sampleImages}
          variant="mosaic"
          gap={8}
          enableZoom
          showCaption
        />
      ),
      code: `
<AnimatedGallery
  images={images}
  variant="mosaic"
  gap={8}
  enableZoom
  showCaption
/>`
    }
  ];

  const categories = ['All', 'Nature', 'Architecture', 'Technology', 'Travel', 'Food', 'Art'];

  const filteredImages = selectedCategory === 'All' 
    ? sampleImages 
    : sampleImages.filter(img => img.category === selectedCategory);

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1" gutterBottom>
          Gallery
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Interactive image gallery with multiple layouts and advanced features.
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Tabs
            value={currentTab}
            onChange={(_, newValue) => setCurrentTab(newValue)}
            sx={{ mb: 4 }}
            variant="scrollable"
            scrollButtons="auto"
          >
            {galleryLayouts.map((layout, index) => (
              <Tab key={layout.label} label={layout.label} value={index} />
            ))}
          </Tabs>

          <Box sx={{ mb: 4 }}>
            {galleryLayouts[currentTab].component}
          </Box>

          <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
            Code Example
          </Typography>
          <CodePreview code={galleryLayouts[currentTab].code} />
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" gutterBottom>
            Interactive Gallery
          </Typography>
          <Tabs
            value={selectedCategory}
            onChange={(_, newValue) => setSelectedCategory(newValue)}
            sx={{ mb: 4 }}
            variant="scrollable"
            scrollButtons="auto"
          >
            {categories.map((category) => (
              <Tab key={category} label={category} value={category} />
            ))}
          </Tabs>
          <AnimatedGallery
            images={filteredImages}
            variant="interactive"
            cols={{ xs: 1, sm: 2, md: 3 }}
            gap={16}
            enableZoom
            enableHover
            showCaption
            lightboxOptions={{
              enableDownload: true,
              enableFullscreen: true,
              enableSlideshow: true,
              slideshowDelay: 3000,
            }}
          />
        </Box>
      </motion.div>
    </Container>
  );
};

export default GalleryPage; 