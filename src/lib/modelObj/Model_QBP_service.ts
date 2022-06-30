import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_service } from "./Model_service"


/**
  service métier de QBP
*/
export class Model_QBP_service extends   Model_service   implements Interface.IQBP_service {

/**
  service métier de QBP
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["QbpBddUrl"] != undefined){
          
           this["QbpBddUrl"] = obj["QbpBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["ssoApiUrl"] != undefined){
          
           this["ssoApiUrl"] = obj["ssoApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["licenceApiUrl"] != undefined){
          
           this["licenceApiUrl"] = obj["licenceApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["sendgridApiUrl"] != undefined){
          
           this["sendgridApiUrl"] = obj["sendgridApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["appId"] != undefined){
          
          if(_.isString(obj["appId"])){
            this["appId"] = obj["appId"];
          }else if(obj["appId"]._id){
            this["appId"] = obj["appId"]._id ;
          }else if(obj["appId"]._bsontype && (obj["appId"]._bsontype === 'ObjectID')){
              this["appId"] = obj["appId"] ;
            }
          
        }
        
    
        
        if(obj["end_client"] != undefined){
          
          if(_.isString(obj["end_client"])){
            this["end_client"] = obj["end_client"];
          }else if(obj["end_client"]._id){
            this["end_client"] = obj["end_client"]._id ;
          }else if(obj["end_client"]._bsontype && (obj["end_client"]._bsontype === 'ObjectID')){
              this["end_client"] = obj["end_client"] ;
            }
          
        }
        
    
        
        if(obj["licenceStoreId"] != undefined){
          
           this["licenceStoreId"] = obj["licenceStoreId"].toString() ;
           
        }
        
    
        
        if(obj["ssoBddUrl"] != undefined){
          
           this["ssoBddUrl"] = obj["ssoBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["client_id"] != undefined){
          
           this["client_id"] = obj["client_id"].toString() ;
           
        }
        
    
        
        if(obj["client_secret"] != undefined){
          
           this["client_secret"] = obj["client_secret"].toString() ;
           
        }
        
    
        
        if(obj["sellerAppId"] != undefined){
          
          if(_.isString(obj["sellerAppId"])){
            this["sellerAppId"] = obj["sellerAppId"];
          }else if(obj["sellerAppId"]._id){
            this["sellerAppId"] = obj["sellerAppId"]._id ;
          }else if(obj["sellerAppId"]._bsontype && (obj["sellerAppId"]._bsontype === 'ObjectID')){
              this["sellerAppId"] = obj["sellerAppId"] ;
            }
          
        }
        
    
        
        if(obj["sellerLicenceStoreId"] != undefined){
          
           this["sellerLicenceStoreId"] = obj["sellerLicenceStoreId"].toString() ;
           
        }
        
    
        
        if(obj["adminAppId"] != undefined){
          
          if(_.isString(obj["adminAppId"])){
            this["adminAppId"] = obj["adminAppId"];
          }else if(obj["adminAppId"]._id){
            this["adminAppId"] = obj["adminAppId"]._id ;
          }else if(obj["adminAppId"]._bsontype && (obj["adminAppId"]._bsontype === 'ObjectID')){
              this["adminAppId"] = obj["adminAppId"] ;
            }
          
        }
        
    
        
        if(obj["adminLicenceStoreId"] != undefined){
          
           this["adminLicenceStoreId"] = obj["adminLicenceStoreId"].toString() ;
           
        }
        
    
        
        if(obj["infraBddUrl"] != undefined){
          
           this["infraBddUrl"] = obj["infraBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["sellerSso_Client_template"] != undefined){
          
           this["sellerSso_Client_template"] = obj["sellerSso_Client_template"].toString() ;
           
        }
        
    
        
        if(obj["sellerEndClientTemplate"] != undefined){
          
          if(_.isString(obj["sellerEndClientTemplate"])){
            this["sellerEndClientTemplate"] = obj["sellerEndClientTemplate"];
          }else if(obj["sellerEndClientTemplate"]._id){
            this["sellerEndClientTemplate"] = obj["sellerEndClientTemplate"]._id ;
          }else if(obj["sellerEndClientTemplate"]._bsontype && (obj["sellerEndClientTemplate"]._bsontype === 'ObjectID')){
              this["sellerEndClientTemplate"] = obj["sellerEndClientTemplate"] ;
            }
          
        }
        
    
        
        if(obj["sellerAppInstanceTemplate"] != undefined){
          
          if(_.isString(obj["sellerAppInstanceTemplate"])){
            this["sellerAppInstanceTemplate"] = obj["sellerAppInstanceTemplate"];
          }else if(obj["sellerAppInstanceTemplate"]._id){
            this["sellerAppInstanceTemplate"] = obj["sellerAppInstanceTemplate"]._id ;
          }else if(obj["sellerAppInstanceTemplate"]._bsontype && (obj["sellerAppInstanceTemplate"]._bsontype === 'ObjectID')){
              this["sellerAppInstanceTemplate"] = obj["sellerAppInstanceTemplate"] ;
            }
          
        }
        
    
        
        if(obj["mangoConf"] != undefined){
          
            if(obj["mangoConf"]._class){
              this["mangoConf"] =  new Index[obj["mangoConf"]._class](obj["mangoConf"]) ;
            }else{
              this["mangoConf"] =  new Index["MangoConf"](obj["mangoConf"]) ;
            }
          
        }
        
    
        
        if(obj["assuranceApiKey"] != undefined){
          
           this["assuranceApiKey"] = obj["assuranceApiKey"].toString() ;
           
        }
        
    
        
        if(obj["bigBen"] != undefined){
          
            if(obj["bigBen"]._class){
              this["bigBen"] =  new Index[obj["bigBen"]._class](obj["bigBen"]) ;
            }else{
              this["bigBen"] =  new Index["BigBenConf"](obj["bigBen"]) ;
            }
          
        }
        
    
        
        if(obj["dpdServiceUrl"] != undefined){
          
           this["dpdServiceUrl"] = obj["dpdServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["sftpGS"] != undefined){
          
            if(obj["sftpGS"]._class){
              this["sftpGS"] =  new Index[obj["sftpGS"]._class](obj["sftpGS"]) ;
            }else{
              this["sftpGS"] =  new Index["ftpConf"](obj["sftpGS"]) ;
            }
          
        }
        
    
        
        if(obj["QbpBaseUrl"] != undefined){
          
           this["QbpBaseUrl"] = obj["QbpBaseUrl"].toString() ;
           
        }
        
    
        
        if(obj["qbpServiceUrl"] != undefined){
          
           this["qbpServiceUrl"] = obj["qbpServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["sellerDomainPatern"] != undefined){
          
           this["sellerDomainPatern"] = obj["sellerDomainPatern"].toString() ;
           
        }
        
    
        
        if(obj["fsoServiceUrl"] != undefined){
          
           this["fsoServiceUrl"] = obj["fsoServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["isInsuranceEnable"] != undefined){
          
           this["isInsuranceEnable"] = new Boolean(obj["isInsuranceEnable"]).valueOf() ;
          
        }
        
    
        
        if(obj["sendGridConf"] != undefined){
          
            if(obj["sendGridConf"]._class){
              this["sendGridConf"] =  new Index[obj["sendGridConf"]._class](obj["sendGridConf"]) ;
            }else{
              this["sendGridConf"] =  new Index["QbpMailer"](obj["sendGridConf"]) ;
            }
          
        }
        
    
        
        if(obj["featuresConf"] != undefined){
          
            if(obj["featuresConf"]._class){
              this["featuresConf"] =  new Index[obj["featuresConf"]._class](obj["featuresConf"]) ;
            }else{
              this["featuresConf"] =  new Index["QbpFeaturesConfiguration"](obj["featuresConf"]) ;
            }
          
        }
        
    
        
        if(obj["automationConf"] != undefined){
          
            if(obj["automationConf"]._class){
              this["automationConf"] =  new Index[obj["automationConf"]._class](obj["automationConf"]) ;
            }else{
              this["automationConf"] =  new Index["ConfAutomation"](obj["automationConf"]) ;
            }
          
        }
        
    
  }
  

    public _class:string  = "QBP_service" ;

        
              /**
        url de la bdd QBP
        */
               public "QbpBddUrl"?:string ;
              
       
              /**
        url de l'api du sso
        */
               public "ssoApiUrl"?:string ;
              
       
              /**
        licenceApiUrl
        */
               public "licenceApiUrl"?:string ;
              
       
              /**
        sendgridApiUrl
        */
               public "sendgridApiUrl"?:string ;
              
       
              /**
        appId
        */
               public "appId"?:string ;
              
       
              /**
        end_client
        */
               public "end_client"?:string ;
              
       
              /**
        licenceStoreId
        */
               public "licenceStoreId"?:string ;
              
       
              /**
        url su service de bdd
        */
               public "ssoBddUrl"?:string ;
              
       
              /**
        client_id sso
        */
               public "client_id"?:string ;
              
       
              /**
        client_secret du sso
        */
               public "client_secret"?:string ;
              
       
              /**
        application instance id of seller
        */
               public "sellerAppId":string ;
              
       
              /**
        licenceStore for seller user licence
        */
               public "sellerLicenceStoreId"?:string ;
              
       
              /**
        application instance id of the admin
        */
               public "adminAppId"?:string ;
              
       
              /**
        licenceStoreId for admin
        */
               public "adminLicenceStoreId"?:string ;
              
       
              /**
        url de la bdd d 'infra
        */
               public "infraBddUrl"?:string ;
              
       
              /**
        template du sso client
        */
               public "sellerSso_Client_template"?:string ;
              
       
              /**
        template du endClient seller
        */
               public "sellerEndClientTemplate"?:string ;
              
       
              /**
        template de l application instance du vendeur
        */
               public "sellerAppInstanceTemplate"?:string ;
              
       
              /**
        données de configuration de mangopay
        */
               public "mangoConf"?:Interface.IMangoConf;
              
       
              /**
        api key pour l'api d assurance
        */
               public "assuranceApiKey"?:string ;
              
       
              /**
        Configuration BigBen
        */
               public "bigBen"?:Interface.IBigBenConf;
              
       
              /**
        Url du service DPD
        */
               public "dpdServiceUrl"?:string ;
              
       
              /**
        connecteur sftp gras savoie oi
        */
               public "sftpGS"?:Interface.IftpConf;
              
       
              /**
        Base url pour qbp
        */
               public "QbpBaseUrl"?:string ;
              
       
              /**
        Configuration url quelbonplan
        */
               public "qbpServiceUrl"?:string ;
              
       
              /**
        suffix de création du domaine de l application du partenaire
        */
               public "sellerDomainPatern"?:string ;
              
       
              /**
        Url du service FSO
        */
               public "fsoServiceUrl":string ;
              
       
              /**
        Affichage des assurances
        */
               public "isInsuranceEnable"?:boolean ;
              
       
              /**
        configuration pour l'envoie de mails
        */
               public "sendGridConf"?:Interface.IQbpMailer;
              
       
              /**
        liste de functionalites active ou pas 
        */
               public "featuresConf"?:Interface.IQbpFeaturesConfiguration;
              
       
              /**
        Configuration pour les taches auto
        */
               public "automationConf"?:Interface.IConfAutomation;
              
       


       

   }
