import { useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategorias from "../hooks/useCategorias";
import useBebidas from "../hooks/useBebidas";
import Bebidas from "./Bebidas";

const Formulario = () => {
    const { categorias } = useCategorias();
    const { consultarBebida } = useBebidas();
    const [busqueda, setBusqueda] = useState({
        nombre: "",
        categoria: "",
    });

    const [alerta, setAlerta] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // if (Object.values(busqueda).includes("")) {
        //     alert("Todos los campos son obligatorios");
        //     return;
        // }

        if (busqueda.nombre === "") {
            return setAlerta("El campo nombre es obligatorio");
        }
        if (busqueda.categoria === "") {
            return setAlerta("El categoria es obligatorio");
        }
        setAlerta("");
        consultarBebida(busqueda);
    };

    return (
        <Form onSubmit={handleSubmit}>
            {alerta && (
                <Alert variant="danger" className="text-center">
                    {alerta}
                </Alert>
            )}
            <Row>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ej. Coca Cola"
                            name="nombre"
                            id="nombre"
                            value={busqueda.nombre}
                            onChange={(e) => {
                                setBusqueda({
                                    ...busqueda,
                                    [e.target.name]: e.target.value,
                                });
                            }}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="categoria">
                            Categoria Bebida
                        </Form.Label>
                        <Form.Select
                            id="categoria"
                            name="categoria"
                            value={busqueda.categoria}
                            onChange={(e) => {
                                setBusqueda({
                                    ...busqueda,
                                    [e.target.name]: e.target.value,
                                });
                            }}
                        >
                            <option>Elegir Categoria</option>
                            {categorias.map((categoria) => (
                                <option
                                    key={categoria.strCategory}
                                    value={categoria.strCategory}
                                >
                                    {categoria.strCategory}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-end">
                <Col md={3}>
                    <Button
                        className="text-uppercase w-100"
                        variant="danger"
                        type="submit"
                    >
                        Buscar Bebida
                    </Button>
                </Col>
            </Row>
            {<Bebidas />}
        </Form>
    );
};

export default Formulario;
