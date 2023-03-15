import './left-aside.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
const LeftAside = (props)=>{
    const {setSelectedSize} = useContext(UserContext);
    const sizeItems = (event) => {
        const arr1=props.arr.filter(item => item.size === event.target.value);
        setSelectedSize(arr1)
      }
      const barndItems = (brand) => {
        const arr1=props.arr.filter(item => item.brand === brand);
        setSelectedSize(arr1)
      }
      
    
    return(
        <div className = "left-aside">
            <div className='aside-header'>
                <h3>Brands of ShoeMart</h3>
            </div>
            <ul className='side-bar'>
                    <li><Link to="/size"  onClick={() => barndItems("Nike")}>Nike</Link></li>
                    <li><Link to="/size"  onClick={() => barndItems("Adidas")}>Adidas</Link></li>
                    <li><Link to="/size"  onClick={() => barndItems("Reebok")}>Reebok</Link></li>
                    <li><Link to="/size"  onClick={() => barndItems("Woodland")}>Woodland</Link></li>
                    <li><Link to="/size"  onClick={() => barndItems("Bata")}>Bata</Link></li>
            </ul>
            <h3>Size</h3>
            <ul className='side-bar-button'>
                <Link to="/size"><button value={7} onClick={sizeItems}>7</button></Link>
                <Link to="/size"><button value={8} onClick={sizeItems}>8</button></Link>
                <Link to="/size"><button value={9} onClick={sizeItems}>9</button></Link>
                <Link to="/size"><button value={10} onClick={sizeItems}>10</button></Link>   
            </ul>
        </div>
    )
}

export default LeftAside;