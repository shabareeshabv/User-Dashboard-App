// src/pages/Dashboard.jsx
import React, { useContext, useMemo, useState } from "react";
import { UserContext } from "../context/UserContext";
import UserCard from "../components/UserCard";
import UserForm from "../components/UserForm";

const Dashboard = () => {
  const { users, loading } = useContext(UserContext);
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () => users.filter((u) => u.name.toLowerCase().includes(search.toLowerCase())),
    [users, search]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-indigo-700 mb-8">
        User Dashboard
      </h1>

      {/* Search Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-3xl mx-auto mb-8 flex flex-col sm:flex-row gap-3 items-center bg-white p-4 rounded-3xl shadow-lg"
      >
        <div className="relative flex-1 w-full">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users by name..."
            className="border rounded-[25px] px-4 py-3 text-gray-800 text-base md:text-lg placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm hover:shadow-md transition-all duration-300 w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="rounded-[25px] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                         text-white py-2 px-6 text-sm font-semibold hover:scale-105 hover:brightness-110
                         shadow-lg transition-transform duration-300"
        >
          Search
        </button>
      </form>

      {/* Form Section */}
      <div className="flex flex-col lg:flex-row gap-6 items-start justify-between max-w-7xl mx-auto mb-8 bg-white p-6 rounded-3xl shadow-xl">
        <UserForm />
      </div>

      {/* Users List */}
      <div className="max-w-7xl mx-auto mt-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">Live Users</h3>
        {loading ? (
          <p className="text-center text-gray-700">Loading users…</p>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center">
            {filtered.map((u, i) => (
              <div
                key={u.id}
                className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-3xl p-4 shadow-lg hover:shadow-2xl transition transform hover:scale-105"
              >
                <UserCard user={u} colorIndex={i} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
