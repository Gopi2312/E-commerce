import '../style/add-cart.css';
import { useContext } from 'react';
import { UserContext } from './provider';
import { data } from './data';
const Addcart = (props) => {
    const {setCartItems,cartItems} = useContext(UserContext);
    const {newCartItems} = props
  
    const cartData = data.filter((item)=>{return cartItems.includes(item.id)})

    const remove = (item)=>{
    const index = newCartItems.indexOf(item);
    if (index >= 0) {
      newCartItems.splice(index, 1)
    } 
        setCartItems(newCartItems);
        console.log(cartData)
    }
    
    if(cartItems.length === 0){
        return(
        <div className='right-aside'>
            <h2 className='empty'>Cart Is Empty</h2>
        </div>
        )
    }
    else{
    return (
        <div className='right-aside'>   
        <div className='image-container'>
            {cartData.map(shoe =>
                <div key={shoe.id} className='image'>
                    <img src={shoe.image} alt={shoe.alt} />
                    <h5>{shoe.rate}</h5>
                    <h4>{shoe.brand}</h4>
                    <button className='cart-button' onClick={() => remove(shoe.id)}>Remove</button>
                </div>
            )}
        </div>
        </div>
    )
    }
}

export default Addcart;