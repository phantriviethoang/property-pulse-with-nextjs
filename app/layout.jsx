import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import "@/assets/styles/globals.css";

export const metadata = {
	title: "PropertyPulse | Find The Perfect Rental",
	description: "Find your dream rental property",
	keywords: "rental, find rentals, find properties",
};

const MainLayout = ({ children }) => {
	return (
		<AuthProvider>
			<html lang="en">
				<body className="flex min-h-screen flex-col">
					<Navbar />
					<main className="flex-1">{children}</main>
					<Footer />
				</body>
			</html>
		</AuthProvider>
	);
};

export default MainLayout;
