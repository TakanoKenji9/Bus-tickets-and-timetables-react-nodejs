import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Timetable from './Pages/Timetable';
import News from './Pages/News';
import Article from './Pages/Article';
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Timetable />} />
                <Route path='/news' element={<News />} />
                <Route path='/news/:id' element={<Article />} />
                {/* <Route path='/rent' element={<Rent />} />
                <Route path='/greece-trips' element={<GreeceTrips />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} /> */}
            </Routes>
        </>
    );
}

export default App;
