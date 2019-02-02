import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  configure un service mongo
*/
export class Model_service_mongo extends   Model_service   implements Interface.Iservice_mongo {

/**
  configure un service mongo
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["mongoosePath"] != undefined){
          
           this["mongoosePath"] = obj["mongoosePath"].toString() ;
           
        }
        
    
        
        if(obj["mongoAuthSource"] != undefined){
          
           this["mongoAuthSource"] = obj["mongoAuthSource"].toString() ;
           
        }
        
    
        
        if(obj["secretKey"] != undefined){
          
           this["secretKey"] = obj["secretKey"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_mongo" ;

        
              /**
        l'url de connection a mongodb
        */
               public "mongoosePath"?:string ;
              
       
              /**
        le nom de la base sur laquelle la connexion doit s'établir. Cela permet de pouvoir créer des bases automatiquements
        */
               public "mongoAuthSource"?:string ;
              
       
              /**
        clef secrète de communication interne a l'infra
        */
               public "secretKey"?:string ="$$ENV.SECRET";
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["mongoosePath"] != null && target["mongoosePath"] != undefined ){
              
                let _mongoosePath  = target["mongoosePath"] ;
                

                 if(! _.isString(_mongoosePath)){
                    throw new Error(path+"mongoosePath is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["mongoAuthSource"] != null && target["mongoAuthSource"] != undefined ){
              
                let _mongoAuthSource  = target["mongoAuthSource"] ;
                

                 if(! _.isString(_mongoAuthSource)){
                    throw new Error(path+"mongoAuthSource is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["secretKey"] != null && target["secretKey"] != undefined ){
              
                let _secretKey  = target["secretKey"] ;
                

                 if(! _.isString(_secretKey)){
                    throw new Error(path+"secretKey is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_mongo>{
        return Model_service_mongo.check(target, true, path).then(()=>{
          return new Model_service_mongo(target) ;
        })
      }

   }
