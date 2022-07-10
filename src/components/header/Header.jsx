import React, { useState, useEffect } from "react";
import "./header.css";
import Search from "./Search";
import { useDispatch } from "react-redux";
import {
  setCountryCode,
  setContinent,
  setCurrencyCode,
} from "../../redux/searchReducer";
import { useQuery } from "@apollo/client";
import { ALL_COUNTRIES_DATA } from "../../helpers/querries";
import { client } from "../../helpers/setup-providers";
import currencyData from "../../assets/currency_code.json";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Header = () => {
  const dispatch = useDispatch();
  const [country, setCountry] = useState([]);
  const [showPage, setShowPage] = useState(false);
  const { data, loading, error } = useQuery(ALL_COUNTRIES_DATA, { client });

  useEffect(() => {
    if (data) {
      setCountry(data.countries);
      setShowPage(true);
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
      <div className="header-container">
        <Search />

        <h4>Filter By:</h4>

        <div className="filter-container">
          <div className="filter-item">
            <p>Select Country</p>
            <Box>
              <FormControl style={{ width: "300px" }}>
                <InputLabel id="demo-simple-select-label">
                  Select Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Select Country"
                  onChange={(e) => dispatch(setCountryCode(e.target.value))}
                >
                  <MenuItem value="">Select Country</MenuItem>
                  {showPage &&
                    country.map((item) => (
                      <MenuItem key={item.code} value={item.code}>
                        {item.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Box>
          </div>

          <div className="filter-item">
            <p>Continent</p>
            <Box>
              <FormControl style={{ width: "200px" }}>
                <InputLabel id="demo-simple-select-label">
                  Select Continent
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Select Continent"
                  onChange={(e) => dispatch(setContinent(e.target.value))}
                >
                  <MenuItem value="">Select Continent</MenuItem>
                  <MenuItem value="AF">Africa</MenuItem>
                  <MenuItem value="EU">Europe</MenuItem>
                  <MenuItem value="NA">North America</MenuItem>
                  <MenuItem value="SA">South America</MenuItem>
                  <MenuItem value="AS">ASIA</MenuItem>
                  <MenuItem value="AN">Antarctica</MenuItem>
                  <MenuItem value="AU">Australia</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div className="filter-item">
            <p>Currency Code</p>
            <Box>
              <FormControl style={{ width: "200px" }}>
                <InputLabel id="demo-simple-select-label">
                  Currency Code
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Currency Code"
                  onChange={(e) => dispatch(setCurrencyCode(e.target.value))}
                >
                  <MenuItem value="">Currency Code</MenuItem>
                  {showPage &&
                    currencyData.map((item) => (
                      <MenuItem key={item.code} value={item.code}>
                        {item.code}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
