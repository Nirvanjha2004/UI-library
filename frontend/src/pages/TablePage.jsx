import { Container, Typography, Grid, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';

const TablePage = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const sampleData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User' },
  ];

  const tableExamples = [
    {
      title: 'Fade In Animation',
      component: (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <AnimatePresence>
                {sampleData.map((row, index) => (
                  <motion.tr
                    key={row.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: index * 0.1 }}
                    component={TableRow}
                    hover
                  >
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.role}</TableCell>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </TableBody>
          </Table>
        </TableContainer>
      ),
      code: `
<TableContainer component={Paper}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Role</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <AnimatePresence>
        {data.map((row, index) => (
          <motion.tr
            key={row.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: index * 0.1 }}
            component={TableRow}
            hover
          >
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </motion.tr>
        ))}
      </AnimatePresence>
    </TableBody>
  </Table>
</TableContainer>`
    },
    {
      title: 'Slide In Animation',
      component: (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <AnimatePresence>
                {sampleData.map((row, index) => (
                  <motion.tr
                    key={row.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ delay: index * 0.1 }}
                    component={TableRow}
                    hover
                    onClick={() => setSelectedRow(row.id === selectedRow ? null : row.id)}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.role}</TableCell>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </TableBody>
          </Table>
        </TableContainer>
      ),
      code: `
<TableContainer component={Paper}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Role</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <AnimatePresence>
        {data.map((row, index) => (
          <motion.tr
            key={row.id}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 20, opacity: 0 }}
            transition={{ delay: index * 0.1 }}
            component={TableRow}
            hover
            onClick={() => setSelectedRow(row.id)}
          >
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </motion.tr>
        ))}
      </AnimatePresence>
    </TableBody>
  </Table>
</TableContainer>`
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
          Animated Tables
        </Typography>
        <Typography variant="body1" paragraph>
          Enhance your tables with smooth animations and interactive effects.
        </Typography>

        <Typography variant="h2" sx={{ mt: 6, mb: 3 }}>
          Examples
        </Typography>
        <Grid container spacing={4}>
          {tableExamples.map((example, index) => (
            <Grid item xs={12} key={index}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                  {example.title}
                </Typography>
                <Box sx={{ mb: 2 }}>
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

export default TablePage; 