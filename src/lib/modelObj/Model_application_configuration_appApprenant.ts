import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  c'est la configuration d'une application Apprenant
*/
export class Model_application_configuration_appApprenant extends   Model_application_configuration   implements Interface.Iapplication_configuration_appApprenant {

/**
  c'est la configuration d'une application Apprenant
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["forumUrl"] != undefined){
          
           this["forumUrl"] = obj["forumUrl"].toString() ;
           
        }
        
    
        
        if(obj["fileServiceUrl"] != undefined){
          
           this["fileServiceUrl"] = obj["fileServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["URL_FileService"] != undefined){
          
           this["URL_FileService"] = obj["URL_FileService"].toString() ;
           
        }
        
    
        
        if(obj["configurationUrlDb"] != undefined){
          
           this["configurationUrlDb"] = obj["configurationUrlDb"].toString() ;
           
        }
        
    
        
        if(obj["urlBase"] != undefined){
          
           this["urlBase"] = obj["urlBase"].toString() ;
           
        }
        
    
        
        if(obj["likeServiceUrl"] != undefined){
          
           this["likeServiceUrl"] = obj["likeServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["aclTemplate"] != undefined){
          
            if(obj._class){
              this["aclTemplate"] =  new Index[obj._class](obj["aclTemplate"]) ;
            }else{
              this["aclTemplate"] =  new Index["_acl"](obj["aclTemplate"]) ;
            }
          
        }
        
    
        
        if(obj["trainingCourseServiceUrl"] != undefined){
          
           this["trainingCourseServiceUrl"] = obj["trainingCourseServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["syncSoketioUrl"] != undefined){
          
           this["syncSoketioUrl"] = obj["syncSoketioUrl"].toString() ;
           
        }
        
    
        
        if(obj["syncSoketioPath"] != undefined){
          
           this["syncSoketioPath"] = obj["syncSoketioPath"].toString() ;
           
        }
        
    
        
        if(obj["tutorVideoCallUrl"] != undefined){
          
           this["tutorVideoCallUrl"] = obj["tutorVideoCallUrl"].toString() ;
           
        }
        
    
        
        if(obj["tutorServiceUrl"] != undefined){
          
           this["tutorServiceUrl"] = obj["tutorServiceUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application_configuration_appApprenant" ;

        
              /**
        url de service de bdd du forum
        */
               public "forumUrl"?:string ;
              
       
              /**
        url du file service pour le forum
        */
               public "fileServiceUrl"?:string ;
              
       
              /**
        url du file service du drive
        */
               public "URL_FileService"?:string ;
              
       
              /**
        c'est l'url de la base de donnée de l'application
        */
               public "configurationUrlDb":string ;
              
       
              /**
        l'url racine des services
        */
               public "urlBase":string ;
              
       
              /**
        l'url du service de like et note
        */
               public "likeServiceUrl":string ;
              
       
              /**
        template générique a appliquer aux enregistrements
        */
               public "aclTemplate"?:Interface.I_acl;
              
       
              /**
        url du service trainning course
        */
               public "trainingCourseServiceUrl":string ;
              
       
              /**
        url du soketio avec le namespace
        */
               public "syncSoketioUrl":string ;
              
       
              /**
        le path d'acces pour le soket.io
        */
               public "syncSoketioPath":string ;
              
       
              /**
        url du service de video call
        */
               public "tutorVideoCallUrl":string ;
              
       
              /**
        url du service de tutora
        */
               public "tutorServiceUrl":string ;
              
       


       

   }
