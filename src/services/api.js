const USERS_API = "https://swapi.dev/api/people";

export const fetchAllPeople = async (url = USERS_API, allPeople = []) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const updatedPeople = [...allPeople, ...data.results];
        if (data.next) {
            return fetchAllPeople(data.next, updatedPeople);
        } else {
            return updatedPeople;
        }
    } catch (error) {
        console.error('Error fetching people:', error);
        throw error;
    }
};

export const fetchPlanet = async (link) => {
    try {
        const response = await fetch(link);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching homeworld data:', error);
    }
}