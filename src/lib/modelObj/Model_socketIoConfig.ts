import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  socketIoConfig
*/
export class Model_socketIoConfig extends  Base  implements Interface.IsocketIoConfig {

/**
  socketIoConfig
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["serverOptionPath"] != undefined){
          
           this["serverOptionPath"] = obj["serverOptionPath"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "socketIoConfig" ;

        
              /**
        serverOptionPath
        */
               public "serverOptionPath"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["serverOptionPath"] != null && target["serverOptionPath"] != undefined ){
              
                let _serverOptionPath  = target["serverOptionPath"] ;
                

                 if(! _.isString(_serverOptionPath)){
                    throw new Error(path+"serverOptionPath is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_socketIoConfig>{
        return Model_socketIoConfig.check(target, true, path).then(()=>{
          return new Model_socketIoConfig(target) ;
        })
      }

   }
