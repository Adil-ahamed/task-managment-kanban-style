import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Container, Button } from '@mui/material';
import KanbanBoard from './components/KanbanBoard';
import AddTaskModal from './components/AddTaskModal';
import theme from './theme';
import { fetchTasks } from './api/tasksAPI';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchTasks()
      .then((response) => setTasks(response.data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  const handleAddTaskClick = () => {
    setIsModalOpen(true);
  };

  const reloadTasks = () => {
    fetchTasks()
      .then((response) => setTasks(response.data))
      .catch((error) => console.error('Error fetching tasks:', error));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ paddingTop: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTaskClick}
          sx={{
            marginBottom: 2,
            padding: '8px 16px',
          }}
        >
          Add New Task
        </Button>
        <KanbanBoard tasks={tasks} reloadTasks={reloadTasks} />
        <AddTaskModal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          reloadTasks={reloadTasks}
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;
