import { useState, createContext } from "react";
import axios from "axios";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
    const [bebidas, setBebidas] = useState([]);

    const consultarBebida = async (busqueda) => {
        console.log(`Lllegas ${busqueda.nombre}, ${busqueda.categoria}`);

        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${busqueda.nombre}&c=${busqueda.categoria}`;

            const { data } = await axios(url);
            console.log(data.drinks);
            setBebidas(data.drinks);
        } catch (error) {}
    };
    return (
        <BebidasContext.Provider value={{ consultarBebida, bebidas }}>
            {children}
        </BebidasContext.Provider>
    );
};

export { BebidasProvider };

export default BebidasContext;
