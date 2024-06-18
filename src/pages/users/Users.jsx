import React, { useState } from "react";
import dummyImage from "../../assets/modelWoman.png";
import greyTick from "../../assets/users/greyTick.png";
import redCross from "../../assets/users/redCross.png";
import greenTick from "../../assets/users/greenTick.png";
import greyCross from "../../assets/users/greyCross.png";

const users = [
  {
    id: 1,
    name: "Tom Riddle",
    email: "riddle345@gmail.com",
    phone: "+44 3483 5768",
    location: "Chelmsford, United Kingdom",
    listings: 12,
    image: dummyImage,
    isBlocked: false,
  },
  {
    id: 2,
    name: "Tom Riddle",
    email: "riddle345@gmail.com",
    phone: "+44 3483 5768",
    location: "Chelmsford, United Kingdom",
    listings: 71,
    image: dummyImage,
    isBlocked: true,
  },
  {
    id: 3,
    name: "Tom Riddle",
    email: "riddle345@gmail.com",
    phone: "+44 3483 5768",
    location: "Chelmsford, United Kingdom",
    listings: 95,
    image: dummyImage,
    isBlocked: false,
  },
];

const UserListing = () => {
  const [blockPage, setBlockPage] = useState(false);

  return (
    <div className="p-1">
      <div className="flex justify-between items-center mb-4 px-[10px]">
        <h1 className="text-2xl font-medium">Users</h1>
        <div className="flex gap-4">
          <button
            className={`px-[26px] py-1 rounded-xl ${
              blockPage
                ? "bg-gray-200 text-gray-700"
                : "bg-button-green text-white"
            }`}
            onClick={() => setBlockPage(false)}
          >
            Active
          </button>
          <button
            className={`px-[26px] py-1 rounded-xl ${
              blockPage
                ? "bg-button-green text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setBlockPage(true)}
          >
            Blocked
          </button>
        </div>
      </div>
      <div
        className="p-4 bg-white rounded-xl"
        style={{ minHeight: "calc(100vh - 90px)" }}
      >
        <table className="min-w-full border-gray-200">
          <thead>
            <tr>
              <th className="py-4 text-left">Users</th>
              <th className="py-4 text-left">Name</th>
              <th className="py-4 text-left">Email</th>
              <th className="py-4 text-left">Phone No</th>
              <th className="py-4 text-left">Location</th>
              <th className="py-4 text-left">Listings</th>
              <th className="py-4 text-left"></th>
            </tr>
            <tr>
              <td colSpan="7" className="p-0">
                <hr className="border-black border-b-1 w-full" />
              </td>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              if (
                (blockPage && user.isBlocked) ||
                (!blockPage && !user.isBlocked)
              ) {
                return (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="pr-4 border-b text-left">
                      <img
                        src={user.image}
                        alt={user.name}
                        className="w-10 h-10 rounded-full mx-auto"
                      />
                    </td>
                    <td className="pr-4 border-b text-left">{user.name}</td>
                    <td className="pr-4 border-b text-left">{user.email}</td>
                    <td className="pr-4 border-b text-left">{user.phone}</td>
                    <td className="pr-4 border-b text-left">{user.location}</td>
                    <td className="pr-[25px] border-b text-left">
                      <div className="bg-button-green text-white rounded-[7px] inline-block px-4">
                        {user.listings}
                      </div>
                    </td>
                    <td className="py-6 pr-4 border-b text-left flex justify-between">
                      <div className="flex justify-center items-center">
                        <img
                          src={user.isBlocked ? greenTick : greyTick}
                          alt={user.isBlocked ? "greenTick" : "greyTick"}
                          className={`mr-2 p-[7px] rounded-full ${
                            user.isBlocked ? "bg-[#e7fae3]" : "bg-[#E3E3E3]"
                          }`}
                        />
                        <img
                          src={user.isBlocked ? greyCross : redCross}
                          alt={user.isBlocked ? "greyCross" : "redCross"}
                          className={`mr-2 p-[7px] rounded-full ${
                            user.isBlocked ? "bg-[#e3e3e3]" : "bg-[#ffecec]"
                          }`}
                        />
                      </div>
                      <button className="px-[10px] py-[0.5px] border-[1px] text-[11px] border-[#5dbbae] bg-[#F6F6F6] text-[#5dbbae] rounded-lg">
                        View Details
                      </button>
                    </td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserListing;
