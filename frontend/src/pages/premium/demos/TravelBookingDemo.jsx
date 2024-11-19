import { Container, Typography, Grid, Box, Paper, IconButton, TextField, Button, Card, CardMedia, CardContent, Rating, Autocomplete } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ExploreIcon from '@mui/icons-material/Explore';
import AnimatedCard from '../../../../../animated-mui-components/src/components/AnimatedCard';
import AnimatedButton from '../../../../../animated-mui-components/src/components/AnimatedButton';

const destinations = [
  {
    id: 1,
    name: 'Paris, France',
    image: 'https://source.unsplash.com/random/800x600/?paris',
    rating: 4.8,
    price: '$899',
    description: 'Experience the city of love and lights'
  },
  {
    id: 2,
    name: 'Bali, Indonesia',
    image: 'https://source.unsplash.com/random/800x600/?bali',
    rating: 4.7,
    price: '$799',
    description: 'Tropical paradise with stunning beaches'
  },
  {
    id: 3,
    name: 'Tokyo, Japan',
    image: 'https://source.unsplash.com/random/800x600/?tokyo',
    rating: 4.9,
    price: '$999',
    description: 'Modern city meets ancient traditions'
  },
  {
    id: 4,
    name: 'Santorini, Greece',
    image: 'https://source.unsplash.com/random/800x600/?santorini',
    rating: 4.6,
    price: '$849',
    description: 'Beautiful sunsets and white architecture'
  }
];

const cities = [
  'New York', 'London', 'Paris', 'Tokyo', 'Dubai',
  'Singapore', 'Hong Kong', 'Sydney', 'Rome', 'Barcelona'
];

const TravelBookingDemo = () => {
  const [searchType, setSearchType] = useState('flights');

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          pt: 15,
          pb: 20,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Container maxWidth="lg">
            <Typography variant="h1" gutterBottom align="center">
              Discover Your Next Adventure
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Book flights, hotels, and experiences worldwide
            </Typography>

            {/* Search Box */}
            <Paper
              elevation={3}
              sx={{
                p: 3,
                mt: 4,
                borderRadius: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.95)'
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                    <AnimatedButton
                      variant={searchType === 'flights' ? 'contained' : 'outlined'}
                      onClick={() => setSearchType('flights')}
                      startIcon={<FlightIcon />}
                      animation="slide"
                    >
                      Flights
                    </AnimatedButton>
                    <AnimatedButton
                      variant={searchType === 'hotels' ? 'contained' : 'outlined'}
                      onClick={() => setSearchType('hotels')}
                      startIcon={<HotelIcon />}
                      animation="slide"
                    >
                      Hotels
                    </AnimatedButton>
                    <AnimatedButton
                      variant={searchType === 'cars' ? 'contained' : 'outlined'}
                      onClick={() => setSearchType('cars')}
                      startIcon={<DirectionsCarIcon />}
                      animation="slide"
                    >
                      Cars
                    </AnimatedButton>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Autocomplete
                    options={cities}
                    renderInput={(params) => (
                      <TextField {...params} label="From" fullWidth />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Autocomplete
                    options={cities}
                    renderInput={(params) => (
                      <TextField {...params} label="To" fullWidth />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <TextField
                    type="date"
                    label="Departure"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} md={2}>
                  <AnimatedButton
                    variant="contained"
                    fullWidth
                    size="large"
                    startIcon={<SearchIcon />}
                    animation="pulse"
                    sx={{ height: '100%' }}
                  >
                    Search
                  </AnimatedButton>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </motion.div>
      </Box>

      {/* Featured Destinations */}
      <Container 
        maxWidth="lg" 
        sx={{ 
          mt: -10, 
          position: 'relative',
          mb: 8
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: 'white', mb: 4 }}>
          Featured Destinations
        </Typography>
        <Grid container spacing={4}>
          {destinations.map((destination, index) => (
            <Grid item xs={12} sm={6} md={3} key={destination.id}>
              <AnimatedCard
                animation="fade"
                hover="lift"
                delay={index * 0.1}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={destination.image}
                  alt={destination.name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {destination.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {destination.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Rating value={destination.rating} precision={0.1} readOnly size="small" />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      ({destination.rating})
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6" color="primary">
                      {destination.price}
                    </Typography>
                    <AnimatedButton
                      size="small"
                      variant="outlined"
                      startIcon={<ExploreIcon />}
                      animation="pulse"
                    >
                      Explore
                    </AnimatedButton>
                  </Box>
                </CardContent>
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features */}
      <Box sx={{ bgcolor: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {[
              'Best Price Guarantee',
              '24/7 Customer Support',
              'Flexible Booking',
              'Travel Insurance'
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

export default TravelBookingDemo; 