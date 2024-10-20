"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter to handle navigation

export default function Home() {
  const [loadingSeeAll, setLoadingSeeAll] = useState(false); // Add loading state for "See All Users"
  const [loadingCreateUser, setLoadingCreateUser] = useState(false); // Add loading state for "Create User"
  const router = useRouter(); // Create a router instance

  const handleSeeAllUsersClick = () => {
    setLoadingSeeAll(true); // Set loading to true for "See All Users"
    setTimeout(() => {
      router.push("/users"); // Navigate after a short delay
    }, 1000); // Delay for 1 second to show loader
  };

  const handleCreateUserClick = () => {
    setLoadingCreateUser(true); // Set loading to true for "Create User"
    setTimeout(() => {
      router.push("/users/create"); // Navigate after a short delay
    }, 1000); // Delay for 1 second to show loader
  };

  return (
    <div className="home-container">
      <h1>Welcome to the User Management App</h1>
      <p>Manage your users effortlessly with our simple tool.</p>
      <div className="button-container">
        <button
          className="button"
          onClick={handleSeeAllUsersClick}
          disabled={loadingSeeAll}
        >
          {loadingSeeAll ? "See All Users" : "See All Users"}{" "}
          {/* Conditional button text */}
        </button>
        <button
          className="button"
          onClick={handleCreateUserClick}
          disabled={loadingCreateUser}
        >
          {loadingCreateUser ? "Create User" : "Create User"}{" "}
          {/* Conditional button text */}
        </button>
      </div>

      <style jsx>{`
        .home-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: linear-gradient(to right, #6a11cb, #2575fc);
          color: white;
          text-align: center;
          font-family: sans-serif;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }

        .button-container {
          display: flex; /* Use flexbox to arrange buttons in a row */
          gap: 1rem; /* Add space between buttons */
        }

        .button {
          padding: 1rem 2rem;
          background-color: #ffffff;
          color: #6a11cb;
          border-radius: 5px;
          text-decoration: none;
          font-size: 1.2rem;
          transition: background-color 0.3s, color 0.3s;
          cursor: pointer; /* Change cursor to pointer for button */
        }

        .button:hover {
          background-color: #6a11cb;
          color: white;
        }

        button:disabled {
          background-color: #ddd; /* Change background color when disabled */
          color: #aaa; /* Change text color when disabled */
          cursor: not-allowed; /* Change cursor to not-allowed */
        }
      `}</style>
    </div>
  );
}
