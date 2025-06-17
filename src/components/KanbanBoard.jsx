import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import TaskCard from './TaskCard';
import AddTaskModal from './AddTaskModal';

const KanbanBoard = ({ tasks, reloadTasks }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Box sx={{ position: 'relative', padding: '16px' }}>
      <Button
        variant="contained"
        color="primary"
        onClick={openModal}
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
          zIndex: 10,
          padding: '8px 16px',
        }}
      >
        Add New Task
      </Button>

      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 4,
          flexWrap: 'wrap',
        }}
      >
        {['todo', 'inprogress', 'done'].map((status) => (
          <Grid item xs={12} sm={4} key={status}>
            <Box
              sx={{
                padding: 2,
                border: '1px solid #ddd',
                borderRadius: 2,
                minWidth: 250,
                backgroundColor: getStatusColor(status),
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h6" sx={{ textTransform: 'capitalize', marginBottom: 2 }}>
                {status}
              </Typography>
              <Box sx={{ flex: 1, overflowY: 'auto' }}>
                {tasks
                  .filter((task) => task.status === status)
                  .map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <AddTaskModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        reloadTasks={reloadTasks}
      />
    </Box>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'todo':
      return '#f0f0f0';
    case 'inprogress':
      return '#ffe0b2';
    case 'done':
      return '#c8e6c9';
    default:
      return '#ffffff';
  }
};

export default KanbanBoard;
