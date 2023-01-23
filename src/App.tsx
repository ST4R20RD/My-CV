import { Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { Home, Projects } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
