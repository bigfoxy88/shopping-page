
import Header from './Header'
import slide from '../assets/63870c8c73f5f3c9fec33606_hero-slider-img-1.png'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


function Home(props) {
  //const [count, setCount] = useState(0)

  return (


    <>
  
    <Header  cart={props.cart}/>


    <div className='intro'>

      <div className='words' >
        <p className='one'> a range of items</p>
        <p className='two'>New Product Collection</p>
        <Link to='/shop'className='three'>Discover more</Link>
      </div>
      <img src={slide} alt="" />

    </div>
    <div className="explore">
      <h2>Explore</h2>
    </div>


      </>)
}

Home.propTypes={
  cart:PropTypes.array
}

export default Home
