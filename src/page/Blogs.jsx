import React from 'react';
import Banner from './section/Banner';
import BlogPost from './section/BlogPost';
import FooterPart from './section/FooterPart';
import Navbar from './section/Navbar';

export default function Blog() {
	return (
		<>
			<Navbar />
			<Banner />
			<BlogPost />
			<FooterPart />
		</>
	);
}
