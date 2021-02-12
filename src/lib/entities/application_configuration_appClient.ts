import * as _ from "lodash" ;
import * as Index from "./Index" ;
import {mongo , Entity} from "@hfdev/utils" ;


import {Entity_application_configuration } from "./application_configuration"


/**
  c'est la configuration d'une application Client
*/
export class Entity_application_configuration_appClient extends   Entity_application_configuration    {



   
  static cast(obj:any={} , castChildClass:boolean=false){
    
    if((!castChildClass) && obj._class && obj._class != 'application_configuration_appClient' && [].indexOf(obj._class)!==-1){
       Index['Entity_' + obj._class].cast(obj , true) ;
       return ;
    }
    
    Entity_application_configuration.cast(obj , true)
    
    
        
        if(obj["configurationUrlDb"] != undefined){
          
           obj["configurationUrlDb"] = obj["configurationUrlDb"].toString() ;
           
        }
        
    
        
        if(obj["urlBase"] != undefined){
          
           obj["urlBase"] = obj["urlBase"].toString() ;
           
        }
        
    
        
        if(obj["signinUrl"] != undefined){
          
           obj["signinUrl"] = obj["signinUrl"].toString() ;
           
        }
        
    
        
        if(obj["serviceSessionUrl"] != undefined){
          
           obj["serviceSessionUrl"] = obj["serviceSessionUrl"].toString() ;
           
        }
        
    
        
        if(obj["clientServiceUrl"] != undefined){
          
           obj["clientServiceUrl"] = obj["clientServiceUrl"].toString() ;
           
        }
        
    
        
        if(obj["aclTemplate"] != undefined){
          
           
              Index.Entity__acl.cast(obj["aclTemplate"]) ;
              //5a3bae759167362268af288b
            
          
        }
        
    
  }


 

public static checkconfigurationUrlDb(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkurlBase(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checksigninUrl(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkserviceSessionUrl(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkclientServiceUrl(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
          
          
         
         

         

        
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static checkaclTemplate(val:any, path:string =null):string[]{
         if(val == null){
            return null ;
         }
         let res:string[] = [] ;
         
         
         

         

        
        
          let result:string[] ;
          if( val._class ){
            result = Index['Entity_' + val._class].check(val , false , path  ) ;
          }else{
            result = Index.Entity__acl.check(val , false , path  ) ;
            //5a3bae759167362268af288b

          }
          res = [...res , ...result] ;
        
          if(res.length === 0){
            return null ;
          }else{
            return res ;
          }
        }


       
 

public static check(target:any, isCompleteObj:boolean=true,  path:string=""):string[]{
        var err:string[]  = []; 
        let res:string[] ;
        
          err = Entity_application_configuration.check(target, isCompleteObj , path) ;
          
              

              
              if( isCompleteObj && (target.configurationUrlDb == null || target.configurationUrlDb == undefined) ){
                err.push(path + ".configurationUrlDb is required") ;
              }
              

              if(target.configurationUrlDb != null && target.configurationUrlDb != undefined ){
                
                
                res = Entity_application_configuration_appClient.checkconfigurationUrlDb(target.configurationUrlDb , `${path}.configurationUrlDb`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.urlBase == null || target.urlBase == undefined) ){
                err.push(path + ".urlBase is required") ;
              }
              

              if(target.urlBase != null && target.urlBase != undefined ){
                
                
                res = Entity_application_configuration_appClient.checkurlBase(target.urlBase , `${path}.urlBase`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.signinUrl == null || target.signinUrl == undefined) ){
                err.push(path + ".signinUrl is required") ;
              }
              

              if(target.signinUrl != null && target.signinUrl != undefined ){
                
                
                res = Entity_application_configuration_appClient.checksigninUrl(target.signinUrl , `${path}.signinUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.serviceSessionUrl == null || target.serviceSessionUrl == undefined) ){
                err.push(path + ".serviceSessionUrl is required") ;
              }
              

              if(target.serviceSessionUrl != null && target.serviceSessionUrl != undefined ){
                
                
                res = Entity_application_configuration_appClient.checkserviceSessionUrl(target.serviceSessionUrl , `${path}.serviceSessionUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              
              if( isCompleteObj && (target.clientServiceUrl == null || target.clientServiceUrl == undefined) ){
                err.push(path + ".clientServiceUrl is required") ;
              }
              

              if(target.clientServiceUrl != null && target.clientServiceUrl != undefined ){
                
                
                res = Entity_application_configuration_appClient.checkclientServiceUrl(target.clientServiceUrl , `${path}.clientServiceUrl`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
              

              

              if(target.aclTemplate != null && target.aclTemplate != undefined ){
                
                
                res = Entity_application_configuration_appClient.checkaclTemplate(target.aclTemplate , `${path}.aclTemplate`) ;
                if(res && res.length > 0){
                  err = [...err , ...res] ;
                }               
                
              }

              
              
           
           

        return err ;
      }
   
public static castQueryParam(path: string, value: any): any {
        let key:string = '' ;
        let subPath:string = '' ;

        if(value === null){
          return null ;
        }
        if(path.indexOf('.') === -1){
          key = path ;
        }else{
          let arr:string[] = path.split('.') ;
          key = arr.shift() ;
          subPath = arr.join('.') ;
          if(subPath === null || subPath.trim() === ''){
            throw new Error(`subPath is empty for ${path} ${value}`)
          }
        }
        if(key === null || key.trim() === ''){
          throw new Error(`key path is empty for ${path} ${value}`)
        }
        switch (key) {
          
            case 'configurationUrlDb':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'urlBase':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'signinUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'serviceSessionUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'clientServiceUrl':
              //string
              
              
              
              
              
              
              
              return new String(value).valueOf() ;
              
            break;
          
            case 'aclTemplate':
              //subdoc
              
              if(value._class){
                return  Index['Entity_'+value._class].castQueryParam(subPath , value) ;
              }else{
                return Index.Entity__acl.castQueryParam(subPath ,value) ;
              }
              
              
              
              
              
              
              
            break;
          
         
          default:
            return Entity_application_configuration  .castQueryParam(key, value) ;
            break;
        }
      }

public static getClassNameOfProp(path:string):string{
        let key:string = '' ;
        let subPath:string = '' ;

        if(path.indexOf('.') === -1){
          key = path ;
        }else{
          let arr:string[] = path.split('.') ;
          key = arr.shift() ;
          subPath = arr.join('.') ;
          if(subPath === null || subPath.trim() === ''){
            throw new Error(`subPath is empty for ${path} `)
          }
        }
        if(key === null || key.trim() === ''){
          throw new Error(`key path is empty for ${path}`)
        }
        switch (key) {
          
      
      case 'configurationUrlDb':
       
             return null ;
       
        
       
      
      
      case 'urlBase':
       
             return null ;
       
        
       
      
      
      case 'signinUrl':
       
             return null ;
       
        
       
      
      
      case 'serviceSessionUrl':
       
             return null ;
       
        
       
      
      
      case 'clientServiceUrl':
       
             return null ;
       
        
       
      
      
      case 'aclTemplate':
       
        
              
             return Index.Entity__acl.getClassNameOfProp(subPath) ;
              
       
       
      
      
        default:
            return Entity_application_configuration  .getClassNameOfProp(key) ;
            break;
        }
       
}


   }



