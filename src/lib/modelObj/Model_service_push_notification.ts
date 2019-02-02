import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  Service pour gérer les notifications push des applications
*/
export class Model_service_push_notification extends   Model_service   implements Interface.Iservice_push_notification {

/**
  Service pour gérer les notifications push des applications
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "service_push_notification" ;

        


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_push_notification>{
        return Model_service_push_notification.check(target, true, path).then(()=>{
          return new Model_service_push_notification(target) ;
        })
      }

   }
