import React, { useState } from 'react';
import './Gallery.css'
import img1 from '../../../Image/Gallery/img1.jpg'
import img2 from '../../../Image/Gallery/img2.jpg'
import img3 from '../../../Image/Gallery/img3.jpg'
import img4 from '../../../Image/Gallery/img4.jpg'
import img5 from '../../../Image/Gallery/img5.jpg'
import img6 from '../../../Image/Gallery/img6.jpg'
import img7 from '../../../Image/Gallery/img7.jpg'
import img8 from '../../../Image/Gallery/img8.jpg'
import {  AiOutlineClose } from 'react-icons/ai';

const Gallery = () => {

    const data = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
        {
            id: 7,
            imgSrc: img7,
        },
        {
            id: 8,
            imgSrc: img8,
        },
    ]

    const [model, setModel] = useState(false)
    const [tempimgSrc, setTempImgSrc] = useState('')
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc)
        setModel(true);
    }
    return (
        <div className='my-12'>
            <h1 className='text-5xl italic font-bold text-center  mb-5'>This is gallery</h1>

            <div className={model? "model open" : "model"}>
            <img src={tempimgSrc} alt="" />
            <AiOutlineClose onClick={() => setModel(false)}/>

            </div>

            <div className='gallery'>
                {
                    data.map((item, index)=>{
                        return(
                            <div className='pics' key={index} onClick={() =>getImg(item.imgSrc)}>
                                <img src={item.imgSrc} style={{width: '100%'}} alt="" />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Gallery;