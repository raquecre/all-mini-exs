import BigInputEx4 from './BigInputEx4';
import DisplayPrimeNumbersEx4 from './DisplayPrimeNumbersEx4'
import { useState } from 'react'
const AplicationEx4 = (props) => {

    const [query, setQuery] = useState();
   
    return (
        <div className='Aplication'>
            <h2>Aplication</h2>
            <BigInputEx4 onQuery={setQuery} />
            <DisplayPrimeNumbersEx4 query ={query} />
        </div>
    )
}

export default AplicationEx4