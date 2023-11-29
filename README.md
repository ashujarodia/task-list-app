# TaskPlus

TaskPlus is a React-based task management app with Redux state management.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Redux Store](#redux-store)
- [Components](#components)
- [Styling](#styling)
- [Contributing](#contributing)
- [License](#license)

## Overview

TaskPlus is a simple task management application built using React and Redux. It includes features for adding, editing, and deleting tasks, as well as marking tasks as completed.

## Getting Started

1. Clone the repository:

      git clone https://github.com/ashujarodia/taskplus.git

      ```

      ```

2. Change into the project directory:
   cd TaskPlus

3. Install dependencies:
   npm install

4.Run the application:
npm start

The app will be accessible at http://localhost:3000/.

### Project Structure

-src/: Source code of the React application.

    - components/: Reusable React components.
    - pages/: React components for different pages.
    - store/: Redux store configuration and taskSlice.
    - styles/: CSS styles for the application.

- public/: Public assets and HTML template.

### Redux Store

The state management for tasks is handled using Redux Toolkit. The taskSlice.js file contains the reducer, actions, and initial state for managing tasks. The Redux store is configured in store.js.

### Components

- Navbar: Navigation bar component displayed at the top.
- Home: Home page component providing a welcome message and navigation links.
- TaskList: Component displaying the list of tasks.
- AddTaskModal: Modal component for adding new tasks.
- EditTaskModal: Modal component for editing existing tasks.

### Styling

Styling is done using inline styles and Tailwind CSS classes. The styles/ directory contains CSS files for styling.
