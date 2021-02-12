import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  c'est la configuration d'une application
*/
export class Model_application_configuration extends  Base  implements Interface.Iapplication_configuration {

/**
  c'est la configuration d'une application
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["services"] != undefined && obj["services"] != null && _.isArray(obj["services"])){
          
          this["services"] = obj["services"].map((value)=>{
            if(_.isString(value)){
              return value ;
            }else if(value._id){
              return value._id ;
            }else if(value._bsontype && value._bsontype === 'ObjectID'){
                return `${value}` ;
            }
          })
          
          
        }
        
    
        
        if(obj["appName"] != undefined){
          
           this["appName"] = obj["appName"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application_configuration" ;

        
              /**
        le nom de la configuration
        */
               public "name"?:string ;
              
       
              /**
        configurations de services
        */
               public "services"?:string[] ;
              
       
              /**
        nom de l'application a afficher
        */
               public "appName"?:string ;
              
       


       

   }
