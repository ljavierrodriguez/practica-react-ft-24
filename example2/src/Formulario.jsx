import React from "react";
import Input from "./Input";

const Formulario = ({ name, lastname, handleChangeLastname, handleChangeName, setContinuar }) => {
  return (
    <>
      <p>Name: {name}</p>
      <Input value={name} onChange={handleChangeName} />
      <p>Lastname: {lastname}</p>
      <Input value={lastname} onChange={handleChangeLastname} />
      <br />
      <button
        className="btn btn-sm btn-primary"
        onClick={() => setContinuar(true)}
      >
        Continuar
      </button>
    </>
  );
};

export default Formulario;
