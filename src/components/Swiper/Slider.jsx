import { Link } from 'react-router-dom'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './Style.css';
import { Pagination, Navigation } from 'swiper/modules';



export default function Slider({ characters }) {


    return (
        <>
            <Swiper pagination={{ type: 'fraction', }} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">

                {characters.map((character, index) => (

                    <div className='card' key={index}>
                        <SwiperSlide>
                            <div className='boton'>
                                <Link to='/mapaubicacioncpy' className="div-button">
                                    <button className="forward">
                                        <img className='imagenlugar' src={character.fotoLugar} />
                                    </button>
                                </Link>
                            </div>
                            <div className='infor'>
                                <h2>{character.nombre}</h2>
                                <img className='imagenguard' src={character.fotos} />
                                <p>{character.ubicacion}</p>
                            </div>
                        </SwiperSlide>

                    </div >))
                }
            </Swiper>

        </>
    )

}
