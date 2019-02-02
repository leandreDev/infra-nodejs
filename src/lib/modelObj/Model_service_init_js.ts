import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service qui retourne un init.js
*/
export class Model_service_init_js extends   Model_service   implements Interface.Iservice_init_js {

/**
  service qui retourne un init.js
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["templates"] != undefined && obj["templates"] != null && _.isArray(obj["templates"])){
          

            this["templates"] = obj["templates"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["TemplateLodash"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "service_init_js" ;

        
              /**
        liste des templates disponnibles
        */
               public "templates":Interface.ITemplateLodash[];
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if( isCompleteObj && (target["templates"] == null || target["templates"] == undefined) ){
                  throw new Error(path + "templates is required") ;
              }
              
              if(target["templates"] != null && target["templates"] != undefined ){
              
                  target["templates"].forEach((_templates , index:number)=>{
                  
                  
                    promArr.push( Index["TemplateLodash"].check(_templates, isCompleteObj , path+"templates.")
                      .catch((err)=>{
                        throw new Error(path+"templates index: "+ index +"is not TemplateLodash")
                        

                      }) )
                  if(_templates._class != null && _templates._class != undefined){
                    promArr.push( Index[_templates._class].check(_templates, isCompleteObj , path+"templates.")
                      .catch((err)=>{
                        throw new Error(path+"templates index: "+ index +"is not a " + _templates._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_init_js>{
        return Model_service_init_js.check(target, true, path).then(()=>{
          return new Model_service_init_js(target) ;
        })
      }

   }
