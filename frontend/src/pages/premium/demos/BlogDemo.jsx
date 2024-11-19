import { Container, Typography, Grid, Box, Paper, IconButton, Avatar, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SearchIcon from '@mui/icons-material/Search';
import AnimatedCard from '../../../../../animated-mui-components/src/components/AnimatedCard';
import AnimatedButton from '../../../../../animated-mui-components/src/components/AnimatedButton';

const BlogDemo = () => {
  const featuredPosts = [
    {
      title: 'The Future of Web Development',
      excerpt: 'Exploring the latest trends and technologies shaping the web development landscape...',
      image: 'https://source.unsplash.com/random/800x600/?webdevelopment',
      author: {
        name: 'John Doe',
        avatar: '/images/avatars/1.jpg'
      },
      category: 'Technology',
      readTime: '5 min read',
      date: 'Mar 15, 2024'
    },
    {
      title: 'Mastering React Hooks',
      excerpt: 'A comprehensive guide to using React Hooks effectively in your applications...',
      image: 'https://source.unsplash.com/random/800x600/?programming',
      author: {
        name: 'Jane Smith',
        avatar: '/images/avatars/2.jpg'
      },
      category: 'Programming',
      readTime: '8 min read',
      date: 'Mar 14, 2024'
    }
  ];

  const recentPosts = [
    {
      title: 'UI Design Principles',
      excerpt: 'Essential principles for creating user-friendly interfaces...',
      image: 'https://source.unsplash.com/random/800x600/?uidesign',
      category: 'Design',
      readTime: '4 min read',
      date: 'Mar 13, 2024'
    },
    {
      title: 'Getting Started with TypeScript',
      excerpt: 'A beginner-friendly introduction to TypeScript...',
      image: 'https://source.unsplash.com/random/800x600/?typescript',
      category: 'Programming',
      readTime: '6 min read',
      date: 'Mar 12, 2024'
    },
    {
      title: 'Mobile App Development Trends',
      excerpt: 'Latest trends in mobile app development for 2024...',
      image: 'https://source.unsplash.com/random/800x600/?mobileapp',
      category: 'Mobile',
      readTime: '7 min read',
      date: 'Mar 11, 2024'
    }
  ];

  const categories = [
    'Technology',
    'Programming',
    'Design',
    'Mobile',
    'Web Development',
    'UI/UX',
    'DevOps',
    'Career'
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', pb: 8 }}>
      {/* Header */}
      <Box
        sx={{
          bgcolor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          py: 2
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              Tech Blog
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Box sx={{ position: 'relative' }}>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </Box>
              <AnimatedButton
                variant="contained"
                animation="bounce"
              >
                Subscribe
              </AnimatedButton>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* Featured Posts */}
        <Typography variant="h4" gutterBottom>Featured Posts</Typography>
        <Grid container spacing={4}>
          {featuredPosts.map((post, index) => (
            <Grid item xs={12} md={6} key={index}>
              <AnimatedCard
                animation="fade"
                hover="lift"
                delay={index * 0.1}
              >
                <Box sx={{ position: 'relative' }}>
                  <Box
                    component="img"
                    src={post.image}
                    alt={post.title}
                    sx={{
                      width: '100%',
                      height: 300,
                      objectFit: 'cover'
                    }}
                  />
                  <Chip
                    label={post.category}
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: 'primary.main',
                      color: 'white'
                    }}
                  />
                </Box>
                <Box sx={{ p: 3 }}>
                  <Typography variant="h5" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {post.excerpt}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Avatar src={post.author.avatar} />
                      <Box>
                        <Typography variant="subtitle2">{post.author.name}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {post.date} · {post.readTime}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <IconButton size="small"><FavoriteIcon /></IconButton>
                      <IconButton size="small"><ShareIcon /></IconButton>
                      <IconButton size="small"><BookmarkIcon /></IconButton>
                    </Box>
                  </Box>
                </Box>
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>

        {/* Main Content */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {/* Recent Posts */}
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom>Recent Posts</Typography>
            <Grid container spacing={3}>
              {recentPosts.map((post, index) => (
                <Grid item xs={12} key={index}>
                  <AnimatedCard
                    animation="slideUp"
                    hover="lift"
                    delay={index * 0.1}
                  >
                    <Grid container>
                      <Grid item xs={12} sm={4}>
                        <Box
                          component="img"
                          src={post.image}
                          alt={post.title}
                          sx={{
                            width: '100%',
                            height: '100%',
                            minHeight: 200,
                            objectFit: 'cover'
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={8}>
                        <Box sx={{ p: 3 }}>
                          <Chip
                            label={post.category}
                            size="small"
                            sx={{ mb: 2 }}
                          />
                          <Typography variant="h6" gutterBottom>
                            {post.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" paragraph>
                            {post.excerpt}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {post.date} · {post.readTime}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </AnimatedCard>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'sticky', top: 100 }}>
              {/* Categories */}
              <AnimatedCard
                animation="fade"
                hover="lift"
                delay={0.3}
              >
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Categories
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {categories.map((category, index) => (
                      <Chip
                        key={index}
                        label={category}
                        onClick={() => {}}
                        sx={{
                          '&:hover': {
                            bgcolor: 'primary.main',
                            color: 'white'
                          }
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </AnimatedCard>

              {/* Newsletter */}
              <AnimatedCard
                animation="fade"
                hover="lift"
                delay={0.4}
                sx={{ mt: 3 }}
              >
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Newsletter
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Subscribe to our newsletter for the latest updates.
                  </Typography>
                  <AnimatedButton
                    variant="contained"
                    fullWidth
                    animation="bounce"
                  >
                    Subscribe Now
                  </AnimatedButton>
                </Box>
              </AnimatedCard>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogDemo; 