import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_service } from "./Model_service"


/**
  service celio fid admin
*/
export class Model_service_celio_fid_admin extends   Model_service   implements Interface.Iservice_celio_fid_admin {

/**
  service celio fid admin
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["fiBddUrl"] != undefined){
          
           this["fiBddUrl"] = obj["fiBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["qcmBddUrl"] != undefined){
          
           this["qcmBddUrl"] = obj["qcmBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["accessTokenUrl"] != undefined){
          
           this["accessTokenUrl"] = obj["accessTokenUrl"].toString() ;
           
        }
        
    
        
        if(obj["validateTokenUrl"] != undefined){
          
           this["validateTokenUrl"] = obj["validateTokenUrl"].toString() ;
           
        }
        
    
        
        if(obj["client_id"] != undefined){
          
           this["client_id"] = obj["client_id"].toString() ;
           
        }
        
    
        
        if(obj["client_secret"] != undefined){
          
           this["client_secret"] = obj["client_secret"].toString() ;
           
        }
        
    
        
        if(obj["hybrisUrl"] != undefined){
          
           this["hybrisUrl"] = obj["hybrisUrl"].toString() ;
           
        }
        
    
        
        if(obj["earnEuroToPoint"] != undefined){
          
           this["earnEuroToPoint"] = new Number(obj["earnEuroToPoint"]).valueOf();
          
        }
        
    
        
        if(obj["burnEuroToPoint"] != undefined){
          
           this["burnEuroToPoint"] = new Number(obj["burnEuroToPoint"]).valueOf();
          
        }
        
    
        
        if(obj["serverUrl"] != undefined){
          
           this["serverUrl"] = obj["serverUrl"].toString() ;
           
        }
        
    
        
        if(obj["secretToken"] != undefined){
          
           this["secretToken"] = obj["secretToken"].toString() ;
           
        }
        
    
        
        if(obj["basSiteId"] != undefined){
          
           this["basSiteId"] = obj["basSiteId"].toString() ;
           
        }
        
    
        
        if(obj["certifPath"] != undefined){
          
           this["certifPath"] = obj["certifPath"].toString() ;
           
        }
        
    
        
        if(obj["caPath"] != undefined){
          
           this["caPath"] = obj["caPath"].toString() ;
           
        }
        
    
        
        if(obj["sftp"] != undefined){
          
            if(obj["sftp"]._class){
              this["sftp"] =  new Index[obj["sftp"]._class](obj["sftp"]) ;
            }else{
              this["sftp"] =  new Index["ftpConf"](obj["sftp"]) ;
            }
          
        }
        
    
        
        if(obj["sftpTicketSrcPath"] != undefined){
          
           this["sftpTicketSrcPath"] = obj["sftpTicketSrcPath"].toString() ;
           
        }
        
    
        
        if(obj["sftpTicketDestPath"] != undefined){
          
           this["sftpTicketDestPath"] = obj["sftpTicketDestPath"].toString() ;
           
        }
        
    
        
        if(obj["cbFidAdminUrl"] != undefined){
          
           this["cbFidAdminUrl"] = obj["cbFidAdminUrl"].toString() ;
           
        }
        
    
        
        if(obj["ticket_costCenterExcluded"] != undefined && obj["ticket_costCenterExcluded"] != null && _.isArray(obj["ticket_costCenterExcluded"])){
          
           this["ticket_costCenterExcluded"] = obj["ticket_costCenterExcluded"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["scanOrderEarnPageSize"] != undefined){
          
           this["scanOrderEarnPageSize"] = new Number(obj["scanOrderEarnPageSize"]).valueOf();
          
        }
        
    
        
        if(obj["scanOrderEaBurnPageSize"] != undefined){
          
           this["scanOrderEaBurnPageSize"] = new Number(obj["scanOrderEaBurnPageSize"]).valueOf();
          
        }
        
    
  }
  

    public _class:string  = "service_celio_fid_admin" ;

        
              /**
        url du service de bdd de la fid
        */
               public "fiBddUrl":string ;
              
       
              /**
        url de la bdd des qcm
        */
               public "qcmBddUrl":string ;
              
       
              /**
        url du point d'acces des token
        */
               public "accessTokenUrl":string ;
              
       
              /**
        validateTokenUrl
        */
               public "validateTokenUrl":string ;
              
       
              /**
        client_id celio
        */
               public "client_id":string ;
              
       
              /**
        client_secret celio
        */
               public "client_secret"?:string ;
              
       
              /**
        url de l'api hybris
        */
               public "hybrisUrl":string ;
              
       
              /**
        conversion des euros en point lors d'un earn
        */
               public "earnEuroToPoint":number ;
              
       
              /**
        conversion des euro en point lors d'un burn
        */
               public "burnEuroToPoint":number ;
              
       
              /**
        url du server apm
        */
               public "serverUrl"?:string ;
              
       
              /**
        secretToken apm
        */
               public "secretToken"?:string ;
              
       
              /**
        baseSiteId celio
        */
               public "basSiteId"?:string ;
              
       
              /**
        certifPath
        */
               public "certifPath"?:string ;
              
       
              /**
        chemin vers le certificat de la bdd, si il est renseigné, il active la connexion en ssl
        */
               public "caPath"?:string ;
              
       
              /**
        configuration de la connection au sftp
        */
               public "sftp":Interface.IftpConf;
              
       
              /**
        chemin d’accès au répertoire ftp source des tickets ex: /tickets/out/SERVICES/FID/RECEIPTS/
        */
               public "sftpTicketSrcPath"?:string ;
              
       
              /**
        chemin d'accès au répertoire de destination des ticket traité ex: /tickets/out/SERVICES/FID/RECEIPTS/BACKUP/
        */
               public "sftpTicketDestPath"?:string ;
              
       
              /**
        url du service fid admin a appeller depuis un noeud du service fid admin (il se peut que l'url interne vers le loadbalanceur ne soit pas la même que l'externe)
        */
               public "cbFidAdminUrl":string ;
              
       
              /**
        liste des centres de coût exclue de la gestion de la fid
        */
               public "ticket_costCenterExcluded"?:string[];
              
       
              /**
        taille des pages scan earn
        */
               public "scanOrderEarnPageSize"?:number =200;
              
       
              /**
        taille des pages scan eaBurn
        */
               public "scanOrderEaBurnPageSize"?:number =200;
              
       


       

   }
