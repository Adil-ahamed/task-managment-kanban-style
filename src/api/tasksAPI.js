import axios from 'axios';

const API_URL = 'http://localhost:3001/tasks';

// Fetch all tasks
export const fetchTasks = () => axios.get(API_URL);

// Create a new task
export const createTask = (task) => axios.post(API_URL, task);

// Update a task's status
export const updateTask = (taskId, status) => axios.patch(`${API_URL}/${taskId}`, { status });
