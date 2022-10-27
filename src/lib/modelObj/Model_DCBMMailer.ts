import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



/**
  configuration pour l'envoie d emails DCBM
*/
export class Model_DCBMMailer extends  Base  implements Interface.IDCBMMailer {

/**
  configuration pour l'envoie d emails DCBM
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["senderEMail"] != undefined){
          
           this["senderEMail"] = obj["senderEMail"].toString() ;
           
        }
        
    
        
        if(obj["senderName"] != undefined){
          
           this["senderName"] = obj["senderName"].toString() ;
           
        }
        
    
        
        if(obj["dcbmBaseUrl"] != undefined){
          
           this["dcbmBaseUrl"] = obj["dcbmBaseUrl"].toString() ;
           
        }
        
    
        
        if(obj["dcbmSendgridApiUrl"] != undefined){
          
           this["dcbmSendgridApiUrl"] = obj["dcbmSendgridApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["dcbmContactMail"] != undefined){
          
           this["dcbmContactMail"] = obj["dcbmContactMail"].toString() ;
           
        }
        
    
        
        if(obj["dcbm_group_resset_password"] != undefined){
          
          if(_.isString(obj["dcbm_group_resset_password"])){
            this["dcbm_group_resset_password"] = obj["dcbm_group_resset_password"];
          }else if(obj["dcbm_group_resset_password"]._id){
            this["dcbm_group_resset_password"] = obj["dcbm_group_resset_password"]._id ;
          }else if(obj["dcbm_group_resset_password"]._bsontype && (obj["dcbm_group_resset_password"]._bsontype === 'ObjectID')){
              this["dcbm_group_resset_password"] = obj["dcbm_group_resset_password"] ;
            }
          
        }
        
    
        
        if(obj["dcbm_group_welcome"] != undefined){
          
          if(_.isString(obj["dcbm_group_welcome"])){
            this["dcbm_group_welcome"] = obj["dcbm_group_welcome"];
          }else if(obj["dcbm_group_welcome"]._id){
            this["dcbm_group_welcome"] = obj["dcbm_group_welcome"]._id ;
          }else if(obj["dcbm_group_welcome"]._bsontype && (obj["dcbm_group_welcome"]._bsontype === 'ObjectID')){
              this["dcbm_group_welcome"] = obj["dcbm_group_welcome"] ;
            }
          
        }
        
    
        
        if(obj["dcbm_contact_to_user"] != undefined){
          
          if(_.isString(obj["dcbm_contact_to_user"])){
            this["dcbm_contact_to_user"] = obj["dcbm_contact_to_user"];
          }else if(obj["dcbm_contact_to_user"]._id){
            this["dcbm_contact_to_user"] = obj["dcbm_contact_to_user"]._id ;
          }else if(obj["dcbm_contact_to_user"]._bsontype && (obj["dcbm_contact_to_user"]._bsontype === 'ObjectID')){
              this["dcbm_contact_to_user"] = obj["dcbm_contact_to_user"] ;
            }
          
        }
        
    
        
        if(obj["dcbm_contact_to_dcbm"] != undefined){
          
          if(_.isString(obj["dcbm_contact_to_dcbm"])){
            this["dcbm_contact_to_dcbm"] = obj["dcbm_contact_to_dcbm"];
          }else if(obj["dcbm_contact_to_dcbm"]._id){
            this["dcbm_contact_to_dcbm"] = obj["dcbm_contact_to_dcbm"]._id ;
          }else if(obj["dcbm_contact_to_dcbm"]._bsontype && (obj["dcbm_contact_to_dcbm"]._bsontype === 'ObjectID')){
              this["dcbm_contact_to_dcbm"] = obj["dcbm_contact_to_dcbm"] ;
            }
          
        }
        
    
        
        if(obj["dcbm_group_welcome_admin_templateId"] != undefined){
          
          if(_.isString(obj["dcbm_group_welcome_admin_templateId"])){
            this["dcbm_group_welcome_admin_templateId"] = obj["dcbm_group_welcome_admin_templateId"];
          }else if(obj["dcbm_group_welcome_admin_templateId"]._id){
            this["dcbm_group_welcome_admin_templateId"] = obj["dcbm_group_welcome_admin_templateId"]._id ;
          }else if(obj["dcbm_group_welcome_admin_templateId"]._bsontype && (obj["dcbm_group_welcome_admin_templateId"]._bsontype === 'ObjectID')){
              this["dcbm_group_welcome_admin_templateId"] = obj["dcbm_group_welcome_admin_templateId"] ;
            }
          
        }
        
    
  }
  

    public _class:string  = "DCBMMailer" ;

        
              /**
        adresse mail affiché lorsque l user reçoie le mail
        */
               public "senderEMail"?:string ;
              
       
              /**
        nom affiche dans les en_tete du  mail 
        */
               public "senderName"?:string ;
              
       
              /**
        adresse du site , exemple dcbm.justeplug.info en dev ou dcbm.justplug.fr en prod
        */
               public "dcbmBaseUrl"?:string ;
              
       
              /**
        url de l'api sengGrid pour DCBM
        */
               public "dcbmSendgridApiUrl"?:string ;
              
       
              /**
        la adresse mail qui reçoi le mails de contact
        */
               public "dcbmContactMail"?:string ;
              
       
              /**
        id du template pour le resset du password
        */
               public "dcbm_group_resset_password"?:string ;
              
       
              /**
        id du template du mail de bienvenue
        */
               public "dcbm_group_welcome"?:string ;
              
       
              /**
        mail de contact
        */
               public "dcbm_contact_to_user"?:string ;
              
       
              /**
        mail pour DCBM avec le contenu de un mail de contact
        */
               public "dcbm_contact_to_dcbm"?:string ;
              
       
              /**
        mail de bienvenu d un nouvelle admin
        */
               public "dcbm_group_welcome_admin_templateId":string ;
              
       


       

   }
