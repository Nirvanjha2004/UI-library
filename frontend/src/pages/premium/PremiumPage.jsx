import { Container, Typography, Grid, Box, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

const PremiumPage = () => {
  const premiumCategories = [
    {
      title: 'Templates',
      description: 'Ready-to-use website templates with beautiful animations',
      image: '/images/premium/templates.jpg',
      path: '/premium/templates',
      items: [
        { name: 'E-commerce Template', path: '/premium/templates/ecommerce-demo' },
        { name: 'Travel Booking', path: '/premium/templates/travel-demo' },
        { name: 'Agency Portfolio', path: '/premium/templates/agency-demo' },
        { name: 'Admin Dashboard', path: '/premium/templates/dashboard-demo' },
        { name: 'Landing Page', path: '/premium/templates/landing-demo' },
        { name: 'Blog Template', path: '/premium/templates/blog-demo' },
        { name: 'Portfolio', path: '/premium/templates/portfolio-demo' }
      ]
    },
    {
      title: 'Pages',
      description: 'Individual premium pages for common use cases',
      image: '/images/premium/pages.jpg',
      path: '/premium/pages',
      items: [
        { name: 'Pricing Page', path: '/premium/pages/pricing-demo' },
        { name: 'Authentication Pages', path: '/premium/pages/auth-demo' },
        { name: 'Profile Pages', path: '/premium/pages/profile-demo' },
        { name: 'Contact Page', path: '/premium/pages/contact-demo' }
      ]
    },
    {
      title: 'Components',
      description: 'Advanced animated components with premium features',
      image: '/images/premium/components.jpg',
      path: '/premium/components',
      items: [
        { name: 'Advanced Charts', path: '/premium/components/charts-demo' },
        { name: 'Complex Forms', path: '/premium/components/forms-demo' },
        { name: 'Interactive Maps', path: '/premium/components/maps-demo' },
        { name: 'File Upload', path: '/premium/components/upload-demo' }
      ]
    },
    {
      title: 'Themes',
      description: 'Premium themes with customizable styles and animations',
      image: '/images/premium/themes.jpg',
      path: '/premium/themes',
      items: [
        { name: 'Dark Pro Theme', path: '/premium/themes/dark-demo' },
        { name: 'Light Pro Theme', path: '/premium/themes/light-demo' },
        { name: 'Gradient Theme', path: '/premium/themes/gradient-demo' },
        { name: 'Theme Builder', path: '/premium/themes/builder-demo' }
      ]
    }
  ];

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h1" gutterBottom>
            Premium Features
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Unlock advanced components, templates, and features
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<StarIcon />}
            sx={{ 
              background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            }}
          >
            Upgrade to Premium
          </Button>
        </Box>

        {premiumCategories.map((category, index) => (
          <Box key={index} sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom>
              {category.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {category.description}
            </Typography>
            <Grid container spacing={3}>
              {category.items.map((item, itemIndex) => (
                <Grid item xs={12} sm={6} md={4} key={itemIndex}>
                  <Card
                    component={Link}
                    to={item.path}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      textDecoration: 'none',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: (theme) => theme.shadows[10],
                        transition: 'all 0.3s ease'
                      }
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {item.name}
                      </Typography>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          mt: 2,
                          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        }}
                      >
                        View Demo
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </motion.div>
    </Container>
  );
};

export default PremiumPage; 