// src/components/ProfileOverview.js

import React, { useEffect, useState } from 'react';
import { fetchUserDetails, fetchAllChangesetData } from '../api/osmApi';
import './css/ProfileOverview.css';

const ProfileOverview = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [changesetCount, setChangesetCount] = useState(null);
  const [totalChanges, setTotalChanges] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const [userDetails, changesetData] = await Promise.all([fetchUserDetails(), fetchAllChangesetData()]);
        const { userProfile, changesetCount } = userDetails;

        // Calculate the total number of changes
        const totalChanges = changesetData.reduce((sum, { changesCount }) => sum + changesCount, 0);

        setUserProfile(userProfile);
        setChangesetCount(changesetCount);
        setTotalChanges(totalChanges);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching user details or changeset data:', error); // Add logging
        setError(error.message);
        setLoading(false); // Set loading to false in case of error
      }
    };

    getUserDetails();
  }, []);

  return (
    <div className="profile-overview">
      {loading ? (
        <div className="profile-placeholder">
          <div className="placeholder-avatar"></div>
          <div className="placeholder-info">
            <div className="placeholder-name"></div>
            <div className="placeholder-changesets"></div>
            <div className="placeholder-total-changes"></div>
          </div>
        </div>
      ) : (
        userProfile && (
          <>
            <div className="profile-header">
              <div className="profile-avatar">
                <img src={userProfile.img.href} alt="Profile Avatar" />
              </div>
              <div className="profile-info">
                <a
                  className="profile-link"
                  href={`https://www.osm.org/user/GovernorKeagan`}
                  target="_blank"
                  rel="noopener noreferrer">
                  <h1>{userProfile.display_name}</h1>
                </a>
                <div className="profile-info-highlights">
                  <p>{changesetCount} Changesets</p>
                  <p>{totalChanges} Changes</p>
                </div>
              </div>
            </div>
          </>
        )
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default ProfileOverview;
