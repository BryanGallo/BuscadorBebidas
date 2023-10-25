import { Modal, Image } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const ModalBebida = () => {
    const { modal, modalReceta, receta, cargando } = useBebidas();

    return (
        !cargando && (
            <Modal show={modal} onHide={modalReceta}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-center text-uppercase fw-bold fs-4">
                        {receta.strDrink}
                    </Modal.Title>
                </Modal.Header>
                <Image
                    src={receta.strDrinkThumb}
                    alt={`Imagen receta ${receta.strDrink}`}
                />
                <Modal.Body>
                    <div className="p-3">
                        <h2 className="fw-bold">Ingredientes</h2>
                        <p className="fw-bold fs-5">
                            {receta.strMeasure1}
                            <span className="fw-bold fs-4">
                                {receta.strIngredient1}
                            </span>
                        </p>
                        {receta.strIngredient1}
                        {receta.strInstructions}
                    </div>
                </Modal.Body>
            </Modal>
        )
    );
};

export default ModalBebida;
