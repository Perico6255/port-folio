import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('vacio');

  const handleSubmit =  () => {
    setResult('cargando...');

    axios.get(inputValue).then(response => {
      setResult(response.data);
    })
    .catch(error => {
      // Manejar errores en caso de que ocurran
      console.error('Error al realizar la solicitud:', error.message);
      setResult('Error al realizar la solicitud');
    });
  };

  return (
    <div className="App">
      <h1>Aplicación React con Petición</h1>
      
      {/* Input de texto */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ingrese la URL"
      />

      {/* Texto para mostrar el resultado */}

      <p>{inputValue}</p>
      <p>{result}</p>

      {/* Botón para realizar la petición */}
      <button onClick={handleSubmit}>Hacer Petición</button>
    </div>
  );
}

export default App;
