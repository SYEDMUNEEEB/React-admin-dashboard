import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import {  LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import ShippingAddressScreen from './screens/ShippingAdressScreen';
import PaymentScreen from './screens/PaymentScreen';
import SignupScreen from './screens/SignupScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';

import ProfileScreen from './screens/ProfileScreen';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import { getError } from './utils';
import axios from 'axios';
import { FaMoon, FaSun } from 'react-icons/fa'; // Import the Font Awesome icons

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Effect to apply dark mode class to the body based on the darkMode state
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };  
    const [isSticky, setIsSticky] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 0 && !isSticky) {
          setIsSticky(true);
        } else if (scrollTop === 0 && isSticky) {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [isSticky]);
  
    const navbarClassName = `navbar ${isSticky ? 'sticky' : ''}`;
  
  
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
   
  };
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);
  return (
    <BrowserRouter>
       <div className={`d-flex flex-column site-container ${darkMode ? 'dark-mode' : ''}`}>
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <div className={navbarClassName}>  
          <Navbar  >
            <Container>
              <Link to="/">
                <Navbar.Brand>Fantastic 4</Navbar.Brand>
              </Link>
              <SearchBox/>
              <Nav className="me-auto">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto  w-100  justify-content-end">
                  <Link to="/cart" className="nav-link">
                    Cart
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
               
              </Nav>
                  {userInfo ? (
                    <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/orderhistory">
                        <NavDropdown.Item>Order History</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Divider />
                      <Link
                        className="dropdown-item"
                        to="/signout"
                        onClick={signoutHandler}
                      >
                        Sign Out
                      </Link>
                    </NavDropdown>
                  ) : (
                    <Link className="nav-link" to="/signin">
                      Sign In
                    </Link>
                  )}
           
              </Navbar.Collapse>
              </Nav>
             
             
            </Container>
            <button
                  className="btn btn-sm btn-outline-light mx-2"
                  onClick={toggleDarkMode}
                >
                  {darkMode ? <FaMoon /> : <FaSun />}
                  
                </button>
          </Navbar>
       
          </div>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/" element={<HomeScreen />} />
              <Route
                path="/shipping"
                element={<ShippingAddressScreen />}
              />
              <Route path='/payment' element={<PaymentScreen/>} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path='/signout' element={<SignupScreen/>} />
              <Route path="/order/:id" element={<OrderScreen />}/>
              <Route
                path="/orderhistory"
                element={<OrderHistoryScreen />}
              />
              <Route path='/profile'element={<ProfileScreen/>}  />
          
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
export default App;