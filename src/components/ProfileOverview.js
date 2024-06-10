// src/components/ProfileOverview.js

import React, { useEffect, useState } from 'react';
import { fetchUserDetails, fetchAllChangesetData } from '../api/osmApi';
import './css/ProfileOverview.css';

const ProfileOverview = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [changesetCount, setChangesetCount] = useState(null);
  const [totalChanges, setTotalChanges] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const { userProfile, changesetCount } = await fetchUserDetails();
        const changesetData = await fetchAllChangesetData();

        // Calculate the total number of changes
        const totalChanges = changesetData.reduce((sum, { changesCount }) => sum + changesCount, 0);

        setUserProfile(userProfile);
        setChangesetCount(changesetCount);
        setTotalChanges(totalChanges);
      } catch (error) {
        setError(error.message);
      }
    };

    getUserDetails();
  }, []);

  return (
    <div className="profile-overview">
      {userProfile && (
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
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default ProfileOverview;
