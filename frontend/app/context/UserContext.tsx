"use client"; // This file is a Client Component

import React, { createContext, useContext, useState, ReactNode } from "react";

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

interface UserContextType {
  users: User[];
  addUser: (user: User) => void;
  deleteUser: (userId: number) => void; // Add deleteUser function
  updateUser: (user: User) => void; // Add updateUser function
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const deleteUser = (userId: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const updateUser = (updatedUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
