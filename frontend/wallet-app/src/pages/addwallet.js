import React, {useState} from 'react';

const AddWallet = () => {
	return (
		<div>
			<h1>Track a wallet!</h1>
		</div>
	);
};


const API_ENDPOINT = 'http://localhost:8080/wallets'; // Replace with your API endpoint

const SubmitForm = () => {
  const [formData, setFormData] = useState({
    nickname: '',
    description: '',
    address: '',
	owner: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation here if needed

    fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response data
        console.log(data);
        // Reset the form after successful submission
        setFormData({ nickname: '', description: '', address: '', owner: '' });
      })
      .catch((error) => {
        // Handle any errors that occur during the API call
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder=""
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="0xffffffffffffff"
        value={formData.email}
        onChange={handleChange}
      />
	   <input
        type="text"
        name="owner"
        placeholder="ownername"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

//export default AddWallet;
export default SubmitForm;
