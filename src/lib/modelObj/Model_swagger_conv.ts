import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_service } from "./Model_service"


/**
  convertisseur de swagger
*/
export class Model_swagger_conv extends   Model_service   implements Interface.Iswagger_conv {

/**
  convertisseur de swagger
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["urlBdd"] != undefined){
          
           this["urlBdd"] = obj["urlBdd"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "swagger_conv" ;

        
              /**
        url de la bdd a mettre a jour
        */
               public "urlBdd"?:string ;
              
       


       

   }
