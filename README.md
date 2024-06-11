<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GNU General Public License v3.0 License][license-shield]][license-url]
[![React][React.js]][React-url]

<h3 align="center">OSM Profile</h3>

  <p align="center">
    A modern, simple OSM profile built with React.
    <br />
    <a href="https://github.com/github_username/repo_name/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>https://github.com/Kvanrooyen/osm-profilegraphs/contributors
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![OSM Profile Screenshot][product-screenshot]](https://osm.governorkeagan.com/)

I built this over a weekend with the goal of creating a simplified and modern looking alternative (for myself) to ["How Did You Contribute"](https://hdyc.neis-one.org/). Currently, this project only serves my OSM data via the API but I may change that in the future. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

Getting this setup for your self is fairly straightforward. You only need to modify the `USER_ID` and `START_TIME` variables.

### Prerequisites

1. Ensure you have the latest version of `npm` installed on your device.
2. Navigate to https://api.openstreetmap.org/api/0.6/user/details.json and login with your OSM details.
    * You will need the `id` and `account_created`

### Installation

1.  Clone the repo
   ```sh
   git clone https://github.com/Kvanrooyen/osm-profile.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your `id` and `account_created` in `osmApi.js`
   ```js
   const USER_ID = 'ENTER YOUR ID';
   const START_TIME =  'ENTER YOUR START TIME';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] Contribution Heatmap
- [ ] Social Links

See the [open issues](https://github.com/Kvanrooyen/osm-profile/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the GNU General Public License v3.0 License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Mastodon: [@governorkeagan@en.osm.town](https://en.osm.town/@governorkeagan) · Matrix: `@governorkeagan:matrix.org`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Kvanrooyen/osm-profile.svg?style=for-the-badge
[contributors-url]: https://github.com/Kvanrooyen/osm-profile/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Kvanrooyen/osm-profile.svg?style=for-the-badge
[forks-url]: https://github.com/Kvanrooyen/osm-profile/network/members
[stars-shield]: https://img.shields.io/github/stars/Kvanrooyen/osm-profile.svg?style=for-the-badge
[stars-url]: https://github.com/Kvanrooyen/osm-profile/stargazers
[issues-shield]: https://img.shields.io/github/issues/Kvanrooyen/osm-profile.svg?style=for-the-badge
[issues-url]: https://github.com/Kvanrooyen/osm-profile/issues
[license-shield]: https://img.shields.io/github/license/Kvanrooyen/osm-profile.svg?style=for-the-badge
[license-url]: https://github.com/Kvanrooyen/osm-profile/blob/master/LICENSE.txt
[product-screenshot]: docs/assets/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
