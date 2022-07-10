import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import CountryInfoCard from "./card/CountryInfoCard";
import { client } from "../helpers/setup-providers";
import { ALL_COUNTRIES_DATA } from "../helpers/querries";
import { Grid } from "@mui/material";

const AllCountries = () => {
  const [country, setCountry] = useState([]);
  const { data, loading, error } = useQuery(ALL_COUNTRIES_DATA, { client });

  useEffect(() => {
    if (data) {
      setCountry(data.countries);
    }
  }, [data]);

  if (loading || error) {
    return (
      <div id="preloader">
        <div id="loader" />
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="info-header-container">
        <h5 className="country-header-info">Available List Of Countries</h5>
        <p>{country.length} Countries</p>
      </div>
      
      <Grid container spacing={2} style={{padding: '40px !important'}}>
        {country.map((country) => (
          <Grid key={country.code} item xs={3}>
            <CountryInfoCard country={country} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default AllCountries;
