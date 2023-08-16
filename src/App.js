import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navigation from './components/nav/nav.component';
import About from './routes/About/about.component';
import Dashboard from './routes/Dashboard/dashboard.component';
import Home from './routes/Home/home.component';
import Stock from './routes/Stock/stock.component';

import { AnimatePresence } from 'framer-motion';
import StickerMarkee from './components/sticker-markee/sticker-markee.component';

function App() {
	return (
		<div className='App h-full'>
			<Navigation />
			<StickerMarkee />
			<AnimatePresence>
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/stocks' element={<Dashboard />} />
					<Route path='/stocks/:symbol' element={<Stock />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
