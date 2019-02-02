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
        
    
  }
  

    public _class:string  = "service_webAppConf" ;

        
              /**
        url de la bdd de l'infra
        */
               public "infraBddUrl"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["infraBddUrl"] != null && target["infraBddUrl"] != undefined ){
              
                let _infraBddUrl  = target["infraBddUrl"] ;
                

                 if(! _.isString(_infraBddUrl)){
                    throw new Error(path+"infraBddUrl is not a string") ;
                    
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
