import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_service } from "./Model_service"


/**
  communication temps réelle multi format
*/
export class Model_service_socketIo extends   Model_service   implements Interface.Iservice_socketIo {

/**
  communication temps réelle multi format
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["returnValue"] != undefined){
          
           this["returnValue"] = obj["returnValue"].toString() ;
           
        }
        
    
        
        if(obj["allowCrossOrigin"] != undefined){
          
           this["allowCrossOrigin"] = new Boolean(obj["allowCrossOrigin"]).valueOf() ;
          
        }
        
    
        
        if(obj["socketIo"] != undefined){
          
            if(obj["socketIo"]._class){
              this["socketIo"] =  new Index[obj["socketIo"]._class](obj["socketIo"]) ;
            }else{
              this["socketIo"] =  new Index["socketIoConfig"](obj["socketIo"]) ;
            }
          
        }
        
    
  }
  

    public _class:string  = "service_socketIo" ;

        
              /**
        la valeur a retourner
        */
               public "returnValue"?:string ;
              
       
              /**
        allowCrossOrigin
        */
               public "allowCrossOrigin"?:boolean ;
              
       
              /**
        socketIo configuration
        */
               public "socketIo"?:Interface.IsocketIoConfig;
              
       


       

   }
