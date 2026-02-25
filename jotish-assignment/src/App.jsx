import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import List from "./pages/List";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route element={<List />}></Route>
      </Routes>
    </>
  );
}

export default App;
