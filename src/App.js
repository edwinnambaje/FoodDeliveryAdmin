
import './App.css';
import AddFoodData from './components/AddFoodData';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import ShowDetails from './components/ShowDetails';
import OrderSection from './components/OrderSection';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OrderSection />} />
        <Route path="/addfood" element={<AddFoodData />} />
        <Route path="/orderdetails/:orderid" element={<ShowDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
