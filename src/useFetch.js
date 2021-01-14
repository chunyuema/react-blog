// This file is defined to be used to fetch data from a certain url endpoint
import {useState, useEffect} from 'react';
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    // fire some functions after every randering
    // [] will contain the dependencies wheb userEffect will run
    useEffect(() => {
        setTimeout(()=> {
            fetch(url)
                .then(res => {
                    if (!res.ok) {throw Error('Could Not Get The Blog Data');}
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setError(err.message);
                    setIsPending(false);
                })
        }, 1000);
    }, [url]); 

    return {data, isPending, error}; 
}

export default useFetch;