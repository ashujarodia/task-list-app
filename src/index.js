import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing global styles and the main App component
import './index.css';
import App from './App';

// Importing utility for reporting web vitals
import reportWebVitals from './reportWebVitals';

// Importing Redux store and Provider for state management
import { store } from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component wrapped in a Redux Provider
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);

reportWebVitals();
