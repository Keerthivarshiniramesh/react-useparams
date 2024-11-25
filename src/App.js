import { Routes, Route } from 'react-router-dom';
import './App.css';

import Products from './components/Products'
import ProductInfo from './components/ProductInfo'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:productId' element={<ProductInfo/>} />
      </Routes>
    </div>
  );
}

export default App;
