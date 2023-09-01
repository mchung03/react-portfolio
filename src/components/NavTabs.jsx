function NavTabs({ currentPage, handlePageChange }) {
  	return (
        <div>
            <h1>Minhee Chung</h1>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a 
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                        About Me
                    </a>
                </li>
                <li class="nav-item">
                    <a 
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                        Contact
                    </a>
                </li>
                <li class="nav-item">
                    <a 
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                        Portfolio
                    </a>
                </li>
                <li class="nav-item">
                    <a 
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default NavTabs;