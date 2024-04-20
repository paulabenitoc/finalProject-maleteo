import React, { useEffect, useState, } from 'react';
import axios from "axios";
import './style.css';



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
            <div className="chars">
                {characters.map((character, index) => (<div key={index}>
                    <h2>{character.nombre}</h2>
                    <img className='imagenguard' src={character.fotos} />
                    <p>{character.ubicacion}</p>
                    <div>
                        <img className='imagenlugar' src={character.fotosLugar[0]} />
                        <img className='imagenlugar' src={character.fotosLugar[1]} />
                        <img className='imagenlugar' src={character.fotosLugar[2]} />
                        <img className='imagenlugar' src={character.fotosLugar[3]} />
                        <img className='imagenlugar' src={character.fotosLugar[4]} />
                        <img className='imagenlugar' src={character.fotosLugar[5]} />
                    </div>
                </div>))}

            </div>

            <div>
                <p>imagen</p>
                <p>titulo</p>
                <p>ubicacion, cuidad</p>
                <p>estrellitas</p>
                <p>imagen</p>
                <p>logo</p>
                <p>mensaje, y logo2</p>
                <p>descripcion</p>

            </div>
        </>
    )
}
