import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const AddTaskModal = ({ isOpen, closeModal, reloadTasks }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [status, setStatus] = useState('todo');

  const handleSubmit = () => {
    if (taskTitle && taskDescription) {
      const newTask = {
        title: taskTitle,
        description: taskDescription,
        status: status,
      };

      axios
        .post('http://localhost:3001/tasks', newTask)
        .then(() => {
          reloadTasks();
          closeModal();
        })
        .catch((error) => {
          console.error('Error creating task:', error);
        });
    }
  };

  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: 24,
          width: '100%',
          maxWidth: 400,
        }}
      >
        <Typography variant="h6" gutterBottom>Create New Task</Typography>
        <TextField
          label="Task Title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <TextField
          label="Task Description"
          variant="outlined"
          fullWidth
