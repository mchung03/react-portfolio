import { useState } from "react";
import NavTabs from './NavTabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

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
            <header class="ms-3">
                <h2>Minhee Chung</h2>
            </header>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            <main className="mx-3">{renderPage()}</main>
            <footer class="mt-3 mb-4 ms-5">
                <h5>Links:</h5>
                <a href="https://www.linkedin.com/in/minhee-chung/" target="_blank"><i class="fa-brands fa-github fa-2xl me-3"></i></a>
                <a href="https://github.com/mchung03" target="_blank"><i class="fa-brands fa-linkedin fa-2xl me-3"></i></a>
                <a href="https://medium.com/@minhee.chung14" target="_blank"><i class="fa-brands fa-medium fa-2xl"></i></a>
            </footer>
            
        </div>
    );
}