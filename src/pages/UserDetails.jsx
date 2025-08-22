// src/pages/UserDetails.jsx
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserDetails = () => {
  const { id } = useParams();
  const { users } = useContext(UserContext);

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <p className="text-center text-red-500 mt-10">User not found</p>;
  }

  return (
    <div className="min-h-screen bg-color-succes bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg rounded-[30px] bg-white shadow-2xl p-8 transition-transform transform hover:scale-95">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          {user.name}
        </h2>

        <div className="flex flex-col gap-5">
          {/* User Info Cards */}
          <div className="bg-indigo-100 p-5 rounded-xl hover:bg-indigo-100 transition">
            <p className="text-gray-700 font-medium">Username</p>
            <p className="text-gray-900 font-semibold text-lg">{user.username}</p>
          </div>

          <div className="bg-green-100 p-5 rounded-xl hover:bg-green-200 transition">
            <p className="text-gray-700 font-medium">Email</p>
            <p className="text-gray-900 font-semibold text-lg">{user.email}</p>
          </div>

          <div className="bg-yellow-100 p-5 rounded-xl hover:bg-yellow-200 transition">
            <p className="text-gray-700 font-medium">Phone</p>
            <p className="text-gray-900 font-semibold text-lg">{user.phone}</p>
          </div>

          <div className="bg-pink-100 p-5 rounded-xl hover:bg-pink-200 transition">
            <p className="text-gray-700 font-medium">Website</p>
            <p className="text-gray-900 font-semibold text-lg">{user.website}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
