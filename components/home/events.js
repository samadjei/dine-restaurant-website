import Image from 'next/image';
import { Button } from '../button';
import Link from 'next/link';

const Events = () => {
	return (
		<section className="events">
			<div className="container events__flex">
				<div className="events__image">
					<Image src="/assets/homepage/family-gathering-desktop@2x.jpg" alt="Seared Salmon Fillet" width={540} height={600} />
					<div className="events__patterns">
						<svg xmlns="http://www.w3.org/2000/svg" width="160" height="76">
							<g fill="#9E7F66" fill-rule="evenodd">
								<path d="M0 70h160v6H0zM0 56h160v6H0zM0 42h160v6H0zM0 28h160v6H0zM0 14h160v6H0zM0 0h160v6H0z" />
							</g>
						</svg>
					</div>
				</div>
				<div className="events__content content-width">
					<h2>Family Gathering</h2>
					<p>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
					<Link href="/signup">
						<Button className="events__btn" buttonStyle="btn--dark-normal" buttonSize="btn--desktop">
							Book a Table
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Events;
