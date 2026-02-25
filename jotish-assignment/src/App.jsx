import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import List from "./pages/List";
import ChartPage from "./pages/ChartPage";
import MapPage from "./pages/MapPage";
import Details from "./pages/Details";
import PhotoResult from "./pages/PhotoResult";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/chart" element={<ChartPage />}></Route>
        <Route path="/map" element={<MapPage />}></Route>
        <Route path="/details" element={<Details />}></Route>
        <Route path="/photo" element={<PhotoResult />}></Route>
        <Route
          path="*"
          element={
            <p className=" h-screen flex justify-center items-center text-red-600 text-5xl">
              ⚠️There's nothing here: 404!
            </p>
          }
        />
      </Routes>
    </>
  );
}

export default App;
