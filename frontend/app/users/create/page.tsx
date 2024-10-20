"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/app/context/UserContext"; // Import context

export default function CreateUser() {
  const { addUser } = useUserContext(); // Access context
  const router = useRouter();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUser = {
      id: Math.floor(Math.random() * 1000), // Simulate ID
      name,
      username,
      email,
      phone,
      address: { street, suite, city, zipcode },
    };

    addUser(newUser); // Add the new user to context
    setSuccessMessage("User created successfully!");
    router.push("/users"); // Redirect to user list

    // Clear form after submission
    setName("");
    setUsername("");
    setEmail("");
    setPhone("");
    setStreet("");
    setSuite("");
    setCity("");
    setZipcode("");
  };

  return (
    <div className="background">
      <div className="form-container">
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
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to right, #4facfe, #00f2fe);
        }

        .form-container {
          background-color: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          width: 100%;
        }

        .title {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }

        .user-form {
          display: flex;
          flex-direction: column;
        }

        .user-form input {
          margin-bottom: 15px;
          padding: 12px;
          font-size: 16px;
          border: 1px solid #ddd;
          border-radius: 5px;
          outline: none;
          transition: border-color 0.3s;
        }

        .user-form input:focus {
          border-color: #4facfe;
        }

        button {
          background-color: #28a745;
          color: white;
          border: none;
          padding: 12px;
          font-size: 16px;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #218838;
        }

        .success-message {
          text-align: center;
          color: #28a745;
          font-weight: bold;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
