import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  liste des applications
*/
export class Model_application extends  Base  implements Interface.Iapplication {

/**
  liste des applications
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["description"] != undefined){
          
           this["description"] = obj["description"].toString() ;
           
        }
        
    
        
        if(obj["depot"] != undefined){
          
           this["depot"] = obj["depot"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "application" ;

        
              /**
        le nom de l'application
        */
               public "name"?:string ;
              
       
              /**
        la description public de l'appli
        */
               public "description"?:string ;
              
       
              /**
        nom du depot de l'app
        */
               public "depot"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["name"] != null && target["name"] != undefined ){
              
                let _name  = target["name"] ;
                

                 if(! _.isString(_name)){
                    throw new Error(path+"name is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["description"] != null && target["description"] != undefined ){
              
                let _description  = target["description"] ;
                

                 if(! _.isString(_description)){
                    throw new Error(path+"description is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["depot"] != null && target["depot"] != undefined ){
              
                let _depot  = target["depot"] ;
                

                 if(! _.isString(_depot)){
                    throw new Error(path+"depot is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_application>{
        return Model_application.check(target, true, path).then(()=>{
          return new Model_application(target) ;
        })
      }

   }
