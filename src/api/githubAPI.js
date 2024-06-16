// src/api/githubApi.js

const GITHUB_USERNAME = 'Kvanrooyen';
const GITHUB_REPO = 'osm-profile';

export const fetchCurrentVersion = async () => {
    try {
        const response = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/releases`);
        if (!response.ok) {
            throw new Error(`GitHub API returned an error: ${response.statusText}`);
        }
        const data = await response.json();
        if (data && data.length > 0) {
            const latestTag = data[0].name; // Assuming the first tag is the latest
            return latestTag;
        } else {
            throw new Error('No tags found');
        }
    } catch (error) {
        console.error('Error fetching current version:', error);
        throw error;
    }
};

export const fetchLatestCommitSha = async (tagName) => {
    try {
        const response = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/commits/tags/${tagName}`);
        if (!response.ok) {
            throw new Error(`GitHub API returned an error: ${response.statusText}`);
        }
        const data = await response.json();
        if (data && data.sha) {
            return data.sha.substring(0, 7); // Return the first 7 characters of the commit SHA
        } else {
            throw new Error('No commit found for the latest tag');
        }
    } catch (error) {
        console.error('Error fetching latest commit SHA:', error);
        throw error;
    }
};
