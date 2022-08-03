import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Blogs from './page/Blogs';

export default function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/blogs' element={<Blogs />} />
		</Routes>
	);
}
