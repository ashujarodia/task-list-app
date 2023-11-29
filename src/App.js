// Importing necessary dependencies from React and react-router-dom
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing components and pages
import AddTaskModal from './pages/AddTaskModal';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import TaskList from './pages/TaskList';
import EditTaskModal from './pages/EditTaskModal';

// Main App component
const App = () => {
	return (
		// Setting up the React Router with BrowserRouter
		<Router>
			<Navbar />
			{/* Defining routes using Routes component */}
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/taskList'
					element={<TaskList />}
				/>
				<Route
					path='/addTask'
					element={<AddTaskModal />}
				/>
				<Route
					path='/editTask'
					element={<EditTaskModal />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
