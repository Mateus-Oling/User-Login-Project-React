import React, { useState, useRef} from "react";
import { Container, H1, Image, ContainerItems, InputLabel, Input, Button,} from "./styles";
import Couch from "../../assets/couch.svg";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate();


  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", { name: inputName.current.value, age: inputAge.current.value, });

    setUsers([...users, newUser]);

    navigate("/usuarios");

  };

  return (
    <Container>
      <Image alt="logo-image" src={Couch} />
      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>

        <Input ref={inputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>

        <Input ref={inputAge} placeholder="Idade"></Input>

        <Button onClick={addNewUser}>
          Cadastrar
        </Button>
      </ContainerItems>
    </Container>
  );
}

export default App