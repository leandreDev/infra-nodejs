import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_licenceStore } from "./Model_licenceStore"


/**
  licence store dont les applications sont le catalogue du client
*/
export class Model_licenceStore_global extends   Model_licenceStore   implements Interface.IlicenceStore_global {

/**
  licence store dont les applications sont le catalogue du client
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "licenceStore_global" ;

        


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_licenceStore_global>{
        return Model_licenceStore_global.check(target, true, path).then(()=>{
          return new Model_licenceStore_global(target) ;
        })
      }

   }
