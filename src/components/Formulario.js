import React, { Component } from 'react';

class Formulario extends Component {
    state = { categoria: 'general', pais:'co', lenguage:'es'};
    handeler = (e)=>{
        const {name , value} = e.target;
        console.log(value, name)
        const data  = {...this.state};
        data[name] = value;
       this.setState(data, () =>{
          this.consultarNoticias();
        })

    }

    consultarNoticias = ()=>{
        this.props.consultarNoticias(this.state.categoria, this.state.pais, this.state.buscar);
    }

    render() { 
        return ( 
                <div className="row">
                    <div className="col s12">
                        <form action="">
                            <div className="col s12 titulo">
                                <h5 className="col s12 m8" >Encuentra noticias por categoria</h5>
                                <div className="col s6 m4 push-s6">
                                    <a href="#!" className="waves-effect waves-light btn right" onClick={this.consultarNoticias}>
                                        <i className="material-icons left">refresh</i> Actualizar
                                    </a>
                                </div>
                            </div>
                            <div className="input-field col m4 s6 ">
                                <select name="categorias" id="" onChange={this.handeler}>
                                    <option value="general">General</option>
                                    <option value="business">Negocios</option>
                                    <option value="health">Salud</option>
                                    <option value="science">Ciencia</option>
                                    <option value="sports">Deportes</option>
                                    <option value="technology">Tecnología</option>
                                </select>
                                <label htmlFor="categorias">Categorias:</label>
                            </div>
                            <div className="input-field col m2 s6">
                                <select name="pais" id=""  onChange={this.handeler}>
                                    <option value="co">Colombia</option>
                                    <option value="mx">Mexico</option>
                                    <option value="ve">Venezuela</option>
                                    <option value="ar">Argentina</option>
                                    <option value="us">Estados Unidos</option>
                                    <option value="ru">Rusia</option>
                                    <option value="jp">Japon</option>
                                    <option value="">Todos</option>
                                </select>
                                <label htmlFor="pais">Pais:</label>
                            </div>
                            <div className="input-field col m6 s12 offsetr-s1">
                                <input type="text" name="buscar" id="" onChange={this.handeler}/>
                                <label htmlFor="buscar"><i className="material-icons ">search</i> Buscar:</label>
                            </div>
                        </form>
                    </div>
                </div>
         );
    }
}
 
export default Formulario;