export default function Resume() {
    return(
        <div>
            <div>
                {/* how do you link a pdf */}
                <a href = "Chung_Minhee_Resume.pdf" download = "file">  
                <b> Download Resume </b>  
                </a>  
            </div>
            <div class="accordion" id="accordionExample">
            <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Code-Related Skills
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <pre>
                    - HTML/CSS/JavaScript
                    - Web APIs
                    - Node.js 
                    - Express.js 
                    - React.js
                    - MySQL 
                    - NoSQL 
                    - MVC
                    </pre>
                </div>
            </div>
            </div>
            <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Other Technical Skills
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <pre>
                        - Project Management 
                        - Bilingual (English, Korean)
                        - Expert in Google Suite
                        - Front-End Development 
                        - Back-End Development
                        - Wireframing 
                    </pre>
                </div>
            </div>
            </div>
            <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Soft Skills
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <pre>
                        - Problem Solving 
                        - Time Management 
                        - Attention to Detail 
                        - Teamwork 
                        - Communication 
                        - Patience
                        - Openness to Criticism 
                        - Stress Management 
                    </pre>
                </div>
            </div>
            </div>
        </div>
      </div>
    )
}