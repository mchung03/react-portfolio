export default function Portfolio() {
	return (
		<div>
			<h3 className='mt-3'>A highlight of my projects!</h3>
			<div className="container">
				<div className="row row-cols-2 g-4 mt-3 mb-4">
					<div className="col">
						<div className="card">
							<img src="../../images/widgetwizard.PNG" class="card-img-top" alt="WidgetWizard"></img>
							<div className="card-body">
								<h5 className="card-title">WidgetWizard</h5>
								<p className="card-text">Customize your own dashboard with draggable widgets created with data from different APIs!</p>
								<a href="https://tranquil-tor-75275-57652b10176e.herokuapp.com/" target="_blank" className="card-link">Website</a>
								<a href="https://github.com/Popiuy/WidgetWizard.git" target="_blank" className="card-link">GitHub</a>
							</div>
						</div>
					</div>
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
				</div>

				<div className="row row-cols-2 g-4 mb-4">
					<div className="col">
						<div className="card">
							<img src="../../images/reel.PNG" class="card-img-top" alt="Reel Reviews"></img>
							<div className="card-body">
								<h5 className="card-title">Reel Reviews</h5>
								<p className="card-text">Fetching data from the OMDB API, search for your favorite movies and create reviews with an authorized account!</p>
								<a href="https://cinemaserver-7dafae9cd971.herokuapp.com/" target="_blank" className="card-link">Website</a>
								<a href="https://github.com/mattschneble/ReelReviews.git" target="_blank" className="card-link">GitHub</a>
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