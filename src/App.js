import Header from 'components/layout/Header'
import UsersTable from 'components/table/UsersTable'
import Footer from 'components/layout/Footer'
import Loader from 'components/layout/Loader';

import { useUsers } from 'hooks/useUsers';
import styles from 'App.module.css';

function App() {
    const [users, loading] = useUsers();
    return (
        <div className={styles.wrapper}>
            {loading ? <Loader /> : <>
                <Header />
                <main>
                    <UsersTable users={users} />
                </main>
                <Footer />
            </>}

        </div>
    );
}

export default App;
