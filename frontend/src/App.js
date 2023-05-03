import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoyaltyDB from './pages/loyalty/loyaltydb'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/loyalty-reward" element={<LoyaltyDB />} />


        
      </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
