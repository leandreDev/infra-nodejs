import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_application_configuration } from "./Model_application_configuration"


/**
  configuration d'une application phoneCard
*/
export class Model_application_configuration_phoneCard extends   Model_application_configuration   implements Interface.Iapplication_configuration_phoneCard {

/**
  configuration d'une application phoneCard
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "application_configuration_phoneCard" ;

        


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_application_configuration_phoneCard>{
        return Model_application_configuration_phoneCard.check(target, true, path).then(()=>{
          return new Model_application_configuration_phoneCard(target) ;
        })
      }

   }
