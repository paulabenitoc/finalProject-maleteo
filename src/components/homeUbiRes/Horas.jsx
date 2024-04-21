import React, { useState, useContext, useEffect} from 'react';
import { HomeUbiResContext } from './HomeUbiResContext';
import { useNavigate, NavLink } from 'react-router-dom';
import { Calendar } from 'primereact/calendar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'primereact/dropdown';
import imgBtn from '../../../public/images/img-btn.png';
import Swal from 'sweetalert2';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

const Horas = () => {
    const navigate = useNavigate();
    const [selectedMaletas, setSelectedMaletas] = useState(null);
    const maletas = Array.from({ length: 100 }, (_, index) => ({ name: `${index + 1}` }));
    const [deposito, setDeposito] = useState(null);
    const [retirada, setRetirada] = useState(null);
    const {setHoras} = useContext(HomeUbiResContext);
    const {setNumPiezas} = useContext(HomeUbiResContext);
    const {dDeposito} = useContext(HomeUbiResContext);
    const {dRetirada} = useContext(HomeUbiResContext);
    const {setdDeposito} = useContext(HomeUbiResContext);
    const {setdRetirada} = useContext(HomeUbiResContext);
    
    const goToReservas = () => {
        if((deposito !=null) && (retirada !=null) && (selectedMaletas != null)){
            setHoras([deposito, retirada]);
            setNumPiezas(selectedMaletas.name);
            navigate('/reserva');
        }else{
            Swal.fire({
                icon: "info",
                title: "Parece que no has rellenado todos los datos o los has rellenado mal"
            });        
        }
    }

    const cambiaDeposito = (e) => {
        setdDeposito(e);
        console.log(e);
    }

    const cambiaRetirada = (e) => {
        setdRetirada(e);
        console.log(e);
    }

    useEffect(() => {
        //console.log(dDeposito,dRetirada);
        if((dDeposito == null) || (dRetirada == null)){
            navigate('/reserva');
        }
        setDeposito(dDeposito);
        setRetirada(dRetirada);
    })
    return (
        <>
            <div className='top'>
                <NavLink to="/reserva/check" className='flecha-atras' onClick={() => {atras()}}>
                <FontAwesomeIcon className={`fa-flecha`} icon={faChevronLeft} />
                </NavLink>
            </div>   
            <div className='selectores'>
                <div className='selector'>
                    <h1>Deposito</h1>
                    <Calendar className="input-selectores-d" value={dDeposito} onChange={(e) => {cambiaDeposito(e.value)} } timeOnly hourFormat="24" showTime />
                    
                </div>
                <div className='selector'>
                    <h1>Retirada</h1>
                    <Calendar className="input-selectores-r" value={dRetirada} onChange={(e) => {cambiaRetirada(e.value)}} timeOnly hourFormat="24" showTime />
                </div>
            </div>
            <div className='selectores'>
                <div className='selector'>
                    <h1>Número de equipaje</h1>
                    <Dropdown value={selectedMaletas} onChange={(e) => setSelectedMaletas(e.value)} options={maletas} optionLabel="name" 
                    placeholder="numero de maletas" className="w-full md:w-14rem selecMaletas" />
                </div>
            </div>
            <div onClick={() => {goToReservas()}} className='next'>
                <img className='btn-next' src={imgBtn} alt="" />
            </div>
        </>
    )
}

export default Horas;
