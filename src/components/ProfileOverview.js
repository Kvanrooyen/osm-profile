// src/components/ProfileOverview.js

import React, { useEffect, useState } from 'react';
import { fetchUserDetails } from '../api/osmApi';
import HeatMapComponent from './HeatMap';
import './css/ProfileOverview.css';

const ProfileOverview = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [changesetCount, setChangesetCount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const { userProfile, changesetCount } = await fetchUserDetails();
        setUserProfile(userProfile);
        setChangesetCount(changesetCount);
      } catch (error) {
        setError(error.message);
      }
    };

    getUserDetails();
  }, []);

  return (
    <div className="profile-overview">
      {userProfile && (
        <div className="profile-header">
          <div className="profile-avatar">
            <img src={userProfile.img.href} alt="Profile Avatar" />
          </div>
          <div className="profile-info">
            <h1>{userProfile.display_name}</h1>
            <p>Map Edits: {changesetCount}</p>
          </div>
        </div>
      )}
      {error && <p>Error: {error}</p>}
      <HeatMapComponent />
    </div>
  );
};

export default ProfileOverview;
