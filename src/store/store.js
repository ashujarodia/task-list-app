// Importing the configureStore function from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './taskSlice'; // Importing the taskSlice reducer

// Creating the Redux store using configureStore
export const store = configureStore({
	reducer: {
		task: taskSlice, // Assigning the taskSlice reducer to the 'task' key in the store
	},
});
