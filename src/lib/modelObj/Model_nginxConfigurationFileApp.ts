import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  description d'un fichier de configuration nginx
*/
export class Model_nginxConfigurationFileApp extends  Base  implements Interface.InginxConfigurationFileApp {

/**
  description d'un fichier de configuration nginx
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["suffix"] != undefined){
          
           this["suffix"] = obj["suffix"].toString() ;
           
        }
        
    
        
        if(obj["template"] != undefined){
          
           this["template"] = obj["template"].toString() ;
           
        }
        
    
        
        if(obj["applications"] != undefined && obj["applications"] != null && _.isArray(obj["applications"])){
          
          this["applications"] = obj["applications"].map((value)=>{
            if(_.isString(value)){
              return value ;
            }else if(value._id){
              return value._id ;
            }else if(value._bsontype && value._bsontype === 'ObjectID'){
                return `${value}` ;
            }
          })
          
          
        }
        
    
        
        if(obj["clients"] != undefined && obj["clients"] != null && _.isArray(obj["clients"])){
          
          this["clients"] = obj["clients"].map((value)=>{
            if(_.isString(value)){
              return value ;
            }else if(value._id){
              return value._id ;
            }else if(value._bsontype && value._bsontype === 'ObjectID'){
                return `${value}` ;
            }
          })
          
          
        }
        
    
  }
  

    public _class:string  = "nginxConfigurationFileApp" ;

        
              /**
        suffix a utiliser pour générer le fichier de configuration (idService_suffix.config)
        */
               public "suffix"?:string ;
              
       
              /**
        le template à répéter avec les services
        */
               public "template"?:string ;
              
       
              /**
        liste des applications
        */
               public "applications":string[] ;
              
       
              /**
        le client associé
        */
               public "clients":string[] ;
              
       


       

   }
