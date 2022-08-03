import React from 'react';
import { Link } from 'react-router-dom';

import { blogData } from '../imageData';

export default function Blog() {
	return (
		<>
			<section id='blog' name='blog' className='py_80 bg_secondery full_row'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 col-lg-12'>
							<div className='section_title_1 text-center mx-auto pb_60 wow animated slideInUp'>
								<h2 className='title text-uppercase'>
									<span className='line_double mx-auto color_default'>
										blog
									</span>
									What’s News
								</h2>
								<span className='sub_title'>
									Interdum a etiam sagittis vehicula porta. Massa felis eros
									quam blandit nulla dolor habitant. Ullamcorper quis ornare et
									proin pellentesque.
								</span>
							</div>
						</div>
						<div className='col-md-12 col-lg-12'>
							<div className='blog_grid_1 wow animated slideInUp'>
								<div className='row'>
									{blogData.map((data, index) => {
										const {
											number,
											image,
											heading,
											description,
											image2,
											text,
											title,
										} = data;
										return (
											<div className='col-md-12 col-lg-4' key={index}>
												<div className='blog_item'>
													<div className='comments'>
														<i className='fa fa-comment' aria-hidden='true'></i>
														<span className='color_white'>{number}</span>
													</div>
													<div className='blog_img overlay_one'>
														<img src={image} alt='image' />
													</div>
													<div className='blog_content bg_white color_secondery'>
														<div className='blog_title'>
															<h5
																className='color_primary'
																href='blog-details.html'
															>
																{' '}
																{heading}
															</h5>
														</div>
														<p className='mt_15 mb_30'>{description}</p>

														<div className='admin'>
															<img src={image2} alt='image' />
															<span className='color_white'>{text}</span>
														</div>
														<div className='date color_primary'>{title}</div>
													</div>
												</div>
											</div>
										);
									})}
								</div>
								<div className='mx-auto text-center mt_60'>
									<Link
										to='/blogs'
										className='btn btn-default'
										href='blog.html'
									>
										View Blog
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
