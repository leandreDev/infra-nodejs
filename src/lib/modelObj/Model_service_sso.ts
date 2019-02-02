import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  c'est un sso
*/
export class Model_service_sso extends   Model_service   implements Interface.Iservice_sso {

/**
  c'est un sso
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "service_sso" ;

        


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_sso>{
        return Model_service_sso.check(target, true, path).then(()=>{
          return new Model_service_sso(target) ;
        })
      }

   }
