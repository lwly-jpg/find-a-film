# Find-a-Film

[<img src="https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/simple/9qni5u&style=flat&logo=cypress" height="25px" />](https://cloud.cypress.io/projects/9qni5u/runs)

## Contents

[Web Application Features](#web-application-features)

[Why it was built](#why-this-app-was-built)

[How the product was built](#how-the-product-was-built)

[Product Timeline](#📅-product-timeline)

[How to Use This App](#how-to-use-this-app)

## Web Application Features

`Find-a-Film` is a web application that provides an easy to use interface for
users to decide what movie to watch. It fetches from multiple data sources to
provide the user with all they need to make the best movie choice.

- Quick results from user input via the search bar
- Error messages for enhanced user experience
- Provides key information with a clean UI
- Sorting functions
- Responsive design

## Why this App was built

Eager to further our learning during the Christmas break, we created a team to
design a project. It allowed us to reinforce our knowledge in `React` and
`asynchronous data requests` as well as challenging ourselves with new skills in
`TypeScript`.

Our user problem was centered around having access to multiple streaming platforms (e.g. Netflix, Prime Video, Disney+), but feeling like it was always hard to find a good film to watch.

We wanted to solve a genuine need for the group and so `find-a-film` was decided
on based on the following considerations:

👎 Many sites provide:

- Too much information
- Clunky design

👍 This app was built by the team to create a:

- Better user experience
- Site we would be happy to use

## How the product was built

The team were distributed across the UK with varying availabilty. We managed our project with:

- An `MVP` focused to meet user stories
- User story mapping on `Miro`
- Feature tickets via `Trello`
- Team communication via `Slack`
- `Slack bots` for `GitHub Pull Requests`

Technologies & Tools:

- `React`: For a modern build
- `TypeScript`: To improve error checking with Types
- `Figma`: For mocking up the UI and sharing designs

## 📅 Product Timeline

### 🚀 Version 1

- MVP achieved
- Search bar
- Sorting
- Complete styling
- Dedicated film page, with basic film info and streaming providers

**⏯️ Video run-through**

[<img src="https://i3.ytimg.com/vi/NxkwXQCYI6U/maxresdefault.jpg" width="300px">](https://youtu.be/NxkwXQCYI6U 'Find-a-Film: React/Typescript Team Project')

### 🚀 Version 2

[<img src="https://i.ibb.co/qBVQdZn/find-a-film-v2.png" alt="find-a-film-v2">]

- `Discovery` - users can discover films based on different search parameters, including watch providers (e.g. Netflix, Prime Video) and genres (e.g. Horror, Comedy)
- `Popular` films listed on the homepage, to help inspire users before they search
- Film details pages enriched with 'Buy' and 'Rent' provider options and a `similar` films carousel
- `Fetch` efficiency refactors and refinements for UX
- Refactor for SOLID components and enabling future scaling
- Frontend e2e testing with Cypress

### 🧑‍💻 Version 3 (TBC)

- Deployment
- User favourites

## How to Use this App

Clone the repository

For this first iteration, sign-up for an api key from this site:
[www.themoviedb.org/](https://www.themoviedb.org/documentation/api?language=en-GB)

💾 Save your key to a file named `apiKey.tsx` in the `/src` directory,

entering the following code:

```js
const MOVIE_DB_API_KEY = '<your_key_here>'

export default MOVIE_DB_API_KEY
```

now move into the directory and run the program

```bash
cd find-a-film;
npm run start;
```

By default, it will start the server and go to the following address in your web
browser; `http://localhost:3000/`
