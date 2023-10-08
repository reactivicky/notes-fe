import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/create-note" element={<CreateNote />} />
      </Routes>
    </>
  );
}

export default App;
