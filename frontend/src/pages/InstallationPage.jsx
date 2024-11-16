import { Container, Typography, Box, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CodePreview from '../components/CodePreview/CodePreview';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const InstallationPage = () => {
  const installCode = `# Using npm
npm install @your-library/animated-components framer-motion @mui/material @emotion/react @emotion/styled

# Using yarn
yarn add @your-library/animated-components framer-motion @mui/material @emotion/react @emotion/styled`;

  const basicUsageCode = `import { AnimatedButton, AnimatedCard } from '@your-library/animated-components';

function App() {
  return (
    <div>
      <AnimatedButton
        animation="bounce"
        variant="contained"
        color="primary"
      >
        Bouncing Button
      </AnimatedButton>

      <AnimatedCard
        animation="fade"
        duration={0.5}
        sx={{ mt: 2 }}
      >
        <h2>Animated Content</h2>
        <p>This card fades in smoothly</p>
      </AnimatedCard>
    </div>
  );
}`;

  const customAnimationCode = `import { useAnimation } from '@your-library/animated-components';

function CustomComponent() {
  const animation = useAnimation({
    type: 'bounce',
    duration: 1,
    delay: 0.2,
    repeat: Infinity
  });

  return (
    <div {...animation}>
      Your Content
    </div>
  );
}`;

  const themeUsageCode = `import { ThemeProvider } from '@mui/material/styles';
import { AnimatedTheme } from '@your-library/animated-components';

function App() {
  return (
    <ThemeProvider theme={AnimatedTheme}>
      {/* Your components will use the animated theme */}
      <YourComponents />
    </ThemeProvider>
  );
}`;

  return (
    <Container maxWidth="lg">
      <Typography variant="h1" gutterBottom>
        Getting Started
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" gutterBottom>
          Installation
        </Typography>
        <Paper sx={{ p: 3 }}>
          <Typography variant="body1" paragraph>
            Our library provides pre-built animated components that you can use directly in your React projects.
            Just install the package and its peer dependencies:
          </Typography>
          <CodePreview code={installCode} language="bash" />
        </Paper>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" gutterBottom>
          Basic Usage
        </Typography>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="body1" paragraph>
            Import and use components directly in your React application:
          </Typography>
          <CodePreview code={basicUsageCode} language="jsx" />
        </Paper>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" gutterBottom>
          Available Components
        </Typography>
        <Paper sx={{ p: 3 }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Animated Buttons" 
                secondary="Buttons with various animation effects"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Animated Cards" 
                secondary="Cards with entrance and hover animations"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText 
                primary="Animation Hooks" 
                secondary="Custom hooks for adding animations to any component"
              />
            </ListItem>
          </List>
        </Paper>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" gutterBottom>
          Custom Animations
        </Typography>
        <Paper sx={{ p: 3 }}>
          <Typography variant="body1" paragraph>
            Use our animation hooks to create custom animated components:
          </Typography>
          <CodePreview code={customAnimationCode} language="jsx" />
        </Paper>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" gutterBottom>
          Theme Integration
        </Typography>
        <Paper sx={{ p: 3 }}>
          <Typography variant="body1" paragraph>
            Our components work seamlessly with Material-UI&apos;s theme system:
          </Typography>
          <CodePreview code={themeUsageCode} language="jsx" />
        </Paper>
      </Box>
    </Container>
  );
};

export default InstallationPage;