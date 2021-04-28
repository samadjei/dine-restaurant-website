import Image from 'next/image';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__inner">
					<Image src="/logo.svg" alt="Dine logo" width={103} height={40} />
					<div className="footer__location">
						<p>Marthwaite, Sedbergh Cumbria</p>
						<p>+00 44 123 4567</p>
					</div>
					<div className="footer__times">
						<p>Open Times</p>
						<p>Mon - Fri: 09:00 AM - 10:00 PM</p>
						<p>Sat - Sun: 09:00 AM - 11:30 PM</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
