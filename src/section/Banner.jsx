import React from 'react';
import Ripples, { createRipples } from 'react-ripples';
import Typed from 'react-typed';
const myRipples = createRipples({
	resolution: 256,
	dropRadius: 20,
	perturbance: 0.03,
	interactive: true,
	imageUrl: null,
});

export default function Banner() {
	const typedString = ['UI/UX Designer.', 'Developer.', 'Freelancer.'];
	const option = {
		stringsElement: null,
		// typing speed
		typeSpeed: 50,
		// time before typing starts
		startDelay: 500,
		// backspacing speed
		backSpeed: 50,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 100,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: '|',
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function () {},
		// starting callback function before each string
		preStringTyped: function () {},
		//callback for every typed string
		onStringTyped: function () {},
		// callback for reset
		resetCallback: function () {},
	};

	return (
		<section
			id='main_banner'
			className=' banner_water_effect background3 overlay_one'
		>
			<div className='container h-100 '>
				<div className='row h-100 align-items-center'>
					<div className='col-md-12 col-lg-12 home-content text-left'>
						<div className='mainbanner_content'>
							<span className='pb_5 banner_title color_white'>
								I Am Austin Jackson!
							</span>
							<h1 className='cd-headline clip is-full-width text-uppercase '>
								<span className='color_white me-2'>I am a </span>

								<Typed
									strings={typedString}
									className='color_default'
									{...option}
								/>
							</h1>
							<p className='color_white mb_30'>
								Libero habitasse sollicitudin aliquet venenatis iaculis placerat
								amet ligula, eleifend nonummy enim in volutpat diam.
							</p>
							<a className='btn btn-default' href='#'>
								Download CV
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
