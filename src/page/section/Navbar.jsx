import React from 'react';

export default function Navbar() {
	return (
		<header className='main_nav'>
			<div className='container'>
				<nav className='navbar navbar-expand-lg navbar-light w-100'>
					<a className='navbar-brand p_0' href='#top'>
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
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav ml-auto'>
							<li className='nav-item'>
								<a className='nav-link' href='index-5.html#top'>
									Home
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='index-5.html#about'>
									About
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='index-5.html#skill'>
									Skill
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='index-5.html#services'>
									Services
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='index-5.html#portfolio'>
									Portfolio
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='index-5.html#testimonial'>
									Testimonial
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='index-5.html#blog'>
									Blog
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='index-5.html#contact'>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	);
}
