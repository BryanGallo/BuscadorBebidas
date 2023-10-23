import React from "react";
import useBebidas from "../hooks/useBebidas";
import { Row } from "react-bootstrap";
import Bebida from "./Bebida";

const Bebidas = () => {
    const { bebidas } = useBebidas();
    return (
        // <h2>Bebidas</h2>
        <Row className="mt-5">
            <h2>Bebidas</h2>
            <p>{bebidas.length} bebidas encontradas</p>
            {bebidas.map((bebida) => (
                <Bebida key={bebida.idDrink} bebida={bebida} />
            ))}
        </Row>
    );
};

export default Bebidas;
