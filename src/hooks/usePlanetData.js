import { useState, useEffect } from 'react';

export function usePlanetData(url) {
    const [planet, setPlanet] = useState();
    const [loading, setLoading] = useState(true);

    const fetchPlanet = async (link) => {
        setLoading(true);
        try {
            const response = await fetch(link);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setPlanet(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching homeworld data:', error);
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPlanet(url)
    }, [url])

    return [planet, loading]
}