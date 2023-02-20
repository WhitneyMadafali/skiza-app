import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
//import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { FacebookShareButton, WhatsappShareButton, TelegramShareButton, TwitterShareButton} from 'react-share';
import { FacebookIcon, WhatsappIcon, TelegramIcon, TwitterIcon } from 'react-share';

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://0774-41-57-111-71.eu.ngrok.io/products/${id}`);
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
        const [phone,setPhone] = useState("")
        
        async function subscribe()
        {
            let item=(phone)
            console.warn(item)

            let result = await fetch("https://localhost:3000/skiza/subscribe",{
                method:'POST',
                headers:{
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                },
                body:JSON.stringify(item)
            });
            result = await result.json()
            console.warn("result", result)
        }
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title}
                        height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {product.category}
                    </h4>
                    <h1 className="display-5">{product.title}</h1>
                    <h3 className="display-6 fw-bold my-4">
                        Ksh. {product.price}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <form>
                       
                        <div class="mb-3">
                            <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" placeholder="Enter Your Phone Number"/>
                        </div>
                    </form>
                    <Link className='btn btn-dark ms-2 px-3 py-2' to="/Subscription">GET NOW!</Link>
                    <h3 className="display-6 fw-bold my-4">Or Share With Your Friends</h3>
                    <FacebookShareButton
                                    url="https://skiza.africomltd.com/"
                                    quote={"Enhance Your Calls with Skiza - The Music Caller Tune Subscription Service"}
                                >
                                    <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
                                </FacebookShareButton>
                                <WhatsappShareButton
                                    title={"Enhance Your Calls with Skiza - The Music Caller Tune Subscription Service"}
                                    url="https://skiza.africomltd.com/"
                                >
                                    <WhatsappIcon logoFillColor="white" round={true}></WhatsappIcon>
                                </WhatsappShareButton>
                                <TelegramShareButton
                                    title={"Enhance Your Calls with Skiza - The Music Caller Tune Subscription Service"}
                                    url="https://skiza.africomltd.com/"
                                >
                                    <TelegramIcon logoFillColor="white" round={true}></TelegramIcon>
                                </TelegramShareButton>
                                <TwitterShareButton
                                    title={"Enhance Your Calls with Skiza - The Music Caller Tune Subscription Service"}
                                    url="https://skiza.africomltd.com/"
                                >
                                    <TwitterIcon logoFillColor="white" round={true}></TwitterIcon>
                                </TwitterShareButton>
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