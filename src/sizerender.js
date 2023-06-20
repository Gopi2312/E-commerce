import './add-cart.css';
import { useContext } from 'react';
import { UserContext } from './App';
const Sizerender = (props) => {
    const {selectedSize} = useContext(UserContext);
    return (
        <div className='right-aside'>
        <div className='image-container'>
            {selectedSize.map(shoe =>
                <div key={shoe.id} className='image'>
                    <img src={shoe.image} alt={shoe.alt} />
                    <h5>{shoe.rate}</h5>
                    <h4>{shoe.brand}</h4>
                    <button className='cart-button' onClick={() => props.addItem(shoe)}>{props.btn(shoe) ? "Remove from Cart" : "Add to Cart"}</button>
                </div>
            )}
        </div>
        </div>
    )
}

export default Sizerender;