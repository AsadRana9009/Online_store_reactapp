import React from 'react';
import './OGC.css';
import ogc from '../assets/ogc.png';
import monkeycap1 from '../assets/monkeycap1.png';
import monkeycap from '../assets/monkeycap.png';
import goldbar from '../assets/goldbar.png';
import monkeybanana from '../assets/monkeybanana.png';
import monkeybanana1 from '../assets/monkeybanana1.png';
import monkeybag from '../assets/monkeybag.png';
import darkbag from '../assets/darkbag.png';
import lightbag from '../assets/lightbag.png';
import thebrand from '../assets/thebrand.png';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';

export default function OGC() {
    return (
        <div className='ogc__page'>
            <div className='top__content'>
                <img src={ogc} alt="ogc" className='ogc' />
                <p className='p1'>World's 1st Co-collaboration 3d wearables Collection.</p>
                <p className='p2'>Three fashion brands have collaborated to launch a collection of 3D wearable
                    fashion. These pieces are designed for your 3D avatar and use the latest technology
                    to offer a level of customization and fit. Elevate your virtual wardrobe with these
                    innovative designs.</p>
            </div>
            <h1 className='head'>Headware</h1>
            <div className='headware__content'>
                <div className='capbox'>
                    <img src={monkeycap} alt="monkeycap" className='monkeycap' />
                    <img src={goldbar} alt="goldbar" className='goldbar' />
                </div>
                <div className='capbox'>
                    <img src={monkeycap} alt="monkeycap" className='monkeycap' />
                    <img src={goldbar} alt="goldbar" className='goldbar' />
                </div>
                <img src={monkeycap1} alt="monkeycap1" className='monkeycap1' />
            </div>
            <h1 className='head'>Jewellery</h1>
            <div className='headware__content'>
                <div className='capbox'>
                    <img src={monkeybanana} alt="monkeybanana" className='monkeybanana' />
                    <img src={goldbar} alt="goldbar" className='goldbar' />
                </div>
                <div className='capbox'>
                    <img src={monkeybanana} alt="monkeybanana" className='monkeybanana' />
                    <img src={goldbar} alt="goldbar" className='goldbar' />
                </div>
                <img src={monkeybanana1} alt="monkeybanana1" className='monkeybanana1' />
            </div>
            <h1 className='head'>Bag/Accesories</h1>
            <div className='headware__content'>
                <div className='capbox'>
                    <img src={darkbag} alt="darkbag" className='darkbag1' />
                    <img src={goldbar} alt="goldbar" className='goldbar' />
                </div>
                <div className='capbox'>
                    <img src={lightbag} alt="lightbag" className='lightbag1' />
                    <img src={goldbar} alt="goldbar" className='goldbar' />
                </div>
                <img src={monkeybag} alt="monkeybag" className='monkeybag' />
            </div>
            <div className='front__pic'>
                <img src={thebrand} alt="thebrand" className='thebrand'/>
            </div>
            <div className='brand__content'>
                <img src={pic1} alt="pic1" className='pic1' />
                <p className='p3'>O.G.C NFTsnapback launched the 1st digital snapback hat collection in 2021, becoming the 1st NFT backed by a real physical snapback and metaverse ready wearable digital item. NFTsnapback wants to be able to provide a bespoke service for a community or project to create high quality snapbacks for their members.</p>
            </div>
            <div className='brand__content'>
                <img src={pic2} alt="pic2" className='pic2' />
                <p className='p31'>House of Banana is an innovative jewellery brand creating custom metaverse products based on the expertise of the founders existing IRL jewellery business.
                    The founders passion for web3 led them to create high quality luxury items for the web3 community. Get ready to bling out your avatar like never before!</p>
            </div>
            <div className='brand__content'>
                <img src={pic3} alt="pic3" className='pic3' />
                <p className='p3'>The world's first fashion house that is powered by blockchain technology and created by web3 loyalists. O.G.Collections aims to introduce latest designs and curated luxury accessories and apparel lines that also provide utility as 3d digital assets.</p>
            </div>
        </div>
    );
}