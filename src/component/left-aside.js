import '../style/left-aside.css';
import { useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import { data } from './data';
const LeftAside = (props)=>{
    const {barndItems} = props
    const {selectedSize} = useContext(UserContext); 

    useEffect(() => {
        data.forEach((item) => {
          const brandElement = document.getElementById(item.brand);
          const sizeElement = document.getElementById(item.size);
          const descElement = document.getElementById(item.desc);
      
          if (brandElement) {
            if (selectedSize.includes(item.brand)) {
              brandElement.style.color = '#12130F';
              brandElement.style.fontWeight = 'bold';
            } else {
              brandElement.style.color = 'black';
              brandElement.style.fontWeight = 'normal';
            }
          }

          if (descElement) {
            if (selectedSize.includes(item.desc)) {
              descElement.style.color = '#F9DC5C';
              descElement.style.fontWeight = 'bold';
            } else {
              descElement.style.color = 'White';
              descElement.style.fontWeight = 'normal';
            }
          }
      
          if (sizeElement) {
            if (selectedSize.includes(item.size)) {
              sizeElement.style.backgroundColor = '#1C0F13'
              sizeElement.style.color = 'white'
            } else {
              sizeElement.style.backgroundColor = 'white';
              sizeElement.style.color = 'black'
            }
          }
        });
      }, [selectedSize]);
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
                <Link to="/size"><button id={7}  onClick={() => barndItems(7)}>7</button></Link>
                <Link to="/size"><button id={8}  onClick={() => barndItems(8)}>8</button></Link>
                <Link to="/size"><button id={9}  onClick={() => barndItems(9)}>9</button></Link>
                <Link to="/size"><button id={10} onClick={() => barndItems(10)}>10</button></Link>   
            </ul>
        </div>
    )
}

export default LeftAside;