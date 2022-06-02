import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Timetable from './Pages/Timetable'
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Timetable />} />
            </Routes>
        </>
    );
}

export default App;
