import React from "react";
import {Botones} from "./Botones.jsx"

const studentName = "Mi nombre es Monica Sanchez"
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido(props) {
  // el código de tu componente acá
  return (
    <div>
    <h1> Hola, Bienvenido al curso de React</h1>
    <h3>{studentName}</h3>
    <ul>
      <li>Html</li>
      <li>Css</li>
      <li>Javascript</li>
      <li>React</li>
      <li>Redux</li>
    </ul>
    
    <Botones alerts = {alerts.props}/>
    </div>
  )
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
