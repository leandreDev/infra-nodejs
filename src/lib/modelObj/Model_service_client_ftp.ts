import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_service } from "./Model_service"


/**
  client ftps
*/
export class Model_service_client_ftp extends   Model_service   implements Interface.Iservice_client_ftp {

/**
  client ftps
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["host"] != undefined){
          
           this["host"] = obj["host"].toString() ;
           
        }
        
    
        
        if(obj["ftpPort"] != undefined){
          
           this["ftpPort"] = new Number(obj["ftpPort"]).valueOf();
          
        }
        
    
        
        if(obj["user"] != undefined){
          
           this["user"] = obj["user"].toString() ;
           
        }
        
    
        
        if(obj["password"] != undefined){
          
           this["password"] = obj["password"].toString() ;
           
        }
        
    
        
        if(obj["downloadPath"] != undefined){
          
           this["downloadPath"] = obj["downloadPath"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_client_ftp" ;

        
              /**
        host
        */
               public "host":string ;
              
       
              /**
        port
        */
               public "ftpPort":number =21;
              
       
              /**
        user
        */
               public "user":string ;
              
       
              /**
        password
        */
               public "password":string ;
              
       
              /**
        downloadPath
        */
               public "downloadPath":string ;
              
       


       

   }
