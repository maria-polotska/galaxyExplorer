import { useState, useEffect } from 'react';
import Header from './components/Header'
import UsersTable from './components/UsersTable'
import Footer from './components/Footer'
import Loader from './components/Loader';
import { fetchAllPeople } from "./services/api";

function App() {
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
    return (
        <div className="wrapper">
            {loading ? <Loader /> : <>
                <Header />
                <UsersTable users={users}  />
                <Footer />
            </>}

        </div>
    );
}

export default App;
