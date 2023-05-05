import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoyaltyDB from './pages/loyalty/loyaltydb'
import TravelPlan from './pages/travel-plan/travel_plan';
import MyProfile from './pages/package/MyProfile';
import SinglePackage from './pages/package/SinglePackage';
import Blog from './pages/blogs/blogmain';
import Home from './pages/home';
import Payment from "./pages/payment/payment";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loyalty-reward" element={<LoyaltyDB />} />
          <Route path="/travel-plan" element={<TravelPlan />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/package/:id" element={<SinglePackage />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
