import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  config DCBM
*/
export class Model_application_configuration_dcbm extends   Model_application_configuration   implements Interface.Iapplication_configuration_dcbm {

/**
  config DCBM
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["bddUrl"] != undefined){
          
           this["bddUrl"] = obj["bddUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application_configuration_dcbm" ;

        
              /**
        url de la bdd
        */
               public "bddUrl"?:string ;
              
       


       

   }
