import './add-cart.css'
const Sizerender = (props) => {
    return (
        <div className='image-container'>
            {props.selectedSize.map(shoe =>
                <div key={shoe.id} className='image'>
                    <img src={shoe.image} alt={shoe.alt} />
                    <h5>{shoe.rate}</h5>
                    <h4>{shoe.brand}</h4>
                    <button className='cart-button' onClick={() => props.addItem(shoe)}>{props.btn(shoe) ? "Remove from Cart" : "Add to Cart"}</button>
                </div>
            )}
        </div>
    )
}

export default Sizerender;