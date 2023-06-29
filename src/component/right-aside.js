import { useState } from 'react';
import '../style/right-aside.css';
import { data } from './data';
import { FaSearch } from "react-icons/fa";
import Imagecontainer from './image-container';
const RightAside = (props) => {
    const [searchInput, setSearchInput] = useState('');    
    const{btn,addItem} = props;

    const searchItems = (event) => {
        setSearchInput(event.target.value)
    }
    
    const filteredData = data.filter((item) =>
        item.brand.toLowerCase().includes(searchInput.toLowerCase())
    );
    return (
        <div className='right-aside'>
            <div className='search'>
                <form>
                    <input type="text" className='input-box' placeholder='Search'  onChange={searchItems}></input>
                </form>
                <div className='fa-search'>
                    <FaSearch></FaSearch>
                </div>

            </div>
            <Imagecontainer filterDate={filteredData} btn={btn} addItem={addItem} />
        </div>
    )
}

export default RightAside;