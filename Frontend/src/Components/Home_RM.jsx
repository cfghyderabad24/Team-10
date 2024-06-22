import React,{useState} from 'react';
import Header from "./Header"
import Info from "./Personal_Info"
import Projects from './Projects';
import RadarChart from "./RadarChart";
import BarChart from './BarChart';
import LineChart from './LineChart';

const Home_RM = () =>{
  const onTrackProjects = ["Project Alpha", "Project Beta", "Project Gamma"];
  const regionData =  [5, 2, 4, 3];
  const organizationGrowthData = [20, 25, 30, 35, 40];
  const regionSuccessRateData = [75, 80, 85, 90, 95, 100, 90];
  
  return (
    <>
      <Header int={"RM"}/>
      <h1 className='text-2xl font-bold text-gray-800 mb-2'>REGION OVERVIEW</h1>
      <div className="flex justify-between">
          <div className="w-1/2 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Year on Year Growth</h2>
            <BarChart data={organizationGrowthData} />
          </div>
          <div className="w-1/2 bg-white rounded-lg shadow-md p-4 ml-4">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Region Success Rate</h2>
            <LineChart data={regionSuccessRateData} />
          </div>
      </div>
      <div className="container mx-auto p-4">
      <div className="flex justify-between">
        
        <div className="w-1/2 bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Goal Completion</h2>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Month</th>
                <th className="px-4 py-2 border">Completion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Jan</td>
                <td className="px-4 py-2 border">70%</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">July</td>
                <td className="px-4 py-2 border">90%</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="w-1/2 bg-white rounded-lg shadow-md p-4 ml-4">
          <h2 className="text-lg font-bold text-gray-800 mb-2">On Track Projects</h2>
          <ul className="list-disc list-inside">
            {onTrackProjects.map((project, index) => (
              <li key={index} className="text-gray-600">{project}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full mb-4">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Risk</h2>
          <RadarChart data={regionData} />
      </div>
    </div>
    </>
  )  
};

export default Home_RM;