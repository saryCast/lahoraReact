/* const element = document.createElement("h1"); //creamos elemento
element.innerText="JovenesProgramadores"; //el texto que vamos a colocar
const container = document.getElementById('root'); //creamos variable que obtiene la ID
container.appendChild(element); //que queremos mostrar
*/

import React from 'react';
import ReactDom from 'react-dom';

/*
const name = 'sara'
const edad= 21*2;
const element = <h1>{name} de {edad} años está aprendiendo REACT en JovenesProgramadores</h1>;
const container = document.getElementById("root");
ReactDom.render(element, container);
*/

const style = {
  color: "red"
}

function tictac(){
  const element=(
    <div>
      <h1 style={style}>Reloj en React!</h1>
      <h2>Son las {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  const container = document.getElementById("root");
  ReactDom.render(element, container);
}
setInterval(tictac,1000);