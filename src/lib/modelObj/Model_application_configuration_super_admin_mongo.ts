import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  configuration de l'application superAdminMongo
*/
export class Model_application_configuration_super_admin_mongo extends   Model_application_configuration   implements Interface.Iapplication_configuration_super_admin_mongo {

/**
  configuration de l'application superAdminMongo
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["servicesUrl"] != undefined && obj["servicesUrl"] != null && _.isArray(obj["servicesUrl"])){
          
           this["servicesUrl"] = obj["servicesUrl"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
        
        if(obj["forumUrl"] != undefined){
          
           this["forumUrl"] = obj["forumUrl"].toString() ;
           
        }
        
    
        
        if(obj["fileServiceUrl"] != undefined){
          
           this["fileServiceUrl"] = obj["fileServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["URL_FileService"] != undefined){
          
           this["URL_FileService"] = obj["URL_FileService"].toString() ;
           
        }
        
    
        
        if(obj["nginx"] != undefined && obj["nginx"] != null && _.isArray(obj["nginx"])){
          

            this["nginx"] = obj["nginx"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["name_url"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["supervisor"] != undefined && obj["supervisor"] != null && _.isArray(obj["supervisor"])){
          

            this["supervisor"] = obj["supervisor"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["name_url"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["menu"] != undefined && obj["menu"] != null && _.isArray(obj["menu"])){
          

            this["menu"] = obj["menu"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["ui_menu_mongo_editor"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["entityUrl"] != undefined && obj["entityUrl"] != null && _.isArray(obj["entityUrl"])){
          

            this["entityUrl"] = obj["entityUrl"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["entity_source"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["entityName"] != undefined && obj["entityName"] != null && _.isArray(obj["entityName"])){
          

            this["entityName"] = obj["entityName"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["schema_name"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "application_configuration_super_admin_mongo" ;

        
              /**
        liste des url des services de base mongo
        */
               public "servicesUrl"?:string[];
              
       
              /**
        l'url du forum
        */
               public "forumUrl"?:string ;
              
       
              /**
        l'url du remote fso 
        */
               public "fileServiceUrl"?:string ;
              
       
              /**
        url du file service
        */
               public "URL_FileService"?:string ;
              
       
              /**
        nginx
        */
               public "nginx"?:Interface.Iname_url[];
              
       
              /**
        liste des service de supervision
        */
               public "supervisor"?:Interface.Iname_url[];
              
       
              /**
        menu de l'appli
        */
               public "menu"?:Interface.Iui_menu_mongo_editor[];
              
       
              /**
        entityUrl
        */
               public "entityUrl"?:Interface.Ientity_source[];
              
       
              /**
        permet de paramétrer le rendu des schemas
        */
               public "entityName"?:Interface.Ischema_name[];
              
       


       

   }
