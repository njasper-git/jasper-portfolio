# Jasper Portfolio

My personal portfolio website, built with React. It shows my profile, skills and projects, and has a contact form.

**Live site:** https://jasper-portfolio-theta.vercel.app

## Why I built it

I built this as my first React project for my full stack web development internship. I wanted to learn how real websites are put together, and to have a place to show my work.

## Pages

- **Home:** profile photo, short introduction and a resume download button
- **About:** personal information, education and career objective
- **Skills:** my skills, shown as progress bars or cards
- **Projects:** my projects with the technologies used and GitHub links, with a filter by technology
- **Contact:** a contact form with validation, plus my email and GitHub

## Features

- Multiple pages using React Router
- Dark and light mode that remembers my choice
- Responsive layout with a hamburger menu on phones
- Contact form that checks the name, email and message before sending
- Animated skill bars
- A "Page not found" page and a different tab title for each page

## Built with

- React
- React Router
- JavaScript
- CSS
- Vite

## What I learned

- How to split a page into small components and reuse them
- How to pass data between components using props
- How to use `useState` to remember things like the theme and form values
- How to use `useEffect` for the page title and for saving the theme
- How to show lists from data using `.map()` and `.filter()`
- How to handle form input and show error messages

## What I want to add next

- Connect the contact form to a backend so messages are saved
- Add more projects as I build them
- Learn Python and build AI projects

## How to run it on your computer

1. Clone the repository: `git clone https://github.com/njasper-git/jasper-portfolio.git`
2. Go into the folder: `cd jasper-portfolio`
3. Install the packages: `npm install`
4. Start it: `npm run dev`
5. Open the address it prints in your browser

## Folder structure

- `src/components`: reusable parts like Navbar, Card and Footer
- `src/pages`: Home, About, Skills, Projects and Contact
- `src/data`: the text and lists shown on the pages

## Author

Jasper N - [GitHub](https://github.com/njasper-git)