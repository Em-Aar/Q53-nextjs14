# Class-02 Part-I

## Nested Routes
* Nested Routing is a route inside a route. For example, we want to create a services page and inside services, we want to create the categories of the service. In this case, we want security and consulty service to be added as route inside the services route. This is called nested routing.

* We can create nested routing simply by creating a service directory inside app directory and two new directories 'security' and 'consultancy' inside services directory.

![nested routing diagram](./Screenshot%202024-03-16%20191549.png)

## Important Concepts

* HTML is used for structuring content on the web. It provides the skeleton of a webpage.

* CSS is used for styling and presenting the HTML content, allowing developers to control layout, colors, fonts, and more.

* JavaScript adds interactivity and logic to webpages, enabling dynamic content and user interaction.

In the early days of web development, HTML files were static, and JavaScript and CSS were often included as separate files linked within the HTML.

As web applications became more complex and interactive, the need for more dynamic solutions arose. This led to the development of frameworks like React, which allow developers to create reusable UI components.

In React:
* Content (HTML) is written inside JavaScript functions, known as components. These components encapsulate both logic and presentation.

* Each route in a Next.js application (e.g., page.tsx) exports a function that returns JSX. JSX allows you to write HTML-like syntax which gets transformed into JavaScript function calls.

* Contrary to the statement about functions not being able to return multiple elements, modern JavaScript and React allow for the return of multiple elements from a function using JSX Fragments or an array of elements.



### What if we have to return multiple elements?
In React, components must return a single root element. Traditionally, developers wrap multiple elements in a `<div>` or other semantic HTML elements like `<main>` or `<section>`. However, these wrappers can unintentionally influence the styling or structure of the webpage due to the addition of extra DOM nodes.

React Fragments, represented as `<>...</>`, provide a solution to this issue. They allow developers to group a list of children without adding unnecessary elements to the DOM, preserving the intended styling and layout. Fragments are especially beneficial in complex layouts where the DOM hierarchy plays a crucial role in styling, such as with CSS Grid or Flexbox.
~~~
export default function page () {
    return (
        <>
        <h1> Hello world </h1>
        <p> Happy to see you all </p>
        </>
    )
}
~~~

## What are Components in React
React: A Library of Reusable UI Components

In the realm of web development, React stands out as a library dedicated to building user interfaces through modular and reusable components. A component in React is a self-contained element that encapsulates both the logic and the presentation, akin to a JavaScript function that returns HTML via JSX.

The principle of Don't Repeat Yourself (DRY) is pivotal in software development, advocating for the minimization of redundancy. It encourages the creation of reusable code blocks to avoid repetition, thereby enhancing maintainability and scalability.

For instance, consider a ubiquitous UI element like a button that appears across various pages or routes within an application. Instead of duplicating the button's code, React allows developers to craft a single Button component. This component can then be imported and utilized wherever needed, streamlining the development process, simplifying code management, and bolstering reusability.

By adhering to the DRY principle and employing components, React developers can construct sophisticated interfaces with optimized codebases, leading to efficient and maintainable applications.

### Example of Button and Navbar
See the code. We've created two components `Button` and `Navbar`. We are using `Button` in various pages by importing this `Button` Component in those pages. See how we re-used the code of button by creating a separate component rather than writing the same code over and over. We didn't added button in layout because the button wasn't required at all pages. 

For Navbar, we need this component on all our pages. Now either we add the code written in `Navbar` component in layout. If we do so, this won't provide a cleaner look in our layout file. What we did here, we created a separate component `Navbar`, imported it in our `layout` file and added it inside `<body>` tag, above `children`. Now this `Navbar` will appear on top of all our pages. 

## Import using import aliases
Import aliases simplify the import statements in a project by providing a shorthand for a base path.
Import aliases in Next.js streamline the process of importing files, components, and assets within an application. When prompted during the Next.js setup, opting for 'App router' and accepting the default alias @ offers a convenient shorthand for imports.

We've two methods of imports
### Traditional Import Paths
If we do not use import alias, we've to specify the relative path of the component/file/directory. If that component/file/asset is at same level of the file where we're importing, then we write the notation `./<Name>`. Single `.` is used for same level.__*Remember, while nextjs project setup, to create the project in same directory(same level) we use dot(.).*__
 ~~~ 
 npx create-next-app@latest . 
 ~~~  
 To access resources at higher directory levels, `../<Name>` is employed, with each `../` representing one level up in the directory hierarchy.


### Enhanced Import Paths with Alias
By utilizing the import alias @, we can bypass the repetitive and often cumbersome relative paths. Prefacing an import with `@/` followed by the file or directory name allows for direct access to the resources, regardless of the current file's depth in the project structure.
This method not only simplifies the import process but also enhances code readability and maintainability, especially in large-scale applications with deeply nested files.

#### See the code how we imported Button component with both methods.

