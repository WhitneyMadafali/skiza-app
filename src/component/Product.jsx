import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
//import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

import { FacebookShareButton, WhatsappShareButton, TelegramShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, WhatsappIcon, TelegramIcon, TwitterIcon } from 'react-share';

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://3060-41-57-111-71.eu.ngrok.io/api/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }
                    } />

                </div>
            </>
        )
    }
    const ShowProduct = () => {
        const [phone, setPhone] = useState('');
        const [isValid, setIsValid] = useState(false);
        const [isLoading, setIsLoading] = useState(false);

        useEffect(() => {
            if (phone.length === 10) {
                setIsValid(true);
            } else {
                setIsValid(false);
            }
        }, [phone]);

        const handleSubmit = (e) => {
            e.preventDefault();
            setIsLoading(true);


            fetch('https://example.com/api/submit-phone-number', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ phone })
            })
                .then(response => {
                    if (response.ok) {
                        console.log('Phone number submitted successfully');
                        setIsLoading(false);
                        setPhone('');
                        // Navigate to new page

                    } else {
                        throw new Error('Failed to submit phone number');
                    }
                })
                .catch(error => {
                    console.error(error);
                    setIsLoading(false);
                    // Show error message to user
                });
        };


        const handlePhoneChange = (e) => {
            setPhone(e.target.value);
        };
        return (
            <>
                <div className="col-md-6">
                <div class="d-flex justify-content-start">
                    <img src={product.image} alt={product.title}
                        height="500px" width="500px" />
                        </div>
                </div>
                <div className="col-md-6">
                    <div class="d-flex justify-content-start">
                        <h4 className="text-uppercase text-black-30">
                            {product.category}
                        </h4>
                    </div>
                    <div class="d-flex justify-content-start">
                        <h1 className="text-capitalize">{product.title}</h1>
                    </div>
                    <div class="d-flex justify-content-start">
                        <p className="lead">{product.description}</p>
                    </div>
                    <div class="d-flex justify-content-center">

                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="number"
                                value={phone}
                                onChange={handlePhoneChange}
                                className="form-control"
                                placeholder="Enter Your Phone Number"
                            />
                        </div>
                        <div class="d-flex justify-content-center">
                        <Link to="/Subscription">
                            <button type="submit" className="btn btn-primary" disabled={!isValid || isLoading}>
                                {isLoading ? 'Loading...' : 'GET THIS TUNE'}
                            </button>
                        </Link>
                    </div>
                    </form>
                     
                    <div class="d-flex justify-content-center">
                        <h3 className="display-6 fw-bold my-4">Or Share With Your Friends</h3>
                    </div>
                    <div class="d-flex justify-content-center">
                        <FacebookShareButton
                            url="https://skiza.africomltd.com/"
                            quote={"Enhance Your Calls with Skiza - The Music Caller Tune Subscription Service"}
                            className="mx-3"
                        >
                            <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
                        </FacebookShareButton>
                        <WhatsappShareButton
                            title={"Enhance Your Calls with Skiza - The Music Caller Tune Subscription Service"}
                            url="https://skiza.africomltd.com/"
                            className="mx-3"
                        >
                            <WhatsappIcon logoFillColor="white" round={true}></WhatsappIcon>
                        </WhatsappShareButton>
                        <TelegramShareButton
                            title={"Enhance Your Calls with Skiza - The Music Caller Tune Subscription Service"}
                            url="https://skiza.africomltd.com/"
                            className="mx-3"
                        >
                            <TelegramIcon logoFillColor="white" round={true}></TelegramIcon>
                        </TelegramShareButton>
                        <TwitterShareButton
                            title={"Enhance Your Calls with Skiza - The Music Caller Tune Subscription Service"}
                            url="https://skiza.africomltd.com/"
                            className="mx-3"
                        >
                            <TwitterIcon logoFillColor="white" round={true}></TwitterIcon>
                        </TwitterShareButton>
                    </div>



                </div>
            </>
        )
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Product
