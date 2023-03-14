import React from 'react';
import './NFTsnapback.css';
import snapback from '../assets/snapback.png';
import nftmonkey from '../assets/nftmonkey.png';
import monkeysidetext from '../assets/monkeysidetext.png';
import buttonvector from '../assets/buttonvector.png';
import boy from '../assets/boy.png';
import boysidetext from '../assets/boysidetext.png';
import coupen from '../assets/coupen.png';
import coupensidetext from '../assets/coupensidetext.png';
import buttonvector2 from '../assets/buttonvector2.png';
import buttonvector1 from '../assets/buttonvector1.png';
import buttonvector3 from '../assets/buttonvector3.png';
import cap1 from '../assets/cap1.png';
import cap2 from '../assets/cap2.png';
import cap3 from '../assets/cap3.png';
import keyboard from '../assets/keyboard.png';
import keyboardsidetext from '../assets/keyboardsidetext.png';

export default function NFTsnapback() {
    return (
        <div className='nft__page'>
            <div className='top__content-nft'>
                <img src={snapback} alt="snapback" className='snapback' />
                <p className='p1-nft'>O.G.C || NFTsnapback is the first physical snapback hat collection that is backed by
                    an NFT (Non-Fungible Token) and metaverse ready wearable item. Creating unique
                    apparel experiences in both the physical and virtual world.</p>
                <p className='p2-nft'>Create 1/1 custom Headwear Via 2 ways.</p>
            </div>
            <div className='monkey__container'>
                <img src={nftmonkey} alt="nftmonkey" className='nftmonkey' />
                <img src={monkeysidetext} alt="monkeysidetext" className='monkeysidetext' />
            </div>
            <img src={buttonvector} alt="buttonvector" className='buttonvector' />
            <div className='monkey__container'>
                <img src={boy} alt="boy" className='boy' />
                <img src={boysidetext} alt="boysidetext" className='monkeysidetext' />
            </div>
            <img src={buttonvector1} alt="buttonvector1" className='buttonvector' />
            <div className='top__content-nft'>
                <img src={snapback} alt="snapback" className='snapback' />
            </div>
            <p className='p3-nft'>Mint/Create Now</p>
            <div className='monkey__container'>
                <img src={coupen} alt="coupen" className='boy' />
                <img src={coupensidetext} alt="coupensidetext" className='monkeysidetext' />
            </div>
            <img src={buttonvector2} alt="buttonvector2" className='buttonvector' />
            <div className='capdiv'>
                <img src={cap1} alt="cap1" className='cap1' />
                <img src={cap2} alt="cap2" className='cap2' />
                <img src={cap3} alt="cap3" className='cap3' />
            </div>
            <div className='monkey__container'>
                <img src={keyboard} alt="keyboard" className='keyboard' />
                <img src={keyboardsidetext} alt="keyboardsidetext" className='monkeysidetext' />
            </div>
            <img src={buttonvector3} alt="buttonvector3" className='buttonvector' />
        </div>
    );
}