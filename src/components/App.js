import { Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import ChatBar from './ChatBar/ChatBar';
import ChatBarBody from './ChatBar/ChatBarBody';


const App = () => {

    return (
        <main className='main'>
            <Sidebar />
            <Routes>
                <Route path='/' element={<ChatBar />} >
                    <Route path='rooms/:roomId' element={<ChatBarBody />} />
                </Route>
            </Routes>
        </main>
    )
}

export default App;