// src/api/osmApi.js

const USER_ID = 10282766; // Your OSM user ID
const START_TIME = '2023-11-01T00:00:00Z'; // Hardcoded start time

export const fetchUserProfile = async () => {
  const response = await fetch(`https://api.openstreetmap.org/api/0.6/user/${USER_ID}.json`);

  if (!response.ok) {
    throw new Error('Could not fetch user profile');
  }

  const data = await response.json();
  return data.user;
};

export const fetchChangesetData = async (endTime) => {
  let url = `https://api.openstreetmap.org/api/0.6/changesets?user=${USER_ID}&time=${START_TIME},${endTime}`;

  const response = await fetch(url);

  if (!response.ok) {
    console.error(`Failed to fetch changesets: ${response.status} ${response.statusText}`); // Add logging
    throw new Error('Could not fetch changesets');
  }

  const text = await response.text();
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(text, 'application/xml');
  const changesets = xmlDoc.getElementsByTagName('changeset');

  const changesetData = Array.from(changesets).map(changeset => {
    const changesCount = parseInt(changeset.getAttribute('changes_count'), 10);
    const createdAt = changeset.getAttribute('created_at');
    return { changesCount, createdAt };
  });

  return changesetData;
};

export const fetchAllChangesetData = async () => {
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

  return changesetData;
};

export const fetchUserDetails = async () => {
  const userProfile = await fetchUserProfile();
  const changesetCount = userProfile.changesets.count;
  return { userProfile, changesetCount };
};
