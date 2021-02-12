import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;



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
              
       


       

   }
