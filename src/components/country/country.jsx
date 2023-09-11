import { useState } from 'react';
import './country.css'
const Country = ({country,handeledVisitedCountry}) => {
    const {name,flags,population} =country;
    const [visited,setVisited] = useState(false)
    const visitedHandeledButton =() =>{
        setVisited(!visited);
    }
    return (
        <>  
            <div className={visited?'country':'not-visited'}>
                <h4>Country Name: {name.common}</h4>
                <img className='image' src={flags.png} alt="flag image" />
                <p>Population: {population} </p>
                <button onClick={visitedHandeledButton}>{visited?'Visited':'Visit'}</button>
                <button onClick={()=>handeledVisitedCountry(country)}>Mark Visited</button>
            </div>
        </>
        
    );
};

export default Country;