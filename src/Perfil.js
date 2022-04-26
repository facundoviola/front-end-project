import React from 'react';

class Perfil extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let datos = this.props.person;
        return (
                <>
                <img src = {datos.imagen} alt = "Imagen de perfil" />
                <h1> Hola: {datos.nombre} {datos.apellido} </h1>
                <h2> Edad: {datos.edad} </h2>
                <h2> Sexo: {datos.sexo} </h2>
                </>        
                );
    }
}

export default Perfil;