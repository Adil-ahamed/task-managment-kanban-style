import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

const Column = ({ title, tasks, columnId }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        borderRadius: 1,
        padding: 2,
        width: '300px',
        minHeight: '500px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 1px 3px rgba(0,0,0,0.12)',
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
        {title}
      </Typography>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <Box
            {...provided.droppableProps}
            ref={provided.innerRef}
            sx={{
              backgroundColor: '#f4f6f8',
              padding: 1,
              minHeight: '300px',
              overflowY: 'auto',
            }}
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Box>
  );
};

export default Column;
