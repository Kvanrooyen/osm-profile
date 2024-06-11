// src/api/osmApi.js

const USER_ID = 10282766; // Your OSM user ID
const START_TIME = '2023-11-01T00:00:00Z'; // Hardcoded start time
let userProfileCache = null;
let changesetDataCache = null;


export const fetchUserProfile = async () => {
  if (userProfileCache) {
    return userProfileCache;
  }
  const response = await fetch(`https://api.openstreetmap.org/api/0.6/user/${USER_ID}.json`);

  if (!response.ok) {
    console.error(`Failed to fetch user profile: ${response.status} ${response.statusText}`); // Add logging
    throw new Error('Could not fetch user profile');
  }

  const data = await response.json();
  userProfileCache = data.user;
  return data.user;
};

export const fetchChangesetData = async (endTime) => {
  let url = `https://api.openstreetmap.org/api/0.6/changesets.json?user=${USER_ID}&time=${START_TIME},${endTime}`;

  const response = await fetch(url);

  if (!response.ok) {
    console.error(`Failed to fetch changesets: ${response.status} ${response.statusText}`); // Add logging
    throw new Error('Could not fetch changesets');
  }

  const data = await response.json();

  const changesetData = data.changesets.map(changeset => {
    const changesetId = changeset.id;
    const changesCount = changeset.changes_count;
    const createdAt = changeset.created_at;
    const comment = changeset.tags.comment || 'No comment';
    return { changesetId, changesCount, createdAt, comment };
  });

  return changesetData;
};


export const fetchAllChangesetData = async () => {

  if (changesetDataCache) {
    return changesetDataCache;
  }

  let changesetData = [];
  let endTime = new Date().toISOString(); // Initialize with current time
  let hasMoreChangesets = true;
  let changesetsFetched = 0;

  while (hasMoreChangesets) {
    const data = await fetchChangesetData(endTime);

    if (data.length === 0) {
      hasMoreChangesets = false;
    } else {
      changesetData = changesetData.concat(data);
      changesetsFetched += data.length;
      console.log(`${changesetsFetched} changesets fetched`);

      // Set endTime to the date of the last changeset fetched, adjusting by one second to avoid duplicate entries
      endTime = new Date(new Date(data[data.length - 1].createdAt).getTime() - 1000).toISOString();
    }
  }

  changesetDataCache = changesetData;

  return changesetData;
};

export const fetchUserDetails = async () => {
  const userProfile = await fetchUserProfile();
  const changesetCount = userProfile.changesets.count;
  return { userProfile, changesetCount };
};
