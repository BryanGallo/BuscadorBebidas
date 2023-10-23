import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
    const [bebidas, setBebidas] = useState([]);
    const [modal, setModal] = useState(false);
    const [bebidaId, setBebidaId] = useState(null);
    const [receta, setReceta] = useState({});

    useEffect(() => {
        const obtenerReceta = async () => {
            if (!bebidaId) {
                return;
            }
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`;

                const { data } = await axios(url);
                setReceta(data.drinks[0]);
            } catch (error) {
                console.log(error);
            }
        };
        obtenerReceta();
    }, [bebidaId]);

    const consultarBebida = async (busqueda) => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${busqueda.nombre}&c=${busqueda.categoria}`;

            const { data } = await axios(url);
            console.log(data.drinks);
            setBebidas(data.drinks);
        } catch (error) {}
    };

    const modalReceta = () => {
        setModal(!modal);
    };

    const handleModalClick = (id) => {
        setBebidaId(id);
    };

    return (
        <BebidasContext.Provider
            value={{
                consultarBebida,
                bebidas,
                modalReceta,
                modal,
                handleModalClick,
                receta
            }}
        >
            {children}
        </BebidasContext.Provider>
    );
};

export { BebidasProvider };

export default BebidasContext;
