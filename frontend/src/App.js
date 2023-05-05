import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoyaltyDB from './pages/loyalty/loyaltydb'
import TravelPlan from './pages/travel-plan/travel_plan';
import MyProfile from './pages/package/MyProfile';
import SinglePackage from './pages/package/SinglePackage';
import Blogmain from './pages/blogs/blogmain';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/loyalty-reward" element={<LoyaltyDB />} />
          <Route path="/travel-plan" element={<TravelPlan />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/package/:id" element={<SinglePackage />} />
          <Route path="/blogs" element={<Blogmain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
