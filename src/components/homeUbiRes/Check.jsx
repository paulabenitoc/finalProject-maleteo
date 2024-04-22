import React, { useState, useContext, useEffect} from 'react';
import {HomeUbiResContext } from './HomeUbiResContext';
import {useNavigate, NavLink } from 'react-router-dom';
import {Calendar } from 'primereact/calendar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { addLocale } from 'primereact/api';


const Check = () => {
  const fechaActual = new Date();
  const navigate = useNavigate();
  const {setdDeposito} = useContext(HomeUbiResContext);
  const {setdRetirada} = useContext(HomeUbiResContext);
  const [deposito, setDeposito] = useState(null);
  const [retirada, setRetirada] = useState(null);

  useEffect(() => {
    document.documentElement.classList.remove('hide-scrollbar');
  },[])
  
  addLocale('es', {
    firstDayOfWeek: 1,
    showMonthAfterYear: true,
    dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    today: 'Hoy',
    clear: 'Limpiar'
});

  const goToHoras = () => {
    if((deposito != null) && (retirada != null)){
      //setDias({deposito,retirada});
      setdDeposito(deposito);
      setdRetirada(retirada);
      navigate('/reserva/horas');
    }else{
      Swal.fire({
        icon: "info",
        title: "No te olvides de seleccionar correctamente las fechas de deposito y retirada"
      });
    }
  }

  return (
    <>
      <div className='top'>
        <NavLink to="/reserva" className='flecha-atras' onClick={() => {atras()}}>
          <FontAwesomeIcon className={`fa-flecha`} icon={faChevronLeft} />
        </NavLink>
      </div>
      <div className='calendarios'>
        <Calendar value={deposito} minDate={fechaActual} onChange={(e) => {setDeposito(e.value);setRetirada(null)}} inline hourFormat="24" locale="es"/>
        <Calendar value={retirada} minDate={deposito}  onChange={(e) => setRetirada(e.value)} inline hourFormat="24" locale="es"/>
        <button className='buscar pd' onClick={()=>goToHoras()}>Continuar</button>
      </div>
    </>
  )
}

export default Check;
