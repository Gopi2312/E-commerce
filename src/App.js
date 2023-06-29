import './App.css';
<<<<<<< HEAD
import Header from './component/header';
import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/footer';
import RightAside from './component/right-aside';
import LeftAside from './component/left-aside';
import Sizerender from './component/sizerender';
import Addcart from './component/add-cart';
import { UserContext } from './component/provider';
function App() {
  const {cartItems,setCartItems,selectedSize,setSelectedSize} = useContext(UserContext)
  const newCartItems = [...cartItems];

  const btn = (item) => {
    const index = newCartItems.indexOf(item);
    if (index >= 0) {
      return true; 
    }
    return false;
  }


  const addItem = (item) => {
    const index = newCartItems.indexOf(item);
    if (index >= 0) {
      newCartItems.splice(index, 1)
    } else {
      newCartItems.push(item);
    }
    setCartItems(newCartItems);
  };


  const barndItems = (brand) => {
    if (typeof brand === 'string') {
        if(selectedSize.includes(brand)){
            setSelectedSize([]);
        }
        else{
            setSelectedSize([brand]);
        } 
    } 
    else {
        if(selectedSize.length<=1){
            setSelectedSize([...selectedSize, brand]);
        }
        if(selectedSize.length>=2){
            selectedSize.splice(selectedSize.length-1,1)
            setSelectedSize([...selectedSize, brand]);
        }     
    }
    
  }; 



  return (

    <div className="App">
      <BrowserRouter>
      <Header className="header"  brandItems={barndItems}  setSelectedSize={setSelectedSize} newCartItems={newCartItems} ></Header>
          <div className='body'>
            <LeftAside className="left-aside" barndItems={barndItems}></LeftAside>
            <Routes>
              <Route path='/size' element={<Sizerender btn={btn} addItem={addItem} ></Sizerender>} />
              <Route path='/addcart' element={<Addcart newCartItems={newCartItems} ></Addcart>}></Route>
              <Route exact path='/' element={
                <RightAside className="right-aside"  btn={btn} addItem={addItem} ></RightAside>
              }></Route>
            </Routes>
          </div>
          <Footer className="footer"></Footer>
      </BrowserRouter>
    </div>
=======
import Header from './header';
import { useState, createContext, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './footer/footer';
import RightAside from './right-aside/right-aside';
import LeftAside from './left-aside/left-aside';
import Sizerender from './sizerender';
import Addcart from './add-cart';
export const UserContext = createContext();
function App() {
  const arr = [
    { id: 1, image: require("./images/shoe1.webp"), alt: "Abdur-Image", desc: "SPORTS", brand: "Nike", rate: "800rs", size: '8' },
    { id: 2, image: require("./images/shoe2.jpeg"), alt: "Ranjith-Image", desc: "MODERN", brand: "Adidas", rate: "1000rs", size: '7' },
    { id: 3, image: require("./images/shoe3.webp"), alt: "Kl-Image", desc: "CASUAL", brand: "Reebok", rate: "900rs", size: '9' },
    { id: 4, image: require("./images/shoe4.webp"), alt: "Arun-Image", desc: "MODERN", brand: "Bata", rate: "1200rs", size: '8' },
    { id: 5, image: require("./images/shoe5.webp"), alt: "Arunachalam-Image", desc: "FORMAL", brand: "Nike", rate: "1000rs", size: '10' },
    { id: 6, image: require("./images/shoe6.jpeg"), alt: "Bhaargavi-Image", desc: "MODERN", brand: "Woodland", rate: "800rs", size: '7' },
    { id: 7, image: require("./images/shoe7.jpeg"), alt: "Bhuvaneshwari-Image", desc: "SPORTS", brand: "Bata", rate: "1000rs", size: '9' },
    { id: 8, image: require("./images/shoe8.jpeg"), alt: "Fasila-Image", desc: "MODERN", brand: "Reebok", rate: "650rs", size: '8' },
    { id: 9, image: require("./images/shoe9.jpeg"), alt: "Ganesh-Image", desc: "CASUAL", brand: "Nike", rate: "700rs", size: '10' },
    { id: 10, image: require("./images/shoe10.jpeg"), alt: "Gopi-Image", desc: "FORMAL", brand: "Adidas", rate: "900rs", size: '7' },
  ]
  const [searchInput, setSearchInput] = useState('');
  const [cartItems, setCartItems] = useState('');
  const [selectedSize, setSelectedSize] = useState([]);
  const [brandSize, setBrandSize] = useState(arr);
  
  const newCartItems = [...cartItems];

  const btn = (item) => {
    const index = newCartItems.findIndex((cartItem) => cartItem.id === item.id);
    return index >= 0;
  }

  const addItem = (item) => {
    const index = newCartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      newCartItems.splice(newCartItems.findIndex(cartitem => cartitem.id === item.id), 1)
    } else {
      newCartItems.push({ ...item });
    }
    setCartItems(newCartItems);
  };
>>>>>>> 4a7536bee7db6b8e1d53172ea2b0e8fcdd29bc1d

  const value =useMemo(()=>({
    selectedSize,setSelectedSize,cartItems, setCartItems,brandSize,setBrandSize
  }),[selectedSize,cartItems,brandSize])

  return (
    <UserContext.Provider value={value}>
      <div className="App">
        <BrowserRouter>
          <Header className="header" arr={arr} newCartItems={newCartItems}></Header>
          <div className='body'>
            <LeftAside className="left-aside" arr={arr}></LeftAside>
            <Routes>
              <Route  path='/size' element={<Sizerender btn={btn} addItem={addItem} ></Sizerender>} />
              <Route  path='/addcart' element={<Addcart newCartItems={newCartItems}></Addcart>}></Route>
              <Route exact path='/' element={
                <RightAside className="right-aside" arr={arr} btn={btn} addItem={addItem} searchInput={searchInput} setSearchInput={setSearchInput} ></RightAside>
              }></Route>
            </Routes>
          </div>
          <Footer className="footer"></Footer>
        </BrowserRouter>
      </div>
    </UserContext.Provider >
  );
}
export default App;
