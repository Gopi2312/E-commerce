import './left-aside.css';
import { useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
const LeftAside = (props)=>{
    const {selectedSize,setSelectedSize,brandSize,setBrandSize} = useContext(UserContext); 
    const sizeItems = (event) => {
        const filteredArray = brandSize.filter(item => item.size === event.target.value);
        setSelectedSize(filteredArray)
      }
      const barndItems = (brand) => {
        if(selectedSize.length===0){
            const filteredArray=props.arr.filter(item => item.brand === brand);
            setSelectedSize(filteredArray)
            setBrandSize(filteredArray)
        }
        else{
            const filteredArray=selectedSize.filter(item => item.brand === brand);
            setSelectedSize(filteredArray)
            setBrandSize(filteredArray)
        }
      }     
    return(
        <div className = "left-aside">
            <div className='aside-header'>
                <h3>Brands of ShoeMart</h3>
            </div>
            <ul className='side-bar'>
                    <li><Link to="/size" id='Nike' onClick={() => barndItems("Nike")}>Nike</Link></li>
                    <li><Link to="/size" id='Adidas' onClick={() => barndItems("Adidas")}>Adidas</Link></li>
                    <li><Link to="/size" id='Reebok' onClick={() => barndItems("Reebok")}>Reebok</Link></li>
                    <li><Link to="/size" id='Woodland' onClick={() => barndItems("Woodland")}>Woodland</Link></li>
                    <li><Link to="/size" id='Bata' onClick={() => barndItems("Bata")}>Bata</Link></li>
            </ul>
            <h3>Size</h3>
            <ul className='side-bar-button'>
                <Link to="/size"><button id={7} value={7} onClick={sizeItems}>7</button></Link>
                <Link to="/size"><button id={8} value={8} onClick={sizeItems}>8</button></Link>
                <Link to="/size"><button id={9} value={9} onClick={sizeItems}>9</button></Link>
                <Link to="/size"><button id={10} value={10} onClick={sizeItems}>10</button></Link>   
            </ul>
        </div>
    )
}

export default LeftAside;