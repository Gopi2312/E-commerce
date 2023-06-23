import './App.css';
import Header from './component/header';
import { useState, createContext, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/footer';
import RightAside from './component/right-aside';
import LeftAside from './component/left-aside';
import Sizerender from './component/sizerender';
import Addcart from './component/add-cart';
// import { data } from './component/data';
export const UserContext = createContext();
function App() {
  const [searchInput, setSearchInput] = useState('');
  const [cartItems, setCartItems] = useState('');
  const [selectedSize, setSelectedSize] = useState([]);
  const newCartItems = [...cartItems];

  const btn = (item) => {
    const index = newCartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      document.getElementById(item.id).style.backgroundColor = 'red';
      return "Remove from Cart";
    }

    return "Add to Cart";
  }


  const addItem = (item) => {
    const index = newCartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      newCartItems.splice(index, 1)
      document.getElementById(item.id).style.backgroundColor = 'black';
    } else {
      newCartItems.push({ ...item });
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


  const value = useMemo(() => ({
    selectedSize, setSelectedSize, cartItems, setCartItems
  }), [selectedSize, cartItems])

  return (

    <div className="App">
      <BrowserRouter>
      <Header className="header"  brandItems={barndItems}  setSelectedSize={setSelectedSize} newCartItems={newCartItems} ></Header>
        <UserContext.Provider value={value}>
          <div className='body'>
            <LeftAside className="left-aside" barndItems={barndItems}></LeftAside>
            <Routes>
              <Route path='/size' element={<Sizerender btn={btn} addItem={addItem} ></Sizerender>} />
              <Route path='/addcart' element={<Addcart newCartItems={newCartItems} ></Addcart>}></Route>
              <Route exact path='/' element={
                <RightAside className="right-aside"  btn={btn} addItem={addItem} searchInput={searchInput} setSearchInput={setSearchInput} ></RightAside>
              }></Route>
            </Routes>
          </div>
          <Footer className="footer"></Footer>
        </UserContext.Provider >
      </BrowserRouter>
    </div>

  );
}
export default App;
