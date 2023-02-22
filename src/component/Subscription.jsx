import { useState, useEffect } from 'react';
import { FacebookShareButton, WhatsappShareButton, TelegramShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, WhatsappIcon, TelegramIcon, TwitterIcon } from 'react-share';
function Subscription() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowSuccessMessage(true);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="container">
      <div className="card" >
        <img src="/assets/m5.jpg" class="rounded mx-auto d-block" alt="background"></img>
        {isLoading && (

          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {!isLoading && showSuccessMessage && (
          <div class="d-flex justify-content-center">
          <div className="success-message">
            <p style={{fontWeight: 'bold'}}>Congratulations! You have successfully subscribed to skiza tune.</p>
          </div>
        </div>
        
        )}
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
    </div>

  );
}

export default Subscription
