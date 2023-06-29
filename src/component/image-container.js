import React from 'react'

const Imagecontainer = (props) => {
const {addItem,btn,filterDate} = props

  return (
    <div className='image-container'>
            {filterDate.map(shoe =>
                <div key={shoe.id} className='image'>
                    <img src={shoe.image} alt={shoe.alt} />
                    <h5>{shoe.rate}</h5>
                    <h4>{shoe.brand}</h4>
                    <button className={btn(shoe.id)?'color-button':'cart-button'}  onClick={() => addItem(shoe.id)}>{btn(shoe.id)?"Remove From Cart":"Add to Cart"}</button>
                </div>
            )}
    </div>
  )
}

export default Imagecontainer