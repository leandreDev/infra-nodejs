import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service messagerie de soket.io
*/
export class Model_service_socket_io extends   Model_service   implements Interface.Iservice_socket_io {

/**
  service messagerie de soket.io
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["namespaces"] != undefined && obj["namespaces"] != null && _.isArray(obj["namespaces"])){
          
           this["namespaces"] = obj["namespaces"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
  }
  

    public _class:string  = "service_socket_io" ;

        
              /**
        liste des namespace a créer sur le serveur
        */
               public "namespaces"?:string[];
              
       


       

   }
