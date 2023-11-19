import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { ReactComponent as Rocket } from 'assets/rocket.svg';
import HomeworldModal from 'components/modal/HomeworldModal';
import UsersTableRow from 'components/table/UsersTableRow';
import { useSort } from 'hooks/useSort';
import styles from 'components/table/UsersTable.module.css';

const UsersTable = ({ users }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedHomeworld, setSelectedHomeworld] = useState(null);
    const [sortedUsers, columnName, ascending, sortHandler] = useSort(users);
    const [openModal, setOpenModal] = useState(false);

    // Filter data based on the search query
    const filteredData = useMemo(() => {
        return sortedUsers.filter(user =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [sortedUsers, searchQuery]);

    const openModalHandler = (homeworld) => {
        setSelectedHomeworld(homeworld);
        setOpenModal(true)
    };

    useEffect(() => {
        sortHandler(columnName);
        // eslint-disable-next-line
    }, []);

    const rocket = <Rocket className={`${styles.rocket} ${ascending ? styles.up : styles.down}`} />;

    return (
        <>
            <div className={styles.search}>
                <input
                    type="text"
                    placeholder="Explore the galaxy of names, young Jedi..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <section className={styles.usersTable}>
                <div className={styles.tableHeader}>
                    <button onClick={() => sortHandler('name')} className={`${styles.col} ${columnName === 'name' ? styles.active : ''}`}>
                        Name {columnName === 'name' && rocket}
                    </button>
                    <button onClick={() => sortHandler('height')} className={`${styles.col} ${columnName === 'height' ? styles.active : ''}`}>
                        Height{columnName === 'height' && rocket}
                    </button>
                    <button onClick={() => sortHandler('mass')} className={`${styles.col} ${columnName === 'mass' ? styles.active : ''}`}>
                        Mass {columnName === 'mass' && rocket}
                    </button>
                    <button onClick={() => sortHandler('created')} className={`${styles.col} ${columnName === 'created' ? styles.active : ''}`}>
                        Created {columnName === 'created' && rocket}
                    </button>
                    <button onClick={() => sortHandler('edited')} className={`${styles.col} ${columnName === 'edited' ? styles.active : ''}`}>
                        Edited {columnName === 'edited' && rocket}
                    </button>
                    <button onClick={() => sortHandler('homeworld')} className={`${styles.col} ${columnName === 'homeworld' ? styles.active : ''}`}>
                        Planet Name {columnName === 'homeworld' && rocket}
                    </button>
                </div>
                <div className={styles.tableBody}>
                    {(filteredData.length !== 0) ? filteredData.map((user) => {
                        return (
                            <UsersTableRow key={user.created} user={user} openModal={openModalHandler} />
                        )
                    }) : <p className={styles.infoText}>The Force did not reveal any individuals in this galaxy. Try another search.</p>}
                </div>
            </section>
            {selectedHomeworld && <HomeworldModal isOpen={openModal} onClose={() => setOpenModal(false)} url={selectedHomeworld} />}

        </>
    )
}

export default UsersTable
