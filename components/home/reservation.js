import { Button } from '../button';
import Link from 'next/link';

const Reservation = () => {
	return (
		<section className="reservation">
			<div className="container reservation__flex">
				<div className="reservation__title">
					<h2 className="reservation__title">Ready to make a reservation?</h2>
				</div>
				<Link href="/signup">
					<Button className="events__btn" buttonStyle="btn--dark-normal" buttonSize="btn--desktop">
						Book a Table
					</Button>
				</Link>
			</div>
		</section>
	);
};

export default Reservation;
