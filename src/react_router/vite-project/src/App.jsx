import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./app_layout/appLayout";
import Home from "./pages/Home";
import PostList, { postLoader } from "./pages/PostList";
import PageComments from "./pages/PageComments";
import ErrorPage from "./pages/ErrorPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Required from "./components/Required";
import Products from "./components/Products";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
        ],
      },
      {
        path: "/posts",
        // Protected Routes
        element: (
          <Required>
            <PostList />
          </Required>
        ),
        loader: postLoader,
      },
      {
        path: "/posts/:id",
        element: <PageComments />,
      },
      {
        path: "/product",
        element: <Products />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
