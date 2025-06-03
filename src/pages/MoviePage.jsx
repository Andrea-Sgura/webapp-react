import React from 'react'

const MoviePage = () => {
    return (
        <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
                <img src="https://picsum.photos/450/300" className="img-fluid" alt="Movie" />
            </div>
            <div className="col-12 col-md-6 col-lg-8">
                <h1>Titolo</h1>
                <h3>Autore</h3>
                <p>Trama</p>
            </div>
        </div>
    )
}

export default MoviePage