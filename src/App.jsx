import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import { CategoriasProvider } from "./context/CategoriasProvider";
import { BebidasProvider } from "./context/BebidasProvider";
import Bebidas from "./components/Bebidas";
import ModalBebida from "./components/ModalBebida";

function App() {
    return (
        <CategoriasProvider>
            <BebidasProvider>
                <header className="py-5">
                    <h1>BEBIDAS BRYAN</h1>
                </header>
                <Container className="mt-5">
                    <Formulario />
                    <Bebidas />
                    <ModalBebida />
                </Container>
            </BebidasProvider>
        </CategoriasProvider>
    );
}

export default App;
