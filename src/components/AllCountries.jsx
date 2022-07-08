import React, {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import CountryInfoCard from "./card/CountryInfoCard";
import {client} from "../helpers/setup-providers";
import {ALL_COUNTRIES_DATA} from "../helpers/querries";


const AllCountries = () => {
	const [country, setCountry] = useState([]);
	const {data, loading, error} = useQuery(ALL_COUNTRIES_DATA, {client});

	useEffect(() => {
		if (data) {
			setCountry(data.countries);
		}
    }, [data]);

	if (loading || error) {
		return <div id="preloader"><div id="loader"/></div>;
	}

    return (
		<React.Fragment>
			<div className="country-list">
				{country.map(country => (
					<div key={country.code} style={{display: "flex", alignItems: "baseline", justifyContent: "center"}}>
						<CountryInfoCard country={country}/>
					</div>
				))}
			</div>
		</React.Fragment>
    )
}

export default AllCountries