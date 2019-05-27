import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  service de tirage au sort de polo
*/
export class Model_service_polo_celio extends   Model_service   implements Interface.Iservice_polo_celio {

/**
  service de tirage au sort de polo
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["bdd_url"] != undefined){
          
           this["bdd_url"] = obj["bdd_url"].toString() ;
           
        }
        
    
        
        if(obj["maxNumberOfWinner"] != undefined){
          
           this["maxNumberOfWinner"] = new Number(obj["maxNumberOfWinner"]).valueOf();
          
        }
        
    
  }
  

    public _class:string  = "service_polo_celio" ;

        
              /**
        url du service de bdd
        */
               public "bdd_url"?:string ;
              
       
              /**
        nombre maximum de gagnan
        */
               public "maxNumberOfWinner":number =500;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["bdd_url"] != null && target["bdd_url"] != undefined ){
              
                let _bdd_url  = target["bdd_url"] ;
                

                 if(! _.isString(_bdd_url)){
                    throw new Error(path+"bdd_url is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["maxNumberOfWinner"] == null || target["maxNumberOfWinner"] == undefined) ){
                  throw new Error(path + "maxNumberOfWinner is required") ;
              }
              
              if(target["maxNumberOfWinner"] != null && target["maxNumberOfWinner"] != undefined ){
              
                let _maxNumberOfWinner  = target["maxNumberOfWinner"] ;
                
                  if(! _.isNumber(_maxNumberOfWinner)){
                      throw new Error(path+"maxNumberOfWinner is not a number") ;
                      
                  }
                  
                
                

                
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_polo_celio>{
        return Model_service_polo_celio.check(target, true, path).then(()=>{
          return new Model_service_polo_celio(target) ;
        })
      }

   }
