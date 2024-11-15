import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const chartVariants = {
  initial: { 
    opacity: 0,
    scale: 0.9,
  },
  animate: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    }
  }
};

const AnimatedChart = ({ 
  type = 'line',
  data = [],
  dataKey,
  xAxisKey = 'name',
  height = 400,
  color,
  ...props 
}) => {
  const theme = useTheme();
  const defaultColor = theme.palette.primary.main;

  const renderChart = () => {
    switch(type) {
      case 'area':
        return (
          <AreaChart data={data} {...props}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKey} />
            <YAxis />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color || defaultColor}
              fill={color || defaultColor}
              fillOpacity={0.3}
            />
          </AreaChart>
        );
      case 'bar':
        return (
          <BarChart data={data} {...props}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKey} />
            <YAxis />
            <Tooltip />
            <Bar 
              dataKey={dataKey} 
              fill={color || defaultColor}
              animationDuration={1500}
            />
          </BarChart>
        );
      default:
        return (
          <LineChart data={data} {...props}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKey} />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color || defaultColor}
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
              animationDuration={1500}
            />
          </LineChart>
        );
    }
  };

  return (
    <motion.div
      variants={chartVariants}
      initial="initial"
      animate="animate"
    >
      <Box sx={{ width: '100%', height }}>
        <ResponsiveContainer>
          {renderChart()}
        </ResponsiveContainer>
      </Box>
    </motion.div>
  );
};

AnimatedChart.propTypes = {
  type: PropTypes.oneOf(['line', 'area', 'bar']),
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataKey: PropTypes.string.isRequired,
  xAxisKey: PropTypes.string,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default AnimatedChart; 