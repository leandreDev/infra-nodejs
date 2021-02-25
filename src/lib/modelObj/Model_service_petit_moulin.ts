import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_service } from "./Model_service"


/**
  service petit moulin
*/
export class Model_service_petit_moulin extends   Model_service   implements Interface.Iservice_petit_moulin {

/**
  service petit moulin
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["bddUrl"] != undefined){
          
           this["bddUrl"] = obj["bddUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_petit_moulin" ;

        
              /**
        url de la base de donnée
        */
               public "bddUrl"?:string ;
              
       


       

   }
