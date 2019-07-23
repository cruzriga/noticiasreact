import React from 'react';

const Noticia = ({noticia}) => {
    const {title , url, description, source, urlToImage } = noticia;

    const getImage = ()=>{
        let img =  <div className="card-image">
                    <img src={urlToImage} alt={title} />
                    <span className="card-title">{source.name}</span>
               </div>;
        return ( (urlToImage)?img:null)
    }

    return ( <div className="col s12 m6 l4">
                <div className="card">
                    {getImage()}
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="waves-efect wave-light btn">
                        Ver noticia completa    
                    </a> 
                </div>
             </div>
            
    );
}
 
export default Noticia;