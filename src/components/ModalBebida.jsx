import { Modal, Image } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const ModalBebida = () => {
    const { modal, modalReceta } = useBebidas();

    const handleModalClick = () => {
        console.log("holis");
    };
    return (
        <Modal show={modal} onHide={modalReceta}>
            <Modal.Body>Modal Prueba</Modal.Body>
            <Image
                src="https://via.placeholder.com/500x500"
                alt="Imagen receta"
            />
        </Modal>
    );
};

export default ModalBebida;
