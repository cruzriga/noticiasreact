import React from 'react';

const Noticia = ({noticia}) => {
    const {title , url, description, source, urlToImage } = noticia;

    return ( <div className="col s12 m4">
                <div className="card large">
                    <div className="card-image">
                        <img src={urlToImage}/>
                        <span className="card-title">{source.name}</span>
                    </div>
                    <div className="card-content">
                        <h6>{title}</h6>
                        <p>{description}</p>
                    </div>
                    <div className="card-action">
                        <a href={url} target="_blank" rel="noopener noreferrer" >Leer Mas...</a>
                    </div>
                </div>
            </div>
        )
}
 
export default Noticia;