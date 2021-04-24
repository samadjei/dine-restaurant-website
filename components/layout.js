import Head from 'next/head';
// import Footer from '../components/footer';
const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>Frontend Mentor | Dine Website Challenge</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" type="image/png" sizes="32x32" href="../public/images/favicon-32x32.png"></link>
				<link href="https://fonts.googleapis.com/css2?family=Spartan:wght@300;600&display=swap" rel="stylesheet"></link>
			</Head>
			<div>
				{/* <Footer /> */}
				{children}
			</div>
		</>
	);
};

export default Layout;
