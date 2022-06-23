import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  config r3 admin
*/
export class Model_application_configuration_r3_admin extends   Model_application_configuration   implements Interface.Iapplication_configuration_r3_admin {

/**
  config r3 admin
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["bddUrl"] != undefined){
          
           this["bddUrl"] = obj["bddUrl"].toString() ;
           
        }
        
    
        
        if(obj["uploadUrl"] != undefined){
          
           this["uploadUrl"] = obj["uploadUrl"].toString() ;
           
        }
        
    
        
        if(obj["apiUrl"] != undefined){
          
           this["apiUrl"] = obj["apiUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application_configuration_r3_admin" ;

        
              /**
        url de la bdd
        */
               public "bddUrl"?:string ;
              
       
              /**
        uploadUrl url du service de telechargement des images
        */
               public "uploadUrl"?:string ;
              
       
              /**
        l"url de l'api
        */
               public "apiUrl"?:string ;
              
       


       

   }
