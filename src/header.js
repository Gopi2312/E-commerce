import './header.css';
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './App';
const Header = (props) => {
    const { setBrandSize,setSelectedSize } = useContext(UserContext);
    const descItems = (desc) => {
        const filteredArray = props.arr.filter(item => item.desc === desc);
        setSelectedSize(filteredArray)
        setBrandSize(filteredArray)
    }
    const changeBrand = ()=>{
        setBrandSize(props.arr) 
    }
    return (
        <>
            <span className='count'>{props.newCartItems.length}</span>
            <div className='header'>
                <div className='title'>
                    <h1>ShoeMart</h1>
                </div>
                <ul className='nav-bar'>
                    <li><Link to="/" onClick={()=>changeBrand()}>Home</Link></li>
                    <li><Link to="/size" onClick={() => descItems("SPORTS")}>Sports</Link></li>
                    <li><Link to="/size" onClick={() => descItems("MODERN")}>Modern</Link></li>
                    <li><Link to="/size" onClick={() => descItems("FORMAL")}>Formal</Link></li>
                    <li><Link to="/size" onClick={() => descItems("CASUAL")}>Casual</Link></li>
                </ul>
                <div className='cart-icon'>
                    <Link to="/addcart"><FaCartPlus className='cart' ></FaCartPlus></Link>
                </div>
            </div>
        </>
    )
}

export default Header;
