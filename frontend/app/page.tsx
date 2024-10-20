"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [loadingSeeAll, setLoadingSeeAll] = useState(false);
  const [loadingCreateUser, setLoadingCreateUser] = useState(false);
  const router = useRouter();

  const handleSeeAllUsersClick = () => {
    setLoadingSeeAll(true);
    setTimeout(() => {
      router.push("/users");
    }, 1000);
  };

  const handleCreateUserClick = () => {
    setLoadingCreateUser(true);
    setTimeout(() => {
      router.push("/users/create");
    }, 1000);
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
        </button>
        <button
          className="button"
          onClick={handleCreateUserClick}
          disabled={loadingCreateUser}
        >
          {loadingCreateUser ? "Create User" : "Create User"}{" "}
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
          display: flex;
          gap: 1rem;
        }

        .button {
          padding: 1rem 2rem;
          background-color: #ffffff;
          color: #6a11cb;
          border-radius: 5px;
          text-decoration: none;
          font-size: 1.2rem;
          transition: background-color 0.3s, color 0.3s;
          cursor: pointer;
        }

        .button:hover {
          background-color: #6a11cb;
          color: white;
        }

        button:disabled {
          background-color: #ddd;
          color: #aaa;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
