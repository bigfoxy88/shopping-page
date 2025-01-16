import Header from "./Header";
import './about.css'

export default function About(props){



    return(<>
    <Header  cart={props.cart}/>
       <div className="about">
        <h2 className="abouth">We Care About Our Customers</h2>
        <p className="aboutp">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, nam? Quas ut non deleniti? Dolor repudiandae, consequatur voluptas nobis tenetur vel facere doloribus? Aut reiciendis tempora velit rem commodi officiis.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem provident praesentium culpa veritatis inventore, rerum aperiam quos dolorem eius quis sunt laudantium iste id repudiandae exercitationem corrupti quo? Possimus, quis.</p>
        <p className="aboutp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatibus debitis numquam doloribus, autem repellat odit impedit at maiores laborum amet eligendi doloremque, eveniet, nemo inventore rerum saepe porro qui. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis harum optio labore dolores animi ratione aliquam sed molestias voluptatibus itaque culpa blanditiis est voluptatum maiores, sapiente minus. Quam, magni aliquid!</p>
        <p className="aboutp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam nostrum incidunt expedita labore sit quos nihil iste cumque aliquam, laboriosam reprehenderit! Quis optio animi minima perferendis blanditiis debitis fugit.</p>
       </div>
    
    </>)

}