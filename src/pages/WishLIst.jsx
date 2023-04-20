import React from 'react'

import ProductWishlistCard from "../components/ProductWishlistCard";
import { GlobalProductCartContextHook } from '../context/AddTocartContext';


const WishLIst = () => {

    const {wishlist} = GlobalProductCartContextHook();

    if (wishlist.length === 0) {
        return <h2 className="text-center my-5">No Items In Wishlist</h2>;
      }
    return (
        <section className="wishlist-section section">
            <div className="container">
                <h2 className="section-title">Wish List</h2>
                <div className="wislist-cover py-3">
               
                    <div className="row">
                        {
                            wishlist.map((curEle, index)=>{
                                return (
                                    <div className="col-lg-3">
                       <ProductWishlistCard key={index} product={curEle} />
                        </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WishLIst