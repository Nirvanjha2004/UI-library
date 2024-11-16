import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import CodePreview from '../components/CodePreview/CodePreview';
import AnimatedTable from '../../../animated-mui-components/src/components/AnimatedTable';

const TablesPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
      id: 'population',
      label: 'Population',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Size\u00a0(km²)',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
  ];

  const rows = [
    { name: 'India', code: 'IN', population: 1324171354, size: 3287263 },
    { name: 'China', code: 'CN', population: 1403500365, size: 9596961 },
    { name: 'Italy', code: 'IT', population: 60483973, size: 301340 },
    { name: 'United States', code: 'US', population: 327167434, size: 9833517 },
    { name: 'Canada', code: 'CA', population: 37602103, size: 9984670 },
    { name: 'Australia', code: 'AU', population: 25475400, size: 7692024 },
    { name: 'Germany', code: 'DE', population: 83019200, size: 357578 },
    { name: 'Ireland', code: 'IE', population: 4857000, size: 70273 },
    { name: 'Mexico', code: 'MX', population: 126577691, size: 1972550 },
    { name: 'Japan', code: 'JP', population: 126317000, size: 377973 },
  ];

  const tableExamples = [
    {
      title: 'Basic Table with Fade Animation',
      component: (
        <AnimatedTable
          columns={columns}
          rows={rows}
          animation="fade"
          hover="highlight"
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      ),
      code: `
<AnimatedTable
  columns={[
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO Code', minWidth: 100 },
    { id: 'population', label: 'Population', minWidth: 170, align: 'right' },
    { id: 'size', label: 'Size (km²)', minWidth: 170, align: 'right' }
  ]}
  rows={rows}
  animation="fade"
  hover="highlight"
  page={page}
  rowsPerPage={rowsPerPage}
  onPageChange={handlePageChange}
  onRowsPerPageChange={handleRowsPerPageChange}
/>`
    },
    {
      title: 'Table with Slide Animation',
      component: (
        <AnimatedTable
          columns={columns}
          rows={rows}
          animation="slideIn"
          hover="glow"
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          stickyHeader
        />
      ),
      code: `
<AnimatedTable
  columns={columns}
  rows={rows}
  animation="slideIn"
  hover="glow"
  page={page}
  rowsPerPage={rowsPerPage}
  onPageChange={handlePageChange}
  onRowsPerPageChange={handleRowsPerPageChange}
  stickyHeader
/>`
    },
    {
      title: 'Table with Scale Animation',
      component: (
        <AnimatedTable
          columns={columns}
          rows={rows}
          animation="scale"
          hover="lift"
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          dense
        />
      ),
      code: `
<AnimatedTable
  columns={columns}
  rows={rows}
  animation="scale"
  hover="lift"
  page={page}
  rowsPerPage={rowsPerPage}
  onPageChange={handlePageChange}
  onRowsPerPageChange={handleRowsPerPageChange}
  dense
/>`
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
          Enhance your tables with smooth animations and transitions.
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
                <Box sx={{ mb: 2, overflow: 'auto' }}>
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

export default TablesPage; 