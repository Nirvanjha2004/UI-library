import { Box, Typography, Slider } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const SliderContainer = styled(Box)(({ theme }) => ({
  width: 200,
  padding: theme.spacing(2),
}));

const AnimatedSlider = ({
  value,
  onChange,
  label,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <SliderContainer>
        <Typography variant="subtitle2" gutterBottom>
          {label}: {value}{unit}
        </Typography>
        <Slider
          value={value}
          onChange={(_, newValue) => onChange(newValue)}
          min={min}
          max={max}
          step={step}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => `${value}${unit}`}
        />
      </SliderContainer>
    </motion.div>
  );
};

AnimatedSlider.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  unit: PropTypes.string,
};

export default AnimatedSlider; 