import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Shared/Error/Error";
import SignUpSignIn from "../Pages/SignUpSignIn/SignUpSignIn";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <div>About</div>
        },
        {
            path: "/error",
            element: <Error />
        },
        {
            path: "/signin",
            element: <SignUpSignIn />
        }
      ]
    },
  ]);

  export default router