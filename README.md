# Find-a-Film

[![Find-a-Film](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/simple/9qni5u&style=flat&logo=cypress)](https://cloud.cypress.io/projects/9qni5u/runs)

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
`Typescript`.

We wanted to solve a genuine need for the group and so `find-a-film` was decided
on based on the following considerations:

👎 Many sites provide:

- Too much information
- Clunky design

👍 This app was built by the team to:

- Create a better user experience
- A site we would be happy to use

## How the product was built

The team were distributed across the UK with varying availabilty. We remained
organised by utilising these strategies:

- `MVP` focused to meet user stories
- User Story Mapping on `Miro`
- Feature Tickets via `Trello`
- Team communication via `Slack`
- `Slack bots` for `GitHub Pull Requests`

Technologies used:

- `Figma`: For sharing designs
- `React`: For a modern build
- `Typescript`: To improve error checking with Types

## 📅 Product Timeline

### 🚀 Version 1

- MVP achieved
- Searchbar
- Sorting
- Complete styling
- Dedicated film page

**⏯️ Video run-through**

[<img src="https://i3.ytimg.com/vi/NxkwXQCYI6U/maxresdefault.jpg" width="300px">](https://youtu.be/NxkwXQCYI6U 'Find-a-Film: React/Typescript Team Project')

### 🚀 Version 2

- `Discovery` selection options implementing 3rd party styling
- Image carousels for `popular` and `similar` movies
- More data collected from multiple endpoints
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
