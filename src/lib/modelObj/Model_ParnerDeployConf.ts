import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@leandredev/utils" ;



/**
  configuration du déploiement de partenaire
*/
export class Model_ParnerDeployConf extends  Base  implements Interface.IParnerDeployConf {

/**
  configuration du déploiement de partenaire
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["adminUrl"] != undefined){
          
           this["adminUrl"] = obj["adminUrl"].toString() ;
           
        }
        
    
        
        if(obj["landingPageUrl"] != undefined){
          
           this["landingPageUrl"] = obj["landingPageUrl"].toString() ;
           
        }
        
    
        
        if(obj["appClientTemplateId"] != undefined){
          
          if(_.isString(obj["appClientTemplateId"])){
            this["appClientTemplateId"] = obj["appClientTemplateId"];
          }else if(obj["appClientTemplateId"]._id){
            this["appClientTemplateId"] = obj["appClientTemplateId"]._id ;
          }else if((obj["appClientTemplateId"]._bsontype && (obj["appClientTemplateId"]._bsontype === 'ObjectID'){
              this["appClientTemplateId"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["appAdminTemplateId"] != undefined){
          
          if(_.isString(obj["appAdminTemplateId"])){
            this["appAdminTemplateId"] = obj["appAdminTemplateId"];
          }else if(obj["appAdminTemplateId"]._id){
            this["appAdminTemplateId"] = obj["appAdminTemplateId"]._id ;
          }else if((obj["appAdminTemplateId"]._bsontype && (obj["appAdminTemplateId"]._bsontype === 'ObjectID'){
              this["appAdminTemplateId"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["endClientTemplateId"] != undefined){
          
          if(_.isString(obj["endClientTemplateId"])){
            this["endClientTemplateId"] = obj["endClientTemplateId"];
          }else if(obj["endClientTemplateId"]._id){
            this["endClientTemplateId"] = obj["endClientTemplateId"]._id ;
          }else if((obj["endClientTemplateId"]._bsontype && (obj["endClientTemplateId"]._bsontype === 'ObjectID'){
              this["endClientTemplateId"] = `${value}` ;
            }
          
        }
        
    
        
        if(obj["oidcTemplateId"] != undefined){
          
          if(_.isString(obj["oidcTemplateId"])){
            this["oidcTemplateId"] = obj["oidcTemplateId"];
          }else if(obj["oidcTemplateId"]._id){
            this["oidcTemplateId"] = obj["oidcTemplateId"]._id ;
          }else if((obj["oidcTemplateId"]._bsontype && (obj["oidcTemplateId"]._bsontype === 'ObjectID'){
              this["oidcTemplateId"] = `${value}` ;
            }
          
        }
        
    
  }
  

    public _class:string  = "ParnerDeployConf" ;

        
              /**
        paterne de creation d'url d admin @name@ remplace le nom du partenaire
        */
               public "adminUrl"?:string ;
              
       
              /**
        paterne de création de l 'url du site client d un partenaire @name@ remplace le nom du partenaire
        */
               public "landingPageUrl"?:string ;
              
       
              /**
        id du template de l appinstance du client
        */
               public "appClientTemplateId"?:string ;
              
       
              /**
        id du template de l app instance de l admin d un client
        */
               public "appAdminTemplateId"?:string ;
              
       
              /**
        id du template de endClient pour un partnaire
        */
               public "endClientTemplateId"?:string ;
              
       
              /**
        id du template de l'oidc_client pour un partnaire
        */
               public "oidcTemplateId"?:string ;
              
       


       

   }
