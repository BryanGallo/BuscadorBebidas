import { Button, Form, Row, Col } from "react-bootstrap";

const Formulario = () => {
    return (
        <Form>
            <Row>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ej. Coca Cola"
                            name="nombre"
                            id="nombre"
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label htmlFor="categoria">Categoria Bebida</Form.Label>
                        <Form.Select id="categoria" name="categoria">
                            <option>Elegir Categoria</option>
                            <option>Cerveza</option>
                            <option>Agua</option>
                            <option>Jugo</option>
                            <option>Cerveza</option>
                            <option>Agua</option>
                            <option>Jugo</option>
                            <option>Cerveza</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    );
};

export default Formulario;
