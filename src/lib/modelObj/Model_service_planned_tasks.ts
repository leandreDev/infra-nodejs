import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


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
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["bdd_url"] == null || target["bdd_url"] == undefined) ){
                  throw new Error(path + "bdd_url is required") ;
              }
              
              if(target["bdd_url"] != null && target["bdd_url"] != undefined ){
              
                let _bdd_url  = target["bdd_url"] ;
                

                 if(! _.isString(_bdd_url)){
                    throw new Error(path+"bdd_url is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["handlerInterval"] != null && target["handlerInterval"] != undefined ){
              
                let _handlerInterval  = target["handlerInterval"] ;
                
                  if(! _.isNumber(_handlerInterval)){
                      throw new Error(path+"handlerInterval is not a number") ;
                      
                  }
                  
                
                

                
              
              
           }
           
              
              if(target["startHandlingOnServiceStart"] != null && target["startHandlingOnServiceStart"] != undefined ){
              
                let _startHandlingOnServiceStart  = target["startHandlingOnServiceStart"] ;
                
                  if(! _.isBoolean(_startHandlingOnServiceStart)){
                    throw new Error(path+"startHandlingOnServiceStart is not a boolean") ;
                    
                  }
                

              
              
           }
           
              
              if(target["schedule_url"] != null && target["schedule_url"] != undefined ){
              
                let _schedule_url  = target["schedule_url"] ;
                

                 if(! _.isString(_schedule_url)){
                    throw new Error(path+"schedule_url is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["task_url"] != null && target["task_url"] != undefined ){
              
                let _task_url  = target["task_url"] ;
                

                 if(! _.isString(_task_url)){
                    throw new Error(path+"task_url is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["licencesService_url"] != null && target["licencesService_url"] != undefined ){
              
                let _licencesService_url  = target["licencesService_url"] ;
                

                 if(! _.isString(_licencesService_url)){
                    throw new Error(path+"licencesService_url is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["apiUrl"] == null || target["apiUrl"] == undefined) ){
                  throw new Error(path + "apiUrl is required") ;
              }
              
              if(target["apiUrl"] != null && target["apiUrl"] != undefined ){
              
                let _apiUrl  = target["apiUrl"] ;
                

                 if(! _.isString(_apiUrl)){
                    throw new Error(path+"apiUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_planned_tasks>{
        return Model_service_planned_tasks.check(target, true, path).then(()=>{
          return new Model_service_planned_tasks(target) ;
        })
      }

   }
