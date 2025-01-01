import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
            path: "/",
            element: <h1>hello</h1>
        }
      ]
    },
  ]);

  export default router