import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let person={
    name:"Muhammad Naqib",
    job:"web developer"
  }
  let style={
    color:"red",
    backgroundColor:"yellow"
  }
  const products=[{name:"photoshop",price:"$99.99"},{name:"Illustrator",price:"$60.99"},{name:"PDF Reader",price:"$6.99"}
  ]
  const productNames=products.map(product => product.name);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <Products product={products[0]}></Products>
        <Products product={products[1]}></Products>
        <Products product={products[2]}></Products>
        <h1 style={style}>My heading: {person.name +" " + person.job}</h1>
        <p style={{backgroundColor:'tomato'}}>My first react paragraph.</p>
        <Person nayok="manna" naika="mousumi"></Person>
        <Person nayok="rubel" naika="nargis"></Person>
        <Person nayok="sakib khan" naika="bubli"></Person>
      </header>
    </div>
  );
}

function Products(props) {
  const productStyle={
    border:"1px solid gray",
    borderRadius:"5px",
    backgroundColor:"gray",
    height:"250px",
    width:"250px"
  }
  const {name,price}=props.product;
  return(
    <div style={productStyle}>
      <h3>Name:{name}</h3>
      <h4>Price:{price}</h4>
      <button>Buy Now</button>
    </div>
  )
  
}

function Counter() {
  const [count , setCount] =useState(10);
  // const handleIncrease=() =>;
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() =>setCount(count + 1)}>Increase</button>
      <button onClick={() =>setCount(count - 1)}>Decrease</button>
    </div>
  )
  
}
function Person(props){
  return(
   <div style={{border:"2px solid yellow" , margin:"10px"}}>
     <h1>Nayok:{props.nayok} </h1>
     <p>Number one naika {props.naika}.</p>
   </div>
  )
}
export default App;
