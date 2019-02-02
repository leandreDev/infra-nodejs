import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  association d'une entité et de l'url de son service
*/
export class Model_entity_source extends  Base  implements Interface.Ientity_source {

/**
  association d'une entité et de l'url de son service
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["url"] != undefined){
          
           this["url"] = obj["url"].toString() ;
           
        }
        
    
        
        if(obj["entityName"] != undefined && obj["entityName"] != null && _.isArray(obj["entityName"])){
          
           this["entityName"] = obj["entityName"].map((value)=>{
              return value.toString();
            })
          
        }
        
    
  }
  

    public _class:string  = "entity_source" ;

        
              /**
        url du service
        */
               public "url"?:string ;
              
       
              /**
        nom de l'entité
        */
               public "entityName"?:string[];
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["url"] != null && target["url"] != undefined ){
              
                let _url  = target["url"] ;
                

                 if(! _.isString(_url)){
                    throw new Error(path+"url is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["entityName"] != null && target["entityName"] != undefined ){
              
                target["entityName"].forEach((_entityName , index:number)=>{
                

                 if(! _.isString(_entityName)){
                    throw new Error(path+"entityName index: "+ index +"is not a string")
                    
                  }
                  
                  
                 });
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_entity_source>{
        return Model_entity_source.check(target, true, path).then(()=>{
          return new Model_entity_source(target) ;
        })
      }

   }
