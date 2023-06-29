import './App.css';
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

  );
}
export default App;
