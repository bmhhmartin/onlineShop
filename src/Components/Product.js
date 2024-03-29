import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';


export class Product extends Component {
    render() {
        const {id, title, img, price, company, inCart, info} = this.props.product;
        return (
            <ProductWrapper className="col-9 col-sm-6 mx-auto col-md-3 col-lg-3 my-3">
                <div className="card">

                    <ProductConsumer>
                    
                        {value=>(
                            <div className="img-container p-4" 
                            onClick={()=> value.handleDetail(id)}>

                                <Link to="/details">
                                    <img src={img} alt="product" className="card-img-top"/>
                                </Link>
                                <button className="cart-btn" disabled={inCart ? true: false}
                                 onClick={()=>
                                 {
                                     value.addToCart(id);
                                     value.openModal(id);
                                 
                                 }}>
                                
                                    {inCart?(
                                        <p className="text-capitalize mb-0" disabled> {" "}
                                            in cart
                                        </p>
                                        ):(
                                        <i className="fas fa-cart-plus"></i>
                                    )}

                                </button>
                            </div>
                        )}

                        

                    
                        
                    </ProductConsumer>
                    

                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}


Product.propTypes = {
    product: PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes. string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};

 
const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all .4s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition: all .4s linear;
}

&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.02);
    }
    .card-footer{
        background: rgba(247,247,247);
    }
}

.img-container{
    position: relative;
    overflow: hidden;
}
.card-img-top{
    transition: all .4s linear;
}

.img-container:hover .card-img-top{
    transform: scale(1.2);
}

.cart-btn{
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0.2rem 0.8rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1rem;
    border-radius: 0.6rem 0 0 0;
    transform: translate(100%, 100%);
}
.img-container:hover .cart-btn{
    transform: translate(0, 0);
    transition: all .4s linear;
}
.cart-btn:hover{
    background: var(--mainBlue);
    color: var(--mainWhite);
}

`;

export default Product;
