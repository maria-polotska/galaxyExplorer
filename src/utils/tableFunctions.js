export const sortColumn = (users, columnName, key = "name", ascending = false) => {
    const isCurrentColumn = columnName === key;
    const nextAscending = isCurrentColumn ? !ascending : true;

    const sortedUsers = [...users].sort((a, b) => {
        const compareValueA = a[key];
        const compareValueB = b[key];

        return ['height', 'mass', 'homeworld'].includes(key)
            ? (nextAscending ? compareValueA.localeCompare(compareValueB, undefined, { numeric: true }) : compareValueB.localeCompare(compareValueA, undefined, { numeric: true }))
            : (nextAscending ? compareValueA.localeCompare(compareValueB) : compareValueB.localeCompare(compareValueA));
    });

    return {
        sortedData: sortedUsers,
        column: key,
        isAscending: nextAscending,
    };
};