import '../style/right-aside.css';
import { data } from './data';
import { FaSearch } from "react-icons/fa";
const RightAside = (props) => {
    console.log("hello")
    const{searchInput,setSearchInput,btn,addItem} = props
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
                    <input type="text" className='input-box' placeholder='Search' value={props.searchInput} onChange={searchItems}></input>
                </form>
                <div className='fa-search'>
                    <FaSearch></FaSearch>
                </div>

            </div>
            <div className='image-container'>
                {filteredData.map(shoe =>
                    <div key={shoe.id} className='image'>
                        <img src={shoe.image} alt={shoe.alt} />
                        <h5>{shoe.rate}</h5>
                        <h4>{shoe.brand}</h4>
                        <button className='cart-button' id={shoe.id}   onClick={() => addItem(shoe)}>{btn(shoe)}</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RightAside;