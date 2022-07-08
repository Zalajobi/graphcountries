import React, {useState, useEffect} from 'react';
import {useQuery} from "@apollo/client";
import { get_country } from "../helpers/querries";
import {client} from "../helpers/setup-providers";
import {useDispatch, useSelector} from "react-redux";
import {setCountryCode, setContinent, setCurrencyCode} from "../redux/searchReducer";
import '../assets/searched-country.css'
import SingleCountry from "./SingleCountry";


const SearchedCountry = () => {
	const dispatch = useDispatch()
	const [country, setCountry] = useState([]);
	const [showPage, setShowPage] = useState(false);
	const  { searchInput }  = useSelector((state) => state.search)
	const {data, loading, error} = useQuery(get_country(searchInput.toUpperCase()), {client});

	useEffect(() => {
		if (data) {
			setCountry(data.country);
			setShowPage(true)

			// Change state of other redux values
			dispatch(setCurrencyCode(''))
			dispatch(setContinent(''))
			dispatch(setCountryCode(''))
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

export default SearchedCountry