import './left-aside.css';
import { Link } from 'react-router-dom';
const LeftAside = (props)=>{
    const sizeItems = (event) => {
        const arr1=props.arr.filter(item => item.size === event.target.value);
        props.setSelectedSize(arr1)
      }
      const barndItems = (brand,event) => {
        {console.log(event.target)}
        const arr1=props.arr.filter(item => item.brand === brand);
        props.setSelectedSize(arr1)
      }
      
    
    return(
        <div className = "left-aside">
            <div className='aside-header'>
                <h3>Brands of ShoeMart</h3>
            </div>
            <ul className='side-bar'>
                    <li><Link to="/size"  onClick={(event) => barndItems("Nike", event)}>Nike</Link></li>
                    <li><Link to="/size"  onClick={(event) => barndItems("Adidas", event)}>Adidas</Link></li>
                    <li><Link to="/size"  onClick={(event) => barndItems("Reebok", event)}>Reebok</Link></li>
                    <li><Link to="/size"  onClick={(event) => barndItems("Woodland", event)}>Woodland</Link></li>
                    <li><Link to="/size"  onClick={(event) => barndItems("Bata", event)}>Bata</Link></li>
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