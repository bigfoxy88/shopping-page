import Header from "./Header";
import './contact.css'
import PropTypes from "prop-types";


export default function Contact(props){


    return(
        <>
        <Header cart={props.cart}/>
        <div className="contact">
            <h1>Contact Us</h1>
            <p>Phone number : 1234567890</p>
            <p>Email :someone@somemail.com</p>
            <p>Address: 100 some place ave'</p>
        </div>
        
        </>
    )
}

Contact.propType={
    cart:PropTypes.array
}