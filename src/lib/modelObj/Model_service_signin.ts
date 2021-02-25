import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


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
        
    
        
        if(obj["bddSsoUrl"] != undefined){
          
           this["bddSsoUrl"] = obj["bddSsoUrl"].toString() ;
           
        }
        
    
        
        if(obj["mailerUrl"] != undefined){
          
           this["mailerUrl"] = obj["mailerUrl"].toString() ;
           
        }
        
    
        
        if(obj["mailerName"] != undefined){
          
           this["mailerName"] = obj["mailerName"].toString() ;
           
        }
        
    
        
        if(obj["mailerMail"] != undefined){
          
           this["mailerMail"] = obj["mailerMail"].toString() ;
           
        }
        
    
        
        if(obj["resetMail"] != undefined){
          
          if(_.isString(obj["resetMail"])){
            this["resetMail"] = obj["resetMail"];
          }else if(obj["resetMail"]._id){
            this["resetMail"] = obj["resetMail"]._id ;
          }
          
        }
        
    
        
        if(obj["updateMail"] != undefined){
          
          if(_.isString(obj["updateMail"])){
            this["updateMail"] = obj["updateMail"];
          }else if(obj["updateMail"]._id){
            this["updateMail"] = obj["updateMail"]._id ;
          }
          
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
              
       
              /**
        url du service de bd de la bdd du sso
        */
               public "bddSsoUrl"?:string ;
              
       
              /**
        url du service de mail
        */
               public "mailerUrl"?:string ;
              
       
              /**
        nom a faire apparaitre dans les mails
        */
               public "mailerName"?:string ;
              
       
              /**
        email d'envoie des mail
        */
               public "mailerMail"?:string ;
              
       
              /**
        mail de demande de reset de mot de pass
        */
               public "resetMail"?:string ;
              
       
              /**
        mail d'information de l'update d'un compte
        */
               public "updateMail"?:string ;
              
       


       

   }
