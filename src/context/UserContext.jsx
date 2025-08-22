import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch initial users
  useEffect(() => {
    const run = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data);
      } catch (e) {
        console.error("Failed to fetch users:", e);
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  // Add a user (client-only)
  const addUser = (user) => {
    setUsers((prev) => [...prev, { id: Date.now(), ...user }]);
  };

  return (
    <UserContext.Provider value={{ users, setUsers, addUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
