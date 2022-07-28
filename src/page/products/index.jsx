import React from "react";
import {ROUTER_NAMES} from "../../routers";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {productActions} from "../../state/product/actions";
import {useState} from "react";
import Modal from "../../components/modal";

const Products = () => {
  const dispatch = useDispatch()
  const router = useNavigate()

  const [isOpenModal, setIsOpenModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const addProduct = () => {
    router(ROUTER_NAMES.ADD_PRODUCT)
  }

  const product = useSelector(state => state.productReducer.product)
  const deleteProduct = () => {

    dispatch({type: productActions.DELETE_PRODUCT, payload: selectedProduct})
    setIsOpenModal(false)
  }

  const openDeleteModal = (id)=>{
    setIsOpenModal(true)
    setSelectedProduct(id)
  }
  return <div className="P-full-dashboard">
    <div className='P-dashboard-product'>
      {product.length ? product.map((item, index) => {
        return <div key={index} className='P-box'>
          <div className="product-image" style={{backgroundImage: `url('${item.productImage}')`}}>
            <span onClick={() => openDeleteModal(item.id)}>+</span>
          </div>
          <h2>{item.productName}</h2>
          <p>{item.message}</p>
          {item.price > 2000 ? <span className="P-price"><p
              className="delete-price">{item.price + ' դրամ'}</p><p>{'/' + (item.price - item.price * 20 / 100) + ' դրամ'}</p></span> :
            <p>{item.price + ' դրամ'}</p>}
        </div>
      }) : <h1>Products List was empty</h1>}

    </div>
    <button className='P-button' onClick={addProduct}>Add Products</button>

    {isOpenModal ? <Modal close={()=>setIsOpenModal(false)} >
          <div className='P-delete-products'>
                <h3>Hastat uzum es jnjes</h3>
            <button onClick={()=>setIsOpenModal(false)}>Voch</button>
            <button onClick={deleteProduct}>Ayo</button>
          </div>

    </Modal> : null}

  </div>
}
export default Products