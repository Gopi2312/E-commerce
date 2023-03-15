import './right-aside.css';
import { FaSearch } from "react-icons/fa";
const RightAside = (props) => {
    const searchItems = (event) => {
        props.setSearchInput(event.target.value)
    }


    const filteredData = props.arr.filter((item) =>
        item.brand.toLowerCase().includes(props.searchInput.toLowerCase())
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
                        <button className='cart-button' onClick={() => props.addItem(shoe)}>{props.btn(shoe)?"Remove from Cart":"Add to Cart"}</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RightAside;