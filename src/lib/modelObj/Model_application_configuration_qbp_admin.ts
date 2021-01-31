import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  config qbp admin
*/
export class Model_application_configuration_qbp_admin extends   Model_application_configuration   implements Interface.Iapplication_configuration_qbp_admin {

/**
  config qbp admin
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["bddUrl"] != undefined){
          
           this["bddUrl"] = obj["bddUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application_configuration_qbp_admin" ;

        
              /**
        url de la bdd
        */
               public "bddUrl"?:string ;
              
       


       

   }
