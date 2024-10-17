// app/users/page.tsx
"use client"; // Ensure this is marked as a Client Component

import { useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

export default function UserManagement() {
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [suite, setSuite] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  // Create user
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate user creation
    const newUser: User = {
      id: Math.floor(Math.random() * 1000), // Simulate unique ID
      name,
      username,
      email,
      address: {
        street,
        suite,
        city,
        zipcode,
      },
    };

    console.log("User Created: ", newUser); // Log the user creation for debugging
    setSuccessMessage("User created successfully!"); // Success message
    // Reset the form fields
    setName("");
    setUsername("");
    setEmail("");
    setStreet("");
    setSuite("");
    setCity("");
    setZipcode("");
  };

  return (
    <div className="background">
      <div className="container">
        <h1 className="title">Create User</h1>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form className="user-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Suite"
            value={suite}
            onChange={(e) => setSuite(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            required
          />
          <button type="submit">Create User</button>
        </form>
      </div>

      <style jsx>{`
        .background {
          height: 100vh; /* Full height background */
          background-color: #e0f7fa; /* Light background color */
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .container {
          max-width: 500px; /* Center the entire container */
          padding: 40px 20px;
          background-color: #ffffff; /* White background for the form */
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .title {
          text-align: center;
          color: #333;
        }
        .user-form {
          display: flex;
          flex-direction: column;
        }
        input {
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          padding: 10px;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #218838;
        }
        .success-message {
          text-align: center;
          color: #28a745;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}
