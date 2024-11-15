import { Box, Slider, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import PropTypes from 'prop-types';

const AnimationControls = ({ 
  duration, 
  setDuration,
  delay,
  setDelay,
  repeat,
  setRepeat,
  ease,
  setEase,
  ...props 
}) => {
  const easingOptions = [
    "linear",
    "easeIn",
    "easeOut",
    "easeInOut",
    "circIn",
    "circOut",
    "circInOut",
    "backIn",
    "backOut",
    "backInOut",
    "anticipate",
    "bounceIn",
    "bounceOut",
    "bounceInOut",
  ];

  return (
    <Box sx={{ width: '100%', p: 2 }}>
      <Typography variant="h6" gutterBottom>Timing</Typography>
      
      <Typography gutterBottom>Duration: {duration}s</Typography>
      <Slider
        value={duration}
        onChange={(_, value) => setDuration(value)}
        min={0.1}
        max={5}
        step={0.1}
        sx={{ mb: 2 }}
        valueLabelDisplay="auto"
      />

      <Typography gutterBottom>Delay: {delay}s</Typography>
      <Slider
        value={delay}
        onChange={(_, value) => setDelay(value)}
        min={0}
        max={2}
        step={0.1}
        sx={{ mb: 2 }}
        valueLabelDisplay="auto"
      />

      <Typography gutterBottom>Repeat: {repeat === Infinity ? "∞" : repeat}</Typography>
      <Slider
        value={repeat === Infinity ? 10 : repeat}
        onChange={(_, value) => setRepeat(value === 10 ? Infinity : value)}
        min={0}
        max={10}
        step={1}
        marks={[
          { value: 0, label: '0' },
          { value: 10, label: '∞' },
        ]}
        sx={{ mb: 2 }}
        valueLabelDisplay="auto"
      />

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Easing</Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Easing Function</InputLabel>
        <Select
          value={ease}
          onChange={(e) => setEase(e.target.value)}
          label="Easing Function"
        >
          {easingOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {props.children}
    </Box>
  );
};

AnimationControls.propTypes = {
  duration: PropTypes.number.isRequired,
  setDuration: PropTypes.func.isRequired,
  delay: PropTypes.number.isRequired,
  setDelay: PropTypes.func.isRequired,
  repeat: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([Infinity])]).isRequired,
  setRepeat: PropTypes.func.isRequired,
  ease: PropTypes.string.isRequired,
  setEase: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default AnimationControls; 