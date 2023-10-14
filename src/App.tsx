import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import Notes from "./pages/Notes";
const NoteDetails = lazy(() => import("./pages/NoteDetails"));

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
              <NoteDetails />
            </Suspense>
          }
        />
        <Route
          path="/edit-note/:id"
          element={
            <Suspense fallback="Loading...">
              <NoteDetails />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
