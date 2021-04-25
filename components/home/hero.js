import Image from 'next/image';
import { Button } from '../button';
import Link from 'next/link';

const Hero = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<nav className="logo">
						<Image src="/logo.svg" alt="Dine logo" width={103} height={40} />
					</nav>
					<div className="hero">
						<h1 className="hero--title">Exquisite dining since 1989</h1>

						<p className="hero--info">Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>

						<Link href="/signup">
							<Button className="btn" buttonStyle="btn--dark-normal" buttonSize="btn--desktop">
								Book a Table
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Hero;
