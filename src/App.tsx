import { Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { Home, Projects, NotFound, About } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="*" element={<NotFound />} />
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
