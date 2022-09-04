import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { weatherService } from '../service';
import { setCurrLocation } from '../store/actions/weatherActions.js'

const Input = () => {

    const [location, setlocation] = useState('London')
    const debouncedSearchTerm = useDebounce(location, 500);
    const dispatch = useDispatch()

    useEffect(
        () => {
            if (debouncedSearchTerm) {
                weatherService.getWeather(debouncedSearchTerm).then((result) => {
                    dispatch(setCurrLocation(result))
                });
            } else {
                console.log('Somthing went wrong')
            }
        },
        [debouncedSearchTerm]
    );

    function useDebounce(value, delay) {
        const [debouncedValue, setDebouncedValue] = useState(value);
        useEffect(
            () => {
                const handler = setTimeout(() => {
                    setDebouncedValue(value);
                }, delay);
                return () => {
                    clearTimeout(handler);
                };
            },
            [value, delay]
        );
        return debouncedValue;
    }

    return (
        <div className='input-container'>

        <input className='form-input' type="text" name="location" id="location" value={location} onChange={(e) => setlocation(e.target.value)} />
        </div>
    )
}

export default Input

// rafce