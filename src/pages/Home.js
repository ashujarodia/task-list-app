// Importing React and Link from react-router-dom
import React from 'react';
import { Link } from 'react-router-dom';

// Home component representing the landing page
const Home = () => {
	return (
		<div className='mt-20 mx-3'>
			{/* Header section with welcome message */}
			<div className='flex  flex-col items-center'>
				<h1 className='uppercase text-3xl font-bold text-red-600 tracking-widest'>Welcome to TaskPlus </h1>
				<span className='mt-6 text-xl font-semibold text tracking-wider text-gray-700'>Here you can save your tasks, so that you can complete them on time. </span>
			</div>

			{/* Button links for adding a new task and going to the task list */}
			<div className='mt-16 flex justify-center gap-4'>
				{/* Link to add a new task */}
				<Link
					className='border px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md tracking-wider  uppercase font-semibold text-gray-900'
					to='/addTask'
				>
					Add new task
				</Link>

				{/* Link to go to the task list */}
				<Link
					className='border px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md tracking-wider  uppercase font-semibold text-gray-900'
					to='/taskList'
				>
					Go to Your Task List
				</Link>
			</div>
		</div>
	);
};

export default Home;
