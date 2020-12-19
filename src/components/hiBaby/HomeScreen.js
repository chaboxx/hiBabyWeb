import React from 'react';
import { mercaderia } from '../../data/merca';



export const HomeScreen = () => {

    
    return (
        <div>
            <div className="row">

            <div className="col-8">
                <img src="https://www.salud.mapfre.es/media/2016/07/guia-practica-juegos-juguetes-3-1280x720.jpg" alt="imagen-principal"
                     className="img-fluid"
                />
            </div>
           
            <div className="col-4">
            
            <h1 className="titulo">Hi Baby</h1>

            <h4>
                Los mejores productos para tu bebe y al mejor precio.

                
            </h4>


            <h5>
                Visitenos en CC.Molino 1 INT M-29
            </h5>
            </div>
            
            </div>
            <hr/>
            <footer className="row">
            
                <p className="col-10">
                    Todos los derechos reservados para <span>Hi Baby</span>
                </p>

                <div className="col-2 row">
                    <p style={{
                        fontFamily:"sans-serif",
                        fontSize:"20px",
                        margin:"0",
                        padding:"0"

                    }} className="col-8">
                        Whatsapp:
                    </p>
                    <a href="https://wa.link/3vjznb" className="col-4" style={{
                        margin:"0",
                        padding:"0"

                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
                    </svg>

                    </a>
                    

                </div>

              
            </footer>
        </div>
    )
}
