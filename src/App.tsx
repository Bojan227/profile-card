import { Flex } from "@chakra-ui/react";
import "./App.css";
import EditForm from "./components/EditForm";
import ProfileCard from "./components/ProfileCard";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProfileCard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "my-profile",
    element: <ProfileCard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/edit-my-profile",
    element: <EditForm />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <Flex minH="100vh" justify="center" align="center">
      <RouterProvider router={router} />
    </Flex>
  );
}

export default App;
