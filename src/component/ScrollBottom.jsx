import React from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

export default function ScrollBottom() {
	return (
		<>
			<FaArrowAltCircleUp
				className='scrollTopIcon '
				onClick={() => scroll.scrollToTop()}
			/>
		</>
	);
}
