export default function About() {
    return (
        <div>
        <h2 className="mt-3">About Me</h2>
        <div className="card mb-4 mt-4 mx-auto" style={{maxWidth: "1048px"}}>
        <div className="row g-0">
            <div className="col-md-4">
            <img src="../../../images/image0.jpeg" className="img-fluid rounded-start" alt="Profile Photo"></img>
            </div>
            <div className="col-md-8 card-color">
            <div className="card-body">
                <h4 className="card-title fw-semibold">Biography</h4>
                <p className="card-text">Minhee Chung is a student at the UC Berkeley Extension Fullstack Coding Bootcamp. She is also currently a student at the University of California, Riverside studying Business Administration with a concentration in Information Systems and hopes to gain more experience in the coding field.</p>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}