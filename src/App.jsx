
import './App.css'
import Home from './components/Home'
import Shop from './components/Shop'
import { useState ,useEffect} from 'react'
import slide from './assets/63870c8c73f5f3c9fec33606_hero-slider-img-1.png'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Contact from './components/contact'
import About from './components/About'
function App() {
  //const [count, setCount] = useState(0)
  const [cart,setCart]=useState([])
  let [items,setItems]=useState([]) 
   let [error ,setError]=useState('')
   let [loading ,setLoading]=useState(true)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(res=>{setItems(res)
            console.log(res)
        })
        .catch(err=>setError('Something went wrong...'))
        .finally((res)=>{
          setLoading(false)

        })
    },[])

  return (
  
    <Routes>
      <Route path='/about' element={ <About cart={cart}/>}></Route>
        <Route path="/"  exact element={<Home  setCart={setCart} cart={cart}  />} />
        <Route path="/shop" element={<Shop  setCart={setCart} cart={cart} loading={loading} items={items} error={error}/>} />
        <Route path='/contact' element={<Contact   cart={cart} />}/>
    </Routes>

  )

   
}

export default App
