import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service d'orchestration
*/
export class Model_service_orchestrator extends   Model_service   implements Interface.Iservice_orchestrator {

/**
  service d'orchestration
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["apiUrl"] != undefined){
          
           this["apiUrl"] = obj["apiUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_orchestrator" ;

        
              /**
        url de la configuration de l'orchestrateur
        */
               public "apiUrl":string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
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

      public static create(target:any, path:string=""):Promise<Model_service_orchestrator>{
        return Model_service_orchestrator.check(target, true, path).then(()=>{
          return new Model_service_orchestrator(target) ;
        })
      }

   }
