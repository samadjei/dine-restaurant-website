import Image from 'next/image';

const midSection = () => {
	return (
		<>
			<section className="enjoyable">
				<div className="container flexy">
					<div className="enjoyable__image">
						<Image className="enjoyable__images" src="/assets/homepage/enjoyable-place-desktop@2x.jpg" alt="Dine logo" width={540} height={720} />
					</div>
					<div className="content-width enjoyable__content">
						<svg xmlns="http://www.w3.org/2000/svg" width="71" height="7">
							<g fill="none" fill-rule="evenodd">
								<path fill="#9E7F66" d="M15 3h56v1H15z" />
								<circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
							</g>
						</svg>
						<h2>Enjoyable place for all the family</h2>
						<p>Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</p>
					</div>
				</div>
			</section>

			<section className="locally">
				<div className="container flexi">
					<div className="content-width locally__content">
						<svg xmlns="http://www.w3.org/2000/svg" width="71" height="7">
							<g fill="none" fill-rule="evenodd">
								<path fill="#9E7F66" d="M15 3h56v1H15z" />
								<circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
							</g>
						</svg>
						<h2>The most locally sourced food</h2>
						<p>All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</p>
					</div>
					<div className="locally__image">
						<div className="locally__patterns">
							<svg xmlns="http://www.w3.org/2000/svg" width="160" height="76">
								<g fill="#9E7F66" fill-rule="evenodd">
									<path d="M0 70h160v6H0zM0 56h160v6H0zM0 42h160v6H0zM0 28h160v6H0zM0 14h160v6H0zM0 0h160v6H0z" />
								</g>
							</svg>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default midSection;
