import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Shared/Error/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
            path: "/",
            element: <Home />
        }
      ]
    },
  ]);

  export default router