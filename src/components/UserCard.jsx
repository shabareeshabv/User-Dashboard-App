import React from "react";
import { Link } from "react-router-dom";

const palettes = [
  "from-indigo-500 via-purple-500 to-pink-500",
  "from-emerald-500 via-teal-500 to-cyan-500",
  "from-amber-500 via-orange-500 to-rose-500",
  "from-sky-500 via-blue-500 to-indigo-600",
  "from-fuchsia-500 via-pink-500 to-rose-500",
];

const UserCard = ({ user, colorIndex = 0 }) => {
  const gradient = palettes[colorIndex % palettes.length];

  return (
    <div className={`w-72 sm:w-80 md:w-80 rounded-3xl p-1 bg-gradient-to-r ${gradient} shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}>
      <div className="bg-white rounded-3xl p-5 h-full flex flex-col transition-colors duration-300 hover:bg-gray-50">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">{user.name}</h2>

        <div className="space-y-2">
          <div className="p-3 rounded-2xl bg-gray-100 hover:bg-indigo-100 transition flex items-center gap-2">
            📧 <span className="font-medium">{user.email}</span>
          </div>
          <div className="p-3 rounded-2xl bg-gray-100 hover:bg-green-100 transition flex items-center gap-2">
            📞 <span className="font-medium">{user.phone}</span>
          </div>
          <div className="p-3 rounded-2xl bg-gray-100 hover:bg-pink-100 transition flex items-center gap-2">
            🏢 <span className="font-medium">{user.company?.name || "—"}</span>
          </div>
        </div>

        <Link
          to={`/user/${user.id}`}
          className="mt-4 inline-block text-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-semibold hover:scale-105 hover:brightness-110 shadow-md transition-all duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default UserCard;