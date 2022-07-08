import React, { useState, useEffect } from 'react'
import './header.css'
import Search from "./Search";
import { useDispatch } from "react-redux";
import {setCountryCode, setContinent, setCurrencyCode} from "../../redux/searchReducer";
import {useQuery} from "@apollo/client";
import {ALL_COUNTRIES_DATA} from "../../helpers/querries";
import {client} from "../../helpers/setup-providers";
import currencyData from '../../assets/currency_code.json';



const Header = () => {
	const dispatch = useDispatch()
	const [country, setCountry] = useState([]);
	const [showPage, setShowPage] = useState(false);
	const {data, loading, error} = useQuery(ALL_COUNTRIES_DATA, {client});

	useEffect(() => {
		if (data) {
			setCountry(data.countries);
			setShowPage(true)
		}
    }, [data]);

	if (loading || error) {
		return <div id="preloader"><div id="loader"/></div>;
	}

	return (
		<React.Fragment>
			<div className="header-container">
				<Search/>

				<h4>Filter By</h4>

				<div className="filter-container">
					<p>Select Country</p>
					<div className="filter-item">
						<select onChange={e => dispatch(setCountryCode(e.target.value))}>
							<option value="">Select Country</option>

							{showPage &&
								country.map((item) =>
									<option key={item.code} value={item.code}>{item.name}</option>
								)
							}
						</select>
					</div>

					<div className="filter-item">
						<p>Continent</p>
						<select onChange={e => dispatch(setContinent(e.target.value))}>
							<option value="">Select Continent</option>
							<option value="AF">Africa</option>
							<option value="EU">Europe</option>
							<option value="NA">North America</option>
							<option value="SA">South America</option>
							<option value="AS">ASIA</option>
							<option value="AN">Antarctica</option>
							<option value="AU">Australia</option>
						</select>
					</div>

					<div className="filter-item">
						<p>Currency Code</p>
						<select onChange={e => dispatch(setCurrencyCode(e.target.value))}>
							<option value="">Currency Code</option>

							{showPage &&
								currencyData.map((item) =>
									<option key={item.code} value={item.code}>{item.code}</option>
								)
							}
						</select>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Header