import React, {useState, useEffect} from 'react';
import {useQuery} from "@apollo/client";
import { get_country } from "../helpers/querries";
import {client} from "../helpers/setup-providers";
import {useDispatch, useSelector} from "react-redux";

import '../assets/searched-country.css'
import SingleCountry from "./SingleCountry";
import {setContinent, setCurrencyCode, setSearchInput} from "../redux/searchReducer";


const FilterByCountry = () => {
	const dispatch = useDispatch()
	const [country, setCountry] = useState([]);
	const [showPage, setShowPage] = useState(false);
	const  { countryCode }  = useSelector((state) => state.search)
	const {data, loading, error} = useQuery(get_country(countryCode.toUpperCase()), {client});

	useEffect(() => {
		if (data) {
			setCountry(data.country);
			setShowPage(true)
			dispatch(setSearchInput(''))
			dispatch(setContinent(''))
			dispatch(setCurrencyCode(''))
		}
    }, [data]);

	if (loading || error) {
		return <div id="preloader"><div id="loader"/></div>;
	}

	return (
		<React.Fragment>
			{showPage &&
				<SingleCountry country={country}/>
			}
		</React.Fragment>
	)
}

export default FilterByCountry