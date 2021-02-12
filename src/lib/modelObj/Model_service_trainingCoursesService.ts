import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_service } from "./Model_service"


/**
  service de gestion des parcourts de formation
*/
export class Model_service_trainingCoursesService extends   Model_service   implements Interface.Iservice_trainingCoursesService {

/**
  service de gestion des parcourts de formation
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["apiSession"] != undefined){
          
           this["apiSession"] = obj["apiSession"].toString() ;
           
        }
        
    
        
        if(obj["licenceServiceUrl"] != undefined){
          
           this["licenceServiceUrl"] = obj["licenceServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["taskServiceUrl"] != undefined){
          
           this["taskServiceUrl"] = obj["taskServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["mailServiceUrl"] != undefined){
          
           this["mailServiceUrl"] = obj["mailServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["clientInfraUrl"] != undefined){
          
           this["clientInfraUrl"] = obj["clientInfraUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_trainingCoursesService" ;

        
              /**
        url de la bdd des sessions
        */
               public "apiSession":string ;
              
       
              /**
        url du licence service
        */
               public "licenceServiceUrl":string ;
              
       
              /**
        url du service de gestion des tache planifier
        */
               public "taskServiceUrl":string ;
              
       
              /**
        url du service d'envoie de mail
        */
               public "mailServiceUrl":string ;
              
       
              /**
        l'url de la bd d'infra
        */
               public "clientInfraUrl":string ;
              
       


       

   }
