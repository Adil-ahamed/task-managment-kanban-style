import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const TaskCard = ({ task }) => {
  return (
    <Card
      sx={{
        margin: '8px 0',
        minWidth: '250px',
        boxShadow: '0px 1px 3px rgba(0,0,0,0.12)',
        transition: 'box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0px 3px 7px rgba(0,0,0,0.15)',
        },
        borderLeft: task.status === 'done' ? '4px solid green' : task.status === 'inprogress' ? '4px solid orange' : '4px solid blue',
      }}
    >
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {task.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
