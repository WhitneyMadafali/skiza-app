import React from 'react';
import { FacebookShareButton, WhatsappShareButton, TelegramShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, WhatsappIcon, TelegramIcon, TwitterIcon } from 'react-share';

const Subscription = () => {

  return (
    <div class="card">
      <img src="..." class="text-center" alt="background" />
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div class="card-body justify-content-center">
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
    </div>



  );
};

export default Subscription