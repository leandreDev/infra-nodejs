import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  c'est le client que l'on facture
*/
export class Model_end_client extends  Base  implements Interface.Iend_client {

/**
  c'est le client que l'on facture
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["label"] != undefined){
          
           this["label"] = obj["label"].toString() ;
           
        }
        
    
        
        if(obj["applications"] != undefined && obj["applications"] != null && _.isArray(obj["applications"])){
          
          this["applications"] = obj["applications"].map((value)=>{
            if(_.isString(value)){
              return value ;
            }else if(value._id){
              return value._id ;
            }
          })
          
          
        }
        
    
        
        if(obj["admins"] != undefined && obj["admins"] != null && _.isArray(obj["admins"])){
          
          this["admins"] = obj["admins"].map((value)=>{
            if(_.isString(value)){
              return value ;
            }else if(value._id){
              return value._id ;
            }
          })
          
          
        }
        
    
        
        if(obj["licenceStore"] != undefined && obj["licenceStore"] != null && _.isArray(obj["licenceStore"])){
          

            this["licenceStore"] = obj["licenceStore"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["licenceStore"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["client_notices"] != undefined && obj["client_notices"] != null && _.isArray(obj["client_notices"])){
          

            this["client_notices"] = obj["client_notices"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["notice_field"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "end_client" ;

        
              /**
        le nom de la société
        */
               public "name"?:string ;
              
       
              /**
        le nom humain à afficher pour l'entreprise
        */
               public "label"?:string ;
              
       
              /**
        liste des instance d'application au quelle le end_client a accés
        */
               public "applications"?:string[] ;
              
       
              /**
        liste des administrateurs du end_client
        */
               public "admins"?:string[] ;
              
       
              /**
        distributeur de licence
        */
               public "licenceStore"?:Interface.IlicenceStore[];
              
       
              /**
        client notices
        */
               public "client_notices"?:Interface.Inotice_field[];
              
       


       

   }
