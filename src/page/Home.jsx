import React from 'react';

import Layout from '../component/layout/Layout';
import ScrollBottom from '../component/ScrollBottom';
import About from '../section/About';
import Banner from '../section/Banner';
import Blog from '../section/Blog';
import Contact from '../section/Contact';
import Portfolio from '../section/Portfolio';
import Project from '../section/Project';
import Services from '../section/Services';
import Skill from '../section/Skill';
import Testimonial from '../section/Testimonial';

export default function Home() {
	return (
		<>
			<Layout>
				<Banner />
				<About />
				<Skill />
				<Project />
				<Services />
				<Portfolio />
				<Testimonial />
				<Blog />
				<Contact />
				<ScrollBottom />
			</Layout>
		</>
	);
}
