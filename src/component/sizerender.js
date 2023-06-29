import '../style/add-cart.css';
import { useContext } from 'react';
import { UserContext } from './provider';
import { data } from './data';
import Imagecontainer from './image-container';
const Sizerender = (props) => {
    const {selectedSize} = useContext(UserContext);
    const {addItem,btn} = props

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
        {/* <div className='image-container'>
            {filterDate.map(shoe =>
                <div key={shoe.id} className='image'>
                    <img src={shoe.image} alt={shoe.alt} />
                    <h5>{shoe.rate}</h5>
                    <h4>{shoe.brand}</h4>
                    <button className={btn(shoe.id)?'color-button':'cart-button'}  onClick={() => addItem(shoe.id)}>{btn(shoe.id)?"Remove From Cart":"Add to Cart"}</button>
                </div>
            )}
        </div> */}
        <Imagecontainer filterDate={filterDate} btn={btn} addItem={addItem} />
        </div>
    )
    }
}

export default Sizerender;