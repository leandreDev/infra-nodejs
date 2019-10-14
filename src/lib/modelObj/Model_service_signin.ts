import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service d'enregistrement
*/
export class Model_service_signin extends   Model_service   implements Interface.Iservice_signin {

/**
  service d'enregistrement
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["userUrl"] != undefined){
          
           this["userUrl"] = obj["userUrl"].toString() ;
           
        }
        
    
        
        if(obj["mailResetUrl"] != undefined){
          
           this["mailResetUrl"] = obj["mailResetUrl"].toString() ;
           
        }
        
    
        
        if(obj["mailInfoUrl"] != undefined){
          
           this["mailInfoUrl"] = obj["mailInfoUrl"].toString() ;
           
        }
        
    
        
        if(obj["mailAccountCreatedUrl"] != undefined){
          
           this["mailAccountCreatedUrl"] = obj["mailAccountCreatedUrl"].toString() ;
           
        }
        
    
        
        if(obj["durationResetDay"] != undefined){
          
           this["durationResetDay"] = new Number(obj["durationResetDay"]).valueOf();
          
        }
        
    
        
        if(obj["userAppUrl"] != undefined){
          
           this["userAppUrl"] = obj["userAppUrl"].toString() ;
           
        }
        
    
        
        if(obj["userProfileUrl"] != undefined){
          
           this["userProfileUrl"] = obj["userProfileUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_signin" ;

        
              /**
        url de la collection des users
        */
               public "userUrl":string ;
              
       
              /**
        mailResetUrl
        */
               public "mailResetUrl":string ;
              
       
              /**
        mailInfoUrl
        */
               public "mailInfoUrl":string ;
              
       
              /**
        mailAccountCreatedUrl
        */
               public "mailAccountCreatedUrl":string ;
              
       
              /**
        nombre de jour de validité d'une demande de reset de password
        */
               public "durationResetDay":number ;
              
       
              /**
        url de la collection des user de l'app
        */
               public "userAppUrl":string ;
              
       
              /**
        url des profiles des users 
        */
               public "userProfileUrl":string ;
              
       


       

   }
