import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './Style.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider2({ characters }) {


    return (
        <>
            <Swiper spaceBetween={30} pagination={{ clickable: true, }} modules={[Pagination]} className="mySwiper">

                {characters.map((character, index) => (

                    <div className='card' key={index}>

                        <section className='chars_ficha'>
                            <SwiperSlide>
                                <div>
                                    <img className='imagenlugar_ficha' src={character.fotosLugar[0]} />
                                </div>
                            </SwiperSlide>
                            <div>
                                <img className='imagenlugar_ficha' src={character.fotosLugar[1]} />
                            </div>
                            <div>
                                <img className='imagenlugar_ficha' src={character.fotosLugar[2]} />
                            </div>
                            <div>
                                <img className='imagenlugar_ficha' src={character.fotosLugar[3]} />
                            </div>
                            <div>
                                <img className='imagenlugar_ficha' src={character.fotosLugar[4]} />
                            </div>
                            <div>
                                <img className='imagenlugar_ficha' src={character.fotosLugar[5]} />
                            </div>
                        </section>

                        <h2>{character.nombre}</h2>
                        <img className='imagenguard' src={character.fotos} />
                        <p>{character.ubicacion}</p>



                    </div >))

                }
            </Swiper>
        </>
    )
}
