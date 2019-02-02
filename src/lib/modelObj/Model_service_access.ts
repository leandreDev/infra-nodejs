import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  décrit les régles de paramètre des servies
*/
export class Model_service_access extends  Base  implements Interface.Iservice_access {

/**
  décrit les régles de paramètre des servies
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["name"] != undefined){
          
           this["name"] = obj["name"].toString() ;
           
        }
        
    
        
        if(obj["service"] != undefined){
          
          if(_.isString(obj["service"])){
            this["service"] = obj["service"];
          }else if(obj["service"]._id){
            this["service"] = obj["service"]._id ;
          }
          
        }
        
    
        
        if(obj["httAccess"] != undefined){
          
            if(obj._class){
              this["httAccess"] =  new Index[obj._class](obj["httAccess"]) ;
            }else{
              this["httAccess"] =  new Index["url_role"](obj["httAccess"]) ;
            }
          
        }
        
    
  }
  

    public _class:string  = "service_access" ;

        
              /**
        nom de la configuration
        */
               public "name"?:string ;
              
       
              /**
        service au qu'elle s'applique la configuration
        */
               public "service"?:string ;
              
       
              /**
        liste les règles d’accès aux routes d'un service
        */
               public "httAccess"?:Interface.Iurl_role;
              
       


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
           
              
              if(target["service"] != null && target["service"] != undefined ){
              
                  let _service  = target["service"] ;
                  
                  if( ! _.isString(_service)){
                   throw new Error(path + "service is not a string") ;
                  }
                  

              
              
           }
           
              
              if(target["httAccess"] != null && target["httAccess"] != undefined ){
              
                  let _httAccess  = target["httAccess"] ;
                  
                  
                    promArr.push( Index["url_role"].check(_httAccess, isCompleteObj , path+"httAccess.")
                      .catch((err)=>{
                        throw new Error(path+"httAccess is not ") ;
                        

                      }) )
                  if(_httAccess._class != null && _httAccess._class != undefined){
                    promArr.push( Index[_httAccess._class].check(_httAccess, isCompleteObj , path+"httAccess.")
                      .catch((err)=>{
                        throw new Error(path+"httAccess is not a " + _httAccess._class ) ;
                        

                      })
                    )
                  }

                  
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_access>{
        return Model_service_access.check(target, true, path).then(()=>{
          return new Model_service_access(target) ;
        })
      }

   }
