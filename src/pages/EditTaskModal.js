// Importing necessary dependencies from React and external libraries
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask } from '../store/taskSlice';
import { FaCheck } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Component for editing a task
const EditTaskModal = () => {
	// Getting the task data from the current location
	const location = useLocation();
	const task = location.state?.item;

	const dispatch = useDispatch();
	const [showModal, setShowModal] = useState(true);

	// State variables for managing form inputs
	const [name, setName] = useState(task.name);
	const [desc, setDesc] = useState(task.desc);
	const [priority, setPriority] = useState(task.priority);
	const [dueDate, setDueDate] = useState(task.dueDate);

	// Handling form submission to update the task
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateTask({ id: task.id, name, desc, priority }));
		setName('');
		setDesc('');
		setPriority('Low');
		setDueDate('');
		setShowModal(false);
	};

	return (
		<div className='mx-auto w-2/3 mt-10'>
			{showModal === true ? (
				// Form for editing a task
				<>
					<h1 className='text-lg my-6 font-bold text-gray-700 uppercase tracking-widest text-center border-b-2 pb-4'>Edit Your Task here</h1>
					<div className='p-6 w-full rounded-md border-2'>
						<form onSubmit={handleSubmit}>
							{/* Input for task title */}
							<label className='block mt-3 text-sm font-semibold tracking-widest text-gray-700 '>Title</label>
							<input
								type='text'
								value={name}
								onChange={(e) => setName(e.target.value)}
								className='mt-1 block w-full h-10 bg-transparent border-b border-gray-800 px-3'
								required
							/>

							{/* Input for task description */}
							<label className='block mt-10 font-semibold text-gray-700 tracking-widest'> Description</label>
							<textarea
								value={desc}
								onChange={(e) => setDesc(e.target.value)}
								className='mt-1 block w-full h-10 bg-transparent border-b border-gray-800 px-3'
								required
							/>

							{/* Dropdown for task priority */}
							<label className='flex flex-col mt-10 font-semibold tracking-widest text-gray-700'>
								Priority
								<span className='text-xs py-2 text-gray-400'>Add priority so that you can</span>
							</label>
							<select
								value={priority}
								onChange={(e) => setPriority(e.target.value)}
								className='mt-1 block w-full h-10 bg-transparent border-b border-gray-800 px-3'
								required
							>
								<option value='Low'>Low</option>
								<option value='Medium'>Medium</option>
								<option value='High'>High</option>
							</select>

							{/* Section for selecting due date */}
							<div className='flex items-center mt-10 gap-5'>
								<label className='block  font-semibold text-gray-700 tracking-widest'> Due Date</label>
								<DatePicker
									className='border border-black p-1'
									selected={dueDate}
									onChange={(date) => setDueDate(date)}
								/>
							</div>

							{/* Button to submit the form for updating the task */}
							<button
								type='submit'
								className='border mt-10 w-full py-2 bg-gray-200 hover:bg-gray-300 rounded-md tracking-wider  uppercase font-semibold text-gray-900'
							>
								Update Task
							</button>
						</form>
					</div>
				</>
			) : (
				// Confirmation message after successfully updating a task
				<div className=''>
					<h1 className='text-xl my-6 font-bold text-gray-700  tracking-widest text-center border-b-2 pb-4 flex items-center justify-center gap-3'>
						<span>Task Updated Successfully </span>
						<FaCheck size={16} />
					</h1>
					{/* Options for the user after updating a task */}
					<div className='mt-16 flex justify-center gap-4'>
						{/* Button to add a new task */}
						<button
							className='border px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md tracking-wider  uppercase font-semibold text-gray-900 text-sm'
							onClick={() => setShowModal(true)}
						>
							Add New Task
						</button>

						{/* Link to view the list of tasks */}
						<Link
							className='border px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md tracking-wider  uppercase font-semibold text-gray-900 text-sm'
							to='/taskList'
						>
							View Your Tasks
						</Link>

						{/* Link to go back to the home page */}
						<Link
							className='border px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md tracking-wider  uppercase font-semibold text-gray-900 text-sm'
							to='/'
						>
							Go to Home
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

// Exporting the EditTaskModal component as the default export
export default EditTaskModal;
