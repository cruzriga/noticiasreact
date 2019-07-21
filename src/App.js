import React, {Component, Fragment} from 'react';
import Header from './components/Header';
class App extends Component {
  state = {
    noticias : []
  };

  async componentDidMount(){
    this.consultarNoticias();
  }

  consultarNoticias = async ()=>{
    const ApiKey = "e72093ddcc2c4126905a4ba6750d2ce8";
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=business&apiKey=${ApiKey}`;
    const respuesta  = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({noticias: noticias.articles})    
  }

  render(){
    return (
      <Fragment >
        <Header titulo="Noticias React API" />
        <div className="container white contenedor-noticias">
          
        </div>

      </Fragment>
    );
  }
}

export default App;
