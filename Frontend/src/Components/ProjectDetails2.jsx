import React from 'react';
import Header from "./Header";

const ProjectDetails2 = () => {

  const project = [
    {
      id: 3,
      name: "Child Fund",
      uploadedDocuments: 3,
      pendingDocuments: 3,
      pendingfileName: ["doc1", "doc2", "doc3"],
      uploadedfileName: ["doc5", "doc6", "doc7"],
      dueDates: ["20th July 2024","20th July 2024","20th July 2024","20th July 2024"],
      regionData: [5, 2, 4, 3], 
    }
  ];

  // Access the first project object in the array
  const currentProject = project[0];

  const totalDocuments = currentProject.uploadedDocuments + currentProject.pendingDocuments;
  const progressPercentage = (currentProject.uploadedDocuments / totalDocuments) * 100;

  return (
    <>
      <Header />
      <div className="w-full bg-white rounded-lg shadow-md p-4 mb-4">
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        <div className="w-full mb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Pending Documents</h2>
          {currentProject.pendingDocuments > 0 ? (
            currentProject.pendingfileName.map((fileName, index) => (
              <div key={index} className="flex items-center mb-2">
                <span className="text-gray-600">{fileName}</span>
                <span className="text-gray-600 ml-auto">Due Date: {currentProject.dueDates[index]}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No pending documents</p>
          )}
        </div>

        <div className="w-full">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Uploaded Documents</h2>
          {currentProject.uploadedDocuments > 0 ? (
            currentProject.uploadedfileName.map((fileName, index) => (
              <p key={index} className="text-gray-600 mb-2">{fileName}</p>
            ))
          ) : (
            <p className="text-gray-600">No uploaded documents</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectDetails2;