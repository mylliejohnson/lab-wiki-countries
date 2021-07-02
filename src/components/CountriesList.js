import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from "react";
import countries from '../countries.json'

function CountriesList(props) {
    
    const [listOfCountries, setList] = useState(countries)

    const display = () => {
        return listOfCountries.map((country) =>{
            return(
            <li><Link to={`/${country.cca3}`}>{country.name.official}</Link></li>
        )
    })
}

    return (
        <div>
            <ul>
               {display()}
            </ul>
        </div>
    );
}

export default CountriesList;