import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const activity_data = [
    {
      id: 1,
      name: "Temp",
      amount: 500000,
      pendingDocuments: 3,
      uploadedDocuments: 5,
    },
    { 
      id: 2,
      name: "Temp2",
      amount: 500000,
      pendingDocuments: 3,
      uploadedDocuments: 5,
    },
    {
      id: 3,
      name: "Temp3",
      amount: 500000,
      pendingDocuments: 3,
      uploadedDocuments: 5,
    },
    {
      id: 4,
      name: "Temp4",
      amount: 500000,
      pendingDocuments: 3,
      uploadedDocuments: 5,
    },
  ];

  const handleProjectClick = (id) => {
    navigate("/project/" + id);
  }

  return (
    <div className="container mx-auto p-6">
      {activity_data.map((project) => (
        <div
          key={project.id}
          className="w-full bg-white rounded-lg shadow-lg p-6 mb-6 cursor-pointer hover:shadow-xl transition-shadow duration-200"
          onClick={() => handleProjectClick(project.id)}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">{project.name}</h2>
          <div className="mt-2 text-gray-700">
            <p className="mb-1"><span className="font-bold">Project Amount:</span> ${project.amount.toLocaleString()}</p>
            <p className="mb-1"><span className="font-bold">Pending Documents:</span> {project.pendingDocuments}</p>
            <p className="mb-1"><span className="font-bold">Uploaded Documents:</span> {project.uploadedDocuments}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
