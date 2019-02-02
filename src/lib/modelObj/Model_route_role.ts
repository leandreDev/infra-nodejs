import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  paire route et role
*/
export class Model_route_role extends  Base  implements Interface.Iroute_role {

/**
  paire route et role
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["route"] != undefined){
          
           this["route"] = obj["route"].toString() ;
           
        }
        
    
        
        if(obj["role"] != undefined && obj["role"] != null && _.isArray(obj["role"])){
          
           this["role"] = obj["role"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
  }
  

    public _class:string  = "route_role" ;

        
              /**
        route à protéger
        */
               public "route"?:string ;
              
       
              /**
        liste des roles
        */
               public "role"?:string[];
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["route"] != null && target["route"] != undefined ){
              
                let _route  = target["route"] ;
                

                 if(! _.isString(_route)){
                    throw new Error(path+"route is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["role"] != null && target["role"] != undefined ){
              
                target["role"].forEach((_role , index:number)=>{
                

                 if(! _.isString(_role)){
                    throw new Error(path+"role index: "+ index +"is not a string")
                    
                  }
                  
                  
                 });
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_route_role>{
        return Model_route_role.check(target, true, path).then(()=>{
          return new Model_route_role(target) ;
        })
      }

   }
