// src/api/osmApi.js

const USER_ID = 10282766; // Your OSM user ID

export const fetchUserProfile = async () => {
  const response = await fetch(`https://api.openstreetmap.org/api/0.6/user/${USER_ID}.json`);
  if (!response.ok) {
    throw new Error('Could not fetch user profile');
  }
  const data = await response.json();
  return data.user;
};

export const fetchUserDetails = async () => {
  const userProfile = await fetchUserProfile();
  const changesetCount = userProfile.changesets.count;
  return { userProfile, changesetCount };
};
