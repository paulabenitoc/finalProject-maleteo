import './style.css';
import VolverHome from '../../components/VolverHome/VolverHome';
export default function Thanks() {
    return (
        <>

            <div className='back'><VolverHome /></div>
            <div className='res'>
                <h1>Reserva Completada</h1>
                <img src='public/imagenes/fenix@3x.png'></img>
            </div>

            <div className='res-txt'>
                <h2>BE FREE!</h2>
                <p>Contacta ya con tu guardían y espera a que acepte tu reserva.</p>
            </div>

        </>
    )
}
