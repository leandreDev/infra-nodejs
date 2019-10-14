import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_mail } from "./Model_mail"


/**
  objet envoyé a l'api sendgrid 
*/
export class Model_mail_sendgrid extends   Model_mail   implements Interface.Imail_sendgrid {

/**
  objet envoyé a l'api sendgrid 
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["content"] != undefined){
          
           this["content"] = obj["content"].toString() ;
           
        }
        
    
        
        if(obj["from"] != undefined){
          
           this["from"] = obj["from"].toString() ;
           
        }
        
    
        
        if(obj["personalizations"] != undefined){
          
           this["personalizations"] = obj["personalizations"].toString() ;
           
        }
        
    
        
        if(obj["reply_to"] != undefined){
          
           this["reply_to"] = obj["reply_to"].toString() ;
           
        }
        
    
        
        if(obj["subject"] != undefined){
          
           this["subject"] = obj["subject"].toString() ;
           
        }
        
    
        
        if(obj["send_at"] != undefined){
          
            this["send_at"] = new Date(obj["send_at"]) ;
          
        }
        
    
        
        if(obj["template_id"] != undefined){
          
           this["template_id"] = obj["template_id"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "mail_sendgrid" ;

        
              /**
        content
        */
               public "content"?:string ;
              
       
              /**
        from
        */
               public "from"?:string ;
              
       
              /**
        personalizations
        */
               public "personalizations"?:string ;
              
       
              /**
        reply_to
        */
               public "reply_to"?:string ;
              
       
              /**
        subject
        */
               public "subject"?:string ;
              
       
              /**
        la date d'envoie demandé
        */
               public "send_at"?:Date ;
              
       
              /**
        template_id
        */
               public "template_id"?:string ;
              
       


       

   }
