import React, {Component, Fragment} from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {
  state = {
    noticias : []
  };

  async componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general', pais = 'co', buscar= '')=>{
    const ApiKey = "e72093ddcc2c4126905a4ba6750d2ce8";
    const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&q=${encodeURI(buscar)}&sortBy=publishedAt&apiKey=${ApiKey}`;
    const respuesta  = await fetch(url);
    const noticias = await respuesta.json();
    console.log(url);
    this.setState({noticias: noticias.articles, data : {url, categoria, pais, buscar}})
  }

  render(){
    return (
      <Fragment >
        <Header titulo="Noticias React API" />
        <div className="container white contenedor-noticias">
          <Formulario
            consultarNoticias = {this.consultarNoticias}
          />
          <ListaNoticias 
            noticias = {this.state.noticias}
          />
        </div>

      </Fragment>
    );
  }
}

export default App;
