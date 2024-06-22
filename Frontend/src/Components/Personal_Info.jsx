import React from "react"

const Info = () =>{
  const org = {
    name: 'NGO',
    details: 'Any Details of Ngo',
    email: 'john.doe@example.com',
  };
  
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-8">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src="https://via.placeholder.com/150" alt="Student profile" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Organization Profile</div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{org.name}</h1>
          <p className="mt-2 text-gray-500">Details: {org.details}</p>
          <p className="mt-2 text-gray-500">Email: <a href={`mailto:${org.email}`} className="text-indigo-600 hover:text-indigo-900">{org.email}</a></p>
        </div>
      </div>
    </div>
  )
}

export default Info;