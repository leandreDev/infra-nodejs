import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  permet de générer les fichier de conf des app (css, js, ...)
*/
export class Model_service_webAppConf extends   Model_service   implements Interface.Iservice_webAppConf {

/**
  permet de générer les fichier de conf des app (css, js, ...)
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["infraBddUrl"] != undefined){
          
           this["infraBddUrl"] = obj["infraBddUrl"].toString() ;
           
        }
        
    
        
        if(obj["ssoBddUrl"] != undefined){
          
           this["ssoBddUrl"] = obj["ssoBddUrl"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_webAppConf" ;

        
              /**
        url de la bdd de l'infra
        */
               public "infraBddUrl":string ;
              
       
              /**
        url de la bdd du sso
        */
               public "ssoBddUrl":string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["infraBddUrl"] == null || target["infraBddUrl"] == undefined) ){
                  throw new Error(path + "infraBddUrl is required") ;
              }
              
              if(target["infraBddUrl"] != null && target["infraBddUrl"] != undefined ){
              
                let _infraBddUrl  = target["infraBddUrl"] ;
                

                 if(! _.isString(_infraBddUrl)){
                    throw new Error(path+"infraBddUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["ssoBddUrl"] == null || target["ssoBddUrl"] == undefined) ){
                  throw new Error(path + "ssoBddUrl is required") ;
              }
              
              if(target["ssoBddUrl"] != null && target["ssoBddUrl"] != undefined ){
              
                let _ssoBddUrl  = target["ssoBddUrl"] ;
                

                 if(! _.isString(_ssoBddUrl)){
                    throw new Error(path+"ssoBddUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_webAppConf>{
        return Model_service_webAppConf.check(target, true, path).then(()=>{
          return new Model_service_webAppConf(target) ;
        })
      }

   }
