import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



/**
  Configuration de connexion BigBen
*/
export class Model_BigBenConf extends  Base  implements Interface.IBigBenConf {

/**
  Configuration de connexion BigBen
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["u"] != undefined){
          
           this["u"] = obj["u"].toString() ;
           
        }
        
    
        
        if(obj["p"] != undefined){
          
           this["p"] = obj["p"].toString() ;
           
        }
        
    
        
        if(obj["k"] != undefined){
          
           this["k"] = obj["k"].toString() ;
           
        }
        
    
        
        if(obj["apiUrl"] != undefined){
          
           this["apiUrl"] = obj["apiUrl"].toString() ;
           
        }
        
    
        
        if(obj["marcoApiKey"] != undefined){
          
           this["marcoApiKey"] = obj["marcoApiKey"].toString() ;
           
        }
        
    
        
        if(obj["marcoApiUrl"] != undefined){
          
           this["marcoApiUrl"] = obj["marcoApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["isMarcoApiActive"] != undefined){
          
           this["isMarcoApiActive"] = new Boolean(obj["isMarcoApiActive"]).valueOf() ;
          
        }
        
    
  }
  

    public _class:string  = "BigBenConf" ;

        
              /**
        User
        */
               public "u":string ;
              
       
              /**
        Password encrypté
        */
               public "p":string ;
              
       
              /**
        Clé de l'api
        */
               public "k":string ;
              
       
              /**
        Url de l'api
        */
               public "apiUrl":string ;
              
       
              /**
        Clé API pour l'api MACRO qui permet de passer des commande
        */
               public "marcoApiKey"?:string ;
              
       
              /**
        URL de l'api macro
        */
               public "marcoApiUrl"?:string ;
              
       
              /**
        Switch entre ancienne api et nouvelle api
        */
               public "isMarcoApiActive"?:boolean =true;
              
       


       

   }
