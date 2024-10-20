"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUserContext } from "@/app/context/UserContext"; // Import context

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

const apiUrl = "https://jsonplaceholder.typicode.com/users";

export default function UserManagement() {
  const [apiUsers, setApiUsers] = useState<User[]>([]);
  const { users: contextUsers, deleteUser, updateUser } = useUserContext(); // Use deleteUser from context
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formData, setFormData] = useState<Omit<User, "id"> | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(apiUrl);
        setApiUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const users = [...contextUsers, ...apiUsers]; // Combine API and context users

  const handleEditClick = (user: User) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (formData) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleUpdateUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingUser && formData) {
      const updatedUser = { ...editingUser, ...formData };
      updateUser(updatedUser); // Use context to update user
      setEditingUser(null); // Close the edit form
      setFormData(null); // Clear the form data
    }
  };
  const handleCancelEdit = () => {
    setEditingUser(null);
    setFormData(null);
  };

  const handleDeleteUser = (userId: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      deleteUser(userId); // Call deleteUser from context
      setApiUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== userId)
      ); // Optionally keep this
    }
  };

  return (
    <div className="background">
      <div className="user-management">
        {editingUser ? (
          <div className="form-container">
            <h2>Edit User</h2>
            <form onSubmit={handleUpdateUser}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData?.name || ""}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData?.username || ""}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData?.email || ""}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData?.phone || ""}
                onChange={handleChange}
                required
              />
              <div className="button-container">
                <button type="submit" className="update-button">
                  Update User
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <div className="button-container">
                      <button
                        onClick={() => handleEditClick(user)}
                        className="edit-button"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteUser(user.id)}
                        className="delete-button"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <style jsx>{`
        /* Existing styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .background {
          min-height: 100vh;
          background: linear-gradient(to right, #ffecd2, #fcb69f);
          padding: 40px 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .user-management {
          background-color: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 1400px;
          margin: 0 auto;
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
          font-size: 20px;
          font-weight: bold;
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

        .form-container {
          margin: 20px auto;
          max-width: 500px;
          padding: 20px;
          border-radius: 10px;
          background-color: white;
        }

        input {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}
