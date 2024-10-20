"use client";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the User Management App</h1>
      <p>Manage your users effortlessly with our simple tool.</p>
      <a href="/users" className="button">
        See All Users
      </a>
      <a href="/users/create" className="button">
        Create User
      </a>

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

        .button {
          margin: 0.5rem;
          padding: 1rem 2rem;
          background-color: #ffffff;
          color: #6a11cb;
          border-radius: 5px;
          text-decoration: none;
          font-size: 1.2rem;
          transition: background-color 0.3s, color 0.3s;
        }

        .button:hover {
          background-color: #6a11cb;
          color: white;
        }
      `}</style>
    </div>
  );
}
