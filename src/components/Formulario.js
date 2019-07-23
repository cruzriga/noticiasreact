import React, { Component } from 'react';

class Formulario extends Component {
    state = { categoria: 'general' };
    cambiarCategoria = (e)=>{
        this.setState({
            categoria: e.target.value
        }, () =>{
            this.props.consultarNoticias(this.state.categoria);
        })

    }
    render() { 
        return ( 
                <div className="buscador row">
                    <div className="col s12 m8 offset-2">
                        <form action="">
                            <h5>Encuentra noticias por categoria</h5>
                            <div className="input-field col s12 m8 offset-2">
                                <select name="" id="" onChange={this.cambiarCategoria}>
                                    <option value="general">General</option>
                                    <option value="business">Negocios</option>
                                    <option value="health">Salud</option>
                                    <option value="science">Ciencia</option>
                                    <option value="sports">Deportes</option>
                                    <option value="technology">Tecnología</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
         );
    }
}
 
export default Formulario;