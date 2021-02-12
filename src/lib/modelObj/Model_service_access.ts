import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;



/**
  décrit les régles de paramètre des servies
*/
export class Model_service_access extends  Base  implements Interface.Iservice_access {

/**
  décrit les régles de paramètre des servies
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["service"] != undefined){
          
          if(_.isString(obj["service"])){
            this["service"] = obj["service"];
          }else if(obj["service"]._id){
            this["service"] = obj["service"]._id ;
          }
          
        }
        
    
        
        if(obj["httAccess"] != undefined){
          
            if(obj["httAccess"]._class){
              this["httAccess"] =  new Index[obj["httAccess"]._class](obj["httAccess"]) ;
            }else{
              this["httAccess"] =  new Index["url_role"](obj["httAccess"]) ;
            }
          
        }
        
    
  }
  

    public _class:string  = "service_access" ;

        
              /**
        nom de la configuration
        */
               public "name"?:string ;
              
       
              /**
        service au qu'elle s'applique la configuration
        */
               public "service"?:string ;
              
       
              /**
        liste les règles d’accès aux routes d'un service
        */
               public "httAccess"?:Interface.Iurl_role;
              
       


       

   }
