import Header from 'components/layout/Header'
import UsersTable from 'components/table/UsersTable'
import Footer from 'components/layout/Footer'
import Loader from 'components/layout/Loader';

import { useUsers } from 'hooks/useUsers';


function App() {
    const [users, loading] = useUsers();
    return (
        <div className="wrapper">
            {loading ? <Loader /> : <>
                <Header />
                <UsersTable users={users} />
                <Footer />
            </>}

        </div>
    );
}

export default App;
