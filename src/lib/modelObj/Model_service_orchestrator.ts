import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_service } from "./Model_service"


/**
  service d'orchestration
*/
export class Model_service_orchestrator extends   Model_service   implements Interface.Iservice_orchestrator {

/**
  service d'orchestration
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["apiUrl"] != undefined){
          
           this["apiUrl"] = obj["apiUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_orchestrator" ;

        
              /**
        url de la configuration de l'orchestrateur
        */
               public "apiUrl":string ;
              
       


       

   }
