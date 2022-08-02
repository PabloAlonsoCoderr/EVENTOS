import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [valor, Setvalor] = useState(true);

  function cambio() {
    if (valor == true) {
      Setvalor(false);
    } else {
      Setvalor(true);
    }
  }

  return (
    <div className="App">
      {valor === true ? (
        <button onClick={cambio}>CAMBIAR</button>
      ) : (
        <>
          <button onClick={cambio}>VOLVER</button>
        </>
      )}
    </div>
  );
}

export default App;
