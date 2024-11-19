import { Container, Typography, Grid, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', value: 4000, profit: 2400, users: 2400 },
  { name: 'Feb', value: 3000, profit: 1398, users: 2210 },
  { name: 'Mar', value: 2000, profit: 9800, users: 2290 },
  { name: 'Apr', value: 2780, profit: 3908, users: 2000 },
  { name: 'May', value: 1890, profit: 4800, users: 2181 },
  { name: 'Jun', value: 2390, profit: 3800, users: 2500 },
  { name: 'Jul', value: 3490, profit: 4300, users: 2100 }
];

const AdvancedChartsDemo = () => {
  const [hoveredChart, setHoveredChart] = useState(null);

  const chartContainerStyle = {
    p: 3,
    height: 400,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: (theme) => theme.shadows[10]
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#121212', color: 'white', pb: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h2" sx={{ pt: 4, mb: 4 }}>
            Advanced Charts
          </Typography>

          <Grid container spacing={4}>
            {/* Animated Line Chart */}
            <Grid item xs={12}>
              <Paper 
                sx={chartContainerStyle}
                onMouseEnter={() => setHoveredChart('line')}
                onMouseLeave={() => setHoveredChart(null)}
              >
                <Typography variant="h6" gutterBottom>Real-time Analytics</Typography>
                <ResponsiveContainer>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="name" stroke="white" />
                    <YAxis stroke="white" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1a1a1a', border: 'none' }}
                      labelStyle={{ color: 'white' }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#8884d8" 
                      strokeWidth={hoveredChart === 'line' ? 3 : 2}
                      dot={{ r: hoveredChart === 'line' ? 6 : 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="profit" 
                      stroke="#82ca9d"
                      strokeWidth={hoveredChart === 'line' ? 3 : 2}
                      dot={{ r: hoveredChart === 'line' ? 6 : 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>

            {/* Animated Area Chart */}
            <Grid item xs={12} md={6}>
              <Paper 
                sx={chartContainerStyle}
                onMouseEnter={() => setHoveredChart('area')}
                onMouseLeave={() => setHoveredChart(null)}
              >
                <Typography variant="h6" gutterBottom>User Growth</Typography>
                <ResponsiveContainer>
                  <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="name" stroke="white" />
                    <YAxis stroke="white" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1a1a1a', border: 'none' }}
                      labelStyle={{ color: 'white' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="users" 
                      stroke="#8884d8"
                      fill="url(#colorUsers)"
                      strokeWidth={hoveredChart === 'area' ? 3 : 2}
                    />
                    <defs>
                      <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>

            {/* Animated Bar Chart */}
            <Grid item xs={12} md={6}>
              <Paper 
                sx={chartContainerStyle}
                onMouseEnter={() => setHoveredChart('bar')}
                onMouseLeave={() => setHoveredChart(null)}
              >
                <Typography variant="h6" gutterBottom>Revenue Analysis</Typography>
                <ResponsiveContainer>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="name" stroke="white" />
                    <YAxis stroke="white" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1a1a1a', border: 'none' }}
                      labelStyle={{ color: 'white' }}
                    />
                    <Legend />
                    <Bar 
                      dataKey="value" 
                      fill="#8884d8"
                      radius={hoveredChart === 'bar' ? [10, 10, 0, 0] : [5, 5, 0, 0]}
                    />
                    <Bar 
                      dataKey="profit" 
                      fill="#82ca9d"
                      radius={hoveredChart === 'bar' ? [10, 10, 0, 0] : [5, 5, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          </Grid>

          {/* Features List */}
          <Box sx={{ mt: 6 }}>
            <Typography variant="h4" gutterBottom>Features</Typography>
            <Grid container spacing={3}>
              {[
                'Real-time data updates',
                'Interactive tooltips',
                'Animated transitions',
                'Custom color schemes',
                'Responsive design',
                'Multiple chart types',
                'Data export options',
                'Zoom capabilities'
              ].map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Paper
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                        color: 'white'
                      }}
                    >
                      {feature}
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AdvancedChartsDemo; 