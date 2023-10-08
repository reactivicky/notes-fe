import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import Notes from "./pages/Notes";
const CreateNote = lazy(() => import("./pages/CreateNote"));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route
          path="/create-note"
          element={
            <Suspense fallback="Loading...">
              <CreateNote />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
