import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import Carousel from 'react-elastic-carousel'
import Abouts from '../json/about'

const About = () => {
    
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 3 }
      ];
    
    return (
        <div className='about_container text-center'>
            <h3 className='mb-4'>Apa itu Ajar Uji?</h3> 
            <h6 style={{ lineHeight: '30px' }}>Ajar Uji merupakan platform belajar online yang mempermudah siswa, guru dan sekolah dalam melaksanakan, <br/>kegiatan belajar dan mengajar. Ajar Uji menyediakan kelas online, penjelasan yang disajikan dengan menarik, <br/>bank soal, mata pelajaran, dan kurikulum yang lengkap.</h6>

            <Carousel breakPoints={breakPoints}>
                {Abouts.map((about) => (
                    <Image src={about.img} className='mt-lg-5'/>
                ))}
            </Carousel>
        </div>
    )
}

export default About
