import React from 'react';
import './Stores.css';
import leftdots from '../assets/leftdots.png';
import bgc from '../assets/bgc.png';
import bag from '../assets/bag.png';
import chain from '../assets/chain.png';
import jewel from '../assets/jewel.png';
import ml from '../assets/ml.png';
import monkey from '../assets/monkey.png';
import cap from '../assets/cap.png';
import headware from '../assets/headware.png';
import Vector from '../assets/Vector.png';
import rightdots from '../assets/rightdots.png';
import { Link } from 'react-router-dom';

export default function Stores() {
    return (
        <div className='store__page'>
            <Link to='/ogc' className='container1'>
                <img src={leftdots} alt="leftdots" />
                <img src={bgc} alt="bgc" />
                <div className='bagdiv'><img src={bag} alt="bag" /></div>
                <img src={rightdots} alt="rightdots" />
            </Link>
            <div>
                <img src={Vector} alt="Vector" className='vector1' />
            </div>
            <Link to='/nftsnapback' className='container2'>
                <img src={leftdots} alt="leftdots" className='dots'/>
                <img src={headware} alt="headware" className='headware' />
                <img src={cap} alt="cap" className='cap' />
                <img src={rightdots} alt="rightdots" className='dots' />
            </Link>
            <div>
                <img src={Vector} alt="Vector" className='vector2' />
            </div>
            <Link to='/hob' className='container3'>
                <img src={leftdots} alt="leftdots" className='dots'/>
                <img src={chain} alt="chain" className='chain' />
                <img src={jewel} alt="jewel" className='jewel' />
                <img src={rightdots} alt="rightdots" className='dots' />
            </Link>
            <div>
                <img src={Vector} alt="Vector" className='vector3' />
            </div>
            <Link to='/members' className='container4'>
                <img src={leftdots} alt="leftdots" className='dots'/>
                <img src={ml} alt="ml" className='ml' />
                <img src={monkey} alt="monkey" className='monkey' />
                <img src={rightdots} alt="rightdots" className='dots' />
            </Link>
            <div>
                <img src={Vector} alt="Vector" className='vector4' />
            </div>
        </div>
    );
}