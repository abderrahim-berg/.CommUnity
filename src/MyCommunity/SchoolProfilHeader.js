import './styles/SchoolProfilHeader.css'
function SchoolProfilHeader(props) {
  return (
    <div className="card-container">

		<div className="upper-container">
			<div className="image-container">
				<img src={props.image} />
			</div>
		</div>

		<div className="lower-container">
			<div>
				<h4>{props.school}</h4>
			</div>
			<div>
				<p>{props.schoolDescription}</p>
			</div>
			
		</div>

	</div>
  )
}

export default SchoolProfilHeader