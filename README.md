- Create a new github repo called reactrouter, clone the repo to your computer and add the link to populi.
- Use create-react-app in the local project root folder (AKA the project root) to initialize the React project. Run npm start to see the default create-react-app page on localhost:3000.
- Run npm i react-router-dom@6 in the project root.
- Create a new folder in project root src folder called /pages.
- In ./src/pages, create two new files.
  - ./src/pages/Home.js
  - ./src/pages/Blogs.js
- In these two files, create and default export a new react component for each file.
  - export default Home () {
    return (
    <h1>Home Page</h1>
    )
    }
  - export default Blogs () {
    return (
    <h1>Blogs Page</h1>
    )
    }
- In index.js, import BrowserRouter from react-router and add it to the React root render statement.
  - https://reactrouter.com/docs/en/v6/getting-started/installation#create-react-app
- Create a new folder in the project root called /components.
- Create a new file called Navbar.js in /components. Then, create and default export a new react component inside called Navbar. The html element returned should be the <nav> element.
  - export default Navbar () {
    return (
    <nav>Nav</nav>
    )
    }
- Import and add the Home component and the Blogs component as new routes in App.js using the <Routes> and <Route> components from react-router.
  - https://reactrouter.com/docs/en/v6/getting-started/installation#create-react-app
  - The "/" path should render the <Home/> component
  - The "/blogs" path should render the <Blogs/> component
  - If you set this up correctly, you should be able to navigate to localhost:3000 to see the Home Page and localhost:3000/blogs to see the Blogs Page
- In /components/Navbar.js, import the <Link> component from react-router. Add two <Link>'s in Navbar, one to "/" titled "Home" and one to "/blogs" titled "Blogs"
- Import the Navbar component into ./src/pages/Home.js and ./src/pages/Blogs.js and add above the <h1> tags.
- If everything has been setup correctly, you should be able to click the two links in the navbar to switch between the Home Page and the Blogs Page in the browser.

## Nested Routing

- Create a new folder ./src/utils and add the sampleBlogs.js file into it as ./src/utils/sampleBlogs.js.
- Implement the following in the Blogs component:
  - Create a new component BlogPost in ./src/components/BlogPost.js.
    - Import the sample blogs into ./src/components/BlogPost.js.
    - Nest a new route under the "/blogs" route, the path should be ":blogId", the element should be <BlogPost/>
      - https://reactrouter.com/docs/en/v6/getting-started/tutorial#nested-routes
    - The BlogPost component should get the blog ID from the useParams() hook and display that blog on the page.
      - https://reactrouter.com/docs/en/v6/getting-started/tutorial#reading-url-params
    - Add the <Outlet> react-router component to the <Blogs> component to display the <BlogPost/> component to the /blogs page.
    - I.E. localhost:3000/blogs/1 should display the blog with id === 1 to the blogs page.

* Create a new component AllBlogs in ./src/components/AllBlogs.js
  _ Import the sample blogs into ./src/components/AllBlogs.js.
  _ Nest a new route under the "/blogs" route, the path should be "all", the element should be <AllBlogs/>
  _ The <AllBlogs /> component should display all the blogs in sample blogs to the page.
  _ If you set this up correctly, localhost:3000/blogs/all should display all the blogs to the blogs page.
  _ Implement a query param for sorting in the <AllBlogs /> component.
  _ I.E. localhost:3000/blogs/all?sortOrder=asc&sortField=createdAt should sort the displayed blogs by ascending order based upon the createdAt date.
  _ https://reactrouter.com/docs/en/v6/getting-started/tutorial#search-params
  _ Implement a query param for limit and page in the <AllBlogs /> component. \* I.E. localhost:3000/blogs/all?limit=2&page=1 should show the blog posts with id === 3 and id === 4 since blog posts 1 and 2 are on the first page.
  Stretch Goal:
* All query params (sorting, limit, page) in <AllBlogs /> should be able to be used at the same time.
  - I.E. localhost:3000/blogs/all?limit=4&page=0&sortOrder=desc&sortField=id should show the first 4 blogs sorted by decending order based upon id.

# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies

/node_modules
/.pnp
.pnp.js

# testing

/coverage

# production

/build

# misc

.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log\*
