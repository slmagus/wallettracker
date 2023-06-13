import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages'
import AddWallet from './pages/addwallet'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/add' element={<AddWallet />}/>
      </Routes>
    </Router>
  )
}


export default App;
