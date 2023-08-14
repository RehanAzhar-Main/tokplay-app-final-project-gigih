
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./views/home_page";
import DetailPage from "./views/detail_page";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
          <Route path="/:video_id" element={ <DetailPage/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;