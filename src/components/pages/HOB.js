import React from 'react';
import './HOB.css';
import hob from '../assets/hob.png';
import leftmonkey from '../assets/leftmonkey.png';
import middlemonkey from '../assets/middlemonkey.png';
import rightmonkey from '../assets/rightmonkey.png';
import maintext from '../assets/maintext.png';
import gpendent from '../assets/gpendent.png';
import spendent from '../assets/spendent.png';
import bookingbutton from '../assets/bookingbutton.png';
import goldbar from '../assets/goldbar.png';
import goldchain from '../assets/goldchain.png';
import silverchain from '../assets/silverchain.png';
import twomonkeys from '../assets/twomonkeys.png';

export default function HOB() {
    return (
        <div className='hob__page'>
            <div className='top__content-hob'>
                <img src={hob} alt="hob" className='hob' />
                <p className='p1-hob'>Welcome to House of Banana, a revolutionary jewellery brand for the web3 community. Our founders have expertly crafted a line of high quality, luxury items.
                    Elevate yourself or your avatar's style with our unique, statement pieces.</p>
            </div>
            <div className='monkeydiv'>
                <img src={leftmonkey} alt="leftmonkey" className='leftmonkey' />
                <img src={middlemonkey} alt="middlemonkey" className='middlemonkey' />
                <img src={rightmonkey} alt="rightmonkey" className='rightmonkey' />
            </div>
            <div className='textbox'>
                <img src={maintext} alt="maintext" className='maintext' />
            </div>
            <div className='pendentbox'>
                <img src={gpendent} alt="gpendent" className='pendent' />
                <img src={spendent} alt="spendent" className='pendent' />
            </div>
            <div className='button'>
                <img src={bookingbutton} alt="bookingbutton" className='bookingbutton' />
            </div>
            <p className='p2-hob'>BOOK AN APPOINTMENT WITH US TODAY TO SEE OUR FULL COLLECTION AND START
                DESIGNING YOUR DREAM PIECE.</p>
            <div className='top__content-hob'>
                <img src={hob} alt="hob" className='hob' />
                <p className='p3-hob'>Digital House of Banana Jewellery.</p>
                <p className='p1-hob'>Introducing the first digital jewellery pieces from House of Banana - the gold banana
                    chain and silver banana chain. These one-of-a-kind pieces are part of our inaugural
                    3D wearable collaborative collection and are now available to mint.</p>
            </div>
            <div className='hob__content'>
                <div className='hob__1'>
                    <img src={goldchain} alt="goldchain" className='goldchain1' />
                    <img src={goldbar} alt="goldbar" className='goldbar1' />
                </div>
                <div className='hob__2'>
                    <img src={silverchain} alt="silverchain" className='silverchain1' />
                    <img src={goldbar} alt="goldbar" className='goldbar1' />
                </div>
            </div>
            <div className='twomonkeys'>
                    <img src={twomonkeys} alt="twomonkeys" className='twomonkey' />
                </div>
        </div>
    );
}