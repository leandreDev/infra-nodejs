import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;



/**
  description d'une requete avec request
*/
export class Model_Request extends  Base  implements Interface.IRequest {

/**
  description d'une requete avec request
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["url"] != undefined){
          
           this["url"] = obj["url"].toString() ;
           
        }
        
    
        
        if(obj["method"] != undefined){
          
           this["method"] = obj["method"].toString() ;
           
        }
        
    
        
        if(obj["headers"] != undefined && obj["headers"] != null && _.isArray(obj["headers"])){
          

            this["headers"] = obj["headers"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["name_value"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["body"] != undefined){
          
           this["body"] = obj["body"] ;
          
        }
        
    
  }
  

    public _class:string  = "Request" ;

        
              /**
         fully qualified uri or a parsed url object from url.parse()
        */
               public "url":string ="https://";
              
       
              /**
        http method (default: "GET")
        */
               public "method":string ="GET";
              
       
              /**
        http headers 
        */
               public "headers"?:Interface.Iname_value[];
              
       
              /**
        entity body for PATCH, POST and PUT requests. Must be a Buffer, String or ReadStream. If json is true, then body must be a JSON-serializable object.
        */
               public "body"?:any ;
              
       


       

   }
