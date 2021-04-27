import Hero from '../components/home/hero';
import Menu from '../components/home/menu';
import MidSection from '../components/home/MidSection';

const HomePage = () => {
	return (
		<main className="main">
			<Hero />
			<MidSection />
			<Menu />
		</main>
	);
};

export default HomePage;
