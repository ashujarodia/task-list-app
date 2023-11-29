// Importing React icons and hooks from react-redux and react-router-dom
import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { FaCheckCircle } from 'react-icons/fa';
import { deleteTask, toggleTaskCompleted } from '../store/taskSlice';
import { Link, useNavigate } from 'react-router-dom';

// Component for displaying the list of tasks
const TaskList = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	// Fetching tasks from the Redux store
	const tasks = useSelector((state) => state.task.tasks);

	return (
		<div className='flex flex-col items-center h-screen pt-4 mx-3'>
			{/* Checking if there are tasks to display */}
			{tasks.length ? (
				<>
					{/* Header for the list of tasks */}
					<div className='text-lg my-6 font-bold text-gray-700 uppercase tracking-widest text-center border-b-2 pb-4'>
						<h1>Your Tasks</h1>
					</div>

					<div className='w-full'>
						{/* List of tasks */}
						<ul className='mt-8 mx-3 relative'>
							{/* Table header for task attributes */}
							<li className='w-full flex gap-4 py-2 border-b-2 border-gray-400'>
								<div className='w-1/6'></div>
								<div className='w-1/4 text-center'>
									<span className='uppercase font-bold text-gray-800 tracking-widest text-sm'>Title</span>
								</div>
								<div className='w-1/4 text-center'>
									<span className='uppercase font-bold text-gray-800 tracking-widest text-sm'>Description</span>
								</div>
								<div className='w-1/4 text-center'>
									<span className='uppercase font-bold text-gray-800 tracking-widest text-sm'>Priority</span>
								</div>
								<div className='w-1/4 text-center'>
									<span className='uppercase font-bold text-gray-800 tracking-widest text-sm'>Due Date</span>
								</div>
								<div className='w-1/4'></div>
							</li>

							{/* Mapping through tasks to display each task */}
							{tasks?.map((item) => {
								const dueDate = item.dueDate;

								// Create a Date object from the given string
								const originalDate = new Date(dueDate);

								// Define options for formatting the date
								const options = { day: '2-digit', month: '2-digit', year: 'numeric' };

								// Format the date using toLocaleDateString
								const formattedDate = originalDate.toLocaleDateString('en-GB', options);

								return (
									<li
										className='w-full flex mt-3 border-2 gap-4 h-16'
										key={item.id}
									>
										{/* Checkbox or check circle for task completion status */}
										<div className='w-1/6 flex items-center justify-center'>
											<span className=''>
												{item.completed === true ? (
													<FaCheckCircle
														onClick={() => dispatch(toggleTaskCompleted(item.id))}
														size={24}
														cursor='pointer'
														className='text-green-400  '
													/>
												) : (
													<button
														onClick={() => dispatch(toggleTaskCompleted(item.id))}
														className='bg-white rounded-full h-5 w-5  border-red-400 border-2 cursor-pointer'
													/>
												)}
											</span>
										</div>

										{/* Task attributes */}
										<div className={`w-1/4 flex items-center justify-center ${item.completed ? 'line-through' : ''}`}>
											<span className='font-bold text-lg'>{item.name}</span>
										</div>
										<div className={`w-1/4 flex items-center justify-center ${item.completed ? 'line-through' : ''}`}>
											<span>{item.desc}</span>
										</div>
										<div className={`w-1/4 flex items-center justify-center ${item.completed ? 'line-through' : ''}`}>
											<span>{item.priority}</span>
										</div>
										<div className={`w-1/4 flex items-center justify-center ${item.completed ? 'line-through' : ''}`}>
											<span>{formattedDate}</span>
										</div>

										{/* ICONS for editing and deleting tasks */}
										<div className='w-1/4 flex items-center justify-center gap-6 text-gray-600'>
											{/* Edit task icon */}
											<FaEdit
												size={20}
												cursor='pointer'
												onClick={() => {
													try {
														// Navigate to the edit task page with task data
														navigate('/editTask', { state: { item } });
													} catch (error) {
														console.log(error);
													}
												}}
											/>
											{/* Delete task icon */}
											<MdOutlineDelete
												size={20}
												onClick={() => dispatch(deleteTask(item.id))}
												cursor='pointer'
											/>
										</div>
									</li>
								);
							})}
						</ul>

						{/* Buttons for adding a new task */}
						<div className='mt-6 flex justify-center gap-4'>
							{/* Link to add a new task */}
							<Link
								className='border px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md tracking-wider  uppercase font-semibold text-gray-900'
								to='/addTask'
							>
								Add new task
							</Link>
						</div>
					</div>
				</>
			) : (
				// Displayed when there are no tasks
				<div className='mt-10'>
					<h1 className='font-semibold text-gray-700 tracking-wide text-xl'>Oh, you haven't added any task yet.</h1>
					{/* Button to add a new task */}
					<div className='mt-6 flex justify-center gap-4'>
						<Link
							className='border px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md tracking-wider  uppercase font-semibold text-gray-900'
							to='/addTask'
						>
							Add new task
						</Link>{' '}
					</div>
				</div>
			)}
		</div>
	);
};

// Exporting the TaskList component as the default export
export default TaskList;
