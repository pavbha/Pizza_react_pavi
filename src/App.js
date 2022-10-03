// import { Router } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/index";
import Hero from "./component/Hero/index";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Products from "./component/Products";
import { productData, productDataTwo } from "./component/Products/data";
import Feature from "./component/Feature/index";
import Footer from "./component/Footer";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treat fr you" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
