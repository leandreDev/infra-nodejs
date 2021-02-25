import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



/**
  configuration ftp
*/
export class Model_ftpConf extends  Base  implements Interface.IftpConf {

/**
  configuration ftp
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["host"] != undefined){
          
           this["host"] = obj["host"].toString() ;
           
        }
        
    
        
        if(obj["port"] != undefined){
          
           this["port"] = new Number(obj["port"]).valueOf();
          
        }
        
    
        
        if(obj["username"] != undefined){
          
           this["username"] = obj["username"].toString() ;
           
        }
        
    
        
        if(obj["password"] != undefined){
          
           this["password"] = obj["password"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "ftpConf" ;

        
              /**
        host
        */
               public "host":string ;
              
       
              /**
        port
        */
               public "port":number =2121;
              
       
              /**
        username
        */
               public "username":string ;
              
       
              /**
        password
        */
               public "password"?:string ;
              
       


       

   }
