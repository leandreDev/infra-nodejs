import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  c'est le service de distribution des configurations des services
*/
export class Model_service_configuration extends   Model_service   implements Interface.Iservice_configuration {

/**
  c'est le service de distribution des configurations des services
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["srvUrl"] != undefined){
          
           this["srvUrl"] = obj["srvUrl"].toString() ;
           
        }
        
    
        
        if(obj["serviceCollectionName"] != undefined){
          
           this["serviceCollectionName"] = obj["serviceCollectionName"].toString() ;
           
        }
        
    
        
        if(obj["serviceConfigCollectionName"] != undefined){
          
           this["serviceConfigCollectionName"] = obj["serviceConfigCollectionName"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_configuration" ;

        
              /**
        l'url du service de base de donnée de l'infra
        */
               public "srvUrl"?:string ;
              
       
              /**
        le nom de la collection des services
        */
               public "serviceCollectionName"?:string ="services";
              
       
              /**
        les configurations de service des applications
        */
               public "serviceConfigCollectionName"?:string ="mongo_service_configs";
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["srvUrl"] != null && target["srvUrl"] != undefined ){
              
                let _srvUrl  = target["srvUrl"] ;
                

                 if(! _.isString(_srvUrl)){
                    throw new Error(path+"srvUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["serviceCollectionName"] != null && target["serviceCollectionName"] != undefined ){
              
                let _serviceCollectionName  = target["serviceCollectionName"] ;
                

                 if(! _.isString(_serviceCollectionName)){
                    throw new Error(path+"serviceCollectionName is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["serviceConfigCollectionName"] != null && target["serviceConfigCollectionName"] != undefined ){
              
                let _serviceConfigCollectionName  = target["serviceConfigCollectionName"] ;
                

                 if(! _.isString(_serviceConfigCollectionName)){
                    throw new Error(path+"serviceConfigCollectionName is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_configuration>{
        return Model_service_configuration.check(target, true, path).then(()=>{
          return new Model_service_configuration(target) ;
        })
      }

   }
