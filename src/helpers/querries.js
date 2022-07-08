import {gql} from "@apollo/client";

export const ALL_COUNTRIES_DATA = gql`
  {
      countries {
          name
	      code
		  native
		  capital
		  emoji
		  currency
		  languages {
		      name
		  }
		  states {
		      name
		  }
		  continent {
		      name
		      code
		  }
	  }
  }`;

export function get_country(code) {
	return gql`
	{
		country(code: "${code}") {
			name
			native
			capital
			emoji
			code
			currency
			languages {
				code
				name
			}
			continent {
	            name
	            code
	        }
			states {
				name
			}
		}
	}`
}

export function filterByContinent(code) {
	return gql`
		{
    countries(filter: {
      continent: { eq: "${code}" }})
    {
      name
      code
      native
      capital
      emoji
      currency
      languages { name }
      states { name }
      continent { name code}
    }
}
	`
}

export function FilterByCurrency(code) {
	return gql`
		{
		    countries(filter: {
		      currency: { eq: "${code}" }})
		    {
		      name
		      code
		      native
		      capital
		      emoji
		      currency
		      languages { name }
		      states { name }
		      continent { name code}
		    }
		}
	`
}