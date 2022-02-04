import './App.css';
import { Routes, Route } from "react-router-dom";
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page1 />}/>
        <Route path="/home" element={<Page2 />}/>
        <Route path="/detail" element={<Page3 />}/>
      </Routes>
    </div>
  );
}

export default App;
