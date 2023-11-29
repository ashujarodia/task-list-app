import React from 'react';
import { MdNoteAlt } from 'react-icons/md';
import { Link } from 'react-router-dom';

// Navbar component representing the application header
const Navbar = () => {
	return (
		// Container for the Navbar with specified height, width, and background color
		<div className='h-16 w-full bg-gray-200 text-extra-light flex'>
			{/* Centering content within the Navbar */}
			<div className='flex justify-center items-center w-full'>
				{/* Link to the home page with application  name */}
				<Link
					to='/'
					className='flex justify-center items-center gap-3 text-gray-800'
				>
					<MdNoteAlt size={28} />

					<h1 className='font-semibold text-xl uppercase tracking-widest'>TaskPlus</h1>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
