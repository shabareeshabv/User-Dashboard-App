import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        {/* HEADER */}
        <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="font-bold text-xl tracking-wide hover:text-yellow-400 transition duration-300"
            >
              User Dashboard
            </Link>

           
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="bg-gray-100 min-h-screen py-8">
          <div className="max-w-7xl mx-auto px-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/user/:id" element={<UserDetails />} />
            </Routes>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-gray-300 text-center py-4 mt-10">
          <p className="text-sm">
            © {new Date().getFullYear()} User Dashboard. All rights reserved.
          </p>
        </footer>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
