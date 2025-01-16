
import Header from "./Header"
import { useRef,useState,useEffect} from "react"
import './shop.css'
import PropTypes from "prop-types";
export default function Shop(props){
   let selectRef=useRef(null);
   const [cat,setCat]=useState('');
   let [saleItems,setSaleItems]=useState([...props.items])
   let [start, setStart]=useState('')
   useEffect(()=>{
    setSaleItems([...props.items])
   },[props.items])


    const handlePlus=(e)=>{
         let inp=e.target.parentElement.children[1]
         inp.value++;
         //console.log(inp)


    }
    const handleMinus=(e)=>{
        let inp=e.target.parentElement.children[1];
        if(inp.value>1){
        inp.value--;}
        //console.log(inp)


   }


   const addToCart=(e)=>{

    let index=Number(e.target.id)
    let inp=e.target.parentElement.children[3].children[1];
    let item=props.items.filter((x)=>{
        if(x.id===index){
            return x 
        }
    })[0]
    console.log(item)
    if(props.cart.some(x=>x.id==item.id)==false){
    let newItem={
        id:item.id,
        title:item.title,
        price:item.price*Number(inp.value),
        image:item.image,
        quantity:Number(inp.value)
    }
    props.setCart([...props.cart,newItem])
    
    }else{
        let newArr=props.cart.map((x)=>{
            if(x.id==item.id){
                return {
                    id:item.id,
                    title:item.title,
                    price:item.price*(x.quantity+Number(inp.value)),
                    image:item.image,
                    quantity:x.quantity+=Number(inp.value)
                }
            }else{
                return x;
            }

        })
        console.log(newArr)
        props.setCart([...newArr])
    }

}

const catChange=()=>{
        //console.log(selectRef.current.value)
    setCat(selectRef.current.value)
    if(selectRef.current.value!= 'all'){
    setSaleItems([...props.items.filter((x=>{
        if(x.category===selectRef.current.value){
            return x
        }
    
    }))])}else{
        setSaleItems([...props.items])

    }
    
}

    return (
        <>
        <Header   cart={props.cart}/>

        {props.loading?<div>loading...</div>:''}
        <div className="cats">
            <select onChange={catChange} ref={selectRef} name="cats" id="cats">
                <option defaultValue='all' value="all">all</option>
                <option value="men's clothing">Men's clothing</option>
                <option value=
"jewelery">Jewelery</option>
                <option value=
"electronics">Electronics</option>
               <option value=
"women's clothing"
>Women's clothing</option>

            </select>
        </div>
        <section>
            {props.error==''? 
            <div className="items">
                {saleItems.map((x,i)=>{ 
                    //console.log('p')
                    return (
                    <div key={x.id} className="item">
                        <img src={x.image} alt="" />
                        <p>{x.title}</p>
                        <p>${x.price}</p>
                        <div className="butts"> 
                        <button onClick={handlePlus} className="plus">+</button>
                        <input className="quantity" min='1' type="number" name="quan" id="quan" defaultValue={1} />
                        <button onClick={handleMinus} className="minus">-</button>
                        
                        </div>
                        <button className="add" onClick={addToCart}   id={x.id}>Add to cart</button>
                    </div>)

                })}
            </div>
            
            
            :<h2 className="error">{props.error }</h2>}

        </section>
        </>
    )
}

Shop.prototype={
    cart:PropTypes.array,
    error:PropTypes.string,
    setCart:PropTypes.func,
    items:PropTypes.array
}