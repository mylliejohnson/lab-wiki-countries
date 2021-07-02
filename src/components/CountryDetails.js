import React, { useState, useEffect } from 'react';
import countries from '../countries.json'

function CountryDetails(props) {

    return (
        <div>
            <p>{countries.name.official}</p>
        </div>
    );
}

export default CountryDetails;