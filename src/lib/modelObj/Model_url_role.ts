import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;



/**
  règle de sécurité relative aux url
*/
export class Model_url_role extends  Base  implements Interface.Iurl_role {

/**
  règle de sécurité relative aux url
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["_$get"] != undefined && obj["_$get"] != null && _.isArray(obj["_$get"])){
          

            this["_$get"] = obj["_$get"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["route_role"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["_$post"] != undefined && obj["_$post"] != null && _.isArray(obj["_$post"])){
          

            this["_$post"] = obj["_$post"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["route_role"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["_$delete"] != undefined && obj["_$delete"] != null && _.isArray(obj["_$delete"])){
          

            this["_$delete"] = obj["_$delete"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["route_role"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["_$put"] != undefined && obj["_$put"] != null && _.isArray(obj["_$put"])){
          

            this["_$put"] = obj["_$put"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["route_role"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["_$patch"] != undefined && obj["_$patch"] != null && _.isArray(obj["_$patch"])){
          

            this["_$patch"] = obj["_$patch"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["route_role"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "url_role" ;

        
              /**
        sécurité du verbe get
        */
               public "_$get"?:Interface.Iroute_role[];
              
       
              /**
        règle de sécurité des post
        */
               public "_$post"?:Interface.Iroute_role[];
              
       
              /**
        règle de sécurité du verbe delete
        */
               public "_$delete"?:Interface.Iroute_role[];
              
       
              /**
        règle de sécurité du verbe update
        */
               public "_$put"?:Interface.Iroute_role[];
              
       
              /**
        règle de sécurité du verbe patch
        */
               public "_$patch"?:Interface.Iroute_role[];
              
       


       

   }
