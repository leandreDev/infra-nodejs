import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service passerelle d'un package scorm vers l'interne
*/
export class Model_Service_scorm_gateway extends   Model_service   implements Interface.IService_scorm_gateway {

/**
  service passerelle d'un package scorm vers l'interne
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["privateKey"] != undefined){
          
           this["privateKey"] = obj["privateKey"].toString() ;
           
        }
        
    
        
        if(obj["endClientId"] != undefined){
          
          if(_.isString(obj["endClientId"])){
            this["endClientId"] = obj["endClientId"];
          }else if(obj["endClientId"]._id){
            this["endClientId"] = obj["endClientId"]._id ;
          }
          
        }
        
    
        
        if(obj["signinUrl"] != undefined){
          
           this["signinUrl"] = obj["signinUrl"].toString() ;
           
        }
        
    
        
        if(obj["licenceUrl"] != undefined){
          
           this["licenceUrl"] = obj["licenceUrl"].toString() ;
           
        }
        
    
        
        if(obj["templateUser"] != undefined){
          
           this["templateUser"] = obj["templateUser"] ;
          
        }
        
    
        
        if(obj["templateProfileUser"] != undefined){
          
           this["templateProfileUser"] = obj["templateProfileUser"] ;
          
        }
        
    
        
        if(obj["apiUrl"] != undefined){
          
           this["apiUrl"] = obj["apiUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "Service_scorm_gateway" ;

        
              /**
        clef privé a mettre dans le package scorm
        */
               public "privateKey":string ;
              
       
              /**
        id du end client
        */
               public "endClientId":string ;
              
       
              /**
        url du service de signin
        */
               public "signinUrl":string ;
              
       
              /**
        url du service de licence
        */
               public "licenceUrl":string ;
              
       
              /**
        templateUser
        */
               public "templateUser":any ;
              
       
              /**
        templateProfileUser
        */
               public "templateProfileUser":any ;
              
       
              /**
        apiUrl
        */
               public "apiUrl"?:string ;
              
       


       

   }
