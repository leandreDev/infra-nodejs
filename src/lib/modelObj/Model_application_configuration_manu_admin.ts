import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  cond des comptoire de l'or admin
*/
export class Model_application_configuration_manu_admin extends   Model_application_configuration   implements Interface.Iapplication_configuration_manu_admin {

/**
  cond des comptoire de l'or admin
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["bddApiUrl"] != undefined){
          
           this["bddApiUrl"] = obj["bddApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["serviceUrl"] != undefined){
          
           this["serviceUrl"] = obj["serviceUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application_configuration_manu_admin" ;

        
              /**
        url du service d'api
        */
               public "bddApiUrl"?:string ;
              
       
              /**
        url du service métier
        */
               public "serviceUrl"?:string ;
              
       


       

   }
