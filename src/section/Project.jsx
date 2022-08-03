import React from 'react';
import CountUp from 'react-countup';

export default function Project() {
	return (
		<>
			<div className='experience background2 overlay_two py_60 full_row'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 col-lg-12'>
							<div className='fact-counter'>
								<div className='row'>
									<div className='col-md-4 col-lg-4'>
										<div
											className='counter count wow text-center'
											data-wow-duration='300ms'
										>
											<span className='flaticon-man-working-on-a-laptop-from-side-view'></span>
											<div className='counting_digit color_default mt_15'>
												<h2 className='count-num'>
													<CountUp start={0} end={100} duration={2.75} />
												</h2>
												<span>+</span>
											</div>
											<h3 className='color_white mt_15'>Years of Experience</h3>
										</div>
									</div>
									<div className='col-md-4 col-lg-4'>
										<div
											className='counter count wow text-center'
											data-wow-duration='300ms'
										>
											<span className='flaticon-half-time-work'></span>
											<div className='counting_digit color_default mt_15'>
												<h2 className='count-num'>
													<CountUp start={0} end={150} duration={2.75} />
												</h2>
												<span>+</span>
											</div>
											<h3 className='color_white mt_15'>Porjects Done</h3>
										</div>
									</div>
									<div className='col-md-4 col-lg-4'>
										<div
											className='counter count wow text-center'
											data-wow-duration='300ms'
										>
											<span className='flaticon-happy'></span>
											<div className='counting_digit color_default mt_15'>
												<h2 className='count-num'>
													<CountUp start={0} end={200} duration={2.75} />
												</h2>
												<span>+</span>
											</div>
											<h3 className='color_white mt_15'>Happy Clients</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
