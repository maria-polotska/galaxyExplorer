import { useState, useEffect } from 'react';
import { fetchPlanet } from "services/api";

export function usePlanetData(url) {
    const [planet, setPlanet] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPlanet(url)
            .then((planet) => {
                setPlanet(planet);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching planet:', error);
            }).finally(() => {
                setLoading(false)
            });
    }, [url]);


    return [planet, loading]
}