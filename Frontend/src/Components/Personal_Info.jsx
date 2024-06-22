import React from "react";
import children from "../assets/child.jpeg"

const Info = () => {
  const org = {
    name: 'NGO',
    details: 'Any Details of Ngo',
    email: 'support@ngo.com',
  };

  return (
    <div className="bg-yellow-100 p-4 rounded-lg mb-6"> {/* Wrapper div for yellow background */}
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:max-w-2xl mt-10">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={children}
              alt="Organization profile"
            />
          </div>
          <div className="p-6">
            <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
              Organization Profile
            </div>
            <h1 className="block mt-2 text-2xl leading-tight font-semibold text-gray-900">
              {org.name}
            </h1>
            <p className="mt-4 text-gray-700">
              Details: {org.details}
            </p>
            <p className="mt-2 text-gray-700">
              Ngo Email: <a href={`mailto:${org.email}`} className="text-indigo-600 hover:text-indigo-900">{org.email}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
