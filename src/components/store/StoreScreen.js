import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { mercaderia } from '../../data/merca';
import { getMercaById } from '../../selectors/getMercaById';



export const StoreScreen = ({history,nombre}) => {
    
    
    
    
    return (
        <div>
            <div>
        <h1>Store</h1>
        <h3></h3>
            <hr/>

            <div className="container">

                <ul className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        mercaderia.map( i=>{
                            return(
                                <li className="carta" key={i.nombre}>
                                    <div className="col">

                                        <div className="card card-width m-2">

                                        <img src={i.imagen} className="card-img-top" alt={i.nombre} />

                                        <div className="card-body">
                                            <p className="card-text">
                                                {i.nombre}

                                            </p>

                                                

                                            <Link to={`/store/${i.nombre}`}
                                            
                                                className="btn btn-danger"
                                                
                                            >
                                                Ver mas..
                                            </Link>


                                        </div>

                                        </div>
                                        </div>
                                </li>
                            )
                        })
                    }

                </ul>
                        
                        
            
            </div>
            </div>
        </div>

    )
}
                        
                        
