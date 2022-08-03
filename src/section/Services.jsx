import React from 'react';
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';

import 'owl.carousel/dist/assets/owl.theme.default.css';

const servicesItem = [
	{
		number: '01.',
		title: 'Web Design',

		description:
			'Proin a ullamcorper et primis lobortis laoreetsenectus. Vitae dignissim sollicitudin eleifend cursustempus curabitur posuere nam arcu platea sodales.',
	},
	{
		number: '02.',
		title: 'Web Development',

		description:
			'Proin a ullamcorper et primis lobortis laoreetsenectus. Vitae dignissim sollicitudin eleifend cursustempus curabitur posuere nam arcu platea sodales.',
	},
	{
		number: '03.',
		title: 'Wordpress',

		description:
			'Proin a ullamcorper et primis lobortis laoreetsenectus. Vitae dignissim sollicitudin eleifend cursustempus curabitur posuere nam arcu platea sodales.',
	},
	{
		number: '04.',
		title: 'Graghic Design',

		description:
			'Proin a ullamcorper et primis lobortis laoreetsenectus. Vitae dignissim sollicitudin eleifend cursustempus curabitur posuere nam arcu platea sodales.',
	},
	{
		number: '05.',
		title: 'Branding',

		description:
			'Proin a ullamcorper et primis lobortis laoreetsenectus. Vitae dignissim sollicitudin eleifend cursustempus curabitur posuere nam arcu platea sodales.',
	},
	{
		number: '06.',
		title: 'Opencart',

		description:
			'Proin a ullamcorper et primis lobortis laoreetsenectus. Vitae dignissim sollicitudin eleifend cursustempus curabitur posuere nam arcu platea sodales.',
	},
]
export default function Services() {
	return (
		<>
			<section
				id='services'
				name='services'
				className='py_80 full_row bg_white'
			>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 col-lg-12'>
							<div className='section_title_1 text-center mx-auto pb_60 wow animated slideInUp'>
								<h2 className='title text-uppercase'>
									<span className='line_double mx-auto color_default'>
										services
									</span>
									What i do
								</h2>
								<span className='sub_title'>
									Interdum a etiam sagittis vehicula porta. Massa felis eros
									quam blandit nulla dolor habitant. Ullamcorper quis ornare et
									proin pellentesque.
								</span>
							</div>
						</div>

						<div className='services_item1'>
							<div className='row'>
								<div className='col-md-12 col-lg-12'>
									<div className='row'>
										{servicesItem.map((item, index) => {
											const { number, title, description } = item;
											return (
												<div className='col-md-6 col-lg-4 ' key={index}>
													<div className='service_two  text-center pt_15 mb_30 wow animated slideInUp '>
														<div className='srv_item_number color_lightgray'>
															<strong>{number}</strong>
														</div>
														<h3 className='p_20 text-uppercase color_primary'>
															{title}
														</h3>
														<div className='srv_icon color_white'>
															<span className='flaticon-website-design-symbol'></span>
														</div>
														<p>{description}</p>
													</div>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
