import Image from 'next/image';

const Menu = () => {
	return (
		<section className="menu">
			<div className="menu__container flex">
				<div className="menu__content content-width">
					<svg xmlns="http://www.w3.org/2000/svg" width="71" height="7">
						<g fill="none" fill-rule="evenodd">
							<path fill="#9E7F66" d="M15 3h56v1H15z" />
							<circle cx="3.5" cy="3.5" r="3" stroke="#9E7F66" />
						</g>
					</svg>
					<h2 className="text-white">A few highlights from our menu</h2>
					<p className="text-white">We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
				</div>

				<div className="menu__list">
					<div className="menu__list--items menu__flex">
						{/* <Image className="menu__image" src="/assets/homepage/salmon-desktop-tablet@2x.jpg" alt="Seared Salmon Fillet" width={128} height={96} /> */}
						<div className="menu__list--content">
							<h3 className="text-white">Seared Salmon Fillet</h3>
							<p className="text-white menu__list--info">Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
						</div>
					</div>
					<div className="menu__list--items menu__flex">
						<Image className="menu__image" src="/assets/homepage/beef-desktop-tablet@2x.jpg" alt="Rosemary Filet Mignon" width={128} height={96} />
						<div className="menu__list--content">
							<h3 className="text-white">Rosemary Filet Mignon</h3>
							<p className="text-white menu__list--info">Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
						</div>
					</div>
					<div className="menu__list--items menu__flex">
						<Image className="menu__image" src="/assets/homepage/chocolate-desktop-tablet@2x.jpg" alt="Summer Fruit Chocolate Mousse" width={128} height={96} />
						<div className="menu__list--content">
							<h3 className="text-white">Summer Fruit Chocolate Mousse</h3>
							<p className="text-white menu__list--info">Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Menu;
