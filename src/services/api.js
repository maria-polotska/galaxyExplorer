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