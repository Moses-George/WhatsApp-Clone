import { Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import ChatBar from './ChatBar/ChatBar';
import ChatHome from './ChatBar/ChatHome';


const App = () => {

    return (
        <main className='main'>
            <Sidebar />
            <Routes>
                <Route path='/' element={<ChatHome />} />
                <Route path='rooms/:roomId' element={<ChatBar />} />
            </Routes>
        </main>
    )
}

export default App;