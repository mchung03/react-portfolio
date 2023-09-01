import { useState } from "react";
import NavTabs from './NavTabs';
import Header from './pages/Header'
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './pages/Footer'
import '../../public/css/styles.css'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        switch(currentPage) {
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            case 'Portfolio':
                return <Portfolio />;
            default:
                return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header />
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            <main className="mx-3 main-color">
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
}