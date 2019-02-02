import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service qui génére la configuration d'une application cliente (url du sso, id client, id_instance...)
*/
export class Model_service_init extends   Model_service   implements Interface.Iservice_init {

/**
  service qui génére la configuration d'une application cliente (url du sso, id client, id_instance...)
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "service_init" ;

        


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_init>{
        return Model_service_init.check(target, true, path).then(()=>{
          return new Model_service_init(target) ;
        })
      }

   }
