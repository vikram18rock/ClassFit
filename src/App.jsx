import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Course from './components/Course.jsx';
import TimeTable from './components/TimeTable.jsx';
import Downloader from './components/Downloader.jsx';

function App() {

	return (
		<div className='App'>
            <Header />
            <div className='container'>
                <Course />
                <TimeTable />
            </div>
            <Downloader />
            <Footer />
		</div>
	)
}

export default App
