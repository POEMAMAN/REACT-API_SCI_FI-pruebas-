
import { Route, Routes} from 'react-router-dom';
import Login from "./core/Login/"
import Register from "./core/Register"
import Header from './core/Header';
import Home from './core/Home';

const App = () => {
  return (
    <>
    <div className='app-container'>
        <h1>Auth</h1>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>

    </div>

    </>
  )
}

export default App

