import React from 'react';

// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import{BrowserRouter as Router,Route, Switch} from 'react-router-dom';


function App() {
  return (
   <React.Fragment>
   <Navbar/>
   <Switch>
     <Route exact path="/" component={ProductList}/>
     <Route path="/details" component={Details}/>
     <Route path="/cart" component={Cart}/>    
     <Route  component={Default}/>     
   </Switch>   
   <Modal/>    
   </React.Fragment>
  );
}

export default App;