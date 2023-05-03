import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoyaltyDB from './pages/loyalty/loyaltydb'
import TravelPlan from './pages/travel-plan/travel_plan';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/loyalty-reward" element={<LoyaltyDB />} />
          <Route path="/travel-plan" element={<TravelPlan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
