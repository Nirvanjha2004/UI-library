import { Container, Typography, Grid, Box, Paper, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { Tooltip } from "react-tooltip";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const markers = [
  { name: "New York", coordinates: [-74.006, 40.7128], value: 8419000 },
  { name: "London", coordinates: [-0.1276, 51.5074], value: 8982000 },
  { name: "Tokyo", coordinates: [139.6917, 35.6895], value: 37400068 },
  { name: "Sydney", coordinates: [151.2093, -33.8688], value: 5367000 }
];

const InteractiveMapsDemo = () => {
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
  const [tooltipContent, setTooltipContent] = useState("");
  const [data, setData] = useState({});

  const colorScale = scaleQuantile()
    .domain(Object.values(data).map(d => d.value))
    .range([
      "#ffedea",
      "#ffcec5",
      "#ffad9f",
      "#ff8a75",
      "#ff5533",
      "#e2492d",
      "#be3d26",
      "#9a311f",
      "#782618"
    ]);

  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 2 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 2 }));
  };

  const handleMoveEnd = (position) => {
    setPosition(position);
  };

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" gutterBottom>
          Interactive Maps
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 2, 
                height: 600, 
                position: 'relative',
                backgroundColor: '#F5F5F5'
              }}
            >
              <Box sx={{ position: 'absolute', right: 16, top: 16, zIndex: 1 }}>
                <IconButton onClick={handleZoomIn} size="small" sx={{ mb: 1 }}>
                  <AddIcon />
                </IconButton>
                <IconButton onClick={handleZoomOut} size="small">
                  <RemoveIcon />
                </IconButton>
              </Box>

              <ComposableMap
                data-tip=""
                projectionConfig={{
                  rotate: [-10, 0, 0],
                  scale: 147
                }}
              >
                <ZoomableGroup
                  zoom={position.zoom}
                  center={position.coordinates}
                  onMoveEnd={handleMoveEnd}
                >
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map(geo => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onMouseEnter={() => {
                            setTooltipContent(`${geo.properties.name}`);
                          }}
                          onMouseLeave={() => {
                            setTooltipContent("");
                          }}
                          style={{
                            default: {
                              fill: "#D6D6DA",
                              outline: "none"
                            },
                            hover: {
                              fill: "#F53",
                              outline: "none"
                            },
                            pressed: {
                              fill: "#E42",
                              outline: "none"
                            }
                          }}
                        />
                      ))
                    }
                  </Geographies>
                  {markers.map(({ name, coordinates, value }) => (
                    <Marker key={name} coordinates={coordinates}>
                      <motion.circle
                        r={4}
                        fill="#F00"
                        stroke="#FFF"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.5 }}
                        onMouseEnter={() => {
                          setTooltipContent(`${name}: ${value.toLocaleString()}`);
                        }}
                        onMouseLeave={() => {
                          setTooltipContent("");
                        }}
                      />
                    </Marker>
                  ))}
                </ZoomableGroup>
              </ComposableMap>
              <Tooltip>{tooltipContent}</Tooltip>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              Features
            </Typography>
            <Grid container spacing={2}>
              {[
                'Interactive zooming and panning',
                'Custom markers with animations',
                'Tooltips on hover',
                'Color-coded regions',
                'Real-time data updates',
                'Custom styling options',
                'Multiple map projections',
                'Responsive design'
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
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default InteractiveMapsDemo; 