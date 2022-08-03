import React, { useState } from 'react';
import { filterData, portFolioImages } from '../imageData';

export default function Portfolio() {
	const [portfolioData, setPortfolioData] = useState(portFolioImages);
	const filterHandel = (e) => {
		const clickFilterData = e.target.dataset.filter;
		if (clickFilterData === 'all') {
			setPortfolioData(portFolioImages);
		} else {
			// filter data
			const selectedItem = portFolioImages.filter(
				(data) => data.category === clickFilterData
			);

			setPortfolioData(selectedItem);
		}
	};
	return (
		<>
			<section
				id='portfolio'
				className='py_80 bg_secondery full_row'
				name='portfolio'
			>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 col-lg-12'>
							<div className='section_title_1 text-center mx-auto pb_60 wow animated slideInUp'>
								<h2 className='title text-uppercase'>
									<span className='line_double mx-auto color_default'>
										portfolio
									</span>
									Recent Projects
								</h2>
								<span className='sub_title'>
									Interdum a etiam sagittis vehicula porta. Massa felis eros
									quam blandit nulla dolor habitant. Ullamcorper quis ornare et
									proin pellentesque.
								</span>
							</div>
						</div>
						<div className='col-md-12 col-lg-12'>
							<div className='my_portfolio' id='tab-panel'>
								<div className='row'>
									<div className='col-md-12'>
										<div className='filters mb_30 w-100 text-center'>
											{filterData.map((item, index) => {
												return (
													<ul
														key={index}
														className='filter-tabs mx-auto d-inline-block'
													>
														<li
															className=' filter'
															data-role='button'
															data-filter={item.filterCat}
															onClick={filterHandel}
														>
															{item.label}
														</li>
													</ul>
												);
											})}
										</div>
									</div>
								</div>

								<div className='mixer-container'>
									<div className='portfolio-items'>
										<div className='row'>
											{portfolioData.map((elm, index) => {
												const { imageOne, imageTwo, category } = elm;
												return (
													<div
														key={index}
														className='column mix mix_all graphic development wordpress mb_30 col-md-4 col-lg-4'
													>
														<div className='default-portfolio-item'>
															<a
																href={imageOne}
																className='venobox'
																data-gall='myGallery'
															>
																<img src={imageTwo} alt='image' />
																<div className='overlay-box'>
																	<span>
																		<i
																			className='fa fa-eye'
																			aria-hidden='true'
																		></i>
																	</span>
																	<div className='tag'>
																		<ul>
																			<li>{category}</li>
																		</ul>
																	</div>
																</div>
															</a>
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
				</div>
			</section>
		</>
	);
}
