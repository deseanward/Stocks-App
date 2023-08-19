import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/nav/nav.component';
import About from './routes/About/about.component';
import Home from './routes/Home/home.component';
import Stock from './routes/Stock/stock.component';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';
import { AnimatePresence } from 'framer-motion';

function App() {
	return (
		<div className='App h-full'>
		<ScrollToTop />
			<Navigation />
			<AnimatePresence>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/stocks' element={<Home />} />
					<Route path='/stocks/:symbol' element={<Stock />} />
					<Route path='/about' element={<About />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
