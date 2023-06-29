import '../style/header.css';
import { memo } from 'react';
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Header = (props) => {
    const{brandItems,setSelectedSize,newCartItems} = props
    const changeBrand = ()=>{
        setSelectedSize([])
    }
    return (
        <>
            <span className='count'>{newCartItems.length}</span>
            <div className='header'>
                <div className='title'>
                    <h1>ShoeMart</h1>
                </div>
                <ul className='nav-bar'>
                    <li><Link to="/" onClick={changeBrand}>Home</Link></li>
                    <li><Link to="/size" id='SPORTS' onClick={() => brandItems("SPORTS")}>Sports</Link></li>
                    <li><Link to="/size" id='MODERN' onClick={() => brandItems("MODERN")}>Modern</Link></li>
                    <li><Link to="/size" id='FORMAL' onClick={() => brandItems("FORMAL")}>Formal</Link></li>
                    <li><Link to="/size" id='CASUAL' onClick={() => brandItems("CASUAL")}>Casual</Link></li>
                </ul>
                <div className='cart-icon'>
                    <Link to="/addcart"><FaCartPlus className='cart' ></FaCartPlus></Link>
                </div>
            </div>
        </>
    )
}

export default memo(Header);