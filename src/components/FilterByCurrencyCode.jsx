import React, {useEffect, useState} from 'react';
import { useQuery } from '@apollo/client';
import CountryInfoCard from "./card/CountryInfoCard";
import {client} from "../helpers/setup-providers";
import {useDispatch, useSelector} from "react-redux";
import { FilterByCurrency } from "../helpers/querries";
import {setContinent, setCountryCode, setSearchInput} from "../redux/searchReducer";
import { Grid } from '@mui/material';


const FilterByCurrencyCode = () => {
	const dispatch = useDispatch()
	const [countries, setCountries] = useState([]);
	const [showPage, setShowPage] = useState(false);
	const { currencyCode }  = useSelector((state) => state.search)
	const {data, loading, error} = useQuery(FilterByCurrency(currencyCode), {client});

	useEffect(() => {
		if (data) {
			setCountries(data.countries);
			setShowPage(true)
			dispatch(setContinent(''))
			dispatch(setCountryCode(''))
			dispatch(setSearchInput(''))
		}
    }, [data]);

	if (loading || error) {
		return <div id="preloader"><div id="loader"/></div>;
	}

    return (
		<React.Fragment>
			{showPage &&
				<div>
					<div className="info-header-container">
						<h5 className="country-header-info">Available List Of Countries Using {countries[0].currency}</h5>
						<p>{countries.length} Countries</p>
					</div>

					<Grid container spacing={2} style={{padding: '40px !important'}}>
						{countries.map(country => (
							<Grid item xs={3}>
								<CountryInfoCard country={country}/>
							</Grid>
						))}
					</Grid>
				</div>
			}
		</React.Fragment>
    )
}

export default FilterByCurrencyCode
