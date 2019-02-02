import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  collection de mail
*/
export class Model_mail extends  Base  implements Interface.Imail {

/**
  collection de mail
*/
  constructor(obj:any={}){
    super(obj);
    
  }
  

    public _class:string  = "mail" ;

        


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_mail>{
        return Model_mail.check(target, true, path).then(()=>{
          return new Model_mail(target) ;
        })
      }

   }
