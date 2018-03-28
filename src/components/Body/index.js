import React from 'react';
import logo from '../../images/WitchCafeLBlack2.png';
import './index.css';

const Body = () => (
    <div className='app-body'>
        <div className='columns body-wrapper'>
            <div className='column body-rows'>
                <img src={logo} className='body-image' alt=''/>
                <div className='info-boxes columns'>
                    <div className='body-row-item-contact column is-one-third'>
                        <a href='mailto:info@witch.cafe?Subject=Website' target='_top'>&#x69;&#x6E;&#x66;&#x6F;&#x40;&#x77;&#x69;&#x74;&#x63;&#x68;&#x2E;&#x63;&#x61;&#x66;&#x65;</a>
                    </div>
                    <div className='body-row-item-contact established column is-one-third'>
                        est. 2017
                    </div>
                    <div className='body-row-item-contact column is-one-third'>
                        <a href='https://patreon.com/lipgloss' rel="noopener noreferrer" target='_blank'>patreon</a>
                    </div>
                </div>
            </div>
            <div className='column body-rows body-rows-right'>
                <div className='body-row-item block'>
                    <div className='content'>
                        <div className='body-title-head'>For Our Guests And Customers:</div>
                        <div className='body-text'>
                            Witch Cafe is a <a rel="noopener noreferrer" href='https://en.wikipedia.org/wiki/Netlabel' target='_blank'>netlabel*</a> serving underground, independent electronic and hip-hop musicians and their fans by distributing art through streaming companies.  Witch Cafe seeks to grow audiences for artists by collaborating with playlist curators, negotiating licensing fees and more.
                            <br /><br />
                            Our goal is to spread art that we love.
                        </div>
                    </div>
                </div>
                <div className='body-row-item block'>
                    <div className='content'>
                        <div className='body-title-head'>House Blends</div>
                        <div className='artists'>
                            <div className='box'>
                                <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/taylornyanners'>
                                    <img alt='twitter' src='https://pbs.twimg.com/profile_images/974347252721442817/tYRB_g37_400x400.jpg' />
                                </a>
                            </div>
                            <div className='box'>
                                <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/magic_circuit'>
                                    <img alt='twitter' src='https://pbs.twimg.com/profile_images/934685356556980225/yv2UbwkA_400x400.jpg' />
                                </a>
                            </div>
                            <div className='box'>
                                <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/glosstradamus'>
                                    <img alt='twitter' src='https://pbs.twimg.com/profile_images/904034322272935940/zFWBLnID_400x400.jpg' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Body;
