// src/components/Footer.js

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMastodon } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { fetchLatestCommitSha, fetchCurrentVersion } from '../api/githubAPI';
import './css/Footer.css';

const Footer = () => {
    const [latestCommitSha, setLatestCommitSha] = useState('');
    const [currentVersion, setCurrentVersion] = useState('');

    useEffect(() => {
        const getVersionAndCommit = async () => {
            try {
                const version = await fetchCurrentVersion();
                setCurrentVersion(version);
                const sha = await fetchLatestCommitSha(version);
                setLatestCommitSha(sha);
            } catch (error) {
                console.error('Error fetching version or commit SHA:', error);
            }
        };

        getVersionAndCommit();
    }, []);

    return (
        <footer className="footer">
            <div className="footer-commit">
                {latestCommitSha && currentVersion ? (
                    <span>
                        The modern OSM Profile running <a href={`https://github.com/Kvanrooyen/osm-profile/releases/tag/${currentVersion}`} className="version-link"><strong>{currentVersion}</strong></a> (<a href={`https://github.com/Kvanrooyen/osm-profile/commit/${latestCommitSha}`} className="commit-link"><code>{latestCommitSha}</code></a>)
                    </span>
                ) : (
                    'Fetching latest commit and version...'
                )}
            </div>
            <div className="footer-links">
                <a href="https://github.com/Kvanrooyen" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a href="https://codeberg.org/Kvanrooyen" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faCode} size="lg" />
                </a>
                <a href="https://mastodon.social/@Kvanrooyen" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faMastodon} size="lg" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
