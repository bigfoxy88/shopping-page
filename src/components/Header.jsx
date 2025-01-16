import { useState,useRef } from "react";

import { Link } from 'react-router-dom'
import App from "../App";
import Shop from "./Shop";
import PropTypes from "prop-types";
export default function Header( props){
    let listRef=useRef(null)
    let navRef=useRef(null)

    
     const listVisible=()=>{
           if(listRef.current.classList.contains('visible')){
            listRef.current.classList.remove('visible')

           }else{
           listRef.current.classList.add('visible')
           }
         
     }

     let makeMenuVisible=()=>{
       
        navRef.current.classList.toggle('navVis')
        

    

     }


    return (
        <div className="header">
        <header >
           <h1>Gwenzi</h1> 
           <button  onClick={listVisible} className='mobCart' type="button"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg></button> 
        </header>
       
        <a href="javascript:void(0);" class="icon" onClick={makeMenuVisible}>
    <i class="fa fa-bars"></i>
  </a>
        <nav className='navNoVis' ref={navRef}>
          <Link to='/'>Home </Link>
          <Link to='/about'>About </Link>
          <Link to='/shop'>Shop </Link>
          <Link to='/contact'>Contact </Link>
          
            <button  onClick={listVisible} className='cart' type="button"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg></button> 
          
          
        </nav>
        <div ref={listRef} className="shoplist">

         {props.cart.map((x)=>{
          return (
            <div className="cart-item">
              <img src={x.image} alt="" />
              <p>{x.title}</p>
              <p>quantity: {x.quantity}</p>
              <p>price:{x.price}</p>
               <hr></hr>
            </div>
            
          )
         })}
         <div style={{ display:'flex',justifyContent:'center'}}>
          <button style={{border:'none', textAlign:'center',padding:'10px',borderRadius:'10px',backgroundColor:'green',color:'white'}}>checkout</button>
         </div>
         

        </div>
     </div>
    )



}

Header.propTypes={
  cart:PropTypes.array
}