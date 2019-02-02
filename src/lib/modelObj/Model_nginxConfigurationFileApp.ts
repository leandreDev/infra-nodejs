import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  description d'un fichier de configuration nginx
*/
export class Model_nginxConfigurationFileApp extends  Base  implements Interface.InginxConfigurationFileApp {

/**
  description d'un fichier de configuration nginx
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["suffix"] != undefined){
          
           this["suffix"] = obj["suffix"].toString() ;
           
        }
        
    
        
        if(obj["template"] != undefined){
          
           this["template"] = obj["template"].toString() ;
           
        }
        
    
        
        if(obj["applications"] != undefined && obj["applications"] != null && _.isArray(obj["applications"])){
          
          this["applications"] = obj["applications"].map((value)=>{
            if(_.isString(value)){
              return value ;
            }else if(value._id){
              return value._id ;
            }
          })
          
          
        }
        
    
        
        if(obj["clients"] != undefined && obj["clients"] != null && _.isArray(obj["clients"])){
          
          this["clients"] = obj["clients"].map((value)=>{
            if(_.isString(value)){
              return value ;
            }else if(value._id){
              return value._id ;
            }
          })
          
          
        }
        
    
  }
  

    public _class:string  = "nginxConfigurationFileApp" ;

        
              /**
        suffix a utiliser pour générer le fichier de configuration (idService_suffix.config)
        */
               public "suffix"?:string ;
              
       
              /**
        le template à répéter avec les services
        */
               public "template"?:string ;
              
       
              /**
        liste des applications
        */
               public "applications":string[] ;
              
       
              /**
        le client associé
        */
               public "clients":string[] ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["suffix"] != null && target["suffix"] != undefined ){
              
                let _suffix  = target["suffix"] ;
                

                 if(! _.isString(_suffix)){
                    throw new Error(path+"suffix is not a string") ;
                    
                  }
                  
                    if(!_suffix.match(/[^ \/\\]*/)){
                      throw new Error(path+"suffix dont match [^ \/\\]*" ) ;
                      
                    }
                  
                  
                 
              
              
           }
           
              
              if(target["template"] != null && target["template"] != undefined ){
              
                let _template  = target["template"] ;
                

                 if(! _.isString(_template)){
                    throw new Error(path+"template is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["applications"] == null || target["applications"] == undefined) ){
                  throw new Error(path + "applications is required") ;
              }
              
              if(target["applications"] != null && target["applications"] != undefined ){
              
                  target["applications"].forEach((_applications , index:number)=>{
                  
                  if( ! _.isString(_applications)){
                   throw new Error(path + "applications is not a string") ;
                  }
                  });

              
              
           }
           
              
              if( isCompleteObj && (target["clients"] == null || target["clients"] == undefined) ){
                  throw new Error(path + "clients is required") ;
              }
              
              if(target["clients"] != null && target["clients"] != undefined ){
              
                  target["clients"].forEach((_clients , index:number)=>{
                  
                  if( ! _.isString(_clients)){
                   throw new Error(path + "clients is not a string") ;
                  }
                  });

              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_nginxConfigurationFileApp>{
        return Model_nginxConfigurationFileApp.check(target, true, path).then(()=>{
          return new Model_nginxConfigurationFileApp(target) ;
        })
      }

   }
