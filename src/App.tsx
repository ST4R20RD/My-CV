import { Routes, Route } from "react-router-dom";
import { Layout } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route />
      </Route>
    </Routes>
  );
}

export default App;
