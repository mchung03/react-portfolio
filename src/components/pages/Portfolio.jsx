export default function Portfolio() {
	return (
		<div>
			<h3 className='mt-3'>A highlight of my projects!</h3>
			<div className="container">
				<div className="row row-cols-2 g-4 mt-3 mb-4">
					<div className="col">
						<div className="card">
							<img src="../../images/marketing.png" class="card-img-top" alt="MarketingPlan"></img>
							<div className="card-body">
								<h5 className="card-title">Lululemon Marketing Plan</h5>
								<p className="card-text">An extensive analysis of Lululemon's 2023 Annual Report for Marketing and Distribution Management class.</p>
								<a href="Marketing_Plan.pdf" target="_blank" className="card-link">Download PDF</a>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card">
							<img src="../../images/systems.png" class="card-img-top" alt="Systems"></img>
							<div className="card-body">
								<h5 className="card-title">Yogurtland Inventory System</h5>
								<p className="card-text">Reinvention of inventory system using data flow diagrams and entity-relationship models for Systems Analysis and Design class.</p>
								<a href="Systems_Design.pdf" target="_blank" className="card-link">Download PDF</a>
							</div>
						</div>
					</div>
				</div>

				<div className="row row-cols-2 g-4 mb-4">
					<div className="col">
						<div className="card">
							<img src="../../images/catfish.PNG" class="card-img-top" alt="CatFish"></img>
							<div className="card-body">
								<h5 className="card-title">CatFish</h5>
								<p className="card-text">Made with HTML, CSS, JavaScript, and APIs, fish animal crossing fish to buy cat facts from the store!</p>
								<a href="https://kaylaasana.github.io/CatFish/" target="_blank" className="card-link">Website</a>
								<a href="https://github.com/kaylaasana/CatFish.git" target="_blank" className="card-link">GitHub</a>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card">
							<img src="../../images/weather.PNG" class="card-img-top" alt="Weather Forecast"></img>
							<div className="card-body">
								<h5 className="card-title">Weather Forecast</h5>
								<p className="card-text">Using the OpenWeather API, search for a city to find out the current and 5 day forecast!</p>
								<a href="https://mchung03.github.io/weather-forecast-api/" target="_blank" className="card-link">Website</a>
								<a href="https://github.com/mchung03/weather-forecast-api.git" target="_blank" className="card-link">GitHub</a>
							</div>
						</div>
					</div>
				</div>

				<div className="row row-cols-2 g-4">
					<div className="col">
						<div className="card">
							<img src="../../images/quiz.PNG" class="card-img-top" alt="Coding Quiz"></img>
							<div className="card-body">
								<h5 className="card-title">Coding Quiz</h5>
								<p className="card-text">Made with HTML, CSS, JavaScript, take this 5 question quiz on coding topics and add your initials to the leaderboard!</p>
								<a href="https://mchung03.github.io/coding-timer-quiz/" target="_blank" className="card-link">Website</a>
								<a href="https://github.com/mchung03/coding-timer-quiz" target="_blank" className="card-link">GitHub</a>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card">
							<img src="../../images/calendar.PNG" class="card-img-top" alt="Calendar"></img>
							<div className="card-body">
								<h5 className="card-title">Calendar</h5>
								<p className="card-text">Using JavaScript, this calendar saves your to-dos by the hour and the color changes based on the time of day!</p>
								<a href="https://mchung03.github.io/challenge-5-calendar" target="_blank" className="card-link">Website</a>
								<a href="https://github.com/mchung03/challenge-5-calendar.git" target="_blank" className="card-link">GitHub</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}