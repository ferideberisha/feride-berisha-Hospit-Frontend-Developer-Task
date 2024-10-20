"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const apiUrl = "https://jsonplaceholder.typicode.com/users";

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(apiUrl);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="background">
      <div className="user-management">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .background {
          min-height: 100vh;
          background: linear-gradient(to right, #ffecd2, #fcb69f);
          padding: 40px 20px; /* Padding for space around the content */
        }

        .user-management {
          background-color: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 900px;
          margin: 0 auto; /* Center horizontally */
        }

        h1 {
          text-align: center;
          margin-bottom: 30px;
          color: #333;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
        }

        th,
        td {
          padding: 16px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        th {
          background-color: #4caf50;
          color: white;
        }

        tr:nth-child(even) {
          background-color: #f2f2f2;
        }

        tr:hover {
          background-color: #ddd;
        }
      `}</style>
    </div>
  );
}
