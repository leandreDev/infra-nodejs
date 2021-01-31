import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  configuration pour un service sftp
*/
export class Model_ftpsConfig extends  Base  implements Interface.IftpsConfig {

/**
  configuration pour un service sftp
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["port"] != undefined){
          
           this["port"] = new Number(obj["port"]).valueOf();
          
        }
        
    
        
        if(obj["certPath"] != undefined){
          
           this["certPath"] = obj["certPath"].toString() ;
           
        }
        
    
        
        if(obj["folderPath"] != undefined){
          
           this["folderPath"] = obj["folderPath"].toString() ;
           
        }
        
    
        
        if(obj["login"] != undefined){
          
           this["login"] = obj["login"].toString() ;
           
        }
        
    
        
        if(obj["password"] != undefined){
          
           this["password"] = obj["password"].toString() ;
           
        }
        
    
        
        if(obj["newFileHook"] != undefined){
          
            if(obj["newFileHook"]._class){
              this["newFileHook"] =  new Index[obj["newFileHook"]._class](obj["newFileHook"]) ;
            }else{
              this["newFileHook"] =  new Index["Request"](obj["newFileHook"]) ;
            }
          
        }
        
    
  }
  

    public _class:string  = "ftpsConfig" ;

        
              /**
        port sftp
        */
               public "port":number ;
              
       
              /**
        private certifaicate cert
        */
               public "certPath":string ;
              
       
              /**
        file folder path
        */
               public "folderPath":string ;
              
       
              /**
        login for ftp
        */
               public "login":string ;
              
       
              /**
        hash of password
        */
               public "password"?:string ;
              
       
              /**
        hook when new file create
        */
               public "newFileHook"?:Interface.IRequest;
              
       


       

   }
