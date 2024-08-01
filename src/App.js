import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./fonts/font.css";
import SignIn from "./page/SignIn";
import MainNoLog from "./page/MainNoLog";
import ViewPost from "./page/ViewPost";
import Write from "./page/Write";
import Correction from "./page/Correction";
import ConfirmDelete from "./page/ConfirmDelete";
import ConfirmCorrect from "./page/ConfirmCorrect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Main" element={<MainNoLog />} />
        <Route path="/ViewPost" element={<ViewPost/>} />
        <Route path="/Write" element={<Write/>} />
        <Route path="/Correction" element={<Correction/>} />
        <Route path="/ConfirmDelete" element={<ConfirmDelete/>} />
        <Route path="/ConfirmCorrect" element={<ConfirmCorrect/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
