# FandomFusion-Frontend

Welcome to **FandomFusion** – your gateway to exploring, curating, and sharing the worlds you love most! Whether you're an anime aficionado, a gaming guru, or a movie maniac, this project is all about celebrating your fandoms and connecting with others who share your passion.

## 📚 Table of Contents

- [Summary](#-summary)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Dependencies](#-dependencies)
- [How To Setup](#️-how-to-setup)
- [Reference Links](#-reference-links)
- [Directory Structure](#-directory-structure)
- [Claim an Issue](#-claim-an-issue)
- [Communication](#-communication)
- [Contribution Guidelines](#-contribution-guidelines)
- [Mentor](#-mentor)

## 📝 Summary

FandomFusion is another social media, where you can connect with people who has same taste like you, let it be animes, movies, and even videogames (yes, we hear you).

_What will this app do?_
It will include a home feed, where you will be recommended various medias according to your followers, what they have suggested or recommended. Then user will be able to add friend, recommend any media, write a post and flaunt your profile.

Various media will also be rated according to the global critics, and user will also be able to add their own rating and a note to remind of how great/bad it was. (yeah, we forget sometimes lol)

## 🌐 Features

- **Search Across Public APIs**: Dive into your favorite universes! Search for anime, games, and movies using integrated public APIs. Powered by RAWG, Jikan, and TMDB, FandomFusion ensures you’re always up-to-date with the latest trends.

- **Custom List Creation**: Craft your ultimate fan lists. Whether it’s top anime battles, iconic game soundtracks, or unforgettable movie twists, create personalized collections and rate each item like the true connoisseur you are. Share your lists with fellow fans and spread the love!

- **Social Interaction**: Connect and collaborate with fellow superfans. Follow others to keep up with their curated lists, chat directly on the platform, and build a community around your shared fandoms. Let’s unite the fandom universe!

- **Dynamic and Responsive User Interface**: FandomFusion’s sleek, modern design looks stunning across all your devices, so you can enjoy exploring your fandoms wherever you are.

- **Home Page Highlights**:

  - Discover what’s trending now in anime, games, and movies with real-time updates.
  - Explore curated recommendations designed to help you uncover hidden gems.

- **Top Picks of All Time**:

  - Browse all-time greats from every corner of fandom culture. From top-rated anime to groundbreaking games and legendary movies, find what truly defines each medium.
  - Filter by genre, year, or ratings for a tailored experience.

- **Comprehensive Search Filters**: Zero in on exactly what you’re looking for with filters like genre, release date, rating, and popularity.

- **User Profiles**: Show off your fandom cred! Display your activity, curated lists, and follower stats. Explore other users’ profiles to find inspiration or your next binge-worthy series.

## ⚡ Tech Stack

- **Frontend:** React.js + Vite (with TailwindCSS, without TypeScript)
- **APIs:**
  - [RAWG API](https://api.rawg.io/docs/) for games
  - [Jikan API](https://docs.api.jikan.moe/) for animes
  - [TMDB API](https://developer.themoviedb.org/reference/intro/getting-started) for movies

## 📦 Dependencies

To bring this fandom experience to life, you’ll need **npm** or **yarn** installed.

## 🛠️ How To Setup

1. Make sure you have an active internet connection – we’re diving deep into fandoms, after all!
2. Fork this repository to your GitHub account.
3. Clone your forked repository:

   ```bash
   git clone <forked-repo-link>
   ```

4. Navigate into the project directory:

   ```bash
   cd FandomFusion-Frontend
   ```

5. Install all necessary dependencies (make sure npm or yarn is configured for proxy if on college proxy, lookup [here](#️-starters)):

   ```bash
   npm install
   ```

6. Set up your environment variables by creating a `.env` file in the root directory. Use `.env.example` as your guide.

7. Start the development server:

   ```bash
   npm run dev
   ```

8. You’re ready to explore! Access the frontend application on `localhost:5173`.

> [!NOTE]
> Commands like `git clone` and `npm install` will not work if you have proxy enabled, also doing other network required tasks will not so try setting up proxy for that interface first! (sadly gaming can't be resolved)

> [!TIP]
> To change port number for the developement of this project for mac users. Kindly refer to this article:
> https://blog.stackademic.com/how-to-change-the-default-port-number-in-react-react-tips-1a957b54759e

### Figma

First Update the designs and wireframes in this [Figma File](https://www.figma.com/design/QgTS0qjVqZKiqUT7RTH0aA/FandomFusion?node-id=42-12552&t=bAsEdvDcrrbAjLmi-1) before coding and bringing it to life.

**_This is an important step_** before pushing the final code.

> [!TIP]
> Figma app or even website might not work if SOCKS proxy is set, make sure to disable SOCKS proxy before working with figma :)

## 🔗 Reference Links

### 🗺️ Starters

- [Download and install the latest version of Git.](https://git-scm.com/downloads)
- [Set your username in Git.](https://help.github.com/articles/setting-your-username-in-git)
- [Setup proxy for git](https://stackoverflow.com/questions/128035/how-do-i-pull-from-a-git-repository-through-an-http-proxy)
- [Set your commit email address in Git.](https://help.github.com/articles/setting-your-commit-email-address-in-git)
- [Setup Nodejs](https://nodejs.org/en/blog/release/v16.18.1/)
- [Setup proxy for npm](https://stackoverflow.com/questions/7559648/is-there-a-way-to-make-npm-install-the-command-to-work-behind-proxy)

### 🚀 React

- [React official Documentation](https://react.dev/learn)
- [React JS Crash Course](https://youtu.be/w7ejDZ8SWv8?si=wGvhGzbJeEp-Sjv5)
- [React Hooks Detailed](https://www.youtube.com/playlist?list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A)

### 🎨 Tailwind CSS

- [Tailwind Components](https://www.material-tailwind.com/docs/react/collapse)
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Official Docs](https://tailwindcss.com/docs/installation)
- [Tailwind CSS Crash Course](https://youtu.be/UBOj6rqRUME?si=iKI5kUFD0WgP4cL7)

### Useful Links from Backend

- [Backend Repo](https://github.com/opencodeiiita/GrepIt-Backend/)

- [RAWG API Documentation](https://api.rawg.io/docs/)
- [Jikan API Documentation](https://docs.api.jikan.moe/)
- [TMDB API Documentation](https://developer.themoviedb.org/reference/intro/getting-started)

### Tools

- [Download Git](https://git-scm.com/downloads)
- [Set up Node.js](https://nodejs.org/en/blog/release/)

## 📁 Directory Structure

```bash
.
├── 🧾 package.json
├── 🧾 package-lock.json
├── 🧾 .env.example
├──  ℹ️  README.md
├── 📄 index.html
├── 📄 eslint.config.js
├── 📄 vite.config.js
├── 📁 public
│   └── 🖼️ favicon.ico
└── 📁 src
    ├── 📁 assets
    │   └──  📁 images
    ├── 📁 components
    │       └── 📄 SignUp.jsx
    ├── 📁 pages
    │       └── 📄 Home.jsx
    ├── 📁 services(api)
    ├── 📁 utils
    ├── 📁 hooks
    ├── 📁 routers
    │   └── 📄 AppRouter.jsx
    ├── 📄 App.jsx
    ├──📄 main.jsx
    ├── 📄 index.css
    └── 📄 App.css

```

> [!NOTE]
> Adding new files? Make sure to add them here too – let’s keep it tidy and helpful for new contributors.

## 👆 Claim an Issue

Comment on the issue to claim it. If there’s no activity on your claim after two days, it may be reassigned to another contributor. Stuck? Ask for help on our Discord channel – no fan gets left behind!

- Don’t forget to make your entry in the [CONTRIBUTORS](CONTRIBUTORS.md) file before submitting your PR.

## 💻 Communication

Building fandom magic together means staying connected. Whether you’re brainstorming new features or have a question, reach out on our [Discord](https://discord.gg/YcUxtezg) channel. We’re here to help, and we can’t wait to hear your ideas!

## 📋 Contribution Guidelines

### Some important points to remember before pushing the code

1. Make sure you have [Prettier](https://prettier.io/) installed, can be installed as an extension in most IDEs and Code Editors.
2. Make the code and directory structure well organized like it was.
3. Add suitable comments in the code, for better readability of the code, and do not make any change in the code which was not included in the issue.
4. Properly create your commit message, and add screenshots for better clarity. Also try to include a screen recording.

> [!CAUTION]
> Failure to follow these guidelines might result in a temporary ban!

### Some general guidelines

We’re passionate about fostering a friendly and welcoming environment for all contributors. Let’s focus on what matters most – our shared love for fandoms and great code quality.

- **People first**: Be respectful and patient. We’re all here because of our shared passion.
- **Commit with purpose**: Name your commits meaningfully and reference relevant issue numbers. Follow the [PR template](.github/PULL_REQUEST_TEMPLATE.md).
- **Show, don’t just tell**: Screenshots or short videos can make reviews smoother.
- **Avoid duplicate PRs**: If necessary, comment on the older PR with the follow-up PR number and close the obsolete one.
- **Three-day rule**: PRs inactive for more than three days may be closed.

Let’s create something amazing together. 🌟

## 🤝 Mentor

- **Bhavya Gupta** _(aka Gamin8ing)_  
   _Discord handler and an all-time gamer_  
   `GitHub:` [Gamin8ing](https://github.com/Gamin8ing)  
   `Discord:` gamin8ing

## 💪 Thanks To All Contributors

Every contributor is a part of our fandom family. Show off your profile picture here and let the world know you’re part of the magic:

<div align="left">
    <!-- FORMAT TO ADD YOUR ENTRY
    <a href="https://github.com/<GITHUB_USERNAME>" title="<GITHUB_USERNAME>">
        <img src="https://github.com/<GITHUB_USERNAME>.png" width="70px" style="border-radius: 50%" alt="<FULL_NAME>">
    </a>
    replace <GITHUB_USERNAME> with your GitHub username
    replace <FULL_NAME> with your full name
    -->
    <a href="https://github.com/Gamin8ing" title="Gamin8ing">
        <img src="https://github.com/Gamin8ing.png" width="50px" alt="Arpit Anand">
    </a>
</div>

Join us and let’s celebrate fandoms together!
