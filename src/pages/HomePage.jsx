import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <h1 className="text-secondary">Movies</h1>
            <div className="row gy-4">
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-image-top">
                            <img src="https://picsum.photos/450/300" className="img-fluid" alt="Movie" />
                        </div>
                        <div className="card-body">
                            <h3 className="text-secondary">Titolo</h3>
                            <h4><em>Autore</em></h4>
                            <p>Trama</p>
                            <Link className="btn btn-primary" to="/movies/1">Leggi tutto</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-image-top">
                            <img src="https://picsum.photos/450/300" className="img-fluid" alt="Movie" />
                        </div>
                        <div className="card-body">
                            <h3 className="text-secondary">Titolo</h3>
                            <h4><em>Autore</em></h4>
                            <p>Trama</p>
                            <Link className="btn btn-primary" to="/movies/2">Leggi tutto</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-image-top">
                            <img src="https://picsum.photos/450/300" className="img-fluid" alt="Movie" />
                        </div>
                        <div className="card-body">
                            <h3 className="text-secondary">Titolo</h3>
                            <h4><em>Autore</em></h4>
                            <p>Trama</p>
                            <Link className="btn btn-primary" to="/movies/3">Leggi tutto</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-image-top">
                            <img src="https://picsum.photos/450/300" className="img-fluid" alt="Movie" />
                        </div>
                        <div className="card-body">
                            <h3 className="text-secondary">Titolo</h3>
                            <h4><em>Autore</em></h4>
                            <p>Trama</p>
                            <Link className="btn btn-primary" to="/movies/4">Leggi tutto</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-image-top">
                            <img src="https://picsum.photos/450/300" className="img-fluid" alt="Movie" />
                        </div>
                        <div className="card-body">
                            <h3 className="text-secondary">Titolo</h3>
                            <h4><em>Autore</em></h4>
                            <p>Trama</p>
                            <Link className="btn btn-primary" to="/movies/5">Leggi tutto</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="card">
                        <div className="card-image-top">
                            <img src="https://picsum.photos/450/300" className="img-fluid" alt="Movie" />
                        </div>
                        <div className="card-body">
                            <h3 className="text-secondary">Titolo</h3>
                            <h4><em>Autore</em></h4>
                            <p>Trama</p>
                            <Link className="btn btn-primary" to="/movies/6">Leggi tutto</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage