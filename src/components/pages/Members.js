import React from 'react';
import './Members.css';
import members_louge from '../assets/members_louge.png';
import discounted_services from '../assets/discounted_services.png';
import exclusive_drop from '../assets/exclusive_drop.png';
import monkey2 from '../assets/monkey2.png';
import monkey from '../assets/monkey.png';
import leftdots from '../assets/leftdots.png';
import rightdots from '../assets/rightdots.png';
import Vector from '../assets/Vector.png';
import cap_coution from '../assets/cap_coution.png';
import live_discount from '../assets/live_discount.png';
import goldchain from '../assets/goldchain.png';
import silverchain from '../assets/silverchain.png';
import darkbag from '../assets/darkbag.png';
import lightbag from '../assets/lightbag.png';


export default function Members() {
    return (
        <div className='members__page'>
            <div className='front__pic'>
                <img src={members_louge} alt="members_louge" className='member_louge' />
            </div>
            <div className='elcontainer'>
                <img src={leftdots} alt="leftdots" className='dots' />
                <img src={exclusive_drop} alt="exclusive_drop" className='exclusive_drop' />
                <img src={monkey} alt="monkey1" className='monkey1' />
                <img src={rightdots} alt="rightdots" className='dots' />
            </div>
            <div>
                <img src={Vector} alt="Vector" className='vectorfull' />
            </div>
            <div className='dscontainer'>
                <img src={leftdots} alt="leftdots" className='dots' />
                <img src={monkey2} alt="monkey2" className='monkey2' />
                <img src={discounted_services} alt="discounted_services" className='discounted_services' />
                <img src={rightdots} alt="rightdots" className='dots' />
            </div>
            <div>
                <img src={Vector} alt="Vector" className='vectorfull' />
            </div>
            <div className='end__pic'>
                <img src={live_discount} alt="live_discount"  className='live_discount'/>
            </div>
            <div className='piccontainer'>
                <img src={leftdots} alt="leftdots" className='dots' />
                <img src={cap_coution} alt="cap_coution" className='cap_coution' />
                <img src={cap_coution} alt="cap_coution" className='cap_coution' />
                <img src={rightdots} alt="rightdots" className='dots' />
            </div>
            <div className='piccontainer'>
                <img src={goldchain} alt="goldchain" className='goldchain' />
                <img src={silverchain} alt="silverchain" className='silverchain' />
                <img src={darkbag} alt="darkbag" className='darkbag' />
                <img src={lightbag} alt="lightbag" className='lightbag' />
            </div>
        </div>
    );
}