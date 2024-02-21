/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext.jsx";

// Styles
import "./ProductDetails.css";

// React Icons
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const ProductDetails = () => {
    const { id } = useParams();

    const { addToCart } = useContext(CartContext);

    const [data, setData] = useState([]);

    const INDIVIDUAL_URL = "https://dummyjson.com/products/";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${INDIVIDUAL_URL}/${id}`);
                const dataFetched = await response.json();
                setData(dataFetched);
            } catch (error) {
                console.error("Something went wrong", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <>
            <div className="product-container">
                <div className="product-img-box">
                    {data.images && data.images.length > 0 && (
                        <img
                            className="main-product-img"
                            src={data.images[0]}
                            alt=""
                        />
                    )}
                </div>

                <div className="product-details-box">
                    <Link className="home-link" to={"/"}>
                        Home / The Shop
                    </Link>

                    <h1 className="product-details-title">{data.title}</h1>

                    <p className="card-rating">
                        {data.rating > 4.75 ? (
                            <>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </>
                        ) : data.rating > 4.5 ? (
                            <>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </>
                        ) : data.rating > 4.25 ? (
                            <>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </>
                        ) : (
                            <>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </>
                        )}

                        <sup> ({data.rating})</sup>
                    </p>

                    <p className="product-details-brand">
                        <span>{data.brand}</span>
                    </p>
                    <h2 className="product-details-price">${data.price}.-</h2>

                    <p className="product-details-description">
                        {data.description}
                    </p>
                    <div className="product-details-idStock">
                        <h3 className="product-details-id">
                            | ID: {data.id} |
                        </h3>
                        <p className="product-details-stock">
                            Only {data.stock} left
                        </p>
                    </div>

                    <button
                        onClick={() => addToCart(data, data.id)}
                        className="product-card-btn"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
