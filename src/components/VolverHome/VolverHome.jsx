import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

export default function VolverHome() {
    return (
        <>
            <div className='Back'>
                <span className="backhome">
                    <Link to="/calendario"><FontAwesomeIcon icon={faX} /></Link>
                </span>

            </div>

        </>
    )
}


// LA DIRECCION DONDE QUIERES QUE EL BOTON TE DIRIJA LA CAMBIAS EN "/CALENDARIO" O / LA PAGINA QUE QUIERAS QUE TE LLEVE MIRANDO EN EL APP.JSX