import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "@hfdev/utils" ;


import {Model_service } from "./Model_service"


/**
  Service de Taches planifiées
*/
export class Model_service_planned_tasks extends   Model_service   implements Interface.Iservice_planned_tasks {

/**
  Service de Taches planifiées
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["bdd_url"] != undefined){
          
           this["bdd_url"] = obj["bdd_url"].toString() ;
           
        }
        
    
        
        if(obj["handlerInterval"] != undefined){
          
           this["handlerInterval"] = new Number(obj["handlerInterval"]).valueOf();
          
        }
        
    
        
        if(obj["startHandlingOnServiceStart"] != undefined){
          
           this["startHandlingOnServiceStart"] = new Boolean(obj["startHandlingOnServiceStart"]).valueOf() ;
          
        }
        
    
        
        if(obj["schedule_url"] != undefined){
          
           this["schedule_url"] = obj["schedule_url"].toString() ;
           
        }
        
    
        
        if(obj["task_url"] != undefined){
          
           this["task_url"] = obj["task_url"].toString() ;
           
        }
        
    
        
        if(obj["licencesService_url"] != undefined){
          
           this["licencesService_url"] = obj["licencesService_url"].toString() ;
           
        }
        
    
        
        if(obj["apiUrl"] != undefined){
          
           this["apiUrl"] = obj["apiUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_planned_tasks" ;

        
              /**
        Url de la bdd
        */
               public "bdd_url":string ;
              
       
              /**
        temps en ms entre deux getions des taches.
        */
               public "handlerInterval"?:number =60000;
              
       
              /**
        si la gestion des tache doit étre lancer au demarage du service
        */
               public "startHandlingOnServiceStart"?:boolean ;
              
       
              /**
        schedule_url
        */
               public "schedule_url"?:string ;
              
       
              /**
        task_url
        */
               public "task_url"?:string ;
              
       
              /**
        licencesService_url
        */
               public "licencesService_url"?:string ;
              
       
              /**
        url de la base de donnée
        */
               public "apiUrl":string ;
              
       


       

   }
