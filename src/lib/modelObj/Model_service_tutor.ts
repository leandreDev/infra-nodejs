import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service de gestion des message tutoré
*/
export class Model_service_tutor extends   Model_service   implements Interface.Iservice_tutor {

/**
  service de gestion des message tutoré
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["apiSession"] != undefined){
          
           this["apiSession"] = obj["apiSession"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_tutor" ;

        
              /**
        url du service de bd a utiliser
        */
               public "apiSession":string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["apiSession"] == null || target["apiSession"] == undefined) ){
                  throw new Error(path + "apiSession is required") ;
              }
              
              if(target["apiSession"] != null && target["apiSession"] != undefined ){
              
                let _apiSession  = target["apiSession"] ;
                

                 if(! _.isString(_apiSession)){
                    throw new Error(path+"apiSession is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_tutor>{
        return Model_service_tutor.check(target, true, path).then(()=>{
          return new Model_service_tutor(target) ;
        })
      }

   }
