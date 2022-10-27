import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;


import {Model_service } from "./Model_service"


/**
  service métier de DCBM
*/
export class Model_dcbm_service extends   Model_service   implements Interface.Idcbm_service {

/**
  service métier de DCBM
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["bddUrl"] != undefined){
          
           this["bddUrl"] = obj["bddUrl"].toString() ;
           
        }
        
    
        
        if(obj["ssoBddUrl"] != undefined){
          
           this["ssoBddUrl"] = obj["ssoBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["infraBddUrl"] != undefined){
          
           this["infraBddUrl"] = obj["infraBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["ssoApiUrl"] != undefined){
          
           this["ssoApiUrl"] = obj["ssoApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["licenceApiUrl"] != undefined){
          
           this["licenceApiUrl"] = obj["licenceApiUrl"].toString() ;
           
        }
        
    
        
        if(obj["client_id"] != undefined){
          
           this["client_id"] = obj["client_id"].toString() ;
           
        }
        
    
        
        if(obj["client_secret"] != undefined){
          
           this["client_secret"] = obj["client_secret"].toString() ;
           
        }
        
    
        
        if(obj["SendGridConf"] != undefined){
          
            if(obj["SendGridConf"]._class){
              this["SendGridConf"] =  new Index[obj["SendGridConf"]._class](obj["SendGridConf"]) ;
            }else{
              this["SendGridConf"] =  new Index["DCBMMailer"](obj["SendGridConf"]) ;
            }
          
        }
        
    
        
        if(obj["pdfRipUrl"] != undefined){
          
           this["pdfRipUrl"] = obj["pdfRipUrl"].toString() ;
           
        }
        
    
        
        if(obj["pdfAppUrl"] != undefined){
          
           this["pdfAppUrl"] = obj["pdfAppUrl"].toString() ;
           
        }
        
    
        
        if(obj["fsoUrl"] != undefined){
          
           this["fsoUrl"] = obj["fsoUrl"].toString() ;
           
        }
        
    
        
        if(obj["authorizedDomaine"] != undefined && obj["authorizedDomaine"] != null && _.isArray(obj["authorizedDomaine"])){
          
           this["authorizedDomaine"] = obj["authorizedDomaine"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["adminSiteUrl"] != undefined){
          
           this["adminSiteUrl"] = obj["adminSiteUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "dcbm_service" ;

        
              /**
        url de la bdd
        */
               public "bddUrl":string ;
              
       
              /**
        url su service de bdd
        */
               public "ssoBddUrl":string ;
              
       
              /**
        url de connexion a la bd  infra
        */
               public "infraBddUrl":string ;
              
       
              /**
        url de l'api du sso
        */
               public "ssoApiUrl":string ;
              
       
              /**
        licenceApiUrl
        */
               public "licenceApiUrl":string ;
              
       
              /**
        client_id sso
        */
               public "client_id":string ;
              
       
              /**
        client_secret pou rle sso
        */
               public "client_secret":string ;
              
       
              /**
        configuration pour l'envoie de mails
        */
               public "SendGridConf":Interface.IDCBMMailer;
              
       
              /**
        url du rip pdf
        */
               public "pdfRipUrl":string ;
              
       
              /**
        url de l application de rendu pdf
        */
               public "pdfAppUrl":string ;
              
       
              /**
        url du fso DCBM
        */
               public "fsoUrl":string ;
              
       
              /**
        domaine autorisé pour la redirection lors des récupération de mot de passe (ex: jusplug.info)
        */
               public "authorizedDomaine":string[];
              
       
              /**
        url du site admin
        */
               public "adminSiteUrl":string ;
              
       


       

   }
