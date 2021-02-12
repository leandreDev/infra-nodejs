import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  description d'un fichier de configuration nginx
*/
export class Model_nginxConfigurationFile extends  Base  implements Interface.InginxConfigurationFile {

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
        
    
  }
  

    public _class:string  = "nginxConfigurationFile" ;

        
              /**
        suffix a utiliser pour générer le fichier de configuration (idService_suffix.config)
        */
               public "suffix"?:string ;
              
       
              /**
        le template à répéter avec les services
        */
               public "template"?:string ;
              
       
              /**
        liste des services
        */
               public "services"?:string[] ;
              
       


       

   }
