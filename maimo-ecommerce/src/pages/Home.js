import React, {useContext} from 'react' //UseContext lo necesito para poder acceder al cartContext
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Main from '../components/Main/Main'
import { CartContext } from '../Contexts/CartContext'

const Home = () => {

    // const {cart, resetCart} = useContext(CartContext)

    // console.log(cart)

    return (
        <>
            <Navbar />
            <Main />
            <Footer />
            {/* <button onClick={()=>resetCart()}>ResetCart</button> */}
        </>
            
            
    )
}

export default Home
