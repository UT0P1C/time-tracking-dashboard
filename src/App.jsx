import './App.css';

import Profile from '../components/profile/Profile';
import Card from '../components/Card/Card';

function App() {

	return (
	<div className="app">

		<div className="tracker-container">
			<Profile/>
			<div className="cards">
				<Card
				type="work"
				icon="../../public/images/icon-work.svg"
				/>
				<Card
				type="play"
				icon="../../public/images/icon-play.svg"
				/>
				<Card
				type="study"
				icon="../../public/images/icon-study.svg"
				/>
				<Card
				type="exercise"
				icon="../../public/images/icon-exercise.svg"
				/>
				<Card
				type="social"
				icon="../../public/images/icon-social.svg"
				/>
				<Card
				type="self-care"
				icon="../../public/images/icon-self-care.svg"
				/>
			</div>

		</div>

		<footer class="attribution">
			Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
			Coded by <a href="#">Vinicius</a>
		</footer>
	</div>
	)
}

export default App
