// Importing createSlice from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Function to load tasks from local storage
const loadTasksFromLocalStorage = () => {
	try {
		const storedTasks = localStorage.getItem('tasks');
		return storedTasks ? JSON.parse(storedTasks) : [];
	} catch (error) {
		console.error('Error loading tasks from local storage:', error);
		return [];
	}
};

// Function to save tasks to local storage
const saveTasksToLocalStorage = (tasks) => {
	try {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	} catch (error) {
		console.error('Error saving tasks to local storage:', error);
	}
};

// Initial state for the task slice
const initialState = {
	tasks: loadTasksFromLocalStorage(), // Loading tasks from local storage
};

// Creating the taskSlice with reducers
export const taskSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {
		// Reducer to add a new task
		addTask: (state, action) => {
			const newTask = action.payload;

			// Add the new task to the tasks array
			state.tasks.push(newTask);

			// Sort tasks based on priority
			state.tasks.sort((a, b) => {
				const priorityOrder = { High: 0, Medium: 1, Low: 2 };
				return priorityOrder[a.priority] - priorityOrder[b.priority];
			});

			// Save tasks to local storage
			saveTasksToLocalStorage(state.tasks);
		},

		// Reducer to update an existing task
		updateTask: (state, action) => {
			const id = action.payload.id;
			const item = action.payload;
			const existingTask = state.tasks.find((task) => task.id === id);

			if (existingTask) {
				state.tasks = state.tasks.map((task) => (task.id === id ? { ...task, ...item } : task));
				saveTasksToLocalStorage(state.tasks);
			}
		},

		// Reducer to delete a task
		deleteTask: (state, action) => {
			const taskId = action.payload;
			state.tasks = state.tasks.filter((task) => task.id !== taskId);
			saveTasksToLocalStorage(state.tasks);
		},

		// Reducer to toggle the completed status of a task
		toggleTaskCompleted: (state, action) => {
			const id = action.payload;

			// Find the task with the specified id
			const taskToUpdate = state.tasks.find((task) => task.id === id);

			// Check if the task with the specified id exists
			if (taskToUpdate) {
				// Update the completed status for the specific task
				taskToUpdate.completed = !taskToUpdate.completed;
				saveTasksToLocalStorage(state.tasks); // Save tasks to local storage
			}
		},
	},
});

// Exporting action creators and the reducer from the task slice
export const { addTask, toggleTaskCompleted, updateTask, deleteTask } = taskSlice.actions;

// Exporting the reducer as the default export
export default taskSlice.reducer;
