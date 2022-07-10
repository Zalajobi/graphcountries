import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchInput: '',
        countryCode: '',
        continent: '',
        currencyCode: '',
    },

    reducers: {
        setSearchInput: (state, action) => {
            state.searchInput = action.payload;
        },
        setCountryCode: (state, action) => {
            state.countryCode = action.payload
        },
        setContinent: (state, action) => {
            state.continent = action.payload
        },
        setCurrencyCode: (state, action) => {
            state.currencyCode = action.payload
        },
    },

});

export const { setSearchInput, setCountryCode, setContinent, setCurrencyCode } = searchSlice.actions

export default searchSlice.reducer