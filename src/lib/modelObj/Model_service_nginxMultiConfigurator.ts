import * as _ from "lodash" ;
import * as Interface from "./Interfaces" ;
import * as Index from "./Index" ;
import {Base } from "utils" ;


import {Model_service_nginxConfigurator } from "./Model_service_nginxConfigurator"


/**
  configuration d'un service nginx multi configuration
*/
export class Model_service_nginxMultiConfigurator extends   Model_service_nginxConfigurator   implements Interface.Iservice_nginxMultiConfigurator {

/**
  configuration d'un service nginx multi configuration
*/
  constructor(obj:any={}){
    super(obj);
    
        
        if(obj["nginxUser"] != undefined){
          
           this["nginxUser"] = obj["nginxUser"].toString() ;
           
        }
        
    
        
        if(obj["serviceUrl"] != undefined){
          
           this["serviceUrl"] = obj["serviceUrl"].toString() ;
           
        }
        
    
        
        if(obj["clientUrl"] != undefined){
          
           this["clientUrl"] = obj["clientUrl"].toString() ;
           
        }
        
    
        
        if(obj["appInstanceUrl"] != undefined){
          
           this["appInstanceUrl"] = obj["appInstanceUrl"].toString() ;
           
        }
        
    
        
        if(obj["appUrl"] != undefined){
          
           this["appUrl"] = obj["appUrl"].toString() ;
           
        }
        
    
        
        if(obj["configurationFile"] != undefined && obj["configurationFile"] != null && _.isArray(obj["configurationFile"])){
          

            this["configurationFile"] = obj["configurationFile"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["nginxConfigurationFile"](value) ;
              }
            })
            
          
        }
        
    
        
        if(obj["configurationApplication"] != undefined && obj["configurationApplication"] != null && _.isArray(obj["configurationApplication"])){
          

            this["configurationApplication"] = obj["configurationApplication"].map((value)=>{
              if(value._class){
                return new Index[value._class](value) ;
              }else{
                return new Index["nginxConfigurationFileApp"](value) ;
              }
            })
            
          
        }
        
    
  }
  

    public _class:string  = "service_nginxMultiConfigurator" ;

        
              /**
         le login de l'utilisateur utilisé pour s'impersonifier
        */
               public "nginxUser"?:string ;
              
       
              /**
        l'url de la collection des services
        */
               public "serviceUrl"?:string ;
              
       
              /**
        url du service de client
        */
               public "clientUrl":string ;
              
       
              /**
        url du service d'application instance
        */
               public "appInstanceUrl"?:string ;
              
       
              /**
        url du service d'application instance
        */
               public "appUrl":string ;
              
       
              /**
        fichier de configuration a générer
        */
               public "configurationFile"?:Interface.InginxConfigurationFile[];
              
       
              /**
        liste des application a publier
        */
               public "configurationApplication"?:Interface.InginxConfigurationFileApp[];
              
       


       public static check(target:any , isCompleteObj:boolean=true,  path:string=""):Promise<boolean>{
        return super.check(target, isCompleteObj , path)
        .then((boolean)=>{
          var promArr:Array<Promise<boolean>> = [Promise.resolve(true)] ;
          
              
              if(target["nginxUser"] != null && target["nginxUser"] != undefined ){
              
                let _nginxUser  = target["nginxUser"] ;
                

                 if(! _.isString(_nginxUser)){
                    throw new Error(path+"nginxUser is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["serviceUrl"] != null && target["serviceUrl"] != undefined ){
              
                let _serviceUrl  = target["serviceUrl"] ;
                

                 if(! _.isString(_serviceUrl)){
                    throw new Error(path+"serviceUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["clientUrl"] == null || target["clientUrl"] == undefined) ){
                  throw new Error(path + "clientUrl is required") ;
              }
              
              if(target["clientUrl"] != null && target["clientUrl"] != undefined ){
              
                let _clientUrl  = target["clientUrl"] ;
                

                 if(! _.isString(_clientUrl)){
                    throw new Error(path+"clientUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["appInstanceUrl"] != null && target["appInstanceUrl"] != undefined ){
              
                let _appInstanceUrl  = target["appInstanceUrl"] ;
                

                 if(! _.isString(_appInstanceUrl)){
                    throw new Error(path+"appInstanceUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if( isCompleteObj && (target["appUrl"] == null || target["appUrl"] == undefined) ){
                  throw new Error(path + "appUrl is required") ;
              }
              
              if(target["appUrl"] != null && target["appUrl"] != undefined ){
              
                let _appUrl  = target["appUrl"] ;
                

                 if(! _.isString(_appUrl)){
                    throw new Error(path+"appUrl is not a string") ;
                    
                  }
                  
                  
                 
              
              
           }
           
              
              if(target["configurationFile"] != null && target["configurationFile"] != undefined ){
              
                  target["configurationFile"].forEach((_configurationFile , index:number)=>{
                  
                  
                    promArr.push( Index["nginxConfigurationFile"].check(_configurationFile, isCompleteObj , path+"configurationFile.")
                      .catch((err)=>{
                        throw new Error(path+"configurationFile index: "+ index +"is not nginxConfigurationFile")
                        

                      }) )
                  if(_configurationFile._class != null && _configurationFile._class != undefined){
                    promArr.push( Index[_configurationFile._class].check(_configurationFile, isCompleteObj , path+"configurationFile.")
                      .catch((err)=>{
                        throw new Error(path+"configurationFile index: "+ index +"is not a " + _configurationFile._class )
                        

                      })
                    )
                  }

                  });
              
              
           }
           
              
              if(target["configurationApplication"] != null && target["configurationApplication"] != undefined ){
              
                  target["configurationApplication"].forEach((_configurationApplication , index:number)=>{
                  
                  
                    promArr.push( Index["nginxConfigurationFileApp"].check(_configurationApplication, isCompleteObj , path+"configurationApplication.")
                      .catch((err)=>{
                        throw new Error(path+"configurationApplication index: "+ index +"is not nginxConfigurationFileApp")
                        

                      }) )
                  if(_configurationApplication._class != null && _configurationApplication._class != undefined){
                    promArr.push( Index[_configurationApplication._class].check(_configurationApplication, isCompleteObj , path+"configurationApplication.")
                      .catch((err)=>{
                        throw new Error(path+"configurationApplication index: "+ index +"is not a " + _configurationApplication._class )
                        

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

      public static create(target:any, path:string=""):Promise<Model_service_nginxMultiConfigurator>{
        return Model_service_nginxMultiConfigurator.check(target, true, path).then(()=>{
          return new Model_service_nginxMultiConfigurator(target) ;
        })
      }

   }
