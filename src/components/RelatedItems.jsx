import React from 'react'
import ProductCard from './ProductCard'
import { GlobalProductContextHook } from '../context/ProductContext';



const RelatedItems = () => {
    const {relatedProduct } =
GlobalProductContextHook();
  return (
    <>
    <section className="related-item">
        <div className="container">
        <h2 className="section-title">Related Items</h2>
        <div className="row">
           {relatedProduct.map((curELe,index)=>{
            return <div className="col-lg-3">
             <ProductCard key={index} product={curELe} />
        </div>
           })}
        </div>
        </div>
    </section>
    </>
  )
}

export default RelatedItems