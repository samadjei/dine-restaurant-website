import Hero from '../components/home/hero';
import Menu from '../components/home/menu';
import MidSection from '../components/home/MidSection';
import Events from '../components/home/events';
import Reservation from '../components/home/reservation';

const HomePage = () => {
	return (
		<main className="main">
			<Hero />
			<MidSection />
			<Menu />
			<Events />
			{/* <Reservation /> */}
		</main>
	);
};

export default HomePage;
