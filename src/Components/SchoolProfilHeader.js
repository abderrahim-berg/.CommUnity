import '../Styles/SchoolProfilHeader.css'
function SchoolProfilHeader(props) {
  return (
    <div class="card-container">

		<div class="upper-container">
			<div class="image-container">
				<img src={props.image} />
			</div>
		</div>

		<div class="lower-container">
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
