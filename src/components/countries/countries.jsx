import { useEffect, useState } from 'react'
import Country from "../country/country";
import "./countries.css"

const Countries = () => {
    const [countries,setCountries] = useState([])
    const [visitedCountry,setVisitedCountry] = useState([])
    useEffect(() =>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
    },[])

    const handeledVisitedCountry = (country) =>{
        const newSetVisitedCountry = [...visitedCountry,country]
        setVisitedCountry(newSetVisitedCountry)
    }

    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            <h4>Visited country: {visitedCountry.length}</h4>
            <div>
                {
                    visitedCountry.map(countryvisited =><li key={countryvisited.cca3}>{countryvisited.name.common}</li>)
                }
            </div>
            <div className='country-container'>
                {
                    countries.map(country =><Country key={country.cca3} country ={country}
                    handeledVisitedCountry={handeledVisitedCountry}
                    ></Country>)
                }
            </div>
            
        </div>
    );
};

export default Countries;