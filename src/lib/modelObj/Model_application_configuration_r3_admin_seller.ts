import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  config r3 admin
*/
export class Model_application_configuration_r3_admin_seller extends   Model_application_configuration   implements Interface.Iapplication_configuration_r3_admin_seller {

/**
  config r3 admin
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["bddUrl"] != undefined){
          
           this["bddUrl"] = obj["bddUrl"].toString() ;
           
        }
        
    
        
        if(obj["apiUrl"] != undefined){
          
           this["apiUrl"] = obj["apiUrl"].toString() ;
           
        }
        
    
        
        if(obj["fsoUrl"] != undefined){
          
           this["fsoUrl"] = obj["fsoUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application_configuration_r3_admin_seller" ;

        
              /**
        url de la bdd
        */
               public "bddUrl"?:string ;
              
       
              /**
        url du servie r3 
        */
               public "apiUrl"?:string ;
              
       
              /**
        url du service de fichiers (fso)
        */
               public "fsoUrl"?:string ;
              
       


       

   }
