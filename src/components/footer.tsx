import React from 'react';
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer=()=>{
    return (
        <div className='footer'>
          <div className='row'>
            <div className='col-md-4'>
                <h6>CUSTOMER POLICY</h6>
                <ul>Contuct us</ul>
                <ul>Faq</ul>
                <ul>Terms & Conditions</ul>
                <ul>Track Orders</ul>
            </div>
            <div className='col-md-4'>
            <h6>ONLINE SHOPING</h6>
            <ul>Kids</ul>
            <ul>Men&Women</ul>
            <ul>Giftcards</ul>
            <ul>Rewards</ul>
            </div>
            <div className='col-md-4'>
          <h6>follow us</h6>
          <div className='icons'>
          <FacebookIcon/>
         <EmailIcon/>
         <InstagramIcon/>
         <WhatsAppIcon />
         </div>
            </div>
            
            </div>  
        </div>
    )
}
export default Footer;