# Frontend Mentor - GitHub User Search App Solution

This is my solution to the [GitHub User Search App Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). This challenge helped me enhance my skills in React, Next.js, and API integration by building a real-world application.

## Table of Contents

- [Frontend Mentor - GitHub User Search App Solution](#frontend-mentor---github-user-search-app-solution)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [The Challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My Process](#my-process)
    - [Built With](#built-with)
    - [What I Learned](#what-i-learned)
    - [Continued Development](#continued-development)
    - [Useful Resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- View an optimal layout for the app based on their device's screen size
- See hover states for all interactive elements
- Search for GitHub users by their username
- Display relevant user information fetched from the GitHub API
- Switch between light and dark themes
- **Bonus:** Automatically adapt the color scheme based on the system preferences using `prefers-color-scheme` in CSS

### Screenshot

![GitHub User Search App](/public/images/preview.png)

### Links

- [Solution URL](https://github.com/fawaziwalewa/github-user-search)
- [Live Site URL](github-user-search-app-lovat.vercel.app)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Tailwind CSS
- Flexbox & CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JavaScript library
- [Next.js](https://nextjs.org/) - React framework
- [GitHub API](https://docs.github.com/en/rest)

### What I Learned

During this project, I improved my knowledge of fetching and displaying data from an external API using Next.js. Implementing dynamic theme switching based on system preferences was another key learning aspect.

Here’s an example of handling API requests:

```js
const fetchGitHubUser = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error('User not found');
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
```

### Continued Development

Moving forward, I want to:

- Improve error handling for better user experience
- Implement caching to reduce redundant API requests
- Explore integrating TypeScript for better type safety
- Add unit and integration tests

### Useful Resources

- [GitHub API Docs](https://docs.github.com/en/rest) - Helped with understanding API structure
- [Tailwind CSS](https://tailwindcss.com/docs) - Used for quick styling and responsiveness
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization) - Helped with handling external images

## Author

- Website - [Fawaz Iwalewa](https://iwaola.me)
- Frontend Mentor - [@fawaziwalewa](https://www.frontendmentor.io/profile/fawaziwalewa)
- GitHub - [@fawaziwalewa](https://github.com/fawaziwalewa)
- Twitter - [@IwalewaFawaz](https://twitter.com/IwalewaFawaz)

## Acknowledgments

A big thank you to Frontend Mentor for providing this challenge! It helped refine my skills and gain hands-on experience in API integration and UI responsiveness.
