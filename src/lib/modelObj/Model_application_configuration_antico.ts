import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  configuration d'un parcourt anticoruption
*/
export class Model_application_configuration_antico extends   Model_application_configuration   implements Interface.Iapplication_configuration_antico {

/**
  configuration d'un parcourt anticoruption
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "application_configuration_antico" ;

        


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_application_configuration_antico>{
        return Model_application_configuration_antico.check(target, true, path).then(()=>{
          return new Model_application_configuration_antico(target) ;
        })
      }

   }
