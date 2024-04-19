import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function MapaUbicacion() {

    //  console.log("jjjh");
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
                    <img src={character.fotos} />
                    <p>{character.ubicacion}</p>
                </div>))}

            </div>


                            // <div>
                            //     <div>COMPONENTE barra UBICACION FLOREN</div>
                            //     <div>
                            //         <p>mapa ubi</p>
                            //     </div>
                            //     <div>
                            //         <div>
                            //             <p> Volcar datos del usuario de la Api</p>
                            //         </div>

                            //     </div>
                            // </div>
        </>

    );
}
