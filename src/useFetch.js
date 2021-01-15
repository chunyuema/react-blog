// This file is defined to be used to fetch data from a certain url endpoint
import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // fire some functions after every rendering
    // [] will contain the dependencies wheb userEffect will run
    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(()=> {
            fetch(url, { signal: abortCont.signal })
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
                    if (err.name === 'AbortError') {
                        console.log('Fetch Aborted');
                    } else {
                        setError(err.message);
                        setIsPending(false);
                    }
                })
        }, 1000);
        // using abort controller
        return () => abortCont.abort();
    }, [url]); 

    return {data, isPending, error}; 
}

export default useFetch;