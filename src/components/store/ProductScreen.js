import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mercaderia } from '../../data/merca';
//------------------------Ajuares-------------------------


import { biviri } from "../../data/ajuares/biviri";
import { cafarenas } from "../../data/ajuares/cafarenas";
import { conjuntosAjuar } from "../../data/ajuares/conjuntosAjuar";
import { pantalones } from "../../data/ajuares/pantalones";
import { polos } from "../../data/ajuares/polos";

//------------------------Baberos-------------------------

import { baberos } from '../../data/baberos/baberos';

//------------------------Buzos-------------------------

import { buzos } from '../../data/buzos/buzos';
import { pantalonesBuzo } from '../../data/buzos/pantalonesBuzos';

//------------------------cajas-------------------------

import { cajas } from '../../data/cajas/cajas';

//------------------------Chompitas-------------------------

import { chompitas } from '../../data/chompitas/chompitas';

//------------------------colchas-------------------------
import { colchas } from '../../data/colchas/colchas';


//------------------------conjuntos-------------------------

import { conjuntos } from '../../data/conjuntos/conjuntos';

//------------------------Enterizos-------------------------
import { enterizos } from '../../data/enterizos/enterizos';

//------------------------medias-------------------------

import { medias } from '../../data/medias/medias';
//------------------------panales-------------------------
import { paniales } from '../../data/panales/panales';

//------------------------pañaleras-------------------------
import { panaleras } from '../../data/pañaleras/panaleras';

//------------------------sombrerosGorros-------------------------
import { sombrerosGorros } from '../../data/sombrerosGorros/sombrerosGorros';

//------------------------toallas-------------------------
import { toallas } from '../../data/toallas/toallas';

//------------------------vestidos-------------------------
import { vestidos } from '../../data/vestidos/vestidos';







export const ProductScreen = () => {
    
    
    const variable ={
        ajuares: [biviri,cafarenas,conjuntosAjuar,pantalones,polos],
        baberos : [baberos],
        buzos : [buzos,pantalonesBuzo],
        cajas : [cajas],
        chompitas: [chompitas],
        colchas : [colchas],
        conjuntos : [conjuntos],
        bebecreces : [enterizos],
        medias : [medias],
        pañales : [paniales],
        pañaleras: [panaleras],
        "sombreros y gorros" : [sombrerosGorros],
        toallas: [toallas],
        vestidos: [vestidos]
    }
    
    
    
    const parametro= useParams();

    console.log(parametro)

    
    const seleccionar= ()=>{
        
        for(const j in variable){
        
            
            if (j.toLowerCase()===parametro.producto.toLowerCase()){
                
                return variable[j];
                
            }
        };   
    }   
    
   const mostrar=seleccionar();
    

    
    return (
        <div>
            <h3>
                {parametro.producto}
            </h3>
        
            <hr/>

            <ul classNme="row row-cols-1 row-cols-md-4 g-4" style={{
                padding:"15px"
            }}>
            
                    {
                        mostrar.map( e=>{
                            return (
                                e.map( i=>{
                                    return( 
                                    
                                    <li key={i.id} className="row container">
 
                                    
                                    <div className="col-6 imagen" style={{
                                        height:"600px"
                                    }}>

                                    </div>
                                    

                                    


                                    <div className="col-6">
                                        
                                        <p className="descripcion" style={{
                                            color:"#6541E0"
                                        }}>
                                            {i.descripcion}
                                        </p>

                                        <div>
                                            <div>
                                                <div style={{
                                                    border:"1px solid #eee",
                                                    padding:"0",
                                                    margin:"0"
                                                    
                                                }}>
                                                    <p className="m-3" style={{
                                                        textAlign:"center"
                                                    }}>Sexos</p>
                                                    <div className="row">
                                                    { 
                                                    i.genero.length===1 ? i.genero.map( u=>{
                                                        return(
                                                            <p className="col-12 btn btn-primary">
                                                                {u}
                                                            </p>

                                                        )
                                                    }):
                                                    i.genero.map(u=>{
                                                        return (
                                                           <p className="col-6 btn btn-primary">{u}</p>
                                                                )
                                                    })}
                                                    </div>
                                                </div>
                                                
                                                {
                                                    !(i.tallas)? <p>
                                                        No hay tallas que mostrar
                                                    </p>:
                                                <ul style={{
                                                    border:"0.8px solid #eee"
                                                }} className="row row-cols-2 m-2">
                                                    
                                                    <p className="m-2"
                                                    style={{
                                                        textAlign:"center",
                                                        fontSize:"20px"
                                                    }}>Tallas</p>
                                                    <hr/>
                                                    {i.tallas.map(n=>{
                                                        return (
                                                            <li className="col btn btn-danger m-2" 
                                                            style={{
                                                                listStyle:"none",
                                                                fontSize:"13px"
                                                            }} key={n}>
                                                                {n}
                                                            </li>
                                                        )
                                                    })
                                                    
                                                    
                                                    
                                                    }
                                                
                                                </ul>
                                                }
                                                <div className="btn btn-light" style={{
                                                    display:'flex',
                                                    justifyContent:"center",


                                                }}>
                                                <svg  style={{
                                                    marginRight:"10px",
                                                    padding:"0"
                                                }} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M15 4H1v8h14V4zM1 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1z"/>
                                                        <path d="M13 4a2 2 0 0 0 2 2V4h-2zM3 4a2 2 0 0 1-2 2V4h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 12a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                                                </svg>
                                                
                                                <p style={{
                                                    margin:"0",
                                                    paddingTop:"3px",
                                                    textAlign:"center",
                                                    fontSize:"20px"
                                                }}>{i.precio}</p>
                                                </div>

                                            </div>


                                        </div>

                                    </div>

                                    </li>
                                    
                                    )
                            })
                            )
                        })
                    }
                    
                    </ul>

        </div>

    
    
    
)
}
                                
                                    
                                    
                                    
                                    
