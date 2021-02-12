import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;



/**
  paire utilisateurs role
*/
export class Model_user_roles extends  Base  implements Interface.Iuser_roles {

/**
  paire utilisateurs role
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["user"] != undefined){
          
          if(_.isString(obj["user"])){
            this["user"] = obj["user"];
          }else if(obj["user"]._id){
            this["user"] = obj["user"]._id ;
          }
          
        }
        
    
        
        if(obj["roles"] != undefined && obj["roles"] != null && _.isArray(obj["roles"])){
          
           this["roles"] = obj["roles"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
  }
  

    public _class:string  = "user_roles" ;

        
              /**
        utilisateur
        */
               public "user"?:string ;
              
       
              /**
        liste des roles de l'utilisateur
        */
               public "roles"?:string[];
              
       


       

   }
