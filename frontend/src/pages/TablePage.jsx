import { Typography, Container, Chip, IconButton, Box } from '@mui/material';
import { motion } from 'framer-motion';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AnimatedTable from '../components/Table/AnimatedTable';
import CodePreview from '../components/CodePreview/CodePreview';
import { useToast } from '../App';

const TablePage = () => {
  const { showToast } = useToast();

  const columns = [
    { 
      id: 'avatar', 
      label: '',
      render: (row) => (
        <Box
          component="img"
          src={row.avatar}
          alt={row.name}
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
      )
    },
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
    { id: 'email', label: 'Email' },
    { 
      id: 'status', 
      label: 'Status',
      render: (row) => (
        <Chip 
          label={row.status}
          color={row.status === 'Active' ? 'success' : 'error'}
          size="small"
        />
      )
    },
    {
      id: 'actions',
      label: 'Actions',
      render: (row) => (
        <>
          <IconButton 
            size="small" 
            onClick={(e) => {
              e.stopPropagation();
              handleEdit(row);
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton 
            size="small"
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(row.id);
            }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </>
      )
    },
  ];

  const sampleData = [
    { 
      id: 1, 
      name: 'John Doe', 
      email: 'john@example.com', 
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop',
      details: {
        phone: '+1 234 567 890',
        address: '123 Main St, City',
        joinDate: '2023-01-15',
        profileBanner: 'https://images.unsplash.com/photo-1614850523296-9e4b4b42aa4e?w=800&h=200&fit=crop'
      }
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      email: 'jane@example.com', 
      status: 'Inactive',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      details: {
        phone: '+1 234 567 891',
        address: '456 Oak St, Town',
        joinDate: '2023-02-20',
        profileBanner: 'https://images.unsplash.com/photo-1614850523296-9e4b4b42aa4e?w=800&h=200&fit=crop'
      }
    },
    { 
      id: 3, 
      name: 'Bob Johnson', 
      email: 'bob@example.com', 
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
      details: {
        phone: '+1 234 567 892',
        address: '789 Pine St, Village',
        joinDate: '2023-03-10',
        profileBanner: 'https://images.unsplash.com/photo-1614850523011-8f49ffc73908?w=800&h=200&fit=crop'
      }
    },
    { 
      id: 4, 
      name: 'Alice Brown', 
      email: 'alice@example.com', 
      status: 'Active',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
      details: {
        phone: '+1 234 567 893',
        address: '321 Elm St, County',
        joinDate: '2023-04-05',
        profileBanner: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&h=200&fit=crop'
      }
    },
  ];

  const filters = [
    { id: 'status', label: 'Active Only', value: 'Active' },
    { id: 'status', label: 'Inactive Only', value: 'Inactive' },
    { id: 'status', label: 'Show All', value: null },
  ];

  const handleEdit = (row) => {
    showToast(`Editing ${row.name}`, 'info');
  };

  const handleDelete = (id) => {
    showToast(`Deleted item ${id}`, 'success');
  };

  const handleBulkDelete = (selectedIds) => {
    showToast(`Deleted ${selectedIds.length} items`, 'success');
  };

  const renderExpandedRow = (row) => (
    <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
      <Box
        component="img"
        src={row.details.profileBanner}
        alt="Profile Banner"
        sx={{
          width: '100%',
          height: 200,
          objectFit: 'cover',
          borderRadius: 1,
          mb: 2
        }}
      />
      <Typography variant="h6" gutterBottom>
        Additional Details
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            Phone
          </Typography>
          <Typography>{row.details.phone}</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            Address
          </Typography>
          <Typography>{row.details.address}</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            Join Date
          </Typography>
          <Typography>{row.details.joinDate}</Typography>
        </Box>
      </Box>
    </Box>
  );

  const tableExample = `
import { AnimatedTable } from 'your-ui-library';

const columns = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { 
    id: 'status', 
    label: 'Status',
    render: (row) => (
      <Chip 
        label={row.status}
        color={row.status === 'Active' ? 'success' : 'error'}
      />
    )
  },
];

const filters = [
  { id: 'status', label: 'Active Only', value: 'Active' },
  { id: 'status', label: 'Inactive Only', value: 'Inactive' },
];

<AnimatedTable
  title="Users Table"
  columns={columns}
  data={data}
  selectable
  searchable
  filterable
  expandable
  renderExpandedRow={renderExpandedRow}
  filters={filters}
  onDelete={handleDelete}
  onRowClick={handleRowClick}
/>`;

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h1" gutterBottom>
          Data Table
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Advanced data table with sorting, filtering, expandable rows, and CSV export.
        </Typography>

        <AnimatedTable
          title="Users Table"
          columns={columns}
          data={sampleData}
          selectable
          searchable
          filterable
          expandable
          renderExpandedRow={renderExpandedRow}
          filters={filters}
          onDelete={handleBulkDelete}
          onRowClick={(id) => showToast(`Clicked row ${id}`, 'info')}
          sx={{ mb: 4 }}
        />

        <CodePreview code={tableExample} />
      </motion.div>
    </Container>
  );
};

export default TablePage; 