import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  configure un service mongo
*/
export class Model_service_mongo extends   Model_service   implements Interface.Iservice_mongo {

/**
  configure un service mongo
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["mongoosePath"] != undefined){
          
           this["mongoosePath"] = obj["mongoosePath"].toString() ;
           
        }
        
    
        
        if(obj["mongoAuthSource"] != undefined){
          
           this["mongoAuthSource"] = obj["mongoAuthSource"].toString() ;
           
        }
        
    
        
        if(obj["secretKey"] != undefined){
          
           this["secretKey"] = obj["secretKey"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_mongo" ;

        
              /**
        l'url de connection a mongodb
        */
               public "mongoosePath"?:string ;
              
       
              /**
        le nom de la base sur laquelle la connexion doit s'établir. Cela permet de pouvoir créer des bases automatiquements
        */
               public "mongoAuthSource"?:string ;
              
       
              /**
        clef secrète de communication interne a l'infra
        */
               public "secretKey"?:string ="$$ENV.SECRET";
              
       


       

   }
