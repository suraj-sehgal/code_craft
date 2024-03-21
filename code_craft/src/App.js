import './App.scss'
import NavBar from "./component/NavBar";
import CodeSubmissionPage from './pages/home_page/CodeSubmissionPage';
import OutputPage from './pages/output_page/OutputPage';
import { MyProvider } from './context/MyContext';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = () => {
  return (
    <MyProvider>
      <Router>
        <div className="app">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<CodeSubmissionPage />}></Route>
            <Route exact path="/output" element={<OutputPage />} ></Route>
          </Routes>
        </div>
      </Router>
    </MyProvider>
  );

}

export default App;
