import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import Product from './Product';

export class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                   const {id, company, img, info, price, title, inCart}=
                   value.detailProduct;
                   return(
                       <div className="container py-2">
                           <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5" >
                                    <h1>{title}</h1>
                                </div>
                           </div>
                           {/* title ends*/}

                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="products"/>
                                </div>

                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model: {title}</h2>
                                    <h4 className="text-uppercase my-3 text-muted">made by: {company}</h4>
                                    <h4>price: <span>$</span>{price}</   h4>
                                     <p className="text-capitalize font-weight-bold mt-3 mb-0">Some info about product</p>
                                     <p className="text-muted">{info}</p> 

                                     <div>
                                         <Link to="/">
                                             <ButtonContainer>Back to Home</ButtonContainer>
                                         </Link>
                                         <ButtonContainer disabled={inCart?true:false} 
                                         onClick={()=>{
                                             value.addToCart(id);
                                             value.openModal(id);
                                         }}>
                                             {inCart? "inCart": "add to cart" }
                                         </ButtonContainer>
                                     </div>
                                </div>
                            </div>





                       </div>
                   )
                    
                }}
            </ProductConsumer>
        );
    }
}

export default Details;
