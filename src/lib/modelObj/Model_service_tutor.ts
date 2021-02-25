import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_service } from "./Model_service"


/**
  service de gestion des message tutoré
*/
export class Model_service_tutor extends   Model_service   implements Interface.Iservice_tutor {

/**
  service de gestion des message tutoré
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["apiSession"] != undefined){
          
           this["apiSession"] = obj["apiSession"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_tutor" ;

        
              /**
        url du service de bd a utiliser
        */
               public "apiSession":string ;
              
       


       

   }
