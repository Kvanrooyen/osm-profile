// src/components/HeatMap.js

import React, { useState, useEffect } from 'react';
import HeatMap from '@uiw/react-heat-map';
import './css/HeatMap.css';

const HeatMapComponent = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    const fetchContributionData = async () => {
      // Fetch the heat map data from an appropriate endpoint
      // Placeholder data for demonstration
      const data = [
        { date: '2023-01-01', count: 5 },
        // Add more date/count objects here based on fetched data
      ];
      setValues(data);
    };

    fetchContributionData();
  }, []);

  return (
    <div className="heat-map">
      <HeatMap
        value={values}
        rectSize={10} // Adjust the size of each rect to scale down
        legendCellSize={10} // Adjust the size of legend cells
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default HeatMapComponent;
