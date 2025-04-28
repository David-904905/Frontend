# React Router Lessons

- First install react router in your react project using the command, npm i react-router


## Declarative approach 

- Import BrowserRouter from react router.

- Add your app component as a child of the BrowserRouter component in your main.tsx file.

``` TypeScript

import {React} from "react"
import {createRoot} from "react-dom/client"
import {BrowserRouter} from "react-router";
import App from "./App.jsx";


createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <App>
    </BrowserRouter>
);

```


### Configuring Routes

- Routes are configured by rendering <Routes> and <Route> that couple URL segments to UI elements



``` JavaScript


import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import Products from './components/Products.tsx'
import AuthHome from './components/auth/AuthHome.tsx'
import Login from './components/auth/Login.tsx'
import Register from './components/auth/Register.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/product' element={<Products />} />

      <Route path='auth'>
        {/* accessing the paths in this manner will be auth/login or auth/register, regular auth will give you the authhome component */}
        <Route index element={<AuthHome />}/>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)


```

- The above is a way of creating nested routes, making it easier to group routes together, based on category

- If you want to render a child route in the parent route, use the outlet component

``` JavaScript

import { Outlet } from "react-router";

export default function DashBoard() {
    return (
        <div>
            <h1>Dashboard</h1>
            {/* will be either components whose routes are nested in the dashboard route*/}
            <Outlet />
        </div>
    )
}


```

- In order to catch any undefined urls, you can use the wildcard operator or * to search for paths that do not match any provided, and redirect the user to a 404 page

``` JavaScript

<Routes>
    <Route path="*" element={<NoPage />} />
</Routes>

```

- Index routes render into their parents outlet at their parents url, like a default child route. They are configured with the index prop.


- Routes without a path create new nesting for their children, but they don't add any segments to the url.

``` JavaScript


<Routes>
  <Route element={<MarketingLayout />}>
    <Route index element={<MarketingHome />} />
    <Route path="contact" element={<Contact />} />
  </Route>

  <Route path="projects">
    <Route index element={<ProjectsHome />} />
    <Route element={<ProjectsLayout />}>
      <Route path=":pid" element={<Project />} />
      <Route path=":pid/edit" element={<EditProject />} />
    </Route>
  </Route>
</Routes>


```

- What this means is that the projects layout component is the parent of the project component, but it does not have its own route, when you visit project:pid, the the project component is rendered inside the projects layout component and the project layout component is returned.


### Route Prefixes

- A route without an element prop adds a path prefix to its child routes, without introducing a parent layout.


### Dynamic Segments

- If a path segment starts with : , then it becomes a "dynamic segment". When the route matches the URL, the dynamic segment will be parsed from the URL and provided as params to other router APIs like useparams.

``` JavaScript

<Route path="tems/:teamid" element={<Team />} />

```

- In order to make use of the parameters from the urls, you have to import the useParams api from the react-router api

``` JavaScript

import {useParams} from "react-router"

export default function Team()
{
    let params = useParams();
}

```

- If you have multiple dynamic segments in one route path, you can use destructuring to access the params.

``` JavaScript

<Route
  path="/c/:categoryId/p/:productId"
  element={<Product />}
/>


import { useParams } from "react-router"

export default function CategoryProduct()
{
    let {category, productId} = useParams();
}


```

### Optional Segments

- You can make a route segment optional by adding a ? to the end of the segment.

``` JavaScript

<Route path=":lang?/categories" element={<Categories />} />

```


### Splats

- This is also known as "catchall" and "star" segments. If a route path pattern ends with /*, then it will match any characters following the /, including other / characters.


``` TypeScript

<Route path="files/*" element={<File />} />

// in your file component

let params = useParams();

let filePath = params["*"];

// or you can destructure the splat

let { "*": splat} = useParams();

```

### Linking

- Link to routes from your UI with Link and NavLink

``` TypeScript

import { NavLink, Link } from "react-router"

function Header()
{
    return (
        <nav>
            // NavLink makes it easy to show active states
            <NavLink
                to="/"
                className={({ isActive }) => 
                    isActive ? "active" : ""
                }
            >Home </NavLink>

            <Link to="/concerts/salt-lake-city">Concerts</Link>
        </nav>
    )
}


```

### Navigating

- Users can navigate your application with <Link>, <NavLink>, and useNavigate.

``` TypeScript

// style
<NavLink
  to="/messages"
  style={({ isActive }) => ({
    color: isActive ? "red" : "black",
  })}
>
  Messages
</NavLink>

```

- Use link when the link does not need active styling.

``` TypeScript

import {Link} from "react-router-dom"

const App = () => {
    return (
        <>
            <Link to="/login">Login again</Link>
        </>
    )
}

```

#### useNavigate hook

- This hook allosw the programmer to navigate the use to a new page without the user interacting. For normal navigation, it's best to use Link or NavLink. They provide a better default user experience like keyboard events, accessibility labeling, "open in new window", right click context menus, etc.

- Reserve usage of useNavigate to situations where the user is not interacting but you need to navigate.

- Like after a form submission completes, logging a user out after inactivity, or timed uis like quizzes, etc.


``` TypeScript

import { useNavigate } from "react-router";

export function LoginPage() {
  let navigate = useNavigate();

  return (
    <>
      <MyHeader />
      <MyLoginForm
        onSuccess={() => {
          navigate("/dashboard");
        }}
      />
      <MyFooter />
    </>
  );
}


```


## Url Search Params

- Search params are the values after a ? in the URL. They are accessible from useSearchParams, which returns an instance of URLSearchParams.

``` TypeScript

function SearchResults()
{
    let [searchParams] = useSearchParams();

    return (
        <div>
            <p> You searched for {searhParams.get("q")}</p>
    )
}

```