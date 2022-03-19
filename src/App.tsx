import ReactDom from 'react-dom';
import { Details, Navbar, Sidebar } from './components';
import { Cart, Header, Products } from './container';
import { Routes, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import { useGlobalContext } from './context';
import { useEffect } from 'react';
import { auth } from './firebase';
const App = () => {
  const sidebarRoot = document.getElementById('sidebar-root') as HTMLElement;
  const cartRoot = document.getElementById('cart-root') as HTMLElement;
  const { handleAuth } = useGlobalContext();

  useEffect(() => {
    handleAuth();
  }, [auth]);

  return (
    <>
      {ReactDom.createPortal(<Sidebar />, sidebarRoot)}
      {ReactDom.createPortal(<Cart />, cartRoot)}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Products />
            </>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/products/details:id" element={<Details />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
};

export default App;
