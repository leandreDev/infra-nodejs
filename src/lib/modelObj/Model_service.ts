import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  identification du service
*/
export class Model_service extends  Base  implements Interface.Iservice {

/**
  identification du service
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["urlBase"] != undefined){
          
           this["urlBase"] = obj["urlBase"].toString() ;
           
        }
        
    
        
        if(obj["port"] != undefined){
          
           this["port"] = new Number(obj["port"]).valueOf();
          
        }
        
    
        
        if(obj["debug"] != undefined){
          
           this["debug"] = new Boolean(obj["debug"]).valueOf() ;
          
        }
        
    
        
        if(obj["licence_well-known"] != undefined){
          
           this["licence_well-known"] = obj["licence_well-known"].toString() ;
           
        }
        
    
        
        if(obj["secretKey"] != undefined){
          
           this["secretKey"] = obj["secretKey"].toString() ;
           
        }
        
    
        
        if(obj["publicAccess"] != undefined){
          
            if(obj._class){
              this["publicAccess"] =  new Index[obj._class](obj["publicAccess"]) ;
            }else{
              this["publicAccess"] =  new Index["url_role"](obj["publicAccess"]) ;
            }
          
        }
        
    
  }
  

    public _class:string  = "service" ;

        
              /**
        le nom du service
        */
               public "name"?:string ;
              
       
              /**
        l'url racine du service
        */
               public "urlBase"?:string ="$ENV.DOMAINE$$/";
              
       
              /**
        le port de publication
        */
               public "port"?:number ;
              
       
              /**
        active le debug
        */
               public "debug"?:boolean =true;
              
       
              /**
        licence_well-known
        */
               public "licence_well-known"?:string ="$ENV.WELL_KNOWN";
              
       
              /**
        clef secrète de signature inter service
        */
               public "secretKey"?:string ="$ENV.SECRET";
              
       
              /**
        paramétrage des accès public
        */
               public "publicAccess"?:Interface.Iurl_role;
              
       


       

   }
