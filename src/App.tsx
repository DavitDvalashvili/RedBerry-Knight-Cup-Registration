import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import Experience from "./pages/Experience";
import Completed from "./pages/Completed";
import { GlobalStyles } from "./pages/GlobalStyles";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="personal" element={<Personal />} />
      <Route path="experience" element={<Experience />} />
      <Route path="completed" element={<Completed />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
