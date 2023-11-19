import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { ReactComponent as Rocket } from '../assets/rocket.svg';
import HomeworldModal from './HomeworldModal';
import UsersTableRow from './UsersTableRow';
import { sortColumn } from '../utils/tableFunctions';

const UsersTable = ({users}) => {
    const [sortedData, setSortedData] = useState([]);
    const [columnName, setColumnName] = useState('name');
    const [ascending, setAscending] = useState();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedHomeworld, setSelectedHomeworld] = useState(null);

    useEffect(() => {
        console.log("useEffect in UsersTable");
        sortColumnHandler();
      }, []);
    
      const sortColumnHandler = (key) => {
        const { sortedData, column, isAscending } = sortColumn(users, columnName, key, ascending);
        setSortedData(sortedData);
        setColumnName(column);
        setAscending(isAscending);
      };
    // Filter data based on the search query
    const filteredData = useMemo(() => {
        console.log(sortedData.filter(user =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase())
        ));
        return sortedData.filter(user =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [sortedData, searchQuery]);

    const openModalHandler = (homeworld) => {
        setSelectedHomeworld(homeworld);
    };

    const closeModal = () => {
        setSelectedHomeworld(null);
    };

    return (
        <div className="table-wrapper">
            <div className="search">
                <input
                    type="text"
                    placeholder="Explore the galaxy of names, young Jedi..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <section className="users-table">
                <div className="header-row">
                    <button onClick={() => sortColumnHandler('name')} className={`col ${columnName === 'name' ? 'active' : ''}`}>Name
                    {columnName === 'name' && <Rocket className={`rocket ${ascending ? 'up' : 'down'}`} />}
                    </button>
                    <button onClick={() => sortColumnHandler('height')} className={`col ${columnName === 'height' ? 'active' : ''}`}>Height
                    {columnName === 'height' && <Rocket className={`rocket ${ascending ? 'up' : 'down'}`} />}</button>
                    <button onClick={() => sortColumnHandler('mass')} className={`col ${columnName === 'mass' ? 'active' : ''}`}>Mass
                    {columnName === 'mass' && <Rocket className={`rocket ${ascending ? 'up' : 'down'}`} />}</button>
                    <button onClick={() => sortColumnHandler('created')} className={`col ${columnName === 'created' ? 'active' : ''}`}>Created
                    {columnName === 'created' && <Rocket className={`rocket ${ascending ? 'up' : 'down'}`} />}</button>
                    <button onClick={() => sortColumnHandler('edited')} className={`col ${columnName === 'edited' ? 'active' : ''}`}>Edited
                    {columnName === 'edited' && <Rocket className={`rocket ${ascending ? 'up' : 'down'}`} />}</button>
                    <button onClick={() => sortColumnHandler('homeworld')} className={`col ${columnName === 'homeworld' ? 'active' : ''}`}>Planet Name
                    {columnName === 'homeworld' && <Rocket className={`rocket ${ascending ? 'up' : 'down'}`} />}</button>
                </div>
                <div className="table-body">
                {(filteredData.length !== 0 ) ? filteredData.map((user) => {
                    return (
                        <UsersTableRow key={user.created} user={user} openModal={openModalHandler} />
                    )
                }) : <p className="table-info-msg">The Force did not reveal any individuals in this galaxy. Try another search.</p>}
                </div>
            </section>

            <HomeworldModal isOpen={selectedHomeworld !== null} onClose={closeModal} data={selectedHomeworld} />
        </div>
    )
}

export default UsersTable
