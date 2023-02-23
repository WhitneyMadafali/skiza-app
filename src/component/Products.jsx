import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import Carousel from "react-elastic-carousel";
const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 4 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 }
];


const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`https://3833-41-57-111-71.eu.ngrok.io/api/products/getAll`,{
            headers: new Headers({
                "ngrok-skip-browser-warning": "69420",
              })});
            //console.log(response);
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);


    const Loading = () => {
        return (
            <>
                <div className="col-sm-6 col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        );
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
        setCurrentPage(1); // reset current page to 1 when filter changes
    }

    const ShowProducts = () => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = filter.slice(indexOfFirstItem, indexOfLastItem);

        return (
            <>
                
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <Carousel breakPoints={breakPoints}>
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("funfact")}>Fun Fact</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("sportfact")}>Sport Fact</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("methali")}>Methali</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jokes")}>Jokes</button>
                    </Carousel>
                </div>
                
                <div className="row">
                    {currentItems.map((product) => (
                        <div className="col-sm-6 col-md-3 mb-4" key={product.id}>
                            <div className="card h-100 text-center p-4">
                                <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                    <p className="card-text mb-0">
                                        {product.description}
                                    </p>
                                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">CLICK TO BUY!</NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination d-flex justify-content-center">
                    {data.length > 0 &&
                        Array(Math.ceil(filter.length / itemsPerPage))
                            .fill()
                            .map((_, index) => (
                                <button
                                    key={index}
                                    className={currentPage === index + 1 ? 'active' : ''}
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                </div>

            </>
        )

    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Our Tunes</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}

                </div>
            </div>
        </div>
    )
}

export default Products
