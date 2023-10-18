import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Navbar } from "./components";
import Notes from "./pages/Notes";
import Login from "./pages/Login";
const NoteDetails = lazy(() => import("./pages/NoteDetails"));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
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
      <ToastContainer
        position={toast.POSITION.BOTTOM_CENTER}
        autoClose={2000}
      />
    </>
  );
}

export default App;
