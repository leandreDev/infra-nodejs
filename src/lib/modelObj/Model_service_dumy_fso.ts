import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service } from "./Model_service"


/**
  simple remote file system a n utiliser que pour des test
*/
export class Model_service_dumy_fso extends   Model_service   implements Interface.Iservice_dumy_fso {

/**
  simple remote file system a n utiliser que pour des test
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["fsoBase"] != undefined){
          
           this["fsoBase"] = obj["fsoBase"].toString() ;
           
        }
        
    
        
        if(obj["url_bd"] != undefined){
          
           this["url_bd"] = obj["url_bd"].toString() ;
           
        }
        
    
        
        if(obj["url_folder_collection"] != undefined){
          
           this["url_folder_collection"] = obj["url_folder_collection"].toString() ;
           
        }
        
    
        
        if(obj["url_file_collection"] != undefined){
          
           this["url_file_collection"] = obj["url_file_collection"].toString() ;
           
        }
        
    
        
        if(obj["url_service"] != undefined){
          
           this["url_service"] = obj["url_service"].toString() ;
           
        }
        
    
        
        if(obj["root_file_directory"] != undefined){
          
           this["root_file_directory"] = obj["root_file_directory"].toString() ;
           
        }
        
    
  }
  

    public _class:string  = "service_dumy_fso" ;

        
              /**
        le chemin du repertoire de base de stockage
        */
               public "fsoBase"?:string ;
              
       
              /**
        Url de la basse de donnée
        */
               public "url_bd"?:string ;
              
       
              /**
        url de la colection des "directories"
        */
               public "url_folder_collection"?:string ;
              
       
              /**
        URL de la colletion "files"
        */
               public "url_file_collection"?:string ;
              
       
              /**
        URL du service
        */
               public "url_service"?:string ;
              
       
              /**
        Repertoire ou seront sauvegardé les fichiers
        */
               public "root_file_directory"?:string ;
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["fsoBase"] != null && target["fsoBase"] != undefined ){
              
                let _fsoBase  = target["fsoBase"] ;
                

                 if(! _.isString(_fsoBase)){
                    throw new Error(path+"fsoBase is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["url_bd"] != null && target["url_bd"] != undefined ){
              
                let _url_bd  = target["url_bd"] ;
                

                 if(! _.isString(_url_bd)){
                    throw new Error(path+"url_bd is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["url_folder_collection"] != null && target["url_folder_collection"] != undefined ){
              
                let _url_folder_collection  = target["url_folder_collection"] ;
                

                 if(! _.isString(_url_folder_collection)){
                    throw new Error(path+"url_folder_collection is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["url_file_collection"] != null && target["url_file_collection"] != undefined ){
              
                let _url_file_collection  = target["url_file_collection"] ;
                

                 if(! _.isString(_url_file_collection)){
                    throw new Error(path+"url_file_collection is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["url_service"] != null && target["url_service"] != undefined ){
              
                let _url_service  = target["url_service"] ;
                

                 if(! _.isString(_url_service)){
                    throw new Error(path+"url_service is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["root_file_directory"] != null && target["root_file_directory"] != undefined ){
              
                let _root_file_directory  = target["root_file_directory"] ;
                

                 if(! _.isString(_root_file_directory)){
                    throw new Error(path+"root_file_directory is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
           
          return Promise.all(promArr).then(()=>{return true}) ;
        }).catch((err)=>{
          throw err ;
        })


      }

      public static create(target:any, path:string=""):Promise<Model_service_dumy_fso>{
        return Model_service_dumy_fso.check(target, true, path).then(()=>{
          return new Model_service_dumy_fso(target) ;
        })
      }

   }
