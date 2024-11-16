import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedBreadcrumbs from '../../../animated-mui-components/src/components/AnimatedBreadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

const BreadcrumbsPage = () => {
  const basicItems = [
    { text: 'Home', href: '#', icon: <HomeIcon /> },
    { text: 'Category', href: '#' },
    { text: 'Current Page' }
  ];

  const longItems = [
    { text: 'Home', href: '#', icon: <HomeIcon /> },
    { text: 'Category', href: '#', icon: <WhatshotIcon /> },
    { text: 'Subcategory', href: '#', icon: <GrainIcon /> },
    { text: 'Product', href: '#' },
    { text: 'Details' }
  ];

  const breadcrumbsExamples = [
    {
      title: 'Basic Breadcrumbs with Slide Animation',
      component: (
        <AnimatedBreadcrumbs
          items={basicItems}
          animation="slide"
          separator="/"
        />
      ),
      code: `
<AnimatedBreadcrumbs
  items={[
    { text: 'Home', href: '#', icon: <HomeIcon /> },
    { text: 'Category', href: '#' },
    { text: 'Current Page' }
  ]}
  animation="slide"
  separator="/"
/>`
    },
    {
      title: 'Fade Animation with Custom Separator',
      component: (
        <AnimatedBreadcrumbs
          items={basicItems}
          animation="fade"
          separator=">"
          hover="glow"
        />
      ),
      code: `
<AnimatedBreadcrumbs
  items={basicItems}
  animation="fade"
  separator=">"
  hover="glow"
/>`
    },
    {
      title: 'Scale Animation with Icons',
      component: (
        <AnimatedBreadcrumbs
          items={longItems}
          animation="scale"
          maxItems={4}
          itemsBeforeCollapse={2}
          itemsAfterCollapse={2}
          hover="lift"
        />
      ),
      code: `
<AnimatedBreadcrumbs
  items={longItems}
  animation="scale"
  maxItems={4}
  itemsBeforeCollapse={2}
  itemsAfterCollapse={2}
  hover="lift"
/>`
    },
    {
      title: 'Bounce Animation with Custom Styles',
      component: (
        <AnimatedBreadcrumbs
          items={basicItems}
          animation="bounce"
          hover="pulse"
          sx={{
            '& .MuiBreadcrumbs-li': {
              backgroundColor: 'primary.main',
              padding: '4px 8px',
              borderRadius: 1
            }
          }}
        />
      ),
      code: `
<AnimatedBreadcrumbs
  items={basicItems}
  animation="bounce"
  hover="pulse"
  sx={{
    '& .MuiBreadcrumbs-li': {
      backgroundColor: 'primary.main',
      padding: '4px 8px',
      borderRadius: 1
    }
  }}
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
          Animated Breadcrumbs
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your navigation with smooth animated breadcrumbs.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {breadcrumbsExamples.map((example, index) => (
            <Grid item xs={12} key={index}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  {example.title}
                </Typography>
                <Box sx={{ mb: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
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

export default BreadcrumbsPage; 