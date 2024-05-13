# Frontend, Backend, Database and How to connect

While everyone of now know what is frontend and what is backend. but here is a quick overview with example for students having no background of webdevelopment.

#### Imagine a restaurant:

Frontend (the dining area):
This is what we see and interact with – the menu, the tables, the decor. It's designed to be visually appealing and easy to use.
Backend (the kitchen): This is where all the magic happens behind the scenes. Chefs prepare the food, manage orders, and handle inventory. We don't see it, but it's essential for the restaurant to function.

#### In websites and apps, it's similar:

Frontend (what the user see): This is the part of a website or app that user interact with directly. It includes the buttons, text, images, and layout. The frontend's main job is to make things look good and be user-friendly.
Backend (behind the scenes): This is the part of a website or app that users don't see. It's responsible for storing data, processing requests, and performing complex operations. It's like the brain of the operation, making sure everything works smoothly.

#### How they connect:

When user interacts with the frontend (like clicking a button or filling out a form, or clicks the products list), it sends a request to the backend. The backend then processes that request, fetches the necessary data, and sends a response back to the frontend. The frontend then displays that response to you, updating the page or showing a message.

![Frontend & Backend][./images/1]

#### Important Considerations:

Remember, the data is not kept at frontend. We use databases to keep the data. Or if we use third party data, we use APIs to get data from third party.

## Nextjs a fullstack framework

In nextjs, whatever we studied so far was the **frontend**. But the where do we write the logic of **backend**?
We write the logic of backend in **api** folder. We'll get into that later but before that lets discuss something more important.

## Database

Either we have our own data or we're using data from a third party, the core data is always kept in a database. For example, we'll keep our blogs and users data in our database and if we are getting weather updates from thirdparty, the third party also have kept data in their databse.

![Thirdparty or our Own Database][./images/2]

## How Do we Connect

Usually, the backend logic is written in nextjs **App Router** inside **api** directory. As Nextjs has convention of **page.tsx** for the routes, so is the route handlers, with file name **route.ts**. Read more about [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

## Database Operations

CRUD operations are perfored in databses. **C**reate, **R**ead, **U**pdate, **D**elete
A data or a record can be created, read, updated or delete in database. We call it CRUD Operations.

While every database has its own query language to perform these functions. (SQL Databse (Relationation Database) use SQL as query language)

For the time being, we are focusing only how to get Data from third party **API** using **RESP APIs**

## HTTP Methods

We've already discussed about REST APIs which uses HTTP Methods GET, POST, PUT/PATCH, DELETE.

Let's see how these methods correspond to **CRUD** operation in Database

- To **Create** a record in Database using APIs, we use HTTP **POST** mehtod
- To **Read** record in Database using APIs, we use HTTP **GET** mehtod
- To **Update** record in Database using APIs, we use HTTP **PUT/PATCH** mehtod
- To **Delete** record in Database using APIs, we use HTTP **DELETE** mehtod

## Now Let's use HTTP Methods to connect with Simple Books APIs

1- Sending GET Request to Read data(list of Books) from Simple Books APIs

**Here, we sent GET request through our Server Component. We can also send the same GET request from our Client Component. No issue will occur**

```
export default async function Home() {
  const response = await fetch("https://simple-books-api.glitch.me/books", {
    method: "GET",
  });
  const data: Book[] = await response.json();
  // here we get the list of books, we can use it in our UI as we like
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Books</h1>

      <div className="grid grid-cols-3 gap-4">
        {data.map((book: Book) => (
          <BookCard
            key={book.id}
            name={book.name}
            id={book.id}
            type={book.type}
            available={book.available}
          />
        ))}
      </div>
    </div>
  );
}
```

**Important point to note here that we can send GET Request from our server or client component in nextjs to get data from thirdparty server using APIs**

![GET request from client component][./images/3]

1- Sending POST Request to order (a book) from Simple Books APIs

**Here is a point to catch. When user interaction is involved, like the case here (user is ordering a book after providing the information as required), Our Component in nextjs should be a client component.**

- Let's send the POST request from client component.
  Here we'll get **CORS** error. (Cross Origin Resource Sharing). The simple books API server has restrictions. It can not accept POST requests from Cross Origins (Client, Browser).

![sending POST request from client component][./images/4]

**What we do know**

Here we'll use Route Handlers in our Nextjs App. Our client component will send POST request to our backend (to our server using Route Handlers) and the our server will send the same POST request to the Simple Books API Server. We'll get the response....

![Using Route Handler][./images/5]

**Please look at the code now for further understanding**
