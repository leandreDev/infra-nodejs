import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  service d'orchestration de service. ce service permet de créer des routes qui enchaîne des middleware paramétré qui consomment les autres services
*/
export class Model_service_serviceOrchestrator extends  Base  implements Interface.Iservice_serviceOrchestrator {

/**
  service d'orchestration de service. ce service permet de créer des routes qui enchaîne des middleware paramétré qui consomment les autres services
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "service_serviceOrchestrator" ;

        


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_serviceOrchestrator>{
        return Model_service_serviceOrchestrator.check(target, true, path).then(()=>{
          return new Model_service_serviceOrchestrator(target) ;
        })
      }

   }
