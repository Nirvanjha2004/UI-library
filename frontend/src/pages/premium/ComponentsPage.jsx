import { Container, Typography, Grid, Box, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ChartIcon from '@mui/icons-material/InsertChart';
import FormIcon from '@mui/icons-material/Assignment';
import MapIcon from '@mui/icons-material/Map';
import FileIcon from '@mui/icons-material/CloudUpload';

const PremiumComponentsPage = () => {
  const components = [
    {
      title: 'Advanced Charts',
      description: 'Interactive charts with animations',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      price: '$49',
      features: [
        'Real-time Updates',
        'Interactive Tooltips',
        'Custom Animations',
        'Multiple Chart Types',
        'Data Export',
        'Responsive Design'
      ],
      icon: <ChartIcon sx={{ fontSize: 40 }} />,
      demoUrl: '/premium/components/charts-demo',
      category: 'Data Visualization'
    },
    {
      title: 'Complex Forms',
      description: 'Multi-step forms with validation',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      price: '$39',
      features: [
        'Multi-step Forms',
        'Dynamic Validation',
        'File Upload',
        'Form Persistence',
        'Custom Controls',
        'Form Analytics'
      ],
      icon: <FormIcon sx={{ fontSize: 40 }} />,
      demoUrl: '/premium/components/forms-demo',
      category: 'Forms'
    },
    {
      title: 'Interactive Maps',
      description: 'Customizable maps with markers',
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80',
      price: '$59',
      features: [
        'Custom Markers',
        'Heatmaps',
        'Route Planning',
        'Clustering',
        'Geolocation',
        'Custom Styling'
      ],
      icon: <MapIcon sx={{ fontSize: 40 }} />,
      demoUrl: '/premium/components/maps-demo',
      category: 'Maps'
    },
    {
      title: 'File Upload',
      description: 'Drag & drop file upload with preview',
      image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80',
      price: '$29',
      features: [
        'Drag & Drop',
        'Progress Tracking',
        'Image Preview',
        'File Validation',
        'Cloud Storage',
        'Batch Upload'
      ],
      icon: <FileIcon sx={{ fontSize: 40 }} />,
      demoUrl: '/premium/components/upload-demo',
      category: 'Input'
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
            Premium Components
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
            Advanced components with premium features and animations
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {components.map((component, index) => (
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
                      image={component.image}
                      alt={component.title}
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
                      {component.price}
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {component.icon}
                      <Typography variant="h5" sx={{ ml: 2 }}>
                        {component.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {component.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={component.category}
                        color="primary"
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                    <Typography variant="subtitle2" gutterBottom>
                      Features:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {component.features.map((feature, i) => (
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
                        to={component.demoUrl}
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

export default PremiumComponentsPage; 