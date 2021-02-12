import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_service } from "./Model_service"


/**
  service airport
*/
export class Model_service_airport extends   Model_service   implements Interface.Iservice_airport {

/**
  service airport
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["bddUrl"] != undefined){
          
           this["bddUrl"] = obj["bddUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_airport" ;

        
              /**
        url de la base de donnée
        */
               public "bddUrl"?:string ;
              
       


       

   }
