import React from 'react';

const CardMessage = (props) => {
	return (
		<React.Fragment>
			<span>{props.country.name} is made up of <strong>{props.country.states.length - 1} states/provinces (capital state/province included) </strong> with <strong>{props.country.capital}</strong> as its capital.
				The official language of {props.country.name} is/are
				{props.country.languages.map(language => (
					<span key={language.name}> {language.name}, with the official currency being the <strong>{props.country.currency}</strong>.<br/>
						{props.country.name} is a beautiful country and a must place to visit to experience natures spirit.
					</span>
				))}
			</span>
		</React.Fragment>
	)
}

export default CardMessage