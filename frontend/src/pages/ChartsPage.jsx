import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import AnimatedChart from '../components/Charts/AnimatedChart';
import CodePreview from '../components/CodePreview/CodePreview';

const ChartsPage = () => {
  const sampleData = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
    { name: 'Mar', value: 600 },
    { name: 'Apr', value: 800 },
    { name: 'May', value: 500 },
    { name: 'Jun', value: 700 },
  ];

  const chartExample = `
import { AnimatedChart } from 'your-ui-library';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  // ...
];

// Line Chart
<AnimatedChart
  type="line"
  data={data}
  dataKey="value"
/>

// Area Chart
<AnimatedChart
  type="area"
  data={data}
  dataKey="value"
  color="#2196f3"
/>

// Bar Chart
<AnimatedChart
  type="bar"
  data={data}
  dataKey="value"
  color="#4caf50"
/>`;

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1" gutterBottom>
          Charts
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Animated and responsive chart components with various styles.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Line Chart
              </Typography>
              <AnimatedChart
                type="line"
                data={sampleData}
                dataKey="value"
                height={300}
              />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Area Chart
              </Typography>
              <AnimatedChart
                type="area"
                data={sampleData}
                dataKey="value"
                height={300}
                color="#2196f3"
              />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Bar Chart
              </Typography>
              <AnimatedChart
                type="bar"
                data={sampleData}
                dataKey="value"
                height={300}
                color="#4caf50"
              />
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <CodePreview code={chartExample} />
        </Box>
      </motion.div>
    </Container>
  );
};

export default ChartsPage; 