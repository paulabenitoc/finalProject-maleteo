import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form'
import './Guardian.css';

export default function Guardian({ onSubmit }) {
    const { register, handleSubmit, formState: { isValid } } = useForm();

    const handleValidSubmit = (data) => {
        if (isValid) {
            onSubmit(data);
        }
    };

    return (
        <div className='guardian'>
            <div className="config">
                <h3>Configura tu espacio en muy pocos pasos</h3>
            </div>
            <form onSubmit={handleSubmit(handleValidSubmit)} className='config-space'>
                <fieldset>
                    <div className='description'>
                        <legend>Describe tu espacio</legend>
                        <button type="submit" disabled={!isValid}>Continuar</button>
                    </div>
                    <label className='item-space'>
                        Ubicación
                        <input type="text" {...register("ubicacion")} />
                    </label>
                    <label className='item-space'>
                        Fotos
                        <input type="text" {...register("fotos")} />
                    </label>
                    <label className='item-space'>
                        Título
                        <input type="text" {...register("descripcion")} />
                    </label>
                    <label className='item-space'>
                        Disponibilidad
                        <input type="text" {...register("disponibilidad")} />
                    </label>
                    <label className='item-space'>
                        Horario
                        <input type="text" {...register("horario")} />
                    </label>
                </fieldset>
            </form>
        </div>
    );
}

Guardian.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
