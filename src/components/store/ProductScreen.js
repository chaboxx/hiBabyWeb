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

            
                <ul classNme="row row-cols-1 row-cols-md-4 g-4 container" style={{
                    padding:"15px"
                }}>
                    {
                        mostrar.map( e=>{
                            return (
                                e.map( i=>{
                                    return <li key={i.id} style={{listStyle:"none",maxWidth:"400px"}}
                                            className="container carta"
                                            >

                                    <div className="col" style={{
                                        
                                        display:"flex",
                                        alignItems:"center",
                                        justifyContent:"center"
                                    }}>
                                        <div className="col-7">
                                        <p>{i.descripcion} </p>
                                        <img className="img-fluid" width="250" height="300" src="https://exmopedia.com/wp-content/uploads/2020/10/comprar-ropa-para-bebe-harley-davidson.jpg" alt="imagen" />
                                        </div>
                                        <div className="col-5">

                                        <p>{i.genero} </p>
                                        <p>{i.tallas} </p>
                                        
                                        </div>

                                    </div>










                                    </li>
                                })
                            )
                        })
                    }
                        
                </ul>

            </div>

        
        
        
    )
}


