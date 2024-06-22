import React from "react";
import { PieChart } from "@mui/x-charts";

function pickRandomNonRepetitiveNumbers() {
  let numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  let pickedNumbers = [];
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const pickedNumber = numbers[randomIndex];
    numbers.splice(randomIndex, 1);
    pickedNumbers.push(pickedNumber);
  }
  return pickedNumbers;
}

const fields = [
  "Food Procurement",
  "Food Preparation",
  "Transportation",
  "Storage and Preservation",
  "Distribution",
  "Nutritional Supplements",
  "Hygiene and Sanitation",
  "Staff and Administration",
  "Monitoring and Evaluation",
  "Advocacy and Outreach",
];


export const ProjectDetails = () => {
  const util = pickRandomNonRepetitiveNumbers();
  console.log(util);
  return (
    <div>
      ProjectDetails
      {console.log(fields[util[0]])};
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: fields[util[0]] },
              { id: 1, value: 15, label: fields[util[1]] },
              { id: 2, value: 20, label: fields[util[2]] },
              { id: 3, value: 30, label: fields[util[3]] },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </div>
  );
};
