import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;



/**
  description d'un fichier de configuration nginx
*/
export class Model_nginxConfigurationFile extends  Base  implements Interface.InginxConfigurationFile {

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
        
    
        
        if(obj["services"] != undefined && obj["services"] != null && _.isArray(obj["services"])){
          
          this["services"] = obj["services"].map((value)=>{
            if(_.isString(value)){
              return value ;
            }else if(value._id){
              return value._id ;
            }
          })
          
          
        }
        
    
  }
  

    public _class:string  = "nginxConfigurationFile" ;

        
              /**
        suffix a utiliser pour générer le fichier de configuration (idService_suffix.config)
        */
               public "suffix"?:string ;
              
       
              /**
        le template à répéter avec les services
        */
               public "template"?:string ;
              
       
              /**
        liste des services
        */
               public "services"?:string[] ;
              
       


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
           
              
              if(target["services"] != null && target["services"] != undefined ){
              
                  target["services"].forEach((_services , index:number)=>{
                  
                  if( ! _.isString(_services)){
                   throw new Error(path + "services is not a string") ;
                  }
                  });

              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_nginxConfigurationFile>{
        return Model_nginxConfigurationFile.check(target, true, path).then(()=>{
          return new Model_nginxConfigurationFile(target) ;
        })
      }

   }
