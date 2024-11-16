import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

const chartTypes = {
  line: LineChart,
  area: AreaChart,
  bar: BarChart
};

const dataComponents = {
  line: Line,
  area: Area,
  bar: Bar
};

const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slideUp: {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 }
  },
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
  }
};

const AnimatedChart = ({
  type = 'line',
  data,
  dataKey,
  animation = 'fadeIn',
  color = '#8884d8',
  height = 300,
  animationDuration = 2000,
  animationEasing = 'ease-out',
  ...props
}) => {
  const ChartComponent = chartTypes[type];
  const DataComponent = dataComponents[type];
  const animationConfig = animations[animation];
  const MotionBox = motion(Box);

  if (!ChartComponent || !DataComponent) {
    console.error(`Invalid chart type: ${type}`);
    return null;
  }

  return (
    <MotionBox
      initial={animationConfig.initial}
      animate={animationConfig.animate}
      exit={animationConfig.exit}
      transition={{ duration: 0.5 }}
      sx={{ width: '100%', height }}
    >
      <ResponsiveContainer>
        <ChartComponent data={data} {...props}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <DataComponent
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            fill={type === 'area' ? color : undefined}
            fillOpacity={type === 'area' ? 0.3 : undefined}
            isAnimationActive={true}
            animationBegin={0}
            animationDuration={animationDuration}
            animationEasing={animationEasing}
          />
        </ChartComponent>
      </ResponsiveContainer>
    </MotionBox>
  );
};

AnimatedChart.propTypes = {
  type: PropTypes.oneOf(['line', 'area', 'bar']),
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataKey: PropTypes.string.isRequired,
  animation: PropTypes.oneOf(['fadeIn', 'slideUp', 'scale']),
  color: PropTypes.string,
  height: PropTypes.number,
  animationDuration: PropTypes.number,
  animationEasing: PropTypes.string
};

export default AnimatedChart; 