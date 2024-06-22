import { useNavigate } from "react-router-dom";

const Projects = () =>{

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

  const handleProjectClick = (id) =>{
    navigate("/project/" + id);
  }

  return (
    <>
    <div className="container mx-auto p-4">
      {activity_data.map((activity_data, index) => (
        <div key={activity_data.id} className="w-full bg-white rounded-lg shadow-md p-4 mb-4"  onClick={() => handleProjectClick(activity_data.id)}>
          <h2 className="text-xl font-bold text-gray-800">{activity_data.name}</h2>
          <div className="mt-2">
          <p className="text-gray-600">Project Amount: {activity_data.amount}</p>
            <p className="text-gray-600">Pending Documents: {activity_data.pendingDocuments}</p>
            <p className="text-gray-600">Uploaded Documents: {activity_data.uploadedDocuments}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );

}

export default Projects;