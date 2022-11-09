// React package
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
// Our Modules
import Home from "./pages/Home";
import Form from "./pages/Form";
import List from "./pages/List";
import Navs from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navs />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
