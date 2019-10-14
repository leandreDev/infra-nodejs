import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service minds up metier
*/
export class Model_service_mindsUp extends   Model_service   implements Interface.Iservice_mindsUp {

/**
  service minds up metier
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["urlApi"] != undefined){
          
           this["urlApi"] = obj["urlApi"].toString() ;
           
        }
        
    
        
        if(obj["urlSsoApi"] != undefined){
          
           this["urlSsoApi"] = obj["urlSsoApi"].toString() ;
           
        }
        
    
        
        if(obj["urlLicenceService"] != undefined){
          
           this["urlLicenceService"] = obj["urlLicenceService"].toString() ;
           
        }
        
    
        
        if(obj["urlInfraBdd"] != undefined){
          
           this["urlInfraBdd"] = obj["urlInfraBdd"].toString() ;
           
        }
        
    
        
        if(obj["applicationClienteConfig"] != undefined){
          
          if(_.isString(obj["applicationClienteConfig"])){
            this["applicationClienteConfig"] = obj["applicationClienteConfig"];
          }else if(obj["applicationClienteConfig"]._id){
            this["applicationClienteConfig"] = obj["applicationClienteConfig"]._id ;
          }
          
        }
        
    
        
        if(obj["applicationAdminConfig"] != undefined){
          
          if(_.isString(obj["applicationAdminConfig"])){
            this["applicationAdminConfig"] = obj["applicationAdminConfig"];
          }else if(obj["applicationAdminConfig"]._id){
            this["applicationAdminConfig"] = obj["applicationAdminConfig"]._id ;
          }
          
        }
        
    
        
        if(obj["ftpConf"] != undefined){
          
            if(obj._class){
              this["ftpConf"] =  new Index[obj._class](obj["ftpConf"]) ;
            }else{
              this["ftpConf"] =  new Index["ftpsConfig"](obj["ftpConf"]) ;
            }
          
        }
        
    
        
        if(obj["appId"] != undefined){
          
          if(_.isString(obj["appId"])){
            this["appId"] = obj["appId"];
          }else if(obj["appId"]._id){
            this["appId"] = obj["appId"]._id ;
          }
          
        }
        
    
        
        if(obj["adminAppId"] != undefined){
          
          if(_.isString(obj["adminAppId"])){
            this["adminAppId"] = obj["adminAppId"];
          }else if(obj["adminAppId"]._id){
            this["adminAppId"] = obj["adminAppId"]._id ;
          }
          
        }
        
    
        
        if(obj["end_client"] != undefined){
          
          if(_.isString(obj["end_client"])){
            this["end_client"] = obj["end_client"];
          }else if(obj["end_client"]._id){
            this["end_client"] = obj["end_client"]._id ;
          }
          
        }
        
    
        
        if(obj["licenceStoreId"] != undefined){
          
           this["licenceStoreId"] = obj["licenceStoreId"].toString() ;
           
        }
        
    
        
        if(obj["adminLicenceStoreId"] != undefined){
          
           this["adminLicenceStoreId"] = obj["adminLicenceStoreId"].toString() ;
           
        }
        
    
        
        if(obj["urlMailerService"] != undefined){
          
           this["urlMailerService"] = obj["urlMailerService"].toString() ;
           
        }
        
    
        
        if(obj["mailInvitation360"] != undefined){
          
          if(_.isString(obj["mailInvitation360"])){
            this["mailInvitation360"] = obj["mailInvitation360"];
          }else if(obj["mailInvitation360"]._id){
            this["mailInvitation360"] = obj["mailInvitation360"]._id ;
          }
          
        }
        
    
        
        if(obj["mailIRelance360"] != undefined){
          
          if(_.isString(obj["mailIRelance360"])){
            this["mailIRelance360"] = obj["mailIRelance360"];
          }else if(obj["mailIRelance360"]._id){
            this["mailIRelance360"] = obj["mailIRelance360"]._id ;
          }
          
        }
        
    
        
        if(obj["emailSenderName"] != undefined){
          
           this["emailSenderName"] = obj["emailSenderName"].toString() ;
           
        }
        
    
        
        if(obj["emailSenderEmail"] != undefined){
          
           this["emailSenderEmail"] = obj["emailSenderEmail"].toString() ;
           
        }
        
    
        
        if(obj["urlFsoService"] != undefined){
          
           this["urlFsoService"] = obj["urlFsoService"].toString() ;
           
        }
        
    
        
        if(obj["mailInvitationCampaign360"] != undefined){
          
          if(_.isString(obj["mailInvitationCampaign360"])){
            this["mailInvitationCampaign360"] = obj["mailInvitationCampaign360"];
          }else if(obj["mailInvitationCampaign360"]._id){
            this["mailInvitationCampaign360"] = obj["mailInvitationCampaign360"]._id ;
          }
          
        }
        
    
  }
  

    public _class:string  = "service_mindsUp" ;

        
              /**
        url du service de bdd de mindsUp
        */
               public "urlApi":string ;
              
       
              /**
        url de l'api du sso
        */
               public "urlSsoApi":string ;
              
       
              /**
        urlLicenceService
        */
               public "urlLicenceService":string ;
              
       
              /**
        url du service d'infra
        */
               public "urlInfraBdd":string ;
              
       
              /**
        id de la configuration de l'app cliente
        */
               public "applicationClienteConfig":string ;
              
       
              /**
        id de la configuration de l'app admin
        */
               public "applicationAdminConfig":string ;
              
       
              /**
        configuration du ftp
        */
               public "ftpConf"?:Interface.IftpsConfig;
              
       
              /**
        id de l application instance client
        */
               public "appId":string ;
              
       
              /**
        id de l application instance de l'admin
        */
               public "adminAppId":string ;
              
       
              /**
        end_client
        */
               public "end_client"?:string ;
              
       
              /**
        licenceStoreId de l app cliente
        */
               public "licenceStoreId":string ;
              
       
              /**
        id du licence store du l app admin
        */
               public "adminLicenceStoreId":string ;
              
       
              /**
        urlMailerService
        */
               public "urlMailerService":string ;
              
       
              /**
        reference du mail d'invitation a un 360
        */
               public "mailInvitation360":string ;
              
       
              /**
        mailIRelance360
        */
               public "mailIRelance360":string ;
              
       
              /**
        name of the mailer
        */
               public "emailSenderName":string ;
              
       
              /**
        Email du mailer
        */
               public "emailSenderEmail":string ;
              
       
              /**
        url du service fso
        */
               public "urlFsoService":string ;
              
       
              /**
        mail d'invitation a participer a une campagne 360
        */
               public "mailInvitationCampaign360"?:string ;
              
       


       

   }
