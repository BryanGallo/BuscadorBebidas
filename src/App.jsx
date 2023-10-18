import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import { CategoriasProvider } from "./context/CategoriasProvider";
function App() {
    return (
        <CategoriasProvider>
            <header className="py-5">
                <h1>BEBIDAS BRYAN</h1>
            </header>
            <Container className="mt-5">
                <Formulario />
            </Container>
        </CategoriasProvider>
    );
}

export default App;
