import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom'; 
import {ButtonContainer} from './Button';
import styled from 'styled-components';


export default class Modal extends Component {
    render(){
        return(
        <ProductConsumer>
            {
              (value)=>{

                const {modalOpen,closeModal}=value;
                const {img,title, price}=value.modalProduct;

                if(!modalOpen){
                    return null;
                }
                  else{

                     return( <ModalContainer>
                          <div className="container">
                              <div className="row justify-content-center">
                                  <div id="modal" className="col-md-4">
                                    <h5>Item added to the cart</h5>
                                    <img src={img} className="img-fluid" alt="product"></img>
                                     <h5>{title}</h5>
                                     <h5 className="text-muted">price : ${price}</h5>
                                     <Link to="/">
                                         <ButtonContainer onClick={()=>closeModal()}>
                                             store
                                         </ButtonContainer>
                                     </Link>
                                     <Link to="/cart">
                                         <ButtonContainer cart onClick={()=>closeModal()}>
                                             Go to Cart
                                         </ButtonContainer>
                                     </Link>
                                  </div>

                              </div>

                          </div>
                      </ModalContainer>)

                  }
              }
            }
        </ProductConsumer>
        )
    }
}

const ModalContainer=styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    text-align:center;
    justify-content:center;
    #modal{
        background: var(--mainWhite);
        margin-top:3%;
        padding-top:20px;
        padding-bottom:20px;
        border-radius:5px;
       
    }
   
`;