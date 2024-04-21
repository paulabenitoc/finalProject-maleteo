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
        <div className='guardian-spaceForm'>
            <div className="config-spaceForm">
                <h3 className="config-spaceForm-title">Configura tu espacio en muy pocos pasos</h3>
            </div>
            <form onSubmit={handleSubmit(handleValidSubmit)} className='config-space'>
                <fieldset className='formGuardian'>
                    <div className='description-formGuardian'>
                        <legend className='title-formGuardian'>Describe tu espacio</legend>
                        <button type="submit" disabled={!isValid} className='button-formGuardian'>Continuar</button>
                    </div>
                    <label className='item-space'>
                        <input type="text" {...register("ubicacion")} placeholder="Ubicación" className='item-spaceHolder' />
                    </label>
                    <label className='item-space'>
                        <input type="text" {...register("fotos")} placeholder="Fotos" className='item-spaceHolder' />

                    </label>
                    <label className='item-space'>
                        <input type="text" {...register("descripcion")} placeholder="Título" className='item-spaceHolder' />
                    </label>
                    <label className='item-space'>
                        <input type="text" {...register("disponibilidad")} placeholder="Disponibilidad" className='item-spaceHolder' />
                    </label>
                    <label className='item-space'>
                        <input type="text" {...register("horario")} placeholder="Horario" className='item-spaceHolder' />
                    </label>
                </fieldset>
            </form>
        </div>
    );
}

Guardian.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};