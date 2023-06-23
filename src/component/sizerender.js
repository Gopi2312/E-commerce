import '../style/add-cart.css';
import { useContext } from 'react';
import { UserContext } from '../App';
import { data } from './data';
const Sizerender = (props) => {
    const {selectedSize} = useContext(UserContext);

    const filterDate = data.filter((item)=>{
        if(selectedSize.length===0){
            return true
        }
        else if(selectedSize.length===1){
            return selectedSize.includes(item.brand) || selectedSize.includes(item.size) || selectedSize.includes(item.desc)
        }
        else{
            return (selectedSize.includes(item.desc) || selectedSize.includes(item.brand)) && selectedSize.includes(item.size)
        }
    })

    if(filterDate.length === 0){
        return(
            <div className='right-aside'>
                <h2>Products Not Available</h2>
            </div> 
        )
    }
    else{
    return (
        <div className='right-aside'>
        <div className='image-container'>
            {filterDate.map(shoe =>
                <div key={shoe.id} className='image'>
                    <img src={shoe.image} alt={shoe.alt} />
                    <h5>{shoe.rate}</h5>
                    <h4>{shoe.brand}</h4>
                    <button className='cart-button' id={shoe.id}   onClick={() => props.addItem(shoe)}>{props.btn(shoe)}</button>
                </div>
            )}
        </div>
        </div>
    )
    }
}

export default Sizerender;