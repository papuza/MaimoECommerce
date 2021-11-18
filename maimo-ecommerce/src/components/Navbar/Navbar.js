import React, { useState, useEffect } from 'react'
import { Container } from './styled'
import { Link } from 'react-router-dom'
import { getFirestore } from '../../services/firebase'
import logo from '../../logomaimo.png'

const Navbar = () => {
    const [categories, setCategories] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const db = getFirestore();
            try {
                const itemsCollection = db.collection(`categories`);
                const itemSnapshot = await itemsCollection.get();
                const cats = itemSnapshot.docs.map((doc) => {
                    return { catId: doc.id, ...doc.data() };
                });

                setCategories(cats);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <div className="navContainer">
                <div className="logo"><img src={logo}></img></div>
                <nav>
                    <ul>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/shop`}>Shop</Link></li>
                        {!loading &&
                            categories.map(({ catId, name }) => (
                                <li>
                                    <Link to={`/category/${catId}`}>{name}</Link>
                                </li>
                            ))}
                        <li><Link to={`/checkout`}><img src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png" /></Link></li>
                    </ul>
                </nav>
            </div>
        </Container>
    )
}

export default Navbar
