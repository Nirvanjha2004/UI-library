import { Container, Typography, Grid, Box, Paper, IconButton, Badge, TextField, Button, Card, CardMedia, CardContent, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import AnimatedCard from '../../../../../animated-mui-components/src/components/AnimatedCard';
import AnimatedButton from '../../../../../animated-mui-components/src/components/AnimatedButton';

const products = [
  {
    id: 1,
    name: 'Premium Headphones',
    price: '$299',
    rating: 4.5,
    image: 'https://source.unsplash.com/random/800x600/?headphones',
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '$199',
    rating: 4.2,
    image: 'https://source.unsplash.com/random/800x600/?smartwatch',
    category: 'Electronics'
  },
  {
    id: 3,
    name: 'Wireless Speaker',
    price: '$149',
    rating: 4.8,
    image: 'https://source.unsplash.com/random/800x600/?speaker',
    category: 'Electronics'
  },
  {
    id: 4,
    name: 'Laptop Backpack',
    price: '$79',
    rating: 4.3,
    image: 'https://source.unsplash.com/random/800x600/?backpack',
    category: 'Accessories'
  }
];

const EcommerceDemo = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      {/* Header */}
      <Box
        component={motion.div}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        sx={{
          bgcolor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ py: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              E-Shop Pro
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                size="small"
                placeholder="Search products..."
                InputProps={{
                  endAdornment: <SearchIcon />
                }}
              />
              <IconButton>
                <PersonIcon />
              </IconButton>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <IconButton>
                <Badge badgeContent={cartCount} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Typography variant="h2" gutterBottom>
                  Summer Sale
                </Typography>
                <Typography variant="h5" paragraph>
                  Up to 50% off on selected items
                </Typography>
                <AnimatedButton
                  variant="contained"
                  color="secondary"
                  size="large"
                  animation="bounce"
                >
                  Shop Now
                </AnimatedButton>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.img
                src="/images/hero-image.jpg"
                alt="Hero"
                style={{ width: '100%', borderRadius: 8 }}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Products Grid */}
      <Container maxWidth="lg" sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Featured Products
        </Typography>
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <AnimatedCard
                animation="fade"
                hover="lift"
                delay={index * 0.1}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="subtitle2" color="text.secondary">
                    {product.category}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {product.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Rating value={product.rating} precision={0.5} readOnly size="small" />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      ({product.rating})
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" color="primary">
                      {product.price}
                    </Typography>
                    <AnimatedButton
                      size="small"
                      variant="contained"
                      onClick={handleAddToCart}
                      animation="pulse"
                    >
                      Add to Cart
                    </AnimatedButton>
                  </Box>
                </CardContent>
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features */}
      <Box sx={{ bgcolor: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              'Free Shipping',
              '24/7 Support',
              'Money Back Guarantee',
              'Secure Payments'
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      height: '100%',
                      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                      color: 'white'
                    }}
                  >
                    <Typography variant="h6">{feature}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default EcommerceDemo; 