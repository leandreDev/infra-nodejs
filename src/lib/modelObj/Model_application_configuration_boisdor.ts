import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  config boisdor
*/
export class Model_application_configuration_boisdor extends   Model_application_configuration   implements Interface.Iapplication_configuration_boisdor {

/**
  config boisdor
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["boisdorCustomerApi"] != undefined){
          
           this["boisdorCustomerApi"] = obj["boisdorCustomerApi"].toString() ;
           
        }
        
    
        
        if(obj["boisdorBddUrl"] != undefined){
          
           this["boisdorBddUrl"] = obj["boisdorBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["fsoUrl"] != undefined){
          
           this["fsoUrl"] = obj["fsoUrl"].toString() ;
           
        }
        
    
        
        if(obj["payementUrl"] != undefined){
          
           this["payementUrl"] = obj["payementUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application_configuration_boisdor" ;

        
              /**
        url du service client de boisdor
        */
               public "boisdorCustomerApi"?:string ;
              
       
              /**
        url de lapi de bdd boisdor
        */
               public "boisdorBddUrl"?:string ;
              
       
              /**
        url du service fso boisdor
        */
               public "fsoUrl"?:string ;
              
       
              /**
        url de l api de paiement
        */
               public "payementUrl"?:string ;
              
       


       

   }
