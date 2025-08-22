import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const UserForm = () => {
  const { addUser } = useContext(UserContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: { name: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("company.")) {
      setForm((f) => ({ ...f, company: { ...f.company, name: value } }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(form);
    setForm({ name: "", email: "", phone: "", company: { name: "" } });
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="rounded-[30px] p-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-xl hover:shadow-2xl transition-all duration-300">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-[25px] p-6 space-y-5"
        >
          <h3 className="text-2xl font-bold text-center text-gray-800">
             Create New User
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              className="border rounded-[20px] px-4 py-3 text-gray-800 text-sm md:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 shadow-sm hover:shadow-md"
              placeholder="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className="border rounded-[20px] px-4 py-3 text-gray-800 text-sm md:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 shadow-sm hover:shadow-md"
              placeholder="Email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              className="border rounded-[20px] px-4 py-3 text-gray-800 text-sm md:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 shadow-sm hover:shadow-md"
              placeholder="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <input
              className="border rounded-[20px] px-4 py-3 text-gray-800 text-sm md:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300 shadow-sm hover:shadow-md"
              placeholder="Company"
              name="company.name"
              value={form.company.name}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-center mt-3">
            <button
              type="submit"
              className="rounded-[25px] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                         text-white py-2 px-6 text-sm font-semibold hover:scale-105 hover:brightness-110
                         shadow-lg transition-transform duration-300"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;