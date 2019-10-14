import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  notices for client
*/
export class Model_client_notices extends  Base  implements Interface.Iclient_notices {

/**
  notices for client
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["values"] != undefined && obj["values"] != null && _.isArray(obj["values"])){
          

            this["values"] = obj["values"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["notice_field"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "client_notices" ;

        
              /**
        client notices values
        */
               public "values"?:Interface.Inotice_field[];
              
       


       

   }
