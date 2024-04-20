import { useState, useContext } from "react";
import { Calendar } from 'primereact/calendar';
import { HomeUbiResContext } from "../../components/homeUbiRes/HomeUbiResContext";

export default function Calendario() {
    const [datetime24h, setDateTime24h] = useState(null);
    const [datetime24h2, setDateTime24h2] = useState(null);
    const [selectedNumber, setSelectedNumber] = useState("");
    const { dias } = useContext(HomeUbiResContext);
    const { setDias } = useContext(HomeUbiResContext);
    const { horas } = useContext(HomeUbiResContext);
    const { setHoras } = useContext(HomeUbiResContext);

    const handleChange = (event) => {
        setSelectedNumber(parseInt(event.target.value));
    };

    return (
        <>  <div className="datos">
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

            </div>



        </>
    )


}
