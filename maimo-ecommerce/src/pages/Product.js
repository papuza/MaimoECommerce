import React, {useState, useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ProductContainer from '../components/ProductContainer/ProductContainer'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { CartContext } from '../Contexts/CartContext'
import { getFirestore } from '../services/firebase'

const Product = () => {

    const {id:prodId} = useParams();

    const {addToCart} = useContext(CartContext);

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [showNotif, setShowNotif] = useState(false);

    const addToCartWithFeedback = (product) =>{
        addToCart(product);
        setShowNotif(product.name);
        setTimeout(()=>{
            setShowNotif(false)
        }, 5000)
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const db = getFirestore();
            try {
                const productsCollection = db.collection('products');
                //Traigo el producto segun el id
                const productSnapshot = await productsCollection.doc(prodId).get();
                if(!productSnapshot.exists) {
                    console.log("No existe el producto")
                    return;
                }
                setProduct({id: productSnapshot.id, ...productSnapshot.data()});
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        };

        fetchData()
    }, [prodId]);


    return (
        <>
            <Navbar />
            {showNotif && <div className="showNotif">{`Se añadió al carrito de compras: ${showNotif}`}</div>}
            {loading ? (
                <p>Loading...</p>
            ):(  
            <ProductContainer id={prodId} product={product} addToCart={addToCartWithFeedback} />
            )}
            <Footer />
        </>
    )
}

export default Product
