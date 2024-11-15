import { Box, Typography, Container, Grid, Button, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedModal from '../components/Modal/AnimatedModal';
import CodePreview from '../components/CodePreview/CodePreview';

const ModalPage = () => {
  const [openBasic, setOpenBasic] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const modalExample = `
import { AnimatedModal } from 'your-ui-library';

function Example() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <AnimatedModal open={open} onClose={() => setOpen(false)}>
        <Typography variant="h6">Modal Title</Typography>
        <Typography>Modal content goes here...</Typography>
      </AnimatedModal>
    </>
  );
}`;

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1" gutterBottom>
          Modal
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Animated modal components for displaying content in overlays.
        </Typography>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h2" gutterBottom>
            Examples
          </Typography>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item>
              <Button variant="contained" onClick={() => setOpenBasic(true)}>
                Open Basic Modal
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" onClick={() => setOpenForm(true)}>
                Open Form Modal
              </Button>
            </Grid>
          </Grid>

          <AnimatedModal open={openBasic} onClose={() => setOpenBasic(false)}>
            <Box sx={{ minWidth: 300, maxWidth: 500 }}>
              <Typography variant="h6" gutterBottom>Basic Modal</Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                This is a basic modal with simple content.
              </Typography>
              <Button variant="contained" onClick={() => setOpenBasic(false)}>
                Close
              </Button>
            </Box>
          </AnimatedModal>

          <AnimatedModal open={openForm} onClose={() => setOpenForm(false)}>
            <Box sx={{ minWidth: 400, maxWidth: 600 }}>
              <Typography variant="h6" gutterBottom>Form Modal</Typography>
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={12}>
                  <TextField fullWidth label="Name" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Email" variant="outlined" />
                </Grid>
              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                <Button onClick={() => setOpenForm(false)}>Cancel</Button>
                <Button variant="contained" onClick={() => setOpenForm(false)}>
                  Submit
                </Button>
              </Box>
            </Box>
          </AnimatedModal>

          <CodePreview code={modalExample} />
        </Box>
      </motion.div>
    </Container>
  );
};

export default ModalPage; 