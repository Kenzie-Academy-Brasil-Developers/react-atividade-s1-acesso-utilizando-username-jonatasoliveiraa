import "./index.css";

import { useState } from "react";

const GetUserComponent = ({ setUser, setIsLoggedIn }) => {

    const [userInput, setUserInput] = useState("")

    function handleLogin(){
        setUser(userInput)
        setIsLoggedIn(true)
    }
    return (
      <form onSubmit={(event) => handleLogin(event.preventDefault())}>
        <input className="input" type="text" placeholder="Insira seu nome" value={userInput} onChange={(event) => setUserInput(event.target.value)} />
        <button type="submit">Acessar com o nome</button>
      </form>
    )
  };
  export default GetUserComponent;
  