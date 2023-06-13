import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Home = () => {
	return (
		<div>
			<h1>Welcome to GeeksforGeeks</h1>
		</div>
	);
};
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
		  <th>Name</th>
		  <th>Owner</th>
		  <th>Addresss</th>
		  <th>Balance</th>
		</tr>
		{wallets.map((value, key) => (
			<tr key={key}>
			  <td>{value.name}</td>
			  <td>{value.owner}</td>
			  <td>{value.address}</td>
			  <td>{value.balance}</td>
			</tr>
		))}
	  </table>
	</div>
	);
  };

export default FeaturedWallets;
