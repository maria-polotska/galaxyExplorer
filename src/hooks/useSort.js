import { useState } from 'react';
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

    return [sortedUsers, columnName, ascending, sortHandler]
}