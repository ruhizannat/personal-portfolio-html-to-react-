import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

export default function Header() {
	const elm = useRef();
	const handelScroll = (evt) => {
		const scrollValue = window.scrollY;
		if (scrollValue >= 500) {
			elm.current.classList.add('nav-scroll');
			document.querySelector('.scrollTopIcon').classList.add('visible');
		} else {
			document.querySelector('.scrollTopIcon').classList.remove('visible');
			elm.current.classList.remove('nav-scroll');
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handelScroll);
		return () => {
			window.removeEventListener('scroll', handelScroll);
		};
	}, []);
	return (
		<>
			<header className='main_nav' ref={elm}>
				<div className='container'>
					<nav
						id='navbar-example2'
						className='navbar navbar-expand-lg navbar-light w-100'
					>
						<a className='navbar-brand' href='#top'>
							<img className='nav-logo' src='images/logo/1.png' alt='logo' />
						</a>
						<button
							className='navbar-toggler'
							type='button'
							data-toggle='collapse'
							data-target='#navbarSupportedContent'
							aria-controls='navbarSupportedContent'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div
							className='collapse navbar-collapse'
							id='navbarSupportedContent'
						>
							<ul className='navbar-nav ms-auto'>
								<li className='nav-item'>
									<Link
										className='nav-link '
										to='top'
										data-scroll='top'
										spy={true}
										smooth={true}
										activeClass='active'
									>
										Home<span className='sr-only'>(current)</span>
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										className='nav-link'
										to='about'
										spy={true}
										smooth={true}
										activeClass='active'
									>
										About
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										className='nav-link'
										to='skill'
										spy={true}
										smooth={true}
										activeClass='active'
									>
										Skill
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										className='nav-link'
										to='services'
										spy={true}
										smooth={true}
										activeClass='active'
									>
										Services
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										className='nav-link'
										to='portfolio'
										spy={true}
										smooth={true}
										activeClass='active'
									>
										Portfolio
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										className='nav-link'
										to='testimonial'
										spy={true}
										smooth={true}
										activeClass='active'
									>
										Testimonial
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										className='nav-link'
										to='blog'
										spy={true}
										smooth={true}
										activeClass='active'
									>
										Blog
									</Link>
								</li>
								<li className='nav-item'>
									<Link
										className='nav-link'
										to='contact'
										spy={true}
										smooth={true}
										activeClass='active'
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
}
