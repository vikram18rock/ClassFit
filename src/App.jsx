import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
            <Header />
            <div>
                <Course/>
                <TimeTable/>
                <Downloader/>
            </div>
            <Footer/>
		</>
	)
}

export default App
