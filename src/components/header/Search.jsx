import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import {setSearchInput} from "../../redux/searchReducer";
import {FaSearchPlus} from 'react-icons/fa'

const Search = () => {
	const dispatch = useDispatch()
    const [state, setState] = useState('')

	const findCountry = () => {
        dispatch(setSearchInput(state))
        // clear input field after button click
        setState('')
    }

	return (
		<div className="search-container">
			<input
				className="search-input"
				placeholder="Search Country By Code e.g. NG"
				onChange={e => setState(e.target.value)}
				value={state}/>

			<FaSearchPlus onClick={findCountry} className='search-icon' size={20}/>
		</div>
	);
};

export default Search;