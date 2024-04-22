import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Nav from '../../components/nav/nav';
import Volver from '../../components/Volver/Volver';
import { HomeUbiResContext } from '../../components/homeUbiRes/HomeUbiResContext';
import moment from 'moment';



export default function PasarelaReserva() {
    const { dDeposito } = useContext(HomeUbiResContext);
    const { dRetirada } = useContext(HomeUbiResContext);
    const [dias, setDias] = useState();
    useEffect(() => {

        const dia = moment(dRetirada).diff(moment(dDeposito), 'days');
        console.log(dia);
        setDias(dia);
    }, [])



    return (
        <>
            <Volver />
            <section className='contenedor-pasarela'>
                <div className='contenedor-titulo'>
                    <h1> <strong>Detalles de tu reserva </strong></h1>
                    <section className='contenedor-titulo_s'>
                        <div className='titulo-p'>
                            <p className='texto-tp'><strong>Llegada</strong></p>
                            <p className='texto-tp'>20 de Julio</p>
                        </div>
                        <div className='titulo-p'>
                            <p className='texto-tp'><strong>Recogida</strong></p>
                            <p className='texto-tp'>30 de Julio</p>
                        </div>
                        <div className='titulo-p'>
                            <p className='texto-tp'><strong>Equipaje</strong></p>
                            <p className='texto-tp'>2 Equipaje</p>
                        </div>
                    </section>
                </div>
                <hr className='line'></hr>

                <div className='contenedor-precios'>
                    <div className='precio'>
                        <p className='texto-p'>Primeras 24 hora 6,00 x2 equipajes</p>
                        <p className='texto-p_1'>10 €</p>
                    </div>
                    <div className='precio'>
                        <p className='texto-p'>Gastos de gestión</p>
                        <p className='texto-p_1'>2 €</p>
                    </div>
                    <div className='precio'>
                        <p className='texto-p'>Servicio asegurado hasta 1000€</p>
                        <p className='texto-p_1'>Gratis</p>
                    </div>
                    <div className='precio'>
                        <p className='texto-p'>Total</p>
                        <p className='texto-p_1'><strong>12 €</strong></p>
                    </div>

                </div>

                <div className='boton-pasarela'>
                    <Link to='/thanks' className='button'>
                        <button className='button_1'>Reservar</button>
                    </Link>
                </div>
            </section>
            <Nav className='navi'></Nav>
        </>

    )
}
