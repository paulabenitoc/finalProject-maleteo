import React, { useEffect, useState, } from 'react';
import axios from "axios";
import './style.css';
import Slider2 from '../../components/Swiper2/Slider2';
import { Link } from 'react-router-dom';


export default function Ficha() {

    const [characters, setCharacters] = useState([]);
    const getCharacters = () => {

        axios
            .get("http://localhost:3002/guardian")
            .then((response) => setCharacters(response.data.data));
    };
    useEffect(() => {

        getCharacters();
    }, []);


    return (


        <>
            <div className='contenedor-ficha'>
                <Slider2 characters={characters} />

                <section className='chars_usuario'>
                    <div className='chars_usuario_i'>
                        <h2 className='chars_usuario_h2'>El hall de Maria</h2>
                        <p className='chars_usuario_p'>Plaça de l'Ajuntament, 1, 46002 València, España</p>
                        <p className='chars_usuario_p'>Guardian: Maria</p>
                        <img className='imagenValoracion' src='public/lugarYusuarios/valoracion.png' />
                    </div>
                    <div className='chars_usuario_d'>
                        <img className='imagen1' src='public/lugarYusuarios/u1.png' />
                    </div>
                </section>
                <div>
                    <img className='rapido' src='public/lugarYusuarios/rapido.png' />
                </div>
                <section className='encuesta'>
                    <div className='encuesta_div'>
                        <div>
                            <img src='public/lugarYusuarios/casita.png' className='encuesta_img' />
                        </div>
                        <div className='encuesta_texto'>
                            <h2 className='encuesta_h'>Tipo de locker</h2>
                            <p className='encuesta_p'>El salón de su casa será el lugar idóneo para alojar tus maletas y cuidar de ellas.</p>
                        </div>
                    </div>
                    <div className='encuesta_div'>
                        <img src='public/lugarYusuarios/19.png' className='encuesta_img' />
                        <div className='encuesta_texto'>
                            <h2 className='encuesta_h'>Como la patena</h2>
                            <p className='encuesta_p'>19 usuarios recientes han ctalogadosu espacio como muy limpio.</p>
                        </div>
                    </div>
                    <div className='encuesta_div'>
                        <p className='encuesta_95'>95%</p>
                        <div className='encuesta_texto'>
                            <h2 className='encuesta_h'>Un Fortín</h2>
                            <p className='encuesta_p'>el 95% de los usuarios han valorado su experiéncia como muy segura.</p>
                        </div>
                    </div>
                </section>
                <section className='texto'>
                    <p className='texto_1'>Habitación espaciada a 15 minutos del centro de madrid y a 5 minutos de la Linea 1. Además ofrezco infromacion turística personalizada.</p>
                </section>

                <Link to='/pasarelaReserva' className='button'>
                    <button className='button_1'>Reservar Ahora</button>
                </Link>

            </div>
        </>
    )
}
