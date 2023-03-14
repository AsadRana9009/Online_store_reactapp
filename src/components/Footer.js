import React from 'react';
import './Footer.css';
import ogc from './assets/ogc.png';
import twitter from './assets/twitter.png';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import tiktok from './assets/tiktok.png';
import linkedin from './assets/linkedin.png';
import discord from './assets/discord.png';
import Vector from './assets/Vector.png';
import copyright from './assets/copyright.png';
import bitcoin from './assets/bitcoin.png';
import americanexpress from './assets/americanexpress.png';
import paypal from './assets/paypal.png';
import visa from './assets/visa.png';

export default function Home() {
    return (
        <div className='footer'>
            <div className='top__content-footer'>
                <img src={ogc} alt="ogc" className='footer-ogc' />
                <p className='p1-footer'>OGC mission as a brand is to make any apparel, a wearable, digital & utilized in both physical & digital worlds.</p>
            </div>
            <div className='icons'>
                <img src={twitter} alt="ogc" className='icon' />
                <img src={facebook} alt="ogc" className='icon' />
                <img src={instagram} alt="ogc" className='icon' />
                <img src={tiktok} alt="ogc" className='icon' />
                <img src={linkedin} alt="ogc" className='icon' />
                <img src={discord} alt="ogc" className='icon' />
            </div>
            <p className='p2-footer'>27 Old Glouster Street</p>
            <p className='p3-footer'>London England WCIN BAX</p>
            <img src={Vector} alt="Vector" className='line' />
            <div className='bottom-content'>
                <div className='left-text'>
                    <img src={copyright} alt="copyright" className='icon2' />
                    <p className='copyright'>2023 OGC COLLECTIONS.</p>
                </div>
                <div className='right-icons'>
                    <img src={bitcoin} alt="bitcoin" className='icon1' />
                    <img src={americanexpress} alt="americanexpress" className='icon1' />
                    <img src={paypal} alt="paypal" className='icon1' />
                    <img src={visa} alt="visa" className='icon1' />
                </div>
            </div>
        </div>
    );
}