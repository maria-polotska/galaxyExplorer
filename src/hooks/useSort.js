import { useState, useEffect } from 'react';
import { sortColumn } from 'utils/tableFunctions';

export function useSort(users) {

    const [sortedUsers, setSortedUsers] = useState([]);
    const [columnName, setColumnName] = useState('name');
    const [ascending, setAscending] = useState();

    const sortHandler = (key) => {
        const { sortedData, column, isAscending } = sortColumn(users, columnName, key, ascending);
        setSortedUsers(sortedData);
        setColumnName(column);
        setAscending(isAscending);
    };

    useEffect(() => {
        sortHandler(columnName);
        // eslint-disable-next-line
    }, []);

    return [sortedUsers, columnName, ascending, sortHandler]
}