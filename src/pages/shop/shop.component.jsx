import React, { Component } from 'react'
import "./shop.styles.scss";
import SHOP_DATA from './shop.data.js'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class Shop extends Component{
    constructor(){
        super()
        
        this.state = {
            collections : SHOP_DATA
        }
    }
    
    render(){
        const { collections } = this.state;
        return(
            <div className="shop-page" >
                {
                    collections.map(({ id, ...otherCollectionProps })=>(
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Shop;