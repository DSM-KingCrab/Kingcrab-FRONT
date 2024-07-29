import { BrowserRouter, Route, Routes } from "react-router-dom";
import InputContainer from "./components/InputContainer";
import "./fonts/font.css"


function App() {
  return (
  
      <BrowserRouter>
        <Routes>
          <Route path="/Test" element={<InputContainer/>}/>
        </Routes>
      </BrowserRouter>
 
  );
}

export default App;
