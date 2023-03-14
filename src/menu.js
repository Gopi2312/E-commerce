import './menu.css';
import { Link } from 'react-router-dom';
const Menulist = ()=>{
    return(
        <div className="menu-bar">
            <div className='menu-list'>
                <ul className='nav-bar'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/boys">Boys</Link></li>
                    <li><Link to="/girls">Girls</Link></li>
                    <li><Link to="/formal">Formal</Link></li>
                    <li><Link to="/casual">Casual</Link></li>
                    <li><Link to="/sports">Sports</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Menulist;