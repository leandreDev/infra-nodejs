import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  config qbp
*/
export class Model_application_configuration_qbp extends   Model_application_configuration   implements Interface.Iapplication_configuration_qbp {

/**
  config qbp
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["qbpCustomerApi"] != undefined){
          
           this["qbpCustomerApi"] = obj["qbpCustomerApi"].toString() ;
           
        }
        
    
        
        if(obj["qbpBddUrl"] != undefined){
          
           this["qbpBddUrl"] = obj["qbpBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["qbpFsoUrl"] != undefined){
          
           this["qbpFsoUrl"] = obj["qbpFsoUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application_configuration_qbp" ;

        
              /**
        url du service client de qbp
        */
               public "qbpCustomerApi"?:string ;
              
       
              /**
        url de lapi de bdd qbp
        */
               public "qbpBddUrl"?:string ;
              
       
              /**
        url du service fso qbp
        */
               public "qbpFsoUrl"?:string ;
              
       


       

   }
