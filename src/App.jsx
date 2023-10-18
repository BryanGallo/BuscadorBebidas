import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
function App() {
    return (
        <>
            <header className="py-5">
                <h1>BEBIDAS BRYAN</h1>
            </header>
            <Container>
                <Formulario />
            </Container>
        </>
    );
}

export default App;
