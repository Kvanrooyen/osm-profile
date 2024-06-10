// src/components/RecentChangesets.js

import React, { useEffect, useState } from 'react';
import { fetchChangesetData } from '../api/osmApi';
import { formatDistanceToNow } from 'date-fns';
import './css/RecentChangesets.css';

const RecentChangesets = () => {
  const [recentChangesets, setRecentChangesets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecentChangesets = async () => {
      try {
        const endTime = new Date().toISOString(); // Current time
        const changesetData = await fetchChangesetData(endTime);

        // Sort changesets by createdAt date and take the 10 most recent ones
        const sortedChangesets = changesetData
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 10);

        setRecentChangesets(sortedChangesets);
      } catch (error) {
        console.error('Error fetching recent changesets:', error); // Add logging
        setError(error.message);
      }
    };

    getRecentChangesets();
  }, []);

  return (
    <div className="recent-changesets">
      <h2>Recent Changesets</h2>
      {error && <p>Error: {error}</p>}
      <ul>
        {recentChangesets.map((changeset, index) => (
          <li key={index} className="changeset-item">
            <a 
              className="changeset-link"
              href={`https://www.openstreetmap.org/changeset/${changeset.changesetId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="changeset-comment">{changeset.comment}</div>
              <div className="changeset-time">{formatDistanceToNow(new Date(changeset.createdAt))} ago</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentChangesets;
