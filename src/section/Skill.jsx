import React from 'react';
import SkillBar from 'react-skillbars';

export default function Skill() {
	const skills = [
		{ type: 'HTML', level: 100 },
		{ type: 'CSS', level: 85 },
		{ type: 'JQuery', level: 90 },
		{ type: 'PHP', level: 95 },
		{ type: 'Wordpress', level: 80 },
	];
	const colors = {
		bar: '#FFB32F',
		title: {
			text: '#000',
			background: '#efefef',
		},
	};
	return (
		<>
			<section id='skill' name='skill' className='py_80 bg_secondery full_row'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 col-lg-12'>
							<div className='section_title_1 text-center mx-auto pb_60 wow animated slideInUp'>
								<h2 className='title text-uppercase'>
									<span className='line_double mx-auto color_default'>
										skill
									</span>
									Design skill
								</h2>
								<span className='sub_title'>
									Interdum a etiam sagittis vehicula porta. Massa felis eros
									quam blandit nulla dolor habitant. Ullamcorper quis ornare et
									proin pellentesque.
								</span>
							</div>
						</div>
					</div>
					<div className='my_skill'>
						<div className='row'>
							<div className='col-md-12 col-lg-6'>
								<div className='about_myskill color_secondery wow animated slideInLeft'>
									<h2 className='color_primary'>
										Some talk about my professional design skill
									</h2>
									<p className='pt_15'>
										At mattis condimentum leo cubilia dictumst purus cubilia
										nisl quisque lacus ultricies proin massa fermentum placerat
										sociosqu ornare felis ultricies taciti mauris. Tempor mi,
										cum a condimentum commodo bibendum risus mauris natoque
										molestie tellus. In iaculis ad augue gravida posuere.
									</p>
									<p className='pt_15'>
										Lectus neque fames lacinia magnis primis. Dictumst torquent
										dictumst. Bibendum et rutrum feugiat fames interdum purus
										feugiat praesent Nunc vivamus habitant nam ultricies est.
										Massa amet cubilia, vitae nonummy nisl. Rutrum mus velit
										vivamus sapien est.
									</p>
								</div>
							</div>
							<div className='col-md-12 col-lg-6'>
								<SkillBar
									skills={skills}
									colors={colors}
									animationDelay={1000}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
