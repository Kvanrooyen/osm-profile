// src/components/RecentChangesets.js

import React, { useEffect, useState } from 'react';
import { fetchChangesetData } from '../api/osmApi';
import { formatDistanceToNow } from 'date-fns';
import './css/RecentChangesets.css';

const RecentChangesets = () => {
  const [recentChangesets, setRecentChangesets] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecentChangesets = async () => {
      try {
        const endTime = new Date().toISOString(); // Current time
        const changesetData = await fetchChangesetData(endTime);

        // Sort changesets by createdAt date and take the 5 most recent ones
        const sortedChangesets = changesetData
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 5);

        setRecentChangesets(sortedChangesets);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching recent changesets:', error); // Add logging
        setError(error.message);
        setLoading(false); // Set loading to false in case of error
      }
    };

    getRecentChangesets();
  }, []);

  return (
    <div className="profile-overview recent-changesets">
      <h2>Recent Changesets</h2>
      {error && <p>Error: {error}</p>}
      {loading ? (
        <ul>
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="changeset-placeholder">
              <div className="placeholder-comment"></div>
              <div className="placeholder-time"></div>
            </li>
          ))}
        </ul>
      ) : (
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
      )}
    </div>
  );
};

export default RecentChangesets;