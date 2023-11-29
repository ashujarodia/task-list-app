// Importing necessary dependencies from React and external libraries
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';
import { v4 as uuidv4 } from 'uuid';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Component for adding a new task
const AddTaskForm = () => {
	const dispatch = useDispatch();

	// State variables for managing form inputs and modal visibility
	const [showModal, setShowModal] = useState(true);
	const [name, setName] = useState('');
	const [desc, setDesc] = useState('');
	const [priority, setPriority] = useState('Low');
	const [dueDate, setDueDate] = useState(new Date());

	// Handling form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTask({ name, desc, priority, dueDate, completed: false, id: uuidv4() }));
		setName('');
		setDesc('');
		setPriority('Low');
		setShowModal(false);
	};

	return (
		<div className='mx-auto w-2/3 my-10'>
			{showModal === true ? (
				// Form for adding a new task
				<>
					<h1 className='text-lg my-6 font-bold text-gray-700 uppercase tracking-widest text-center border-b-2 pb-4'>Add Your Task here</h1>
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
								<span className='text-xs py-2 tracking-wide  text-gray-400'>
									Add priority so that you can complete tasks according to their priority.
								</span>
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

							{/* Button to submit the form */}
							<button
								type='submit'
								className='border mt-10 w-full py-2 bg-gray-200 hover:bg-gray-300 rounded-md tracking-wider  uppercase font-semibold text-gray-900'
							>
								Add Task
							</button>
						</form>
					</div>
				</>
			) : (
				// Confirmation message after successfully adding a task
				<div className='w-full'>
					<h1 className='text-xl my-6 font-bold text-gray-700  tracking-widest text-center border-b-2 pb-4 flex items-center justify-center gap-3'>
						<span>Task Added Successfully </span>
						<FaCheck size={16} />
					</h1>
					{/* Options for the user after adding a task */}
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

export default AddTaskForm;
