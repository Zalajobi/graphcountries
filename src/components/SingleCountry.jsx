import React from 'react';

const SingleCountry = (props) => {
    return (
		<React.Fragment>
			<div className="search-card-container">
				<div className="card darkCard">
					<div className="card-body">
						<img className="proPic" src={`https://flagcdn.com/128x96/${props.country.code.toLowerCase()}.png`} alt="Profile Pic"/>
						<h5 className="darkTitle">{props.country.name}</h5>
						<p className="darkDesc card-text"><strong>{props.country.name}</strong>, a country located in the continent of <strong>{props.country.continent.name}</strong> along with it's neighbours. <strong>{props.country.name}</strong> is a made up of {props.country.states.length} states/province including its capital {props.country.capital}.
							{props.country.languages.map(language => (
								<span key={language.name}> {language.name}, </span>
							))}
							is/are the official language(s) of <strong>{props.country.name}</strong>, and its currency is the <strong>{props.country.currency}</strong>.</p>
					</div>
				</div>
			</div>
		</React.Fragment>
    )
}

export default SingleCountry