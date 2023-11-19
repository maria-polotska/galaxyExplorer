import { useState, useEffect } from 'react';
import { fetchAllPeople } from "services/api";

export function useUsers() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchAllPeople()
            .then((people) => {
                setUsers(people);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching all people:', error);
            }).finally(() => {
                setLoading(false)
            });
    }, []);

    return [users, loading]
}