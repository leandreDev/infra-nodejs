import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  permet d'envoyer des mail via l'api send grid v3
*/
export class Model_service_sendGrid extends   Model_service   implements Interface.Iservice_sendGrid {

/**
  permet d'envoyer des mail via l'api send grid v3
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["sendGridApiKey"] != undefined){
          
           this["sendGridApiKey"] = obj["sendGridApiKey"].toString() ;
           
        }
        
    
        
        if(obj["messageUrl"] != undefined){
          
           this["messageUrl"] = obj["messageUrl"].toString() ;
           
        }
        
    
        
        if(obj["userUrl"] != undefined){
          
           this["userUrl"] = obj["userUrl"].toString() ;
           
        }
        
    
        
        if(obj["templates"] != undefined && obj["templates"] != null && _.isArray(obj["templates"])){
          
          this["templates"] = obj["templates"].map((value)=>{
            if(_.isString(value)){
              return value ;
            }else if(value._id){
              return value._id ;
            }
          })
          
          
        }
        
    
  }
  

    public _class:string  = "service_sendGrid" ;

        
              /**
        la clef d'api de sendgrid
        */
               public "sendGridApiKey":string ;
              
       
              /**
        url de la collection de message pour les sauvegarder
        */
               public "messageUrl":string ;
              
       
              /**
        l'url de la collection de user
        */
               public "userUrl":string ;
              
       
              /**
        liste des templates 
        */
               public "templates"?:string[] ;
              
       


       

   }
