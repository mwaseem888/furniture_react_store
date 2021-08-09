import {React,useMemo} from 'react';
import { useParams,useHistory } from 'react-router-dom';

import {getProductById} from '../../data/products'
import StoreHeader from '../store_header';
import { ProductDetail } from './product_detail';
import ReviewListing from './review_listing'





export default function Detail() {
  let {id} = useParams();
  let history=useHistory();
  let product = useMemo(() => getProductById(id), [id]);
  if(!product){
      history.push('/not-found')
      return null;  
  }
    return (<>
        
        <div>
        <StoreHeader/>
        <ProductDetail product={product}/>
             <ReviewListing/>
      
            
        </div>
        </>
    )
}
