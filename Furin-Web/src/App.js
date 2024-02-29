import './App.css';
import { Routes, Route } from 'react-router-dom';

import CartPage from './pages/CartPage';
import FurniPage from './pages/FurniPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<FurniPage/>} />
        <Route path='/furni' element={<FurniPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;