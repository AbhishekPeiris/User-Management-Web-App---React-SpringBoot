import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingScreen from './LandingScreen';
import Users from './Users';
function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
