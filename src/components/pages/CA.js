import React from 'react'
import './CA.css';
import decentraland from '../assets/decentraland.png';
import frame1 from '../assets/frame1.png';
import frame2 from '../assets/frame2.png';
import frame3 from '../assets/frame3.png';
import frame4 from '../assets/frame4.png';
import ca0 from '../assets/ca0.png';
import ca1 from '../assets/ca1.png';
import ca2 from '../assets/ca2.png';
import ca3 from '../assets/ca3.png';
import ca4 from '../assets/ca4.png';
import ca5 from '../assets/ca5.png';
import ca6 from '../assets/ca6.png';
import ca7 from '../assets/ca7.png';
import ca8 from '../assets/ca8.png';
import ca9 from '../assets/ca9.png';
import ca10 from '../assets/ca10.png';

export default function CA() {
    return (
        <div className='ca__page'>
            <div className='top__content-ca'>
                <h1 className='ca_h'>Collectors Exclusive Airdrop</h1>
                <img src={decentraland} alt="decentraland" className='decentraland' />
                <p className='p1-ca'>For the fashion enthusiast and the collectors we have recreated the 3d wearable designs to be warn and styled in the decentraland Metaverse.</p>
                <p className='p1-ca'>To obtain them (Free) you must collect either 1 of the 2 available styles sets.
                    See below the styles sets available to collect.</p>
            </div>
            <div className='styleset'>
                <div className='styleset1'>
                    <img src={frame1} alt="frame1" className='frame1' />
                    <h2 className='styletag'>Style Set 1</h2>
                </div>
                <div className='styleset2'>
                    <img src={frame2} alt="frame2" className='frame1' />
                    <h2 className='styletag'>Style Set 2</h2>
                </div>
            </div>
            <h2 className='tag1'>Collect Style Set 1</h2>
            <div className='css1'>
                <div>
                    <img src={ca0} alt="ca0" className='ca0' />
                    <h2 className='styletag1'>Snapback</h2>
                </div>
                <div>
                    <img src={ca1} alt="ca1" className='ca0' />
                    <h2 className='styletag1'>Gold Banana Chain</h2>
                </div>
                <div>
                    <img src={ca2} alt="ca2" className='ca0' />
                    <h2 className='styletag1'>Black Strap Bag</h2>
                </div>
            </div>
            <h2 className='p2-ca'>Get Airdropped Decentraland
                Wearable Collection</h2>
            <div className='css2'>
                <div>
                    <img src={ca3} alt="ca3" className='ca0' />
                </div>
                <div>
                    <img src={ca4} alt="ca4" className='ca0' />
                </div>
                <div>
                    <img src={ca5} alt="ca5" className='ca0' />
                </div>
            </div>
            <h2 className='p2-ca'>We will also Airdrop 2 more DCL items to complete your wardrobe</h2>
            <div className='airdrop2'>
                <img src={frame3} alt="frame3" className='frame3' />
            </div>
            <div className='css3'>
                <div>
                    <img src={ca6} alt="ca6" className='ca0' />
                    <h2 className='styletag1'>OGC Track Suit</h2>
                </div>
                <div>
                    <img src={ca7} alt="ca7" className='ca0' />
                    <h2 className='styletag1'>OGC Beanie</h2>
                </div>
            </div>
            <h2 className='tag1'>Collect Style Set 2</h2>
            <div className='css1'>
                <div>
                    <img src={ca8} alt="ca8" className='ca0' />
                    <h2 className='styletag1'>Truck Hat</h2>
                </div>
                <div>
                    <img src={ca9} alt="ca9" className='ca0' />
                    <h2 className='styletag1'>Silver Banana Chain</h2>
                </div>
                <div>
                    <img src={ca10} alt="ca2" className='ca0' />
                    <h2 className='styletag1'>Brown Strap Bag</h2>
                </div>
            </div>
            <h2 className='p2-ca'>Get Airdropped Decentraland
                Wearable Collection</h2>
            <div className='airdrop2'>
                <img src={frame4} alt="frame4" className='frame3' />
            </div>
            <div className='css3'>
                <div>
                    <img src={ca6} alt="ca11" className='ca0' />
                    <h2 className='styletag1'>OGC Onesie</h2>
                </div>
                <div>
                    <img src={ca7} alt="ca12" className='ca0' />
                    <h2 className='styletag1'>OGC Beanie</h2>
                </div>
            </div>
            <h1 className='ca_h2'>Collectors Exclusive Airdrop</h1>
            <p className='p3-ca'>We will make announcement to our holders when the airdrop will take place. The holders don’t need to do anything other then ensuring that you collect each NFT to create the style sets of your choice. The style set you collected will make you eligable to obtain the style DCL wearable set.</p>
        </div>
    );
}