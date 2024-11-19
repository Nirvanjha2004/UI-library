import { Container, Typography, Grid, Box, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlightIcon from '@mui/icons-material/Flight';
import BusinessIcon from '@mui/icons-material/Business';
import DashboardIcon from '@mui/icons-material/Dashboard';

const TemplatesPage = () => {
  const templates = [
    {
      title: 'E-commerce Template',
      description: 'Complete e-commerce solution with cart and checkout',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
      price: '$99',
      features: [
        'Animated Product Cards',
        'Shopping Cart Animations',
        'Checkout Flow',
        'Product Gallery',
        'Wishlist',
        'Order Tracking'
      ],
      icon: <ShoppingCartIcon sx={{ fontSize: 40 }} />,
      demoUrl: '/premium/templates/ecommerce-demo',
      category: 'E-commerce'
    },
    {
      title: 'Travel Booking',
      description: 'Travel booking platform with search and filters',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
      price: '$89',
      features: [
        'Flight Search',
        'Hotel Booking',
        'Interactive Maps',
        'Travel Itinerary',
        'Reviews System',
        'Weather Widget'
      ],
      icon: <FlightIcon sx={{ fontSize: 40 }} />,
      demoUrl: '/premium/templates/travel-demo',
      category: 'Travel'
    },
    {
      title: 'Agency Portfolio',
      description: 'Professional agency portfolio with case studies',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      price: '$79',
      features: [
        'Project Showcase',
        'Team Profiles',
        'Service Cards',
        'Client Testimonials',
        'Contact Forms',
        'Blog Section'
      ],
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
      demoUrl: '/premium/templates/agency-demo',
      category: 'Portfolio'
    },
    {
      title: 'Admin Dashboard',
      description: 'Feature-rich admin dashboard with analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      price: '$129',
      features: [
        'Animated Charts',
        'Data Tables',
        'User Management',
        'Analytics Dashboard',
        'Task Management',
        'Real-time Updates'
      ],
      icon: <DashboardIcon sx={{ fontSize: 40 }} />,
      demoUrl: '/premium/templates/dashboard-demo',
      category: 'Admin'
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
            Premium Templates
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Professional templates with advanced animations and features
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {templates.map((template, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: (theme) => theme.shadows[10],
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={template.image}
                      alt={template.title}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        bgcolor: 'primary.main',
                        color: 'white',
                        p: 1,
                        borderRadius: 1
                      }}
                    >
                      {template.price}
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {template.icon}
                      <Typography variant="h5" sx={{ ml: 2 }}>
                        {template.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {template.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={template.category}
                        color="primary"
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                    <Typography variant="subtitle2" gutterBottom>
                      Features:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {template.features.map((feature, i) => (
                        <Chip
                          key={i}
                          label={feature}
                          size="small"
                          sx={{
                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                            color: 'white'
                          }}
                        />
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                      <Button
                        component={Link}
                        to={template.demoUrl}
                        variant="outlined"
                        color="primary"
                      >
                        Live Demo
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                          color: 'white'
                        }}
                      >
                        Purchase
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default TemplatesPage; 