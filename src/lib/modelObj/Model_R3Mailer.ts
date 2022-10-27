import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



/**
  configurationpour l'envoie d emails R3
*/
export class Model_R3Mailer extends  Base  implements Interface.IR3Mailer {

/**
  configurationpour l'envoie d emails R3
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["senderEMail"] != undefined){
          
           this["senderEMail"] = obj["senderEMail"].toString() ;
           
        }
        
    
        
        if(obj["senderName"] != undefined){
          
           this["senderName"] = obj["senderName"].toString() ;
           
        }
        
    
        
        if(obj["r3BaseUrl"] != undefined){
          
           this["r3BaseUrl"] = obj["r3BaseUrl"].toString() ;
           
        }
        
    
        
        if(obj["r3SendgridApiUrl"] != undefined){
          
           this["r3SendgridApiUrl"] = obj["r3SendgridApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["r3ContactMail"] != undefined){
          
           this["r3ContactMail"] = obj["r3ContactMail"].toString() ;
           
        }
        
    
        
        if(obj["r3_group_resset_password"] != undefined){
          
          if(_.isString(obj["r3_group_resset_password"])){
            this["r3_group_resset_password"] = obj["r3_group_resset_password"];
          }else if(obj["r3_group_resset_password"]._id){
            this["r3_group_resset_password"] = obj["r3_group_resset_password"]._id ;
          }else if(obj["r3_group_resset_password"]._bsontype && (obj["r3_group_resset_password"]._bsontype === 'ObjectID')){
              this["r3_group_resset_password"] = obj["r3_group_resset_password"] ;
            }
          
        }
        
    
        
        if(obj["r3_group_welcome"] != undefined){
          
          if(_.isString(obj["r3_group_welcome"])){
            this["r3_group_welcome"] = obj["r3_group_welcome"];
          }else if(obj["r3_group_welcome"]._id){
            this["r3_group_welcome"] = obj["r3_group_welcome"]._id ;
          }else if(obj["r3_group_welcome"]._bsontype && (obj["r3_group_welcome"]._bsontype === 'ObjectID')){
              this["r3_group_welcome"] = obj["r3_group_welcome"] ;
            }
          
        }
        
    
        
        if(obj["r3_contact_to_user"] != undefined){
          
          if(_.isString(obj["r3_contact_to_user"])){
            this["r3_contact_to_user"] = obj["r3_contact_to_user"];
          }else if(obj["r3_contact_to_user"]._id){
            this["r3_contact_to_user"] = obj["r3_contact_to_user"]._id ;
          }else if(obj["r3_contact_to_user"]._bsontype && (obj["r3_contact_to_user"]._bsontype === 'ObjectID')){
              this["r3_contact_to_user"] = obj["r3_contact_to_user"] ;
            }
          
        }
        
    
        
        if(obj["r3_contact_to_r3"] != undefined){
          
          if(_.isString(obj["r3_contact_to_r3"])){
            this["r3_contact_to_r3"] = obj["r3_contact_to_r3"];
          }else if(obj["r3_contact_to_r3"]._id){
            this["r3_contact_to_r3"] = obj["r3_contact_to_r3"]._id ;
          }else if(obj["r3_contact_to_r3"]._bsontype && (obj["r3_contact_to_r3"]._bsontype === 'ObjectID')){
              this["r3_contact_to_r3"] = obj["r3_contact_to_r3"] ;
            }
          
        }
        
    
        
        if(obj["R3_prescriptor_invitation"] != undefined){
          
          if(_.isString(obj["R3_prescriptor_invitation"])){
            this["R3_prescriptor_invitation"] = obj["R3_prescriptor_invitation"];
          }else if(obj["R3_prescriptor_invitation"]._id){
            this["R3_prescriptor_invitation"] = obj["R3_prescriptor_invitation"]._id ;
          }else if(obj["R3_prescriptor_invitation"]._bsontype && (obj["R3_prescriptor_invitation"]._bsontype === 'ObjectID')){
              this["R3_prescriptor_invitation"] = obj["R3_prescriptor_invitation"] ;
            }
          
        }
        
    
        
        if(obj["R3_analisys_end_to_r3_and_partner"] != undefined){
          
          if(_.isString(obj["R3_analisys_end_to_r3_and_partner"])){
            this["R3_analisys_end_to_r3_and_partner"] = obj["R3_analisys_end_to_r3_and_partner"];
          }else if(obj["R3_analisys_end_to_r3_and_partner"]._id){
            this["R3_analisys_end_to_r3_and_partner"] = obj["R3_analisys_end_to_r3_and_partner"]._id ;
          }else if(obj["R3_analisys_end_to_r3_and_partner"]._bsontype && (obj["R3_analisys_end_to_r3_and_partner"]._bsontype === 'ObjectID')){
              this["R3_analisys_end_to_r3_and_partner"] = obj["R3_analisys_end_to_r3_and_partner"] ;
            }
          
        }
        
    
        
        if(obj["R3_analisys_end_to_user"] != undefined){
          
          if(_.isString(obj["R3_analisys_end_to_user"])){
            this["R3_analisys_end_to_user"] = obj["R3_analisys_end_to_user"];
          }else if(obj["R3_analisys_end_to_user"]._id){
            this["R3_analisys_end_to_user"] = obj["R3_analisys_end_to_user"]._id ;
          }else if(obj["R3_analisys_end_to_user"]._bsontype && (obj["R3_analisys_end_to_user"]._bsontype === 'ObjectID')){
              this["R3_analisys_end_to_user"] = obj["R3_analisys_end_to_user"] ;
            }
          
        }
        
    
        
        if(obj["R3_partner_admin_created"] != undefined){
          
          if(_.isString(obj["R3_partner_admin_created"])){
            this["R3_partner_admin_created"] = obj["R3_partner_admin_created"];
          }else if(obj["R3_partner_admin_created"]._id){
            this["R3_partner_admin_created"] = obj["R3_partner_admin_created"]._id ;
          }else if(obj["R3_partner_admin_created"]._bsontype && (obj["R3_partner_admin_created"]._bsontype === 'ObjectID')){
              this["R3_partner_admin_created"] = obj["R3_partner_admin_created"] ;
            }
          
        }
        
    
        
        if(obj["r3_group_welcome_admin_templateId"] != undefined){
          
          if(_.isString(obj["r3_group_welcome_admin_templateId"])){
            this["r3_group_welcome_admin_templateId"] = obj["r3_group_welcome_admin_templateId"];
          }else if(obj["r3_group_welcome_admin_templateId"]._id){
            this["r3_group_welcome_admin_templateId"] = obj["r3_group_welcome_admin_templateId"]._id ;
          }else if(obj["r3_group_welcome_admin_templateId"]._bsontype && (obj["r3_group_welcome_admin_templateId"]._bsontype === 'ObjectID')){
              this["r3_group_welcome_admin_templateId"] = obj["r3_group_welcome_admin_templateId"] ;
            }
          
        }
        
    
  }
  

    public _class:string  = "R3Mailer" ;

        
              /**
        adresse mail affiché lorsque l user recoie le mail
        */
               public "senderEMail"?:string ;
              
       
              /**
        nom affiche dans les en_tete du  mail 
        */
               public "senderName"?:string ;
              
       
              /**
        adresse du site , exemple r3.justeplug.info en dev ou r3.justeplug.fr en prod
        */
               public "r3BaseUrl"?:string ;
              
       
              /**
        url de l'api sengGrid pour R3
        */
               public "r3SendgridApiUrl"?:string ;
              
       
              /**
        la adresse mail qui recoi le mails de contact
        */
               public "r3ContactMail"?:string ;
              
       
              /**
        id du template pour le resset du password
        */
               public "r3_group_resset_password"?:string ;
              
       
              /**
        id du template du mail de bienvenue
        */
               public "r3_group_welcome"?:string ;
              
       
              /**
        mail de contact
        */
               public "r3_contact_to_user"?:string ;
              
       
              /**
        mail pour R3 avec le contenu de un mail de contact
        */
               public "r3_contact_to_r3"?:string ;
              
       
              /**
        template de mail pour envoyer les invitaton pour creer son compte dans la page du partner
        */
               public "R3_prescriptor_invitation"?:string ;
              
       
              /**
        le client a fini l'analisys et un envoie un mail a R3 et au partner
        */
               public "R3_analisys_end_to_r3_and_partner"?:string ;
              
       
              /**
        on signale au client qu eson pdf est pret
        */
               public "R3_analisys_end_to_user"?:string ;
              
       
              /**
        on informe a un partenaire que son admin est pret et qu'il peut sy conecter
        */
               public "R3_partner_admin_created"?:string ;
              
       
              /**
        mail de bienvenu d un nouvelle admin
        */
               public "r3_group_welcome_admin_templateId":string ;
              
       


       

   }
