// importing router related components
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// importing components
import { App } from "./App.jsx";
import { Home } from "./components/home/Home.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>

      {/* 404 page */}
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </>
  )
);
