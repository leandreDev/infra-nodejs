import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service de creation de pdf
*/
export class Model_service_pdfrip extends   Model_service   implements Interface.Iservice_pdfrip {

/**
  service de creation de pdf
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "service_pdfrip" ;

        


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_pdfrip>{
        return Model_service_pdfrip.check(target, true, path).then(()=>{
          return new Model_service_pdfrip(target) ;
        })
      }

   }
