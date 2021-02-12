import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;



/**
  description d'une identit   pour l'acl
*/
export class Model_aclIdentity extends  Base  implements Interface.IaclIdentity {

/**
  description d'une identit   pour l'acl
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["end_client"] != undefined){
          
          if(_.isString(obj["end_client"])){
            this["end_client"] = obj["end_client"];
          }else if(obj["end_client"]._id){
            this["end_client"] = obj["end_client"]._id ;
          }
          
        }
        
    
        
        if(obj["applicaton_instance"] != undefined){
          
          if(_.isString(obj["applicaton_instance"])){
            this["applicaton_instance"] = obj["applicaton_instance"];
          }else if(obj["applicaton_instance"]._id){
            this["applicaton_instance"] = obj["applicaton_instance"]._id ;
          }
          
        }
        
    
        
        if(obj["role"] != undefined){
          
           this["role"] = obj["role"].toString() ;
           
        }
        
    
        
        if(obj["user"] != undefined){
          
          if(_.isString(obj["user"])){
            this["user"] = obj["user"];
          }else if(obj["user"]._id){
            this["user"] = obj["user"]._id ;
          }
          
        }
        
    
  }
  

    public _class:string  = "aclIdentity" ;

        
              /**
        end_client ayant droit
        */
               public "end_client"?:string ;
              
       
              /**
        application instance ayant droit
        */
               public "applicaton_instance"?:string ;
              
       
              /**
        r  le ayant droit
        */
               public "role"?:string ;
              
       
              /**
        utilisateur ayant droit
        */
               public "user"?:string ;
              
       


       

   }
