import React from 'react'
import './products.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { selectedProduct } from '../../redux/action'
const Products = () => {
  const selector=useSelector((state)=>{
    return state.setProductReducers.product
  })
const dispatch=useDispatch()
  // console.log("selector",selector)
  // const{id,category,image,price}=selector
  return (
    <div className='mainContainer'>
      {
        (selector.length === 0) ? (<img src='https://cdn.dribbble.com/users/1787505/screenshots/7300251/shot.gif' style={{width:"200px",height:"200px"}} alt='image'/>) : (
          selector.map((ele)=>{
            return(
              <div className="card">
          <h3 className='category'>{ele.category}</h3>
          <img className='productImage' src={ele.image} alt='product'/>
          <h4 className='price'>Price:$ <span>{ele.price}</span></h4>
          <button className='but' onClick={()=>{
            dispatch(selectedProduct(ele))
          }}>Add to cart</button>
        </div>
            )
          })
         )
      }
    </div>
  )
}

export default Products