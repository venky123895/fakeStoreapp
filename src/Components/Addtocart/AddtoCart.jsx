import React from 'react'
import { useSelector } from 'react-redux'
import { removeProducts } from '../../redux/action'
import { useDispatch } from 'react-redux'
const AddtoCart = () => {
  const selectedProducts=useSelector((state)=>{
    return state.selectedProduct
  })
  const dispatch=useDispatch()
  console.log("selectedProducts",selectedProducts)
  return (
    <div className='mainContainer'>
      {
       (selectedProducts.length === 0) ? (<><h3>No Products available ...</h3><img src='https://cdn.dribbble.com/users/1787505/screenshots/7300251/shot.gif' style={{width:"200px",height:"200px"}} alt='images'/></>) : (
        selectedProducts.map((ele)=>{
          return(
            <div className="card">
        <h3 className='category'>{ele.category}</h3>
        <img className='productImage' src={ele.image} alt='product'/>
        <h4 className='price'>Price:$ <span>{ele.price}</span></h4>
        <button className='but' onClick={()=>{
          dispatch(removeProducts(ele.id))
        }}>Remove</button>
      </div>
          )
        })
       )
      }
    </div>
  )
}

export default AddtoCart