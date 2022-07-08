import React from 'react'
import './App.css';
import Header from "./components/header/Header";
import {useSelector} from "react-redux";
import SearchedCountry from "./components/SearchedCountry";
import AllCountries from "./components/AllCountries";
import FilterByCountry from "./components/FilterByCountry";
import FilterByContinent from "./components/FilterByContinent";
import FilterByCurrencyCode from "./components/FilterByCurrencyCode";

const App = () => {
	const  { searchInput, countryCode, continent, currencyCode }  = useSelector((state) => state.search)


	return (
		<main>
			<Header/>

			{searchInput &&
				<SearchedCountry/>
			}

			{countryCode &&
				<FilterByCountry/>
			}

			{continent &&
				<FilterByContinent/>
			}

			{currencyCode &&
				<FilterByCurrencyCode/>
			}

			{!searchInput && !countryCode && !continent && !currencyCode &&
				<AllCountries/>
			}
		</main>
	)
}

export default App;