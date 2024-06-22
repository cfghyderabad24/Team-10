import React from 'react';
import Header from "./Header";
import Info from "./Personal_Info";
import Projects from './Projects';
import RadarChart from "./RadarChart";
import BarChart from './BarChart';
import LineChart from './LineChart';

const Home_RM = () => {
  const onTrackProjects = ["Project Alpha", "Project Beta", "Project Gamma"];
  const regionData = [5, 2, 4, 3];
  const organizationGrowthData = [20, 25, 30, 35, 40];
  const regionSuccessRateData = [75, 80, 85, 90, 95, 100, 90];

  return (
    <>
      <Header />
      <div className="container mx-auto p-6 bg-yellow-50 min-h-screen">
        <h1 className='text-3xl font-bold text-black mb-6'>Region Overview</h1>
        <div className="flex justify-between mb-6">
          <div className="w-1/2 bg-white rounded-lg shadow-md p-6 border border-gray-300">
            <h2 className="text-xl font-semibold text-black mb-4">Year on Year Growth</h2>
            <BarChart data={organizationGrowthData} />
          </div>
          <div className="w-1/2 bg-white rounded-lg shadow-md p-6 ml-4 border border-gray-300">
            <h2 className="text-xl font-semibold text-black mb-4">Region Success Rate</h2>
            <LineChart data={regionSuccessRateData} />
          </div>
        </div>
        <div className="flex justify-between mb-6">
          <div className="w-1/2 bg-white rounded-lg shadow-md p-6 border border-gray-300">
            <h2 className="text-xl font-semibold text-black mb-4">Goal Completion</h2>
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-2 border border-gray-300 bg-yellow-200">Month</th>
                  <th className="px-4 py-2 border border-gray-300 bg-yellow-200">Completion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-gray-300">Jan</td>
                  <td className="px-4 py-2 border border-gray-300">70%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-gray-300">July</td>
                  <td className="px-4 py-2 border border-gray-300">90%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-1/2 bg-white rounded-lg shadow-md p-6 ml-4 border border-gray-300">
            <h2 className="text-xl font-semibold text-black mb-4">On Track Projects</h2>
            <ul className="list-disc list-inside text-gray-700">
              {onTrackProjects.map((project, index) => (
                <li key={index} className="mb-1">{project}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full mb-6 bg-white rounded-lg shadow-md p-6 border border-gray-300">
          <h2 className="text-2xl font-bold text-black mb-4">Risk</h2>
          <RadarChart data={regionData} />
        </div>
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
    </>
  );
};

export default Home_RM;
