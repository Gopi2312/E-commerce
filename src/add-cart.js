import './add-cart.css';
const Addcart = (props) => {
    const remove = (item)=>{
        const index = props.newCartItems.findIndex((cartItem) => cartItem.id === item.id);
        if (index >= 0) {
            props.newCartItems.splice(props.newCartItems.findIndex(cartitem => cartitem.id === item.id), 1)
        }
        props.setCartItems(props.newCartItems);
    }
    return (
        <div className='image-container'>
            {props.newCartItems.map(shoe =>
                <div key={shoe.id} className='image'>
                    <img src={shoe.image} alt={shoe.alt} />
                    <h5>{shoe.rate}</h5>
                    <h4>{shoe.brand}</h4>
                    <button className='cart-button' onClick={() => remove(shoe)}>Remove</button>
                </div>
            )}
        </div>
    )
}

export default Addcart;