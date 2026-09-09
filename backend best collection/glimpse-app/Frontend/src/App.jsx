import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './pages/Create.jsx';
import Posts from './pages/Posts.jsx';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Posts />} />
				<Route path="/create" element={<Create />} />
			</Routes>
		</BrowserRouter>
	);
}
