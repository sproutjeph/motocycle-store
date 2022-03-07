import { Details, Navbar } from './components';
import { Cart, Header, Products } from './container';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/details:id" element={<Details />} />
      </Routes>
      {/* <Products /> */}
    </>
  );
};

export default App;
