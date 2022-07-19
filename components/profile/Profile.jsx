import "./style.css";

function Profile() {
	return (
		<div className="profile">

			<div className="profile-container">

				<div className="profile-header">
					<img src="https://github.com/UT0P1C.png" alt="profile picture" />

					<p>Report for:</p>
					<p id="name">Vinicius Gomes</p>
				</div>
				<a href="#">Daily</a>
				<a href="#">Weekly</a>
				<a href="#">Monthly</a>
			</div>


		</div>
	)
}

export default Profile