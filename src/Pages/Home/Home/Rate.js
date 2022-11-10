import React from 'react';
import img1 from '../../../Image/Rate/img1.jpg'
import img2 from '../../../Image/Rate/img2.jpg'
import img3 from '../../../Image/Rate/img3.jpg'

import { MdOutlineDone, MdOutlineDoNotDisturb } from 'react-icons/md';
const Rate = () => {
    return (
       <div className='my-24'>
        <h2 className='text-5xl text-center'>Clear Prices & Complete Packages</h2>
        <p className='text-center my-5 md:w-3/4 w-full mx-auto'>Are you looking for an experienced destination photographer for affordable prices? You found me! My pricing and packages are designed to appeal to everyone.</p>
        <p className='text-center my-5 md:w-3/4 w-full mx-auto'>Vivento efficitur nisi nec tellus fringilla posuere. Sed ut scelerisque tortor. Mauris maximus sollicitudin purus, sed fringilla lorem auctor eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut efficitur magna in auctor egestas. Curabitur in eleifend risus. Nullam interdum nisi ut lacinia dignissim.</p>
         <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Pre-Wedding in Europe</h2>
                    <p>This package is intended to capture you and your partner’s story and aesthetic. Quisque efficitur nines tellus fringilla posuere.</p>
                    <ul>
                        <li> <MdOutlineDone className='inline'/> Pre-shoot planning</li>
                        <li> <MdOutlineDone className='inline'/> 4 hour photoshoot</li>
                        <li> <MdOutlineDone className='inline'/> 100+ Photos with Post-Production</li>
                        <li> <MdOutlineDoNotDisturb className='inline'/> High-resolution JPGs</li>
                    </ul>
                </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Half-Day Destination Wedding</h2>
                    <p>This package is intended to capture you and your partner’s story and aesthetic. Quisque efficitur nines tellus fringilla posuere.</p>
                    <ul>
                        <li> <MdOutlineDone className='inline'/> Pre-shoot planning</li>
                        <li> <MdOutlineDone className='inline'/> 4 hour photoshoot</li>
                        <li> <MdOutlineDone className='inline'/> 100+ Photos with Post-Production</li>
                        <li> <MdOutlineDone className='inline'/> High-resolution JPGs</li>
                    </ul>
                </div>
            </div>

            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">All-Day Destination Wedding</h2>
                    <p>This package is intended to capture you and your partner’s story and aesthetic. Quisque efficitur nines tellus fringilla posuere.</p>
                    <ul>
                        <li> <MdOutlineDone className='inline'/> Pre-shoot planning</li>
                        <li> <MdOutlineDone className='inline'/> 4 hour photoshoot</li>
                        <li> <MdOutlineDone className='inline'/> 100+ Photos with Post-Production</li>
                        <li> <MdOutlineDone className='inline'/> High-resolution JPGs</li>
                    </ul>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Rate;