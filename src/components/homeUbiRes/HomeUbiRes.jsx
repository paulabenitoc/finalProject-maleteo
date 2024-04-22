import { useState, useRef, useEffect, useContext } from 'react';
import lupa from '../../../public/images/lupa.png';
import {NavLink} from 'react-router-dom';
import {HomeUbiResContext} from './HomeUbiResContext';
import imgCal from '../../../public/images/calendario.png';
import imgMaleta from '../../../public/images/maleta.png';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import Swal from 'sweetalert2';
import axios from 'axios';
import './HomeUbiRes.css';

const HomeUbiRes = () => {
    const navigate = useNavigate();
    const inputBuscador = useRef('');
    const diaDeposito = useRef('');
    const diaRetirada = useRef('');
    const numPiezass = useRef('');
    const {ciudad} = useContext(HomeUbiResContext);
    const {setCiudad} = useContext(HomeUbiResContext);
    const {dias} = useContext(HomeUbiResContext);
    const {setDias} = useContext(HomeUbiResContext);
    const {horas} = useContext(HomeUbiResContext);
    const {setHoras} = useContext(HomeUbiResContext);
    const {tarifa} = useContext(HomeUbiResContext);
    const {setTarifa} = useContext(HomeUbiResContext);
    const {total} = useContext(HomeUbiResContext);
    const {setTotal} = useContext(HomeUbiResContext);
    const {numPiezas} = useContext(HomeUbiResContext);

    const {dDeposito} = useContext(HomeUbiResContext);
    const {dRetirada} = useContext(HomeUbiResContext);
    
    const {setNumPiezas} = useContext(HomeUbiResContext);
    const [deposito, setDateTime24h] = useState(null);
    const [retirada, setDateTime24h2] = useState(null);
    const [selectedNumber, setSelectedNumber] = useState("");

    const goToCheck = () => {
      navigate('/reserva/check');
    }

    useEffect(() =>{

      if((dDeposito == null) || (dRetirada == null) ){
        diaDeposito.current.value = dDeposito;
        diaRetirada.current.value = dRetirada;
  
        inputBuscador.current.value = ciudad;
        numPiezass.current.value = numPiezas;
      }else{
        const fechaADeposito = moment(dDeposito).format('DD/MM/YYYY HH:mm');
        const fechaARetirada = moment(dRetirada).format('DD/MM/YYYY HH:mm');
        diaDeposito.current.value = fechaADeposito;
        diaRetirada.current.value = fechaARetirada;

        //obtener la diferencia de fechas en horas y dias para calcular tarifas
        console.log(moment(dRetirada).diff(moment(dDeposito), 'days'));
        console.log(moment(dRetirada).diff(moment(dDeposito), 'hours'));
  
        inputBuscador.current.value = ciudad;
        numPiezass.current.value = numPiezas;
      }

    });

    const goToMapaUbi = () => {
      if(localStorage.getItem('Token')){
        //console.log('usuario logeado');
        if((dDeposito == null) || (dRetirada == null)){
          Swal.fire({
            icon: "error",
            title: "Al menos rellena los dias de deposito y retirada"
          });          
        }else{
          console.log(ciudad);
          navigate('/mapaubicacion');
        }
      }else{
        //console.log('usuario no logeado');
        Swal.fire({
          icon: "error",
          title: "Debes logearte para poder hacer reservas",
          confirmButtonText: "Pulsa aqui para logearte",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login');
          }
        });;
      }
      //navigate('/mapaubicacion');
    }

    return (
      <>
      <div className='pd'>
        <h1 className='titulo'>Encuentra tu guardián</h1>
        <div className='buscadores'>
          <div className='buscador'>
            <img className='icono' src={lupa} alt="lupa" />
            <NavLink to="/reserva/ubicacion" className="input-a">
                <input className='input-buscador' ref={inputBuscador} type="text" placeholder='Donde te encuentras? Madrid, Barcelona...'/>
            </NavLink>
          </div>
        </div>
      </div>
      <div className='container-datos'>
        <div className='datos'>
          <img className='icono' src={imgCal} alt="" />
          <input className='input-buscador' ref={diaDeposito} type="text" placeholder='Depósito' onClick={() => {goToCheck()}} />
          {/*<Calendar className='input-buscador' value={deposito} onChange={(e) => setDateTime24h(e.value)} showTime hourFormat="24" />*/}
        </div>
        <div className='datos'>
          <img className='icono' src={imgCal} alt="" />
          <input className='input-buscador' ref={diaRetirada} type="text" placeholder='Retirada'  onClick={() => {goToCheck()}}  />
          {/*<Calendar className='input-buscador' value={deposito} onChange={(e) => setDateTime24h(e.value)} showTime hourFormat="24" />*/}
        </div>
        <div className='datos'>
          <img className='icono' src={imgMaleta} alt="" />
          <input className='input-buscador' onClick={() => {goToCheck()}} ref={numPiezass} type="text" placeholder='Nº de Piezas' />
        </div>
        
        <button className='buscar' onClick={() => goToMapaUbi()}>Buscar</button>
        {/*<button className='buscar' onClick={() => getUsuario()}>encontrar usuario</button> */}
      </div>
      {/*<div className="datos">
        <div className="flex-auto">
            <label htmlFor="calendar-24h" className="font-bold block mb-2">
            </label>
            <Calendar placeholder="Deposito" id="calendar-24h" value={datetime24h} onChange={(e) => setDateTime24h(e.value)} showTime hourFormat="24" />
        </div>
        <div className="flex-auto2">
            <Calendar placeholder="Retirada" id="calendar-24h" value={datetime24h2} onChange={(e) => setDateTime24h2(e.value)} showTime hourFormat="24" />
        </div>
    </div>
    <div className="btns">
    <label htmlFor="numberSelector"></label>
    <select id="numberSelector" value={selectedNumber} onChange={handleChange}>
        <option value="" disabled selected hidden>Nº de piezas</option>
        {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
                {num + 1}
            </option>
        ))}
    </select>
    <button>Buscar</button>
    </div>*/}
    </>
    )
} 

export default HomeUbiRes;