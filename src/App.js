import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./fonts/font.css";
import SignIn from "./page/SignIn";
import MainNoLog from "./page/MainNoLog";
import ViewPost from "./page/ViewPost";
import Write from "./page/Write";
import Correction from "./page/Correction";
import ConfirmDelete from "./page/ConfirmDelete";
import ConfirmCorrect from "./page/ConfirmCorrect";
import MainLog from "./page/MainLog";
import Login from "./page/login";
import MyPage from "./page/Mypage";
import MyPage2 from "./page/Mypage2";
import MyPage3 from "./page/Mypage3";
import MyPage4 from "./page/Mypage4";
import NoticeDelete from "./page/NoticeDelete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/MainNoLog" element={<MainNoLog />} />
        <Route path="/ViewPost" element={<ViewPost />} />
        <Route path="/Write" element={<Write />} />
        <Route path="/Correction" element={<Correction />} />
        <Route path="/ConfirmDelete" element={<ConfirmDelete />} />
        <Route path="/ConfirmCorrect" element={<ConfirmCorrect />} />
        <Route path="/MainLog" element={<MainLog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Mypage" element={<MyPage />} />
        <Route path="/Mypage2" element={<MyPage2 />} />
        <Route path="/Mypage3" element={<MyPage3 />} />
        <Route path="/Mypage4" element={<MyPage4 />} />
        <Route path="/NoticeDelete" element={<NoticeDelete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
