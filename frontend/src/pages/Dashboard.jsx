import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Dashboard = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [balance, setBalance] = useState(0);

  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/account/balance", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setBalance(res.data.balance);
      });
  }, [token]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar name={name} />

      <div className="container mx-auto pt-24">
        <div className=" flex justify-between items-center bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="text-lg font-semibold text-orange-500">My Balance:</div>
          <div className="text-2xl font-bold text-black">Rs. {balance}</div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="text-lg font-semibold text-orange-500 mb-4">Users</div>
          <input
            type="text"
            placeholder="Search user..."
            className="border p-2 w-full rounded-md shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={(e) => setFilter(e.target.value)}
          />
          {users.map((user) =>
            user._id !== localStorage.getItem("id") ? (
              <User key={user._id} user={user} navigate={navigate} />
            ) : null
          )}
        </div>
      </div>

      <Footer />

    </div>
  );
};

const User = ({ user, navigate }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center justify-between hover:shadow-lg transition duration-300">
      <div className="flex items-center">
        <div className="bg-yellow-200 rounded-full h-12 w-12 flex items-center justify-center text-yellow-600 font-bold">
          {user.firstname[0]}
        </div>
        <div className="ml-4">
          <div className="text-lg font-medium text-black">
            {user.firstname} {user.lastname}
          </div>
        </div>
      </div>
      <button
        onClick={() =>
          navigate(`/send?id=${user._id}&name=${user.firstname} ${user.lastname}`)
        }
        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
      >
        Send Money
      </button>
    </div>
  );
};

export default Dashboard;







