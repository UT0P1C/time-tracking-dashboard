import "./style.css";

function Card(props) {
	return (
		<div className='card'>
			<div className="card-container">
				<div className="header" id={props.type}>
					<img src={props.icon} alt=""/>
					
				</div>

				<div className="card-content">

					<p id="title">{props.type}  <span>...</span></p>

					<h3>32hrs</h3>

					<p>last week - 36hrs</p>
				</div>

			</div>
		</div>
	)
}

export default Card