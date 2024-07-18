# Class 01 - Introduction to Next.js 14

## Recorded Lectures

- [Lecture 1](https://www.youtube.com/watch?v=g_16RrUK1bQ&list=PLxYHe2aLO4DAuNMpPAse2RIXe7VbGedVW&index=2&t=1s)
- [Lecture 2](https://www.youtube.com/watch?v=OhwQ3QccYXQ&list=PLxYHe2aLO4DAuNMpPAse2RIXe7VbGedVW&index=5)

[Complete Playlist of Next.js](https://www.youtube.com/playlist?list=PLxYHe2aLO4DAuNMpPAse2RIXe7VbGedVW)

## History of Web Development

- **1991:** HTML - The first language for structuring web pages.  
  World's first website: [info.cern.ch](https://info.cern.ch/hypertext/WWW/TheProject.html)
- **1995:** CSS (Cascading Style Sheets) - Separating presentation from content.
- **1996:** JavaScript - Adding interactivity to web pages.
- **2000:**
  - **AJAX:** Asynchronous JavaScript and XML.
  - **Flash:** For animations and interactive elements - performance issues.
- **Mid 2000s:** Web 2.0 - User-generated content.
- **2000-2010s:** Frameworks: Django, Ruby on Rails, Node.js.
- **2010s-Present:**
  - **Mobile-First** approach.
  - **Single Page Applications (SPAs):** Loading content dynamically on a single page.
  - **Modern JavaScript Frameworks:**
    - React
    - Angular
    - Vue

## Earlier Tools for Web Development

- **HTML (Hypertext Markup Language):** Used to create the structure of a website.
- **CSS (Cascading Style Sheets):** Used for styling the webpages.
- **JavaScript:** For adding logic and user interaction.

HTML is the basic foundation of a webpage. Without HTML, we cannot create a webpage.

## Creating Websites with Purely HTML, CSS, and JavaScript

- Usually a single HTML file (`index.html`) for website structure.
- A `.css` file for styling.
- A `.js` file for interactivity and logic.

## What is React?

- React is a JavaScript library designed by Facebook. It allows developers to build reusable UI components. Learn more at [react.dev](https://react.dev/).

## What is Next.js?

- Next.js is a React framework that provides features such as server-side rendering and static site generation. Learn more at [nextjs.org](https://nextjs.org/).
- Study the difference between a library (React) and a framework (Next.js). Over time, you'll understand these differences.

## Creating a Next.js Project

[Next.js Documentation - Getting Started](https://nextjs.org/docs/getting-started/installation)

### System Requirements

- **Node.js 18.17 or later:** [Download Node.js](https://nodejs.org/en/download/)
- Check your OS version and install the appropriate Node.js version. For example, choose the 64-bit Node.js version for a 64-bit Windows OS.

### Steps to Create Your First Project

1. **Create Your Project Directory (Folder):**
    - All letters in the folder name should be lowercase.
    - Don't use spaces in folder names; use '-' or '_'. Example: `my-first-app`.
    - Avoid using keywords like next, react, etc.
2. **Open VS Code in Your Project Folder:**
    - In your project folder, right-click and choose the option 'open with VS Code' or 'open in terminal'.
    - If opened in terminal, run the command:
      ```bash
      code .
      ```
      This will open VS Code in the current folder.
3. **Open Terminal in VS Code and Create Your Next.js Project:**
    ```bash
    npx create-next-app@latest .
    ```

### Running the Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
