import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const activity_data = [
    {
      id: 1,
      name: "Temp",
      amount: 500000,
      region: "North",
    },
    { 
      id: 2,
      name: "Temp",
      amount: 500000,
      region: "South",
    },
    {
      id: 3,
      name: "Temp",
      amount: 500000,
      region: "East",
    },
    {
      id: 4,
      name: "Temp",
      amount: 500000,
      region: "West",
    },
  ];

  const handleProjectClick = (id) => {
    navigate("/project/" + id);
  }

  return (
    <div className="container mx-auto p-6 bg-yellow-50 min-h-screen">
      {activity_data.map((project) => (
        <div
          key={project.id}
          className="w-full bg-white rounded-lg shadow-lg p-6 mb-6 cursor-pointer hover:shadow-xl transition-shadow duration-200 border border-gray-300"
          onClick={() => handleProjectClick(project.id)}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">{project.name}</h2>
          <div className="mt-2 text-gray-700">
            <p className="mb-1">
              <span className="font-bold text-yellow-600">Project Amount:</span> ₹{project.amount.toLocaleString()}
            </p>
            <p className="mb-1">
              <span className="font-bold text-yellow-600">Region:</span> {project.region}
            </p>
          </div>
        </div>
      ))}
      <footer className="bg-yellow-100 text-black py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold">Team 10</h2>
            <p className="text-sm">© 2023 Team 10. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="/about" className="hover:underline text-black-500">About Us</a>
            <a href="/contact" className="hover:underline text-black-500">Contact</a>
            <a href="/privacy" className="hover:underline text-black-500">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Projects;

