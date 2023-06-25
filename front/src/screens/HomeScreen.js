
import { useEffect, useReducer } from 'react';

import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/esm/Spinner';
import Prod from '../components/Product';

// import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
      // setProducts(result.data);
    };
    fetchData();
  }, []);


  
  return (
    <Row>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div><Spinner/></div>
        ) : error ? (
          <div>{error}</div>
        ) : (
        
          <Row>
          {products.map((product) => (
            <Col sm={6} lg={4} className="mb-3" key={product._id}>
              <Prod product={product}></Prod>
            </Col>
          ))}
        </Row>
        )}
    </div>
      
     
      
     
      </Row>
    
  );
}
export default HomeScreen;