import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_service } from "./Model_service"


/**
  c'est le service de distribution des configurations des services
*/
export class Model_service_configuration extends   Model_service   implements Interface.Iservice_configuration {

/**
  c'est le service de distribution des configurations des services
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["srvUrl"] != undefined){
          
           this["srvUrl"] = obj["srvUrl"].toString() ;
           
        }
        
    
        
        if(obj["serviceCollectionName"] != undefined){
          
           this["serviceCollectionName"] = obj["serviceCollectionName"].toString() ;
           
        }
        
    
        
        if(obj["serviceConfigCollectionName"] != undefined){
          
           this["serviceConfigCollectionName"] = obj["serviceConfigCollectionName"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_configuration" ;

        
              /**
        l'url du service de base de donnée de l'infra
        */
               public "srvUrl"?:string ;
              
       
              /**
        le nom de la collection des services
        */
               public "serviceCollectionName"?:string ="services";
              
       
              /**
        les configurations de service des applications
        */
               public "serviceConfigCollectionName"?:string ="mongo_service_configs";
              
       


       

   }
