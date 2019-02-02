import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_field } from "./Model_field"


/**
  ce champ représente les objets
*/
export class Model_object extends   Model_field   implements Interface.Iobject {

/**
  ce champ représente les objets
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "object" ;

        


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_object>{
        return Model_object.check(target, true, path).then(()=>{
          return new Model_object(target) ;
        })
      }

   }
