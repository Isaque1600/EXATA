import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import NotFound from "./_components/NotFound";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1>home</h1>
          </>
        }
      />
      <Route
        path="/sobre"
        element={
          <>
            <h1>About</h1>
          </>
        }
      />
      <Route path="/serviços" />
      <Route path="/contato" />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
);
