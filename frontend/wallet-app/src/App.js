
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
const FeaturedWallets = () => {
  const [wallets, setWallets] = useState([]);
  useEffect(() => {
  fetchWallets();
}, []);
const fetchWallets = () => {
  axios
    .get('http://localhost:8080/wallets')
    .then((res) => {
      console.log(res);
      setWallets(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
  return (
  
  <div>
    <h1>Featured Wallets</h1>
    <div>
      <p><a href="http://localhost:3000">Tracked Wallets</a></p>
      <p><a href="http://localhost:3000/add">Add a Wallet</a></p>
    </div>
    
    <table>
      <tr>
        <th>Nickname</th>
        <th>Owner</th>
        <th>Description</th>
        <th>Addresss</th>
        <th>Balance</th>
        <th>Wallet ID</th>
      </tr>
      {wallets.map((value, key) => {
        return (
          <tr key={key}>
            <td>{value.nickname}</td>
            <td>{value.owner}</td>
            <td>{value.description}</td>
            <td>{value.address}</td>
            <td>{value.balance}</td>
            <td>{value.wallet_id}</td>
          </tr>
        )
      })}
    </table>
  </div>
  );
};

export default App;
