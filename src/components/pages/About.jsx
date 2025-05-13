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
                <p className="card-text">Minhee Chung graduated from the University of California, Riverside in Business Administration with a concentration in Information Systems. She also took a full stack web development bootcamp at the UC Berkeley Extension in the summer of 2023, which is where she learned to create this website from scratch!</p>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}