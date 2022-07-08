import React from 'react'
import '../../assets/country-card.css'

const CountryInfoCard = (props) => {
	return (
		<React.Fragment>
			<div className="container">
				<div className="list-card">
					<div className="list-card-header">
						<img src={`https://flagcdn.com/256x192/${props.country.code.toLowerCase()}.png`} width="300" height="300" alt={props.country.name}/>
					</div>
					<div className="list-card-body">
						<span className="tag tag-teal">{props.country.name}</span>
						<h4>
							Capital City: <span className="tag tag-purple">{props.country.capital}</span>
						</h4>
						<h4>Currency: <span className="tag tag-green">{props.country.currency}</span></h4>
						<div className="capital">
							<span className="tag tag-pink">{props.country.continent.name}</span>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default CountryInfoCard