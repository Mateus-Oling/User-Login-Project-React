import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, H1, Image, ContainerItems, Button, User } from "./styles";
import People from "../../assets/people.svg";
import Trash from "../../assets/trash.svg";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")

      setUsers(newUsers)
    }

    fetchUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    
    const newUsers = users.filter(user => user.id !== userId)

    setUsers(newUsers);
  };

  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <Image alt="logo-image" src={People} />
      <ContainerItems>
        <H1>Usuários</H1>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}> <img alt="trash-bin" src={Trash} /> </button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage}> 
          Voltar
        </Button>

      </ContainerItems>
    </Container>
  );
}

export default Users;