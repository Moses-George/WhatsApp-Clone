import './App.css';
import Sidebar from './Sidebar/Sidebar';
import ChatBar from './ChatBar/ChatBar';


const App = () => {

    return (
        <main className='main'>
            <Sidebar />
            <ChatBar />
        </main>
    )
}

export default App;