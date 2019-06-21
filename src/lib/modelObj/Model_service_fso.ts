import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  remote file system
*/
export class Model_service_fso extends   Model_service   implements Interface.Iservice_fso {

/**
  remote file system
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["filePath"] != undefined){
          
           this["filePath"] = obj["filePath"].toString() ;
           
        }
        
    
        
        if(obj["bddServiceUrl"] != undefined){
          
           this["bddServiceUrl"] = obj["bddServiceUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_fso" ;

        
              /**
        local file path
        */
               public "filePath":string ;
              
       
              /**
        url du service de bd
        */
               public "bddServiceUrl":string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["filePath"] == null || target["filePath"] == undefined) ){
                  throw new Error(path + "filePath is required") ;
              }
              
              if(target["filePath"] != null && target["filePath"] != undefined ){
              
                let _filePath  = target["filePath"] ;
                

                 if(! _.isString(_filePath)){
                    throw new Error(path+"filePath is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["bddServiceUrl"] == null || target["bddServiceUrl"] == undefined) ){
                  throw new Error(path + "bddServiceUrl is required") ;
              }
              
              if(target["bddServiceUrl"] != null && target["bddServiceUrl"] != undefined ){
              
                let _bddServiceUrl  = target["bddServiceUrl"] ;
                

                 if(! _.isString(_bddServiceUrl)){
                    throw new Error(path+"bddServiceUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_fso>{
        return Model_service_fso.check(target, true, path).then(()=>{
          return new Model_service_fso(target) ;
        })
      }

   }
