import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  conf petit_moulin_admin
*/
export class Model_application_configuration_petit_moulin_admin extends   Model_application_configuration   implements Interface.Iapplication_configuration_petit_moulin_admin {

/**
  conf petit_moulin_admin
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["serviceUrl"] != undefined){
          
           this["serviceUrl"] = obj["serviceUrl"].toString() ;
           
        }
        
    
        
        if(obj["bddUrl"] != undefined){
          
           this["bddUrl"] = obj["bddUrl"].toString() ;
           
        }
        
    
        
        if(obj["fsoUrl"] != undefined){
          
           this["fsoUrl"] = obj["fsoUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application_configuration_petit_moulin_admin" ;

        
              /**
        url du service
        */
               public "serviceUrl"?:string ;
              
       
              /**
        url de la base de donnée
        */
               public "bddUrl"?:string ;
              
       
              /**
        url du filesystem
        */
               public "fsoUrl"?:string ;
              
       


       

   }
