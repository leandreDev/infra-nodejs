import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service messagerie de soket.io
*/
export class Model_service_socket_io extends   Model_service   implements Interface.Iservice_socket_io {

/**
  service messagerie de soket.io
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["namespaces"] != undefined && obj["namespaces"] != null && _.isArray(obj["namespaces"])){
          
           this["namespaces"] = obj["namespaces"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
  }
  

    public _class:string  = "service_socket_io" ;

        
              /**
        liste des namespace a créer sur le serveur
        */
               public "namespaces"?:string[];
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["namespaces"] != null && target["namespaces"] != undefined ){
              
                target["namespaces"].forEach((_namespaces , index:number)=>{
                

                 if(! _.isString(_namespaces)){
                    throw new Error(path+"namespaces index: "+ index +"is not a string")
                    
                  }
                  
                  
                 });
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_socket_io>{
        return Model_service_socket_io.check(target, true, path).then(()=>{
          return new Model_service_socket_io(target) ;
        })
      }

   }
