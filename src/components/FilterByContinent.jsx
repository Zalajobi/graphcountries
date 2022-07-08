import React, {useEffect, useState} from 'react';
import { useQuery } from '@apollo/client';
import CountryInfoCard from "./card/CountryInfoCard";
import {client} from "../helpers/setup-providers";
import {useDispatch, useSelector} from "react-redux";
import { filterByContinent } from "../helpers/querries";
import { setCountryCode, setCurrencyCode, setSearchInput } from "../redux/searchReducer";


const FilterByContinent = () => {
	const dispatch = useDispatch()
	const [countries, setCountries] = useState([]);
	const [showPage, setShowPage] = useState(false);
	const { continent }  = useSelector((state) => state.search)
	const {data, loading, error} = useQuery(filterByContinent(continent), {client});

	useEffect(() => {
		if (data) {
			setCountries(data.countries);
			setShowPage(true)
			dispatch(setSearchInput(''))
			dispatch(setCountryCode(''))
			dispatch(setCurrencyCode(''))
		}
    }, [data]);

	if (loading || error) {
		return <div id="preloader"><div id="loader"/></div>;
	}

    return (
		<React.Fragment>
			{showPage &&
				<div className="country-list">
					{countries.map(country => (
						<div key={country.code} style={{display: "flex", alignItems: "baseline", justifyContent: "center"}}>
							<CountryInfoCard country={country}/>
						</div>
					))}
				</div>
			}
		</React.Fragment>
    )
}

export default FilterByContinent