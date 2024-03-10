# Class_01_20240309 - Introduction to the Nextjs 14

## History of the web development

- 1991: HTML - first language for structuring web pages.
  World's first website = [info.cern.ch](https://info.cern.ch/hypertext/WWW/TheProject.html)
- 1995: CSS (Cascading Style Sheet) - Presentation
  separating presentation from content
- 1996: JavaScript - Adding Interactivity to web pages
- 2000: AJAX: Asynchronous javaScript and XML
  Flash: for animations and interactive elements - performance issues
- Mid 2000s: Web 2.0 User-generated content
- 2000-2010s: Frameworks: Django, Ruby on Rails, Node.js
- 2010s-Present:
  - Mobile-First
  - Single Page Applications : Loading content dynamically on a single page
  - Modern javascript Frameworks:
    - React
    - Angular
    - Vue

## Earlier Tools for web development

- HTML (Hypertext Markup Language): Used to create a structure of website
- CSS (Cascading Style Sheets): Used for styling the webpages.
- JavaScript: For adding logic and user interaction
  HTML is the basic of the webpage. Without HTML, we cannot create a webpage.

## How Websites were created with purely HTML, CSS and JavaScript

    - Usually a single html file (index.html) for Website Structure
    - .css file for styling
    - .js file for interactivity and logic

## What is React

- React is a javascript library designed by the facebook. We'll discuss in later classes how it revolutionized the webdevelopment. https://react.dev/

## What is Nextjs

- Nextjs is a React framework. https://nextjs.org/
- Do study the difference betwenn library (react) and framerok (nextjs). However, with time, you'll come to know.

## Create a Nextjs Project
https://nextjs.org/docs/getting-started/installation

### System Requriements
* Node.js 18.17 or later. https://nodejs.org/en/download/ 
* Check your OS version and install appropriate Nodejs. For example, Choose 64-bit nodejs version for 64-bit windows.
### Steps to create your first project
* Create a your project directory (folder). Naming the folder is important. Remember following
    * All letters in the folder name should be lowercase
    * Don't use same in folder name. User '-' or '_' for spaces.  my-first-app
    * Avoid using keywords like next, react etc. 
* open vs code in your project folder. 
    * In your project folder, right click and choose option 'open with vscode' or 'open in terminal'
    * If opened in terminal, write command
    ~~~
    code .
    ~~~
    This will open your vscode in current folder.
* open terminal in vscode and write these commands to create your nextjs project
~~~
npx create-next-app@latest .
~~~

* Run development server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
