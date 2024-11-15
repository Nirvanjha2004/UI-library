import { Box, Typography, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedCard from '../components/Cards/AnimatedCard';

const HomePage = () => {
  const components = [
    {
      title: 'Buttons',
      description: 'Beautiful, animated button components with various styles and animations.',
      image: 'https://images.unsplash.com/photo-1618335829737-2228915674e0?w=800&h=400&fit=crop',
      tags: ['Interactive', 'Animated'],
      path: '/components/buttons'
    },
    {
      title: 'Cards',
      description: 'Responsive and interactive card components with smooth animations.',
      image: 'https://images.unsplash.com/photo-1595776613215-fe04b78de7d0?w=800&h=400&fit=crop',
      tags: ['Layout', 'Content'],
      path: '/components/cards'
    },
    {
      title: 'Forms',
      description: 'Form components with validation and animations.',
      image: 'https://images.unsplash.com/photo-1579444741963-5ae219cfe27c?w=800&h=400&fit=crop',
      tags: ['Form', 'Validation'],
      path: '/components/forms'
    },
    {
      title: 'Alerts',
      description: 'Animated alert components for notifications and messages.',
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=400&fit=crop',
      tags: ['Feedback', 'Animated'],
      path: '/components/alerts'
    },
    {
      title: 'Modal',
      description: 'Modal dialogs with smooth transitions and animations.',
      image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=400&fit=crop',
      tags: ['Overlay', 'Interactive'],
      path: '/components/modal'
    },
    {
      title: 'Gallery',
      description: 'Interactive image gallery with lightbox and animations.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=400&fit=crop',
      tags: ['Media', 'Interactive'],
      path: '/components/gallery'
    },
    {
      title: 'Charts',
      description: 'Beautiful and interactive data visualization components.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      tags: ['Data', 'Visualization'],
      path: '/components/charts'
    },
    {
      title: 'Tables',
      description: 'Advanced table components with sorting and filtering.',
      image: 'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=800&h=400&fit=crop',
      tags: ['Data', 'Interactive'],
      path: '/components/table'
    },
    {
      title: 'Navigation',
      description: 'Navigation components with smooth transitions.',
      image: 'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=800&h=400&fit=crop',
      tags: ['Navigation', 'Layout'],
      path: '/components/navigation'
    },
    {
      title: 'Utility',
      description: 'Various utility components for enhanced user experience.',
      image: 'https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?w=800&h=400&fit=crop',
      tags: ['Utility', 'Tools'],
      path: '/components/utility'
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h1" gutterBottom>
            Welcome to UI Library
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 6 }}>
            A collection of beautiful and animated React components
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {components.map((component, index) => (
            <Grid item xs={12} md={6} key={component.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={component.path} 
                  style={{ textDecoration: 'none' }}
                >
                  <AnimatedCard
                    {...component}
                    animation="hover"
                  />
                </Link>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage; 